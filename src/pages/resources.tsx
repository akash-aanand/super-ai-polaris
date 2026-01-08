import React from 'react';
import { Section, SectionHeader, Card, Badge, Button, MotionPage, FadeIn, Stagger, CheckList, SpotlightCard, ScrollReveal3D, ZoomIn } from '../components/ui';
import { HeroBanner } from '../components/sections/HeroBanner';
import { BLOG_POSTS, INDUSTRIES, PARTNERS } from '../data';
import { FileText, Calendar, User, ArrowRight, Download, Video, Layers, Target, Cpu, CheckCircle, Database, Brain, Scale, FileCheck, Shield, Zap, ShieldCheck, Briefcase, Settings, GraduationCap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

// --- CUSTOM COMPONENT: AI PIPELINE DIAGRAM (Replicating Screenshot) ---
const PipelineDiagram = () => {
   return (
      <div className="w-full overflow-x-auto py-10">
         <div className="min-w-[800px] flex items-center justify-between relative px-4">
            
            {/* Connecting Line - Background */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

            {/* 1. INPUT */}
            <div className="flex flex-col items-center gap-4 relative z-10">
               <div className="w-24 h-16 bg-neutral-900 border border-white/20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Video size={24} className="text-white" />
               </div>
               <span className="text-[10px] font-mono uppercase text-muted tracking-widest text-center">Input<br/>Raw Video</span>
            </div>

            {/* Connector */}
            <div className="h-0.5 w-12 bg-white/20"></div>

            {/* 2. TASKS (Stack) */}
            <div className="flex flex-col items-center gap-2 relative z-10">
               <div className="flex flex-col gap-2 p-2 border border-dashed border-white/10 rounded-xl bg-white/5">
                  {[1, 2, 3].map(i => (
                     <div key={i} className="w-16 h-10 bg-neutral-800 border border-white/10 rounded flex items-center justify-center">
                        <Layers size={14} className="text-muted" />
                     </div>
                  ))}
               </div>
               <span className="text-[10px] font-mono uppercase text-muted tracking-widest">Tasks</span>
            </div>

            {/* Connector */}
            <div className="h-0.5 w-12 bg-white/20"></div>

            {/* 3. ROUTER (Concentric Circles) */}
            <div className="flex flex-col items-center gap-4 relative z-10">
               <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border border-accent/30 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-2 border border-accent/50 rounded-full"></div>
                  <div className="absolute inset-6 border border-accent rounded-full flex items-center justify-center bg-neutral-900">
                     <Target size={20} className="text-accent" />
                  </div>
               </div>
               <span className="text-[10px] font-mono uppercase text-muted tracking-widest">Router</span>
            </div>

            {/* Connector */}
            <div className="h-0.5 w-12 bg-white/20"></div>

            {/* 4. PREDICTIONS (Stack) */}
            <div className="flex flex-col items-center gap-2 relative z-10">
               <div className="flex flex-col gap-2 p-2 border border-dashed border-white/10 rounded-xl bg-white/5">
                  {[1, 2, 3].map(i => (
                     <div key={i} className="w-16 h-10 bg-neutral-800 border border-white/10 rounded flex items-center justify-center">
                        <CheckCircle size={14} className="text-blue-400" />
                     </div>
                  ))}
               </div>
               <span className="text-[10px] font-mono uppercase text-muted tracking-widest">Predictions</span>
            </div>

            {/* Connector */}
            <div className="h-0.5 w-12 bg-white/20"></div>

            {/* 5. ENGINE (Core) */}
            <div className="flex flex-col items-center gap-4 relative z-10">
               <div className="w-24 h-24 rounded-full bg-neutral-900 border-4 border-green-500/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <div className="w-16 h-16 rounded-full border border-green-500 flex items-center justify-center bg-green-500/10">
                     <Cpu size={28} className="text-green-500" />
                  </div>
               </div>
               <span className="text-[10px] font-mono uppercase text-muted tracking-widest">Engine</span>
            </div>

            {/* Connector */}
            <div className="h-0.5 w-12 bg-white/20"></div>

            {/* 6. OUTPUT */}
            <div className="flex flex-col items-center gap-4 relative z-10">
               <div className="w-28 h-20 bg-neutral-900 border border-white/20 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <div className="flex items-center gap-2">
                     <Video size={20} className="text-white" />
                     <CheckCircle size={14} className="text-green-500" />
                  </div>
               </div>
               <span className="text-[10px] font-mono uppercase text-muted tracking-widest text-center">Output<br/>Labeled Video</span>
            </div>

            {/* 7. TRAINER (Right Ring) */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <div className="w-32 h-32 rounded-full border border-purple-500/30 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full border border-purple-500/50 flex items-center justify-center bg-purple-500/10">
                      <Database size={24} className="text-purple-500" />
                   </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] font-mono uppercase text-purple-400">Trainer</div>
             </div>

         </div>
         
         <div className="mt-12 text-center">
            <div className="inline-block px-4 py-2 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-muted uppercase tracking-widest">
               [ Labeled Data, Open Source Data Farm, GCP, AWS, Azure, Super AI Polaris Data Farm ]
            </div>
         </div>
      </div>
   )
}


export const Blog = () => (
  <MotionPage>
  <HeroBanner 
    badge="Intelligence Hub"
    title="Latest Insights" 
    subtitle="Deep dives into cognitive architecture, pedagogy, and enterprise AI strategy."
    className="text-center"
  />
  
  <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
    <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BLOG_POSTS.map((post) => (
        <Card key={post.id} noPadding className="flex flex-col h-full group hover:border-accent/40 bg-neutral-900">
          <div className="h-56 overflow-hidden relative">
             <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
             <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 relative z-10" 
             />
             <div className="absolute top-4 left-4 z-20">
                <Badge className="bg-black/50 backdrop-blur text-white border-white/20">{post.category}</Badge>
             </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
             <div className="flex items-center text-xs font-mono text-muted mb-4 gap-4 uppercase tracking-wider">
                <span className="flex items-center"><Calendar size={12} className="mr-2 text-accent"/> {post.date}</span>
             </div>
             <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
             <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
             <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center">
                   <div className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold mr-3">{post.author.charAt(0)}</div>
                   <span className="text-xs font-medium text-muted">{post.author}</span>
                </div>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRight size={16} /></span>
             </div>
          </div>
        </Card>
      ))}
    </Stagger>
  </Section>
  </MotionPage>
);

// --- UPDATED RESEARCH PAGE ---
export const Research = () => (
   <MotionPage>
      {/* 1. HERO SECTION */}
      <HeroBanner
         title={<span>Transforming Educational Research <br/> with <span className="text-accent">AI-Powered Insight Discovery</span></span>}
         subtitle="Empowering institutions to discover insights faster and deeper through advanced artificial intelligence and automated multi-dimensional factor analysis."
         badge="Super AIP Labs"
         pattern="grid"
         align="left"
      >
         <Button variant="gold" to="/contact">Get Started Now</Button>
      </HeroBanner>

      {/* 2. WHITE PAPER SECTION & DIAGRAM */}
      <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
         <div className="mb-20">
            <Badge className="mb-4">White Paper</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Core Execution System of Super AI Polaris</h2>
            <div className="grid lg:grid-cols-2 gap-12">
               <FadeIn className="prose prose-invert text-muted leading-relaxed">
                  <p className="mb-4">
                     The AI engine serves as the core execution system of the Super AI Polaris assembly line. It orchestrates the breakdown of incoming data into manageable subtasks, ensuring each is accurately labeled and then seamlessly recombined into a unified, meaningful output.
                  </p>
                  <p>
                     Additionally, the engine leverages these processed outputs as training data, continuously improving its machine learning models to provide an evolving and intelligent labeling mechanism.
                  </p>
               </FadeIn>
            </div>
         </div>

         {/* DIAGRAM VISUALIZATION */}
         <FadeIn>
            <ScrollReveal3D>
                <div className="bg-[#050505] border border-white/10 rounded-xl p-4 md:p-8 overflow-hidden">
                    <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Figure 1.1: AI Data Pipeline Architecture</h3>
                    <PipelineDiagram />
                </div>
            </ScrollReveal3D>
         </FadeIn>

         {/* DETAILED STEPS */}
         <div className="grid md:grid-cols-2 gap-12 mt-20">
            <FadeIn>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent font-bold">1</div>
                  <h3 className="text-xl font-bold text-foreground">Break Input into Smaller Tasks</h3>
               </div>
               <p className="text-muted leading-relaxed">
                  The AI engine starts by deconstructing incoming raw data into smaller, manageable units. Each data point may require a unique handling approach due to its variability, especially in visual quality and structure. Unlike an assembly line where uniformity is expected, our engine adapts its processing approach for each individual case.
               </p>
            </FadeIn>
            <FadeIn delay={0.1}>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent font-bold">2</div>
                  <h3 className="text-xl font-bold text-foreground">Intelligent Task Routing</h3>
               </div>
               <p className="text-muted leading-relaxed">
                  A dynamic routing system evaluates each task based on quality, cost, and speed. The router intelligently selects the most suitable labeling source—whether it be human annotators, automated systems (like Snorkel), or a hybrid approach—to ensure optimal performance for each specific data segment.
               </p>
            </FadeIn>
         </div>
      </Section>

      {/* 3. IP / FACTOR ANALYSIS SECTION */}
      <Section className="bg-neutral-900/30 border-y border-white/5">
         <SectionHeader 
            badge="Intellectual Property"
            title="Automated Multi-Dimensional Factor Analysis System"
            subtitle="A patented method for uncovering hidden variables in educational datasets."
         />
         
         <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
               <h3 className="text-xl font-bold text-white mb-4">Background & Conceptual Overview</h3>
               <p className="text-muted mb-8 leading-relaxed">
                  This invention introduces a system and method for automating the analysis of educational outcomes by identifying and testing latent factors in both student and institutional data.
               </p>
               
               {/* Mathematical Formula Representation */}
               <div className="p-6 bg-black border border-white/10 rounded-lg mb-8 font-mono text-accent text-sm md:text-base overflow-x-auto">
                  Xj = λj1F1 + λj2F2 + ... + λjmFm + εj
               </div>

               <h4 className="font-bold text-white mb-4 flex items-center"><Database size={18} className="mr-2 text-accent"/> Input Data Types</h4>
               <ul className="space-y-2 mb-8">
                  <li className="flex items-start text-sm text-muted"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-3 shrink-0"></div> Socio-economic indicators (income, parental education)</li>
                  <li className="flex items-start text-sm text-muted"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-3 shrink-0"></div> Academic performance (grades, attendance)</li>
                  <li className="flex items-start text-sm text-muted"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-3 shrink-0"></div> Behavioral metrics (participation, discipline)</li>
               </ul>

               <h4 className="font-bold text-white mb-4 flex items-center"><Cpu size={18} className="mr-2 text-accent"/> System Architecture</h4>
               <ul className="space-y-2">
                  <li className="flex items-start text-sm text-muted"><strong className="text-white mr-2">Task Decomposer:</strong> Breaks data into subtasks</li>
                  <li className="flex items-start text-sm text-muted"><strong className="text-white mr-2">Router:</strong> Assigns tasks to specific engines</li>
                  <li className="flex items-start text-sm text-muted"><strong className="text-white mr-2">Analytical Engines:</strong> Factor analysis, hypothesis testing</li>
                  <li className="flex items-start text-sm text-muted"><strong className="text-white mr-2">Trainer:</strong> Learns from outcomes to improve analysis</li>
               </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
               <ScrollReveal3D>
                  <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 h-full">
                     <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">Implementation Details</h3>
                     <div className="space-y-6">
                        <div>
                           <h5 className="text-accent font-bold text-sm uppercase tracking-wide mb-2">AI/ML Modules</h5>
                           <p className="text-sm text-muted leading-relaxed">
                              Integrates PCA and EFA implementations for factor analysis, alongside Random Forest and Neural Nets for predictive analytics.
                           </p>
                        </div>
                        <div>
                           <h5 className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Meta-Model Trainer</h5>
                           <p className="text-sm text-muted leading-relaxed">
                              Utilizes reinforcement learning to optimize the routing of tasks based on data characteristics.
                           </p>
                        </div>
                        <div>
                           <h5 className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Key Claims</h5>
                           <CheckList items={[
                              "Automated system for educational factor analysis",
                              "Latent factor modeling & hypothesis testing",
                              "Self-learning meta-model for routing",
                              "Quality assurance monitoring via dashboard"
                           ]} />
                        </div>
                     </div>
                  </div>
               </ScrollReveal3D>
            </FadeIn>
         </div>
      </Section>

      {/* 4. COMPLIANCE / DOC INTELLIGENCE SECTION */}
      <Section>
         <SectionHeader 
            badge="Compliance"
            title="Reimagining Intelligent Document Processing"
            subtitle="Enterprise-Ready Language Models for Government & Finance."
         />

         <div className="grid lg:grid-cols-3 gap-8">
             {/* Main Value Prop */}
             <div className="lg:col-span-2 space-y-8">
                <ScrollReveal3D>
                    <div className="p-8 md:p-10 bg-gradient-to-br from-neutral-900 to-black border border-accent/20 rounded-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent border border-accent/20">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">The Super AI Polaris Approach</h3>
                        </div>
                        <p className="text-muted leading-relaxed mb-6">
                            Over the past year, we have charted a purpose-built course through the landscape of Large Language Models (LLMs). Our proprietary platforms—<strong className="text-white">NeuraDesk</strong> (offline) and <strong className="text-white">NeuraEdge</strong> (cloud)—are tailored to meet the specific demands of enterprise and government ecosystems.
                        </p>
                        <p className="text-muted leading-relaxed">
                            This paradigm shift allows organizational knowledge to be embedded directly into AI models, enabling faster deployment and higher adaptability across use cases without the need for deep technical expertise.
                        </p>
                    </div>
                </ScrollReveal3D>

                <div className="grid md:grid-cols-2 gap-6">
                   <SpotlightCard className="bg-neutral-900/50 p-6">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2 relative z-10"><Brain size={18} className="text-accent"/> Contextual Extraction</h4>
                      <p className="text-sm text-muted leading-relaxed relative z-10">
                         NeuraDesk's deep OCR integration detects nuanced relationships in unstructured sources like handwritten forms, government orders, and legal contracts.
                      </p>
                   </SpotlightCard>
                   <SpotlightCard className="bg-neutral-900/50 p-6">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2 relative z-10"><Zap size={18} className="text-accent"/> Boosted Automation</h4>
                      <p className="text-sm text-muted leading-relaxed relative z-10">
                         Outperforms traditional OCR pipelines, significantly reducing manual verification effort and enabling teams to scale processes efficiently.
                      </p>
                   </SpotlightCard>
                </div>
             </div>

             {/* Sidebar: Use Cases */}
             <div>
                <SpotlightCard className="h-full p-8 bg-neutral-950/50">
                   <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">Trusted Across Sectors</h3>
                   <div className="space-y-8 relative z-10">
                      <div>
                         <h5 className="text-white font-bold text-sm mb-2 flex items-center"><Scale size={16} className="mr-2 text-muted"/> Education Boards</h5>
                         <p className="text-xs text-muted">Automating result forms, grievances, and predictive analysis for drop-out risks.</p>
                      </div>
                      <div>
                         <h5 className="text-white font-bold text-sm mb-2 flex items-center"><FileCheck size={16} className="mr-2 text-muted"/> Finance Departments</h5>
                         <p className="text-xs text-muted">Streamlining invoice processing and complex document verification.</p>
                      </div>
                      <div>
                         <h5 className="text-white font-bold text-sm mb-2 flex items-center"><Shield size={16} className="mr-2 text-muted"/> Legal & Compliance</h5>
                         <p className="text-xs text-muted">Extracting and summarizing court filings, contracts, and case histories.</p>
                      </div>
                   </div>
                   
                   <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                      <p className="text-xs text-accent italic">
                         "What sets us apart is not just technology—it's our vision for responsible, inclusive, and context-aware AI."
                      </p>
                   </div>
                </SpotlightCard>
             </div>
         </div>
      </Section>
   </MotionPage>
);

export const IndustriesPage = () => (
   <MotionPage>
   <HeroBanner
     badge="Verticals"
     title="Sector Specific Solutions"
     subtitle="Compliance-ready AI infrastructure tailored for highly regulated industries."
     className="text-center"
   />
   <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
      <Stagger className="grid md:grid-cols-2 gap-8">
         {INDUSTRIES.map((ind) => (
            <SpotlightCard key={ind.title} className="p-10 hover:border-accent/50 group" backgroundImage={ind.image}>
               <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-4 bg-neutral-900/50 text-accent rounded-xl border border-white/10 group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                     <ind.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{ind.title}</h3>
               </div>
               <p className="text-muted leading-relaxed mb-8 text-base relative z-10">
                  Specific, compliance-heavy solutions tailored for the unique challenges of the {ind.title.toLowerCase()} sector. 
                  We integrate with existing legacy systems while providing state-of-the-art inference.
               </p>
               <div className="bg-neutral-950/80 backdrop-blur-md rounded-lg p-6 border border-white/5 space-y-3 mb-8 relative z-10">
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div> Specialized Data Models</li>
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div> SOC2 & HIPAA Compliance</li>
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div> 24/7 Expert Support</li>
               </div>
               <div className="relative z-10">
                   <Button variant="outline" to="/contact" className="w-full group-hover:border-accent group-hover:text-accent">Contact Sales Team</Button>
               </div>
            </SpotlightCard>
         ))}
      </Stagger>
   </Section>
   </MotionPage>
);

// --- NEW PARTNERS PAGE ---
export const PartnersPage = () => (
   <MotionPage>
   {/* Hero Section */}
   <HeroBanner
      badge="Our Partners"
      title={<span>Partner with SUPER AI to shape the <span className="text-accent">future of intelligence</span></span>}
      subtitle="Join a global ecosystem of innovators, integrators, and educators driving the next wave of AI adoption."
      className="text-center"
   >
      <Button variant="gold" to="/contact">Get Started Now</Button>
   </HeroBanner>

   {/* Partnership Types */}
   <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
      <SectionHeader 
         title="Explore the Ways You Can Grow With Us"
         center
      />
      <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
            { title: "Solution Providers", desc: "Build, deploy, and manage Super AI-powered products for clients.", icon: Briefcase },
            { title: "Technology Partners", desc: "Integrate your tools with platforms like NeuraDesk, NeuraEdge, and AI Lab.", icon: Code },
            { title: "ISVs & OEMs", desc: "Customize and embed Super AI technologies into your existing offerings.", icon: Settings },
            { title: "Training Partners", desc: "Help upskill the next generation through AI School and Teacher Training alliances.", icon: GraduationCap }
         ].map((item, idx) => (
            <SpotlightCard key={idx} className="p-6 bg-neutral-900/50 hover:bg-neutral-900 border-l-2 border-l-accent border-y-0 border-r-0 rounded-r-lg rounded-l-none">
               <div className="mb-4 text-accent relative z-10"><item.icon size={28} /></div>
               <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
               <p className="text-sm text-muted leading-relaxed relative z-10">{item.desc}</p>
            </SpotlightCard>
         ))}
      </Stagger>
   </Section>

   {/* Onboarding Steps */}
   <Section className="bg-[#050505] border-y border-white/5">
      <SectionHeader 
         badge="Onboarding Process"
         title="Get Started in Just 3 Steps"
         center
      />
      <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 z-0"></div>

          {[
            { step: "01", title: "Create Your Partner Profile", desc: "Submit basic company details and share your business focus and goals." },
            { step: "02", title: "Validate Company Info", desc: "Confirm your organization's legal name, address, and registration details." },
            { step: "03", title: "Begin Enablement", desc: "Get immediate access to training, certifications, and partner resources." }
          ].map((item, idx) => (
             <FadeIn key={idx} delay={idx * 0.2} className="relative z-10 flex flex-col items-center text-center">
                <ScrollReveal3D>
                    <div className="w-24 h-24 rounded-full bg-black border-4 border-neutral-800 flex items-center justify-center text-2xl font-bold text-accent mb-6 shadow-xl relative group mx-auto">
                        <div className="absolute inset-0 rounded-full border border-accent/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                        {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-muted text-sm max-w-xs mx-auto">{item.desc}</p>
                </ScrollReveal3D>
             </FadeIn>
          ))}
      </div>
   </Section>

   {/* Training & Enablement */}
   <Section>
      <SectionHeader 
         title="Training & Enablement Accelerate"
         subtitle="With Joint Growth Strategies"
         center
      />
      <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
             { title: "AI & Product Certifications", desc: "Validate your expertise in NeuraEdge, NeuraDesk, AI Lab, AI School Programs & more." },
             { title: "On-Demand Learning", desc: "Product walk-throughs, integration tutorials, sales readiness videos — anytime, anywhere." },
             { title: "Live Bootcamps", desc: "Join deep-dive sessions with Super AI experts. Includes product deep-dives and GTM strategies." },
             { title: "Use Case Library", desc: "Learn from real-world deployments across sectors like government, education, energy, and manufacturing." }
          ].map((item, idx) => (
             <ScrollReveal3D key={idx}>
                <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent/50 transition-colors duration-500 h-full">
                    <div className="bg-black h-full rounded-xl p-8 flex flex-col items-center text-center relative z-10">
                        <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                </div>
             </ScrollReveal3D>
          ))}
      </Stagger>
   </Section>

   {/* Benefits & Tiered Support */}
   <Section className="bg-neutral-900/30">
      <div className="grid lg:grid-cols-2 gap-16">
         {/* Activate & Grow */}
         <FadeIn>
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl font-bold text-white mb-6">Activate & Grow: Unlock Full Partner Benefits</h2>
            <p className="text-muted mb-8">Once you're onboarded, you gain access to exclusive resources designed to scale your business.</p>
            <CheckList items={[
               "Access lead registration tools",
               "Unlock partner-only incentives & performance rewards",
               "Receive deal support from sales engineers & pre-sales architects",
               "Get invites to partner-exclusive launches, briefings, and beta releases",
               "Stay ahead with roadmap updates and innovation showcases"
            ]} />
         </FadeIn>

         {/* Tiered Support */}
         <FadeIn delay={0.2}>
            <Badge className="mb-4">Scale</Badge>
            <h2 className="text-3xl font-bold text-white mb-6">Partner Benefits That Scale With You</h2>
            <div className="space-y-6">
               {[
                  { title: "Build Your Business", desc: "Co-create AI solutions and monetize with speed." },
                  { title: "Strengthen Your AI Practice", desc: "Get Partner Success Core or Expanded benefits with GTM backing and dedicated support." },
                  { title: "Succeed as an ISV / OEM", desc: "Access sandbox environments, technical support, and joint GTM activities." }
               ].map((item, idx) => (
                  <SpotlightCard key={idx} className="p-6 bg-neutral-950 border-l-4 border-l-accent rounded-r-lg rounded-l-none">
                     <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
                     <p className="text-sm text-muted relative z-10">{item.desc}</p>
                  </SpotlightCard>
               ))}
            </div>
         </FadeIn>
      </div>
   </Section>

   </MotionPage>
);