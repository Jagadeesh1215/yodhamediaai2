import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart2,
  Building2,
  CheckCircle2,
  Globe,
  HeartPulse,
  Lightbulb,
  Megaphone,
  MessageSquareHeart,
  ShoppingBag,
  Star,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

/* ─── Data ─────────────────────────────────────────────────── */

const pillars = [
  {
    icon: Target,
    title: "Data-Driven Precision",
    desc: "Every strategy is built on verified healthcare market data, not guesswork. We engineer growth systems that produce predictable, compounding returns.",
  },
  {
    icon: Users,
    title: "Healthcare-Native Expertise",
    desc: "Our team includes former healthcare marketers, medical content specialists, and ORM strategists who understand the unique compliance landscape.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "With 50+ healthcare clients and a 98% retention rate, our results speak louder than promises. We don't just set KPIs — we exceed them.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Core",
    desc: "We combine cutting-edge Digital Growth Systems with human insight to keep our clients ahead of algorithmic changes and competitive shifts.",
  },
];

const team = [
  {
    name: "Vikram Joshi",
    role: "Founder & CEO",
    bio: "15+ years architecting Digital Growth Systems for top-tier hospital networks.",
    initials: "VJ",
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "Neha Kapoor",
    role: "Head of Medical Marketing",
    bio: "Specialist in healthcare SEO, PPC, and patient acquisition funnels at scale.",
    initials: "NK",
    color: "from-accent/20 to-accent/5",
  },
  {
    name: "Arjun Patel",
    role: "ORM Director",
    bio: "Trusted by 40+ clinics to protect and amplify online reputation across all platforms.",
    initials: "AP",
    color: "from-primary/20 to-accent/10",
  },
  {
    name: "Riya Singh",
    role: "Content Lead",
    bio: "AHCJ-certified medical writer driving Content Distribution for leading health brands.",
    initials: "RS",
    color: "from-accent/15 to-primary/10",
  },
];

const industries = [
  {
    icon: HeartPulse,
    label: "Healthcare",
    description:
      "Hospitals, clinics, specialty practices, and health-tech startups seeking patient growth and reputational authority.",
  },
  {
    icon: ShoppingBag,
    label: "E-commerce",
    description:
      "Direct-to-consumer health and wellness brands that need performance marketing and content-led acquisition.",
  },
  {
    icon: BarChart2,
    label: "SaaS & Tech",
    description:
      "B2B health-tech platforms requiring thought-leadership content and inbound demand-generation pipelines.",
  },
  {
    icon: Building2,
    label: "Corporate",
    description:
      "Enterprises managing multi-location reputation, internal comms, and employer brand across digital channels.",
  },
];

const contentPillars = [
  {
    icon: Globe,
    title: "Content Distribution",
    desc: "Omnichannel distribution engines that place your message on Google, LinkedIn, YouTube, and 40+ high-authority health directories — simultaneously.",
  },
  {
    icon: Megaphone,
    title: "Medical Content Marketing",
    desc: "AHCJ-aligned long-form articles, case studies, and video scripts crafted to rank, convert, and reinforce your clinical authority.",
  },
  {
    icon: MessageSquareHeart,
    title: "Online Reputation Management",
    desc: "Proactive review generation, crisis mitigation, and brand-sentiment monitoring that protects what patients see first.",
  },
  {
    icon: Star,
    title: "Digital Growth Systems",
    desc: "Full-stack growth infrastructure: SEO architecture, CRO, paid media, and analytics dashboards unified into one compounding system.",
  },
];

const missionStats = [
  { value: "150%", label: "Average ROI Increase" },
  { value: "50+", label: "Healthcare Clients" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "10+", label: "Years of Expertise" },
];

