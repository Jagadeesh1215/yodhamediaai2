import { ServiceCard } from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Monitor,
  Share2,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Amplify your brand across every channel",
    description:
      "We engineer data-driven social strategies that build authority, grow engaged audiences, and convert followers into loyal patients and clients. Every post serves a purpose.",
    benefits: [
      "Platform-specific content calendars (LinkedIn, Instagram, Facebook)",
      "Healthcare-compliant creative production & copywriting",
      "Community management & patient engagement protocols",
      "Paid social campaigns with precision audience targeting",
    ],
    badge: "High Impact",
  },
  {
    icon: ShieldCheck,
    title: "Online Reputation Management",
    tagline: "Protect your most valuable asset",
    description:
      "In healthcare and enterprise, trust is everything. Our ORM system monitors, responds to, and strategically builds your online reputation across every major platform—from Google to Healthgrades.",
    benefits: [
      "24/7 review monitoring across 50+ platforms",
      "HIPAA-compliant response protocols & templates",
      "Negative content suppression strategies",
      "Physician & executive profile optimization",
    ],
    badge: "Most Popular",
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    tagline: "Convert visitors into patients",
    description:
      "Every YodhaMedia website is engineered for maximum conversion, built on ADA-compliant architecture, and optimized for Google's Core Web Vitals—a digital fortress that works 24/7.",
    benefits: [
      "HIPAA-aware infrastructure & secure patient forms",
      "ADA/WCAG 2.1 AA accessibility compliance",
      "Core Web Vitals & page speed optimization",
      "A/B tested conversion flows & patient journeys",
    ],
    badge: null,
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Marketing",
    tagline: "Precision patient & client acquisition",
    description:
      "We engineer integrated Digital Growth Systems that compound over time—orchestrating SEO, paid media, content distribution, and analytics into one unstoppable growth engine.",
    benefits: [
      "Full-stack digital audit & strategic roadmap",
      "Integrated SEO + content + paid media strategy",
      "Content Distribution across high-authority channels",
      "Monthly growth sprints with executive reporting",
    ],
    badge: "Flagship",
  },
];

const stats = [
  { value: "150%", label: "Average ROI Increase" },
  { value: "50+", label: "Healthcare Clients Served" },
  { value: "10+", label: "Years of Industry Experience" },
  { value: "98%", label: "Client Retention Rate" },
];

function handleGetStarted() {
  const el = document.getElementById("services-cta");
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section
        className="py-28 bg-background relative overflow-hidden"
        data-ocid="services.hero_section"
      >
        {/* Decorative blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[400px] rounded-full blur-3xl"
            style={{ background: "oklch(0.77 0.192 56 / 0.07)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-3xl"
            style={{ background: "oklch(0.3 0.0898 259 / 0.07)" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Badge className="mb-5 bg-accent/10 text-accent border-accent/30 font-semibold tracking-wide">
              Our Services
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.08] tracking-tight"
          >
            Comprehensive{" "}
            <span className="gradient-text-primary">Digital Growth</span>
            <br className="hidden sm:block" /> Systems That Dominate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Each service is a precision instrument. Together, they form an
            integrated Digital Growth System—building digital fortresses for
            hospitals, doctors, and modern enterprises.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-4 card-border-accent text-center"
                data-ocid={`services.stat.${i + 1}`}
              >
                <p className="font-display font-bold text-2xl text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards Grid ───────────────────── */}
      <section className="section-alt py-24" data-ocid="services.cards_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                  What We Deliver
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Four pillars of market dominance
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
                From Medical Marketing to Online Reputation Management, our
                specialized services integrate into a unified Content
                Distribution and growth engine.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                benefits={service.benefits}
                badge={service.badge}
                index={i}
                onGetStarted={handleGetStarted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────── */}
      <section
        id="services-cta"
        className="py-24 bg-background relative overflow-hidden"
        data-ocid="services.cta_section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, oklch(0.77 0.192 56 / 0.07) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl mx-auto bg-card rounded-3xl p-10 sm:p-14 text-center card-border-accent relative overflow-hidden"
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% -20%, oklch(0.77 0.192 56 / 0.1) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <Badge className="mb-5 bg-accent/15 text-accent border-accent/30 font-semibold">
                Free Strategy Session
              </Badge>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-5 leading-tight">
                Ready to Dominate{" "}
                <span className="gradient-text-primary">Your Market?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Book a free 30-minute Digital Growth Audit. We'll map your
                current digital presence and identify the highest-leverage
                opportunities for Medical Marketing, ORM, and Content
                Distribution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-10 accent-glow transition-smooth"
                  data-ocid="services.book_strategy_call_button"
                  asChild
                >
                  <Link to="/blog">
                    Book a Free Strategy Call{" "}
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/60 font-semibold text-base px-8 transition-smooth"
                  data-ocid="services.view_case_studies_button"
                  asChild
                >
                  <Link to="/blog">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
