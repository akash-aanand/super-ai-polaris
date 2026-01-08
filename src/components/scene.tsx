import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Sparkles, PerspectiveCamera, OrbitControls, Html, Line, QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';
import { GLOBAL_PRESENCE } from '../data';

// Augmenting global JSX namespace for R3F elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      ringGeometry: any;
      cylinderGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
      color: any;
      [elemName: string]: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
         group: any;
         mesh: any;
         icosahedronGeometry: any;
         meshPhysicalMaterial: any;
         meshBasicMaterial: any;
         sphereGeometry: any;
         ringGeometry: any;
         cylinderGeometry: any;
         points: any;
         bufferGeometry: any;
         bufferAttribute: any;
         pointsMaterial: any;
         ambientLight: any;
         spotLight: any;
         pointLight: any;
         fog: any;
         color: any;
         [elemName: string]: any;
      }
    }
  }
}

// --- MATERIALS ---
const GOLD_COLOR = new THREE.Color('#C5A059');
const ACCENT_COLOR = new THREE.Color('#D4AF37');
const BLUE_ACCENT = new THREE.Color('#00F0FF');
const RED_ACCENT = new THREE.Color('#FF2E63');

// --- HELPER FUNCTIONS ---
// Convert Lat/Lng to 3D Cartesian Coordinates on a sphere
const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

// --- COMPONENTS ---

const NeuralCoreGeometry = (props: any) => {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Slow, purposeful rotation
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    
    // Breathing scale effect
    const breathing = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    if (coreRef.current) coreRef.current.scale.setScalar(breathing);
  });

  return (
    <group ref={meshRef} {...props}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Outer Glass Shell */}
        <mesh>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial 
            color="#111" 
            roughness={0.1} 
            metalness={0.8} 
            transmission={0.6} 
            thickness={2} 
            envMapIntensity={2}
            clearcoat={1}
          />
        </mesh>

        {/* Inner Gold Wireframe Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshBasicMaterial color={GOLD_COLOR} wireframe transparent opacity={0.3} />
        </mesh>
        
        {/* Glowing Central Point */}
        <mesh>
           <sphereGeometry args={[0.2, 16, 16]} />
           <meshBasicMaterial color={ACCENT_COLOR} />
        </mesh>

        {/* Orbital Particles */}
        <Sparkles count={40} scale={4} size={2} speed={0.4} opacity={0.5} color={GOLD_COLOR} />
      </Float>
    </group>
  );
};

const InteractiveParticles = ({ count = 300 }) => {
  const mesh = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  // Initialize particles with random positions
  const [positions, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12; // Wider spread
      const z = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    
    return [positions, originalPositions];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    // Convert normalized mouse coordinates (-1 to 1) to world units
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];
      
      // Distance calculation
      const dx = mouseX - positions[i3];
      const dy = mouseY - positions[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Interaction Logic: Repel particles when mouse is close
      const forceRadius = 4;
      let ix = 0, iy = 0;
      
      if (dist < forceRadius) {
         const force = (forceRadius - dist) / forceRadius;
         const angle = Math.atan2(dy, dx);
         // Push away factor
         const pushStrength = 3; 
         ix = -Math.cos(angle) * force * pushStrength;
         iy = -Math.sin(angle) * force * pushStrength;
      }

      // Physics: Smooth return to origin + continuous wave motion
      // The 0.05 factor controls the "viscosity" or return speed
      positions[i3] += (ox + ix - positions[i3]) * 0.05;
      positions[i3 + 1] += (oy + iy - positions[i3 + 1]) * 0.05;
      
      // Z-axis wave movement unrelated to mouse for depth aliveness
      positions[i3 + 2] = oz + Math.sin(time * 0.3 + ox) * 0.8;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#C5A059"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// --- GLOBE COMPONENTS ---

// Arc connection between two points on sphere
const ConnectionArc: React.FC<{ start: THREE.Vector3, end: THREE.Vector3, color?: THREE.Color }> = ({ start, end, color = GOLD_COLOR }) => {
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(start.length() * 1.5);
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
        // Subtle animation of the line width or dash
        ref.current.material.dashOffset -= 0.01;
    }
  });

  return (
    <QuadraticBezierLine
      ref={ref}
      start={start}
      end={end}
      mid={mid}
      color={color}
      lineWidth={1}
      dashed
      dashScale={5}
      dashSize={2}
      gapSize={1}
      transparent
      opacity={0.4}
    />
  );
};

const LocationMarker = ({ position, name, region, isSelected, onClick, isHub }: any) => {
  const [hovered, setHovered] = useState(false);
  
  // Outer ring scale
  const outerScale = hovered || isSelected ? 1.5 : 1;
  const innerColor = isHub ? RED_ACCENT : (hovered || isSelected ? BLUE_ACCENT : ACCENT_COLOR);

  return (
    <group position={position} onClick={onClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        {/* Clickable Area */}
        <mesh visible={false}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshBasicMaterial />
        </mesh>

        {/* Pin Body */}
        <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.01, 0.002, 0.1, 8]} />
            <meshBasicMaterial color={innerColor} transparent opacity={0.8} />
        </mesh>
        
        {/* Glowing Head */}
        <mesh position={[0, 0.08, 0]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color={innerColor} toneMapped={false} />
        </mesh>

        {/* Outer Glow Ring (Disc) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]} scale={[outerScale, outerScale, outerScale]}>
            <ringGeometry args={[0.04, 0.05, 32]} />
            <meshBasicMaterial color={innerColor} transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Tooltip */}
        {(hovered || isSelected) && (
            <Html distanceFactor={10} position={[0, 0.2, 0]} zIndexRange={[100, 0]}>
                <div className="bg-black/90 border border-white/20 backdrop-blur-md px-4 py-2 rounded-md text-white whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.9)] pointer-events-none flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isHub ? 'bg-red-500 animate-pulse' : 'bg-cyan-400'}`}></div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold leading-none">{name}</span>
                        {region && <span className="text-[10px] text-gray-400 font-mono mt-1 leading-none uppercase tracking-wider">{region}</span>}
                    </div>
                </div>
            </Html>
        )}
    </group>
  )
};