/* ─── Helpers ───────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

/* ─── JSON-LD Schema ────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "YodhaMedia",
  description:
    "Premium Digital Growth Systems and Medical Marketing agency specialising in healthcare, Online Reputation Management, and Content Distribution for hospitals, doctors, and modern enterprises.",
  url: "https://yodhamedia.com",
  logo: "https://yodhamedia.com/logo.png",
  foundingDate: "2014",
  areaServed: "IN",
  priceRange: "$$",
  knowsAbout: [
    "Digital Growth Systems",
    "Medical Marketing",
    "Online Reputation Management",
    "Content Distribution",
    "Healthcare SEO",
  ],
  serviceType: [
    "Digital Marketing",
    "Medical Marketing",
    "Online Reputation Management",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};

/* ─── Component ─────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD: MedicalBusiness Schema */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Banner ── */}
      <header
        className="relative overflow-hidden py-28 bg-background"
        data-ocid="about.hero_section"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, oklch(0.3 0.09 259) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div {...fadeUp(0)}>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-4">
                About YodhaMedia
              </Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05]"
            >
              We don&apos;t run campaigns.{" "}
              <span className="gradient-text-primary">We engineer growth.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10"
            >
              YodhaMedia is the authority in building Digital Growth Systems for
              healthcare providers and modern enterprises — combining Medical
              Marketing mastery, Online Reputation Management, and precision
              Content Distribution into one compounding growth engine.
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold accent-glow"
                asChild
                data-ocid="about.cta_button"
              >
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5"
                asChild
                data-ocid="about.consultation_button"
              >
                <Link to="/">Book Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ── Mission Statement ── */}
      <section className="section-alt py-20" data-ocid="about.mission_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Copy */}
            <div>
              <motion.div {...fadeUp(0)}>
                <Badge className="mb-5 bg-accent/10 text-accent border-accent/20">
                  Our Mission
                </Badge>
              </motion.div>
              <motion.h2
                {...fadeUp(0.07)}
                className="font-display font-bold text-4xl text-foreground mb-6 leading-tight"
              >
                Building digital fortresses for hospitals, doctors, and modern
                enterprises.
              </motion.h2>
              <motion.div
                {...fadeUp(0.14)}
                className="space-y-5 text-muted-foreground leading-relaxed"
              >
                <p>
                  At YodhaMedia, our mission is singular: to deliver{" "}
                  <strong className="text-foreground font-semibold">
                    Digital Growth Systems
                  </strong>{" "}
                  that protect, elevate, and compound the online authority of
                  every client we serve. In an era where a hospital&apos;s
                  Google rating directly influences patient decisions, your
                  digital presence is not a marketing expense — it is your most
                  valuable clinical asset.
                </p>
                <p>
                  We specialise in{" "}
                  <strong className="text-foreground font-semibold">
                    Medical Marketing
                  </strong>{" "}
                  because healthcare has rules that generic agencies ignore:
                  HIPAA considerations, physician review ethics, and the nuance
                  of trust-based patient acquisition. Every campaign we run is
                  compliance-aware, evidence-backed, and results-obsessed.
                </p>
                <p>
                  Our{" "}
                  <strong className="text-foreground font-semibold">
                    Online Reputation Management
                  </strong>{" "}
                  and{" "}
                  <strong className="text-foreground font-semibold">
                    Content Distribution
                  </strong>{" "}
                  programmes are not one-size-fits-all — they are precision
                  frameworks engineered around each client&apos;s competitive
                  landscape, audience intent, and long-term growth trajectory.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.1)}
              className="grid grid-cols-2 gap-5"
              data-ocid="about.stats_grid"
            >
              {missionStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="bg-card rounded-2xl p-7 card-border-accent text-center"
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <div className="font-display font-bold text-4xl gradient-text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── YodhaMedia Advantage (Pillars) ── */}
      <section
        className="py-24 bg-background"
        data-ocid="about.advantage_section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              The YodhaMedia Advantage
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              What sets us apart
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Four core principles that define every engagement and drive every
              result.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 card-border-accent group"
                data-ocid={`about.pillar.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-smooth">
                  <pillar.icon className="w-5 h-5 text-primary group-hover:text-accent transition-smooth" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content & Distribution Expertise ── */}
      <section className="section-alt py-24" data-ocid="about.content_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              <motion.div {...fadeUp(0)}>
                <Badge className="mb-5 bg-accent/10 text-accent border-accent/20">
                  Content & Distribution
                </Badge>
              </motion.div>
              <motion.h2
                {...fadeUp(0.07)}
                className="font-display font-bold text-4xl text-foreground mb-6 leading-tight"
              >
                Content that builds authority.{" "}
                <span className="gradient-text-primary">
                  Distribution that drives growth.
                </span>
              </motion.h2>
              <motion.p
                {...fadeUp(0.14)}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                Great content without distribution is noise. Great distribution
                without great content is spam. YodhaMedia engineers both halves
                of the equation — producing medically accurate, SEO-optimised
                content and then deploying it across every channel your audience
                trusts.
              </motion.p>
              <motion.div {...fadeUp(0.2)} className="space-y-3">
                {[
                  "AHCJ-certified medical writers",
                  "40+ health authority placements",
                  "Multilingual content frameworks",
                  "Compliance-aware editorial process",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="space-y-5">
              {contentPillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 card-border-accent flex gap-5 group"
                  data-ocid={`about.content_pillar.${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-smooth">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Expertise ── */}
      <section
        className="py-24 bg-background"
        data-ocid="about.industries_section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Industry Expertise
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Sectors we dominate
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Deep vertical knowledge gives our strategies an unfair advantage
              in each market we enter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-7 card-border-accent text-center group"
                data-ocid={`about.industry.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-smooth">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {ind.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ind.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-alt py-24" data-ocid="about.team_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              The Team
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Experts with domain authority
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Seasoned professionals from healthcare, media, and technology —
              united by a single obsession: your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-card rounded-2xl p-7 card-border-accent text-center group"
                data-ocid={`about.team.${i + 1}`}
              >
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5 ring-2 ring-border group-hover:ring-accent/40 transition-smooth`}
                >
                  <span className="font-display font-bold text-2xl text-primary">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-accent mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-20 bg-background" data-ocid="about.cta_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/15 p-14 text-center"
          >
            <Badge className="mb-5 bg-accent/10 text-accent border-accent/20">
              Ready to grow?
            </Badge>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Let's build your digital fortress.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Join 50+ healthcare and enterprise brands that have elevated their
              authority, protected their reputation, and achieved measurable ROI
              with YodhaMedia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold accent-glow"
                asChild
                data-ocid="about.final_cta_button"
              >
                <Link to="/">
                  Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5"
                asChild
                data-ocid="about.services_link"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
