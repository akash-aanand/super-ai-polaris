import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader, Button, CheckList, MotionPage, FadeIn, ZoomIn, Stagger, Badge, BookShelf, SpotlightCard, ScrollReveal3D } from '../components/ui';
import { EnterpriseScroll3D } from '../components/sections/EnterpriseScroll3D';
import { HeroBanner } from '../components/sections/HeroBanner';
import { ProductModules } from '../components/sections/ProductModules';
import { CustomSolutions } from '../components/sections/CustomSolutions';
import { SERVICES_DATA, BOOK_SERIES, ENTERPRISE_CONTENT, DEPLOYMENT_STATS, ECOSYSTEM_PARTNERS, CUSTOM_SOLUTIONS_DATA, NEURA_MODULES, LABS_DATA, NEURA_KEY_FEATURES, AGENT_SOLUTIONS_DETAILS, ROBOTICS_SOLUTIONS_DETAILS } from '../data';
import { ArrowRight, GraduationCap, Bot, Cpu, Layers, Factory, Check, ShieldCheck } from 'lucide-react';

// --- MAIN SERVICES LISTING PAGE ---
export const ServicesMain = () => {
    return (
        <MotionPage>
            <HeroBanner
                badge="Our Services"
                title={<span>Comprehensive AI <span className="text-accent">Education Solutions</span></span>}
                subtitle="From K-12 curriculum to advanced research labs, we provide the infrastructure for the next generation of intelligence."
                className="text-center"
            />

            <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
                <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.values(SERVICES_DATA).map((service) => (
                        <SpotlightCard key={service.id} className="h-full flex flex-col justify-between group bg-neutral-900/40">
                            <div>
                                <div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-muted text-sm leading-relaxed mb-6">{service.subtitle}</p>
                                <ul className="space-y-2 mb-8">
                                    {service.features.slice(0, 3).map((f, i) => (
                                        <li key={i} className="flex items-center text-xs text-muted/80">
                                            <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <Button to={`/services/${service.id}`} variant="outline" className="w-full group-hover:border-accent group-hover:text-accent">
                                    Learn More
                                </Button>
                            </div>
                        </SpotlightCard>
                    ))}
                </Stagger>
            </Section>
        </MotionPage>
    );
};

// --- INDIVIDUAL SERVICE DETAIL PAGE ---
export const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = id ? SERVICES_DATA[id] : null;

    if (!service) {
        return (
            <MotionPage>
                <HeroBanner title="Service Not Found" subtitle="The requested service could not be found." />
                <Section className="text-center">
                    <Button to="/services" variant="primary">Back to Services</Button>
                </Section>
            </MotionPage>
        );
    }

    return (
        <MotionPage>
            <HeroBanner
                badge="Service Offering"
                title={service.title}
                subtitle={service.subtitle}
                className="text-center"
            />

            <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <ScrollReveal3D>
                            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                                <p className="text-muted leading-relaxed text-lg">{service.description}</p>
                            </div>
                        </ScrollReveal3D>

                        <FadeIn delay={0.2}>
                            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start p-4 rounded-lg bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                                        <Check size={18} className="text-accent mr-3 mt-0.5 shrink-0" />
                                        <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {service.id === 'textbooks' && (
                            <FadeIn delay={0.3}>
                                <h3 className="text-2xl font-bold text-white mb-6">Book Series</h3>
                                <BookShelf books={BOOK_SERIES} />
                            </FadeIn>
                        )}

                        {service.id === 'labs' && (
                            <FadeIn delay={0.3}>
                                <h3 className="text-2xl font-bold text-white mb-6">Explore Our Labs</h3>
                                <Stagger className="grid md:grid-cols-2 gap-6">
                                    {LABS_DATA.map((lab, idx) => (
                                        <SpotlightCard key={idx} backgroundImage={lab.image}>
                                            <div className="mb-4 text-xs font-mono text-accent uppercase tracking-widest">{lab.category}</div>
                                            <h3 className="text-xl font-bold text-white mb-6">{lab.title}</h3>
                                            <ul className="space-y-4 relative z-10">
                                                {lab.items.map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-muted group-hover:text-white transition-colors">
                                                        <span className="mr-3 text-accent mt-1"><Layers size={14} /></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </SpotlightCard>
                                    ))}
                                </Stagger>
                            </FadeIn>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <ZoomIn>
                                <SpotlightCard className="bg-neutral-900/80 p-8">
                                    <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Benefits</h3>
                                    <div className="space-y-6">
                                        {service.benefits.map((benefit, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-accent font-bold text-sm mb-2">{benefit.title}</h4>
                                                <p className="text-sm text-muted">{benefit.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <Button to="/contact" variant="gold" className="w-full">Get Started</Button>
                                    </div>
                                </SpotlightCard>
                            </ZoomIn>
                        </div>
                    </div>
                </div>
            </Section>
        </MotionPage>
    );
};

// --- ENTERPRISE SOLUTIONS PAGE (With 3D Scroll) ---
export const EnterpriseSolutionsPage = () => {
    return (
        <MotionPage>
             {/* 1. Cinematic Hero */}
             <HeroBanner
                badge="Enterprise Solutions"
                title={<span>Driving Industrial Innovation <span className="text-accent">with Scalable AI.</span></span>}
                subtitle="A unified suite for private, offline, and intelligent AI interactions. Transform the way your organization works with our secure, autonomous systems."
                className="text-center"
             >
                <div className="flex gap-4">
                    <Button to="/contact" variant="gold">Get Started Now</Button>
                </div>
             </HeroBanner>

             {/* 2. Core Value Prop - 3D Scroll Section */}
             <div className="relative z-10 py-10">
                 <EnterpriseScroll3D items={ENTERPRISE_CONTENT} />
             </div>

             {/* 3. Product Modules */}
             <Section className="bg-[#050505] border-t border-white/10">
                <SectionHeader 
                    badge="Product Modules"
                    title="Explore Our Product Modules"
                    subtitle="Advanced tools for document intelligence, edge processing, and automated support."
                    center
                />
                
                {/* Use new modular component */}
                <FadeIn>
                  <ProductModules modules={NEURA_MODULES} />
                </FadeIn>

                <ScrollReveal3D>
                    <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Badge className="mb-4">Unified Platform</Badge>
                                <h3 className="text-3xl font-bold text-white mb-6">Key Features of SUPER AI - NEURA</h3>
                                <p className="text-muted leading-relaxed mb-8">
                                    A completely offline, secure, and multi-lingual platform designed for mission-critical environments where data privacy is paramount.
                                </p>
                                <Button to="/contact" variant="outline">Schedule Demo</Button>
                            </div>
                            <div className="bg-black/50 p-8 rounded-xl border border-white/5">
                                <CheckList items={NEURA_KEY_FEATURES} />
                            </div>
                        </div>
                    </div>
                </ScrollReveal3D>
             </Section>

             {/* 4. Enterprise AI Agent Solutions */}
             <Section>
                <SectionHeader 
                    badge="Workforce Automation"
                    title="Enterprise AI Agent Solutions"
                    subtitle="Deploy digital employees that act, learn, and adapt."
                    center
                />
                <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {AGENT_SOLUTIONS_DETAILS.map((agent, idx) => (
                        <SpotlightCard key={idx} className="bg-neutral-900/40 border-white/10 p-6 hover:border-accent/50">
                            <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                                <Bot size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4">{agent.title}</h4>
                            <ul className="space-y-3">
                                {agent.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="text-xs text-muted leading-relaxed flex items-start">
                                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5 mr-2 shrink-0"></div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    ))}
                </Stagger>
             </Section>

             {/* 5. Labs & Education Kits */}
             <Section className="bg-[#050505] border-t border-white/10">
                <SectionHeader 
                    badge="Education & R&D"
                    title="AI Agent Labs & Education Kits"
                    subtitle="Equipping schools and universities with hands-on AI and Robotics infrastructure."
                    center
                />
                <Stagger className="grid md:grid-cols-3 gap-8">
                    {LABS_DATA.map((lab, idx) => (
                        <SpotlightCard key={idx} backgroundImage={lab.image}>
                            <div className="mb-4 text-xs font-mono text-accent uppercase tracking-widest">{lab.category}</div>
                            <h3 className="text-xl font-bold text-white mb-6">{lab.title}</h3>
                            <ul className="space-y-4 relative z-10">
                                {lab.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-muted group-hover:text-white transition-colors">
                                        <span className="mr-3 text-accent mt-1">
                                            <Layers size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    ))}
                </Stagger>
             </Section>

             {/* 6. Enterprise Robotics Solutions */}
             <Section>
                 <SectionHeader 
                    badge="Physical AI"
                    title="Enterprise Robotics Solutions"
                    subtitle="Bridging the gap between digital intelligence and physical action."
                    center
                 />
                 <Stagger className="grid md:grid-cols-3 gap-6">
                     {ROBOTICS_SOLUTIONS_DETAILS.map((robot, idx) => (
                         <ScrollReveal3D key={idx}>
                             <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end p-8 border border-white/10 hover:shadow-2xl transition-all duration-500">
                                 <div className="absolute inset-0 bg-neutral-900 transition-colors group-hover:bg-neutral-800"></div>
                                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
                                 
                                 <div className="relative z-10">
                                     <h4 className="text-2xl font-bold text-white mb-2">{robot.title}</h4>
                                     <p className="text-muted">{robot.desc}</p>
                                 </div>
                                 <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-full border border-white/10 text-white/50 group-hover:text-accent transition-colors">
                                     <Cpu size={20} />
                                 </div>
                             </div>
                         </ScrollReveal3D>
                     ))}
                 </Stagger>
             </Section>

             {/* 7. Deployment */}
             <Section className="bg-[#050505] border-t border-white/10">
                <SectionHeader 
                    badge="Deployment"
                    title="Deployment & Partnerships"
                    subtitle="Seamlessly integrating with your existing infrastructure and legacy systems."
                    center
                />
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Stagger className="grid gap-6">
                        {DEPLOYMENT_STATS.map((stat, idx) => (
                             <SpotlightCard key={idx} enableTilt={false} className="flex items-center gap-6 p-6">
                                 <div className="p-4 bg-black border border-white/10 rounded-lg text-accent">
                                     <stat.icon size={24} />
                                 </div>
                                 <div>
                                     <div className="text-sm text-muted uppercase tracking-wider mb-1">{stat.label}</div>
                                     <div className="text-xl font-bold text-white">{stat.value}</div>
                                 </div>
                             </SpotlightCard>
                        ))}
                    </Stagger>

                    <FadeIn delay={0.2}>
                        <ScrollReveal3D>
                            <div className="p-8 border border-accent/20 bg-gradient-to-br from-neutral-900 to-black rounded-2xl shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-6">Strategic Partners</h3>
                                <p className="text-muted mb-8 leading-relaxed">
                                    We collaborate with global technology leaders to ensure your enterprise AI infrastructure is robust, scalable, and future-proof.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {ECOSYSTEM_PARTNERS.map((p) => (
                                        <span key={p} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-mono text-white/80 uppercase tracking-wide hover:bg-white/10 hover:text-accent transition-colors cursor-default">
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal3D>
                    </FadeIn>
                </div>
             </Section>

             {/* 8. Custom Solutions */}
             <Section className="relative overflow-hidden">
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

                 <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                     <FadeIn>
                         <Badge className="mb-6">Custom Engineering</Badge>
                         <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                             Custom Enterprise <br/><span className="text-accent">AI Solutions</span>
                         </h2>
                         <p className="text-xl text-white font-medium mb-4">Your Vision. Our Intelligence.</p>
                         <p className="text-muted text-lg leading-relaxed mb-8">
                             We don't just offer products; we build tailored solutions. From predictive maintenance to smart logistics, our engineering team works as an extension of yours.
                         </p>
                         <Button to="/contact" variant="outline" className="group">
                             Discuss Your Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                         </Button>
                     </FadeIn>

                     <FadeIn delay={0.2}>
                         <div className="space-y-6">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-6">Types of Custom Solutions</h3>
                            <CustomSolutions items={CUSTOM_SOLUTIONS_DATA} />
                         </div>
                     </FadeIn>
                 </div>
             </Section>

             {/* 9. Final CTA */}
             <Section className="pt-0">
                 <ScrollReveal3D>
                    <div className="bg-gradient-to-r from-neutral-900 to-black border border-accent/20 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full"></div>
                         
                         <div className="relative z-10 max-w-3xl mx-auto">
                             <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Transform?</h3>
                             <p className="text-muted mb-10 text-lg">
                                 Join leading organizations deploying Super AI Polaris solutions for secure, offline, and autonomous operations.
                             </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <Button to="/contact" variant="gold" className="px-8 h-12">Contact Sales</Button>
                                 <Button to="/services/labs" variant="outline" className="px-8 h-12">View Labs</Button>
                             </div>
                         </div>
                    </div>
                 </ScrollReveal3D>
             </Section>
        </MotionPage>
    );
};