const GlobeWithMarkers = ({ selectedLocation }: { selectedLocation?: string | null }) => {
    const globeRadius = 2.2;
    const groupRef = useRef<THREE.Group>(null);
    const { camera } = useThree();

    // Data Processing
    const indiaHub = GLOBAL_PRESENCE.find(l => l.isHub);
    const indiaPos = indiaHub ? latLngToVector3(indiaHub.lat, indiaHub.lng, globeRadius) : new THREE.Vector3();

    useFrame((state, delta) => {
        if (selectedLocation) {
            const loc = GLOBAL_PRESENCE.find(l => l.name === selectedLocation);
            if (loc && groupRef.current) {
                // 1. Calculate Target Rotation to face camera
                const targetQ = new THREE.Quaternion();
                // Get local position of the country on the sphere
                const p = latLngToVector3(loc.lat, loc.lng, globeRadius).normalize();
                
                // Get camera direction relative to the center (0,0,0)
                const camDir = state.camera.position.clone().normalize();
                
                // Calculate rotation needed to align 'p' with 'camDir'
                targetQ.setFromUnitVectors(p, camDir);
                
                // Smoothly rotate globe
                groupRef.current.quaternion.slerp(targetQ, 4 * delta);
                
                // 2. Zoom Camera In
                const currentDist = state.camera.position.length();
                const targetDist = 4.5; // Zoomed in distance
                const newDist = THREE.MathUtils.lerp(currentDist, targetDist, 3 * delta);
                state.camera.position.setLength(newDist);
            }
        } else {
             if (groupRef.current) {
                 // Idle Rotation
                 groupRef.current.rotation.y += delta * 0.1;
             }
             
             // Zoom Camera Out to default
             const currentDist = state.camera.position.length();
             const targetDist = 6.5; 
             if (Math.abs(currentDist - targetDist) > 0.01) {
                 const newDist = THREE.MathUtils.lerp(currentDist, targetDist, 2 * delta);
                 state.camera.position.setLength(newDist);
             }
        }
    });

    return (
        <group ref={groupRef}>
            {/* Dark Tech Globe Base */}
            <mesh>
                <sphereGeometry args={[globeRadius, 64, 64]} />
                <meshPhysicalMaterial 
                    color="#020202"
                    roughness={0.7}
                    metalness={0.5}
                    emissive="#000"
                />
            </mesh>
            
            {/* Wireframe Grid Overlay */}
            <mesh>
                 <sphereGeometry args={[globeRadius + 0.005, 32, 32]} />
                 <meshBasicMaterial 
                    color="#1a1a1a" 
                    wireframe 
                    transparent 
                    opacity={0.3} 
                />
            </mesh>

            {/* Glowing Atmosphere/Horizon */}
             <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[globeRadius, 32, 32]} />
                <meshBasicMaterial 
                    color="#1a2b3c" 
                    transparent 
                    opacity={0.05} 
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Location Markers */}
            <group>
                {GLOBAL_PRESENCE.map((location, i) => {
                    const pos = latLngToVector3(location.lat, location.lng, globeRadius);
                    return (
                        <LocationMarker 
                            key={i} 
                            position={pos} 
                            name={location.name}
                            region={location.region}
                            isHub={location.isHub}
                            isSelected={selectedLocation === location.name}
                            onClick={() => { /* Handle 3D Click if needed */ }}
                        />
                    )
                })}
            </group>

            {/* Intelligent Connections (Hub to Spokes) */}
            <group>
                {indiaHub && GLOBAL_PRESENCE.map((location, i) => {
                    if (location.isHub) return null;
                    // Connect India to every other point
                    const endPos = latLngToVector3(location.lat, location.lng, globeRadius);
                    // Use a slightly different color for variety
                    const lineColor = i % 2 === 0 ? BLUE_ACCENT : GOLD_COLOR;
                    return (
                        <ConnectionArc key={`conn-${i}`} start={indiaPos} end={endPos} color={lineColor} />
                    )
                })}
            </group>
        </group>
    )
}

// --- SCENES ---

export const HeroScene = () => {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={GOLD_COLOR} />
        
        <NeuralCoreGeometry position={[1.5, 0, 0]} /> 
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};

export const NetworkScene = () => {
    return (
        <Canvas className="w-full h-full" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <InteractiveParticles count={400} />
            <fog attach="fog" args={['#000000', 5, 25]} />
        </Canvas>
    )
}

export const WorldGlobe = ({ selectedLocation }: { selectedLocation?: string | null }) => {
    return (
        <Canvas className="w-full h-full" dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <PerspectiveCamera makeDefault position={[0, 0, 6.5]} />
            
            <color attach="background" args={['#000']} />
            <fog attach="fog" args={['#000', 5, 15]} />

            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.0} color="#fff" />
            <pointLight position={[-10, 0, 5]} intensity={0.5} color={BLUE_ACCENT} />
            <pointLight position={[0, -10, 0]} intensity={0.3} color={RED_ACCENT} />
            
            <GlobeWithMarkers selectedLocation={selectedLocation} />
            
            {/* Auto-rotation is handled manually in GlobeWithMarkers for better control during selection */}
            <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
            />
            
            <Stars radius={100} depth={50} count={1000} factor={3} saturation={0} fade />
        </Canvas>
    )
}