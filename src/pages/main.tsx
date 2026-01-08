import React, { useState } from 'react';
import { Section, SectionHeader, Button, Card, FeatureItem, Badge, MotionPage, FadeIn, ZoomIn, Stagger, ReviewCard, SpotlightCard, ScrollReveal3D, LogoMarquee, TeamCard } from '../components/ui';
import { HeroBanner } from '../components/sections/HeroBanner';
import { CustomSolutions } from '../components/sections/CustomSolutions';
import { HeroScene, NetworkScene } from '../components/scene';
import { ArrowRight, Brain, Cpu, Globe, Layout, Users, BarChart, Target, MonitorPlay, GraduationCap } from 'lucide-react';
import { FAQS, TESTIMONIALS, TEAM_MEMBERS, TRUSTED_ORGS } from '../data';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <MotionPage>
      {/* 1. Hero Section */}
      <HeroBanner
        badge="AICTE Corporate Partner"
        title={<span>Transforming Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-muted">with AI.</span></span>}
        subtitle="Super AI Polaris bridges the gap between academia and industry. We empower students and faculty with domain-specific, scalable AI solutions and government-aligned internships."
        className="text-center"
        scene={<div className="w-full h-[600px] md:h-full md:absolute md:top-0 md:left-0 md:w-full md:z-0 opacity-100 mix-blend-lighten pointer-events-none"><HeroScene /></div>}
      >
        <Button to="/contact" variant="primary">For Institutions</Button>
        <Button to="/services" variant="secondary">For Students</Button>
      </HeroBanner>

      {/* 2. Value Proposition - Staggered Grid */}
      <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
        <Stagger className="grid md:grid-cols-3 gap-6">
           <SpotlightCard className="bg-neutral-900/80 backdrop-blur-xl border-white/10" backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                 <div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-accent"><Brain size={24} /></div>
                 <h3 className="text-lg font-bold text-foreground">AICTE Approved</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed relative z-10">
                 Recognized internships that provide valid academic credits and industry certification.
              </p>
           </SpotlightCard>
           
           <SpotlightCard className="bg-neutral-900/80 backdrop-blur-xl border-white/10" backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                 <div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-accent"><BarChart size={24} /></div>
                 <h3 className="text-lg font-bold text-foreground">Skill Analytics</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed relative z-10">
                 Data-driven insights into student performance to bridge the employability gap.
              </p>
           </SpotlightCard>
           
           <SpotlightCard className="bg-neutral-900/80 backdrop-blur-xl border-white/10" backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                 <div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-accent"><Globe size={24} /></div>
                 <h3 className="text-lg font-bold text-foreground">Nationwide Reach</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed relative z-10">
                 Partnering with universities across the country to deliver virtual labs and training.
              </p>
           </SpotlightCard>
        </Stagger>
      </Section>

      {/* 3. Deep Dive - ZoomIn Visuals and FadeIn Content */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <NetworkScene />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent z-0 pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <FadeIn>
            <Badge className="mb-6">The Platform</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A comprehensive ecosystem for <span className="text-accent">Future Skills.</span>
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed border-l-2 border-accent/30 pl-6">
              Super AI Polaris goes beyond traditional e-learning. We provide a complete ecosystem comprising virtual labs, mentorship, and project-based learning to ensure job readiness.
            </p>
            
            <Stagger className="space-y-6">
                {[
                    { title: "Virtual Internship Programs (VIP)", desc: "AICTE-aligned, credit-based virtual internships solving real-world problem statements.", icon: MonitorPlay },
                    { title: "Outcome-Based Education (OBE)", desc: "Curriculum designed to deliver measurable skill acquisition and industry deployability.", icon: Target },
                    { title: "Faculty Development & Upskilling", desc: "Empowering educators with modern AI tools and pedagogical strategies.", icon: GraduationCap }
                ].map((item, idx) => (
                    <Card key={idx} noPadding className="group flex flex-row items-start gap-4 p-4 rounded-xl !bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300">
                        <div className="p-2 bg-black rounded-lg text-accent border border-white/10 group-hover:scale-110 transition-transform">
                            <item.icon size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                            <p className="text-sm text-muted">{item.desc}</p>
                        </div>
                    </Card>
                ))}
            </Stagger>

            <div className="mt-10">
              <Button to="/services" variant="outline" className="group">
                Explore Ecosystem <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeIn>
          
          <ZoomIn delay={0.2} className="relative mt-8 lg:mt-0">
             <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl opacity-40 rounded-full"></div>
             <SpotlightCard className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-8 w-full max-w-lg mx-auto shadow-2xl relative overflow-hidden">
                {/* Stats Dashboard UI Simulation */}
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-white tracking-widest uppercase">System Operational</span>
                    </div>
                    <span className="text-xs font-mono text-muted">v2.4.0</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                    <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                        <span className="text-xs text-muted uppercase block mb-1">Active Learners</span>
                        <span className="text-2xl font-bold text-white">12,405</span>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg border border-white/5">
                        <span className="text-xs text-muted uppercase block mb-1">Projects Deployed</span>
                        <span className="text-2xl font-bold text-accent">8,932</span>
                    </div>
                </div>
                <div className="space-y-6 relative z-10">
                    <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-white">Internship Completion Rate</span>
                            <span className="text-accent">94%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-[94%] shadow-[0_0_10px_#C5A059]"></div>
                        </div>
                    </div>
                </div>
             </SpotlightCard>
          </ZoomIn>
        </div>
      </Section>

      {/* 4. Services Grid */}
      <Section className="bg-neutral-950/30 border-y border-white/5">
        <SectionHeader 
          badge="Capabilities"
          title="Empowering the Ecosystem" 
          subtitle="Tailored solutions for every stakeholder in the education value chain."
          center 
        />
        <Stagger className="grid md:grid-cols-3 gap-8">
          <SpotlightCard enableScrollReveal={false} backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800">
            <FeatureItem icon={Cpu} title="Students" description="Gain industry-ready skills through AICTE-aligned internships and capstone projects." />
            <div className="mt-6 pt-6 border-t border-white/5 mt-auto relative z-10">
               <Link to="/services/k12" className="text-xs font-mono font-bold text-accent hover:text-white uppercase tracking-wider flex items-center">View Internships <ArrowRight size={12} className="ml-2" /></Link>
            </div>
          </SpotlightCard>

          <SpotlightCard enableScrollReveal={false} backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800">
            <FeatureItem icon={Layout} title="Institutions" description="Set up Centers of Excellence and modernize curriculum with our FDPs." />
            <div className="mt-6 pt-6 border-t border-white/5 mt-auto relative z-10">
               <Link to="/services/teacher-training" className="text-xs font-mono font-bold text-accent hover:text-white uppercase tracking-wider flex items-center">For Faculty <ArrowRight size={12} className="ml-2" /></Link>
            </div>
          </SpotlightCard>

          <SpotlightCard enableScrollReveal={false} backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800">
            <FeatureItem icon={Users} title="Corporate" description="Hire trained talent directly from our pool of certified graduates." />
            <div className="mt-6 pt-6 border-t border-white/5 mt-auto relative z-10">
               <Link to="/services/corporate" className="text-xs font-mono font-bold text-accent hover:text-white uppercase tracking-wider flex items-center">Partner With Us <ArrowRight size={12} className="ml-2" /></Link>
            </div>
          </SpotlightCard>
        </Stagger>
      </Section>

      {/* 5. Social Proof */}
      <Section>
        <SectionHeader 
          title="Success Stories" 
          subtitle="Hear from students and professors transforming their careers with Super AI Polaris."
          center 
        />
        <Stagger className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </Stagger>
      </Section>

      {/* 6. FAQ */}
      <Section className="max-w-4xl mx-auto">
         <SectionHeader title="Frequently Asked Questions" center />
         <FadeIn>
            <CustomSolutions items={FAQS} />
         </FadeIn>
      </Section>

      {/* 7. CTA */}
      <Section>
        <ZoomIn>
          <ScrollReveal3D>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
                <div className="relative z-10 px-8 py-20 md:px-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to shape the future?</h2>
                    <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                    Join thousands of students and institutions partnering with Super AI Polaris.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button to="/contact" variant="gold">Contact Us</Button>
                    <Button to="/services" variant="outline">Browse Programs</Button>
                    </div>
                </div>
              </div>
          </ScrollReveal3D>
        </ZoomIn>
      </Section>
    </MotionPage>
  );
};

export const About = () => (
  <MotionPage>
  <HeroBanner 
    badge="Our Mission"
    title="Democratizing AI Education"
    subtitle="Super AI Polaris is driven by the belief that high-quality technical education should be accessible, affordable, and industry-aligned."
    className="text-center"
  />
  <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-20">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal3D>
          <div className="p-10 md:p-16 bg-neutral-900/50 border border-white/10 rounded-2xl backdrop-blur-md">
            <FadeIn className="prose prose-lg prose-invert text-muted leading-relaxed max-w-none">
            <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-4">
                We are a dedicated team of technologists and educators working in tandem with government bodies to revolutionize technical education in India.
            </p>
            <p className="mb-8">
                As an AICTE Corporate Partner, we bridge the critical gap between theoretical university curriculum and the practical demands of the AI industry.
            </p>
            <p className="mb-8">
                Our platform provides virtual labs, expert mentorship, and real-world project experience, ensuring that every student we certify is ready to contribute to the workforce from day one.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/5">
                <div>
                    <div className="text-4xl font-bold text-foreground mb-2">10k+</div>
                    <div className="text-sm text-muted uppercase tracking-wider">Interns Certified</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                    <div className="text-sm text-muted uppercase tracking-wider">Partner Colleges</div>
                </div>
            </div>
            </FadeIn>
          </div>
      </ScrollReveal3D>
    </div>
  </Section>

  {/* Organizations Marquee */}
  <div className="py-24 border-t border-white/5 bg-neutral-950/30">
     <SectionHeader title="Organizations That Believe In Us" center badge="Trust & Partnership" />
     <LogoMarquee items={TRUSTED_ORGS} />
  </div>

  </MotionPage>
);

export const Founder = () => {
    return (
        <MotionPage>
            <HeroBanner
                badge="Governance"
                title="Leadership Team"
                subtitle="Visionary leaders driving innovation and educational transformation across the globe."
                align="left"
            />
            <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-20">
                <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <TeamCard 
                            key={idx}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            image={member.image}
                        />
                    ))}
                </Stagger>
                
                <div className="mt-16 text-center">
                     <p className="text-sm text-muted font-mono bg-white/5 inline-block px-4 py-2 rounded-full border border-white/5">
                        CIN: U72900DL2020PTC372592
                     </p>
                </div>
            </Section>
        </MotionPage>
    );
};
