import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  LineChart,
  MessageSquare,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

// ─── JSON-LD Schema ──────────────────────────────────────────────────────────
const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "YodhaMedia",
  "description": "Premium Digital Growth Systems agency specializing in Medical Marketing, Online Reputation Management, and Content Distribution for healthcare and enterprise clients.",
  "url": "https://yodhamedia.com",
  "logo": "https://yodhamedia.com/logo.png",
  "telephone": "+1-800-YODHA-MD",
  "address": { "@type": "PostalAddress", "addressCountry": "IN" },
  "areaServed": "Worldwide",
  "serviceType": ["Medical Marketing", "Online Reputation Management", "Content Distribution", "Digital Growth Systems", "Healthcare SEO", "Web Design"],
  "knowsAbout": ["Healthcare Digital Marketing", "Hospital SEO", "Medical Practice Growth", "HIPAA-compliant Marketing"]
}`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "250+", label: "Healthcare Clients", icon: Users2 },
  { value: "98%", label: "Client Retention Rate", icon: TrendingUp },
  { value: "$50M+", label: "Revenue Generated", icon: LineChart },
  { value: "10+", label: "Years of Expertise", icon: Shield },
  { value: "4.9★", label: "Average Client Rating", icon: Star },
];

const services = [
  {
    icon: Search,
    title: "Medical Marketing",
    badge: "Healthcare",
    desc: "Precision-targeted campaigns that connect healthcare providers with the right patients. End-to-end funnel strategy from awareness to appointment.",
    highlight: "Up to 180% increase in patient acquisition",
  },
  {
    icon: MessageSquare,
    title: "Online Reputation Management",
    badge: "ORM",
    desc: "Protect and elevate your brand's online presence with proactive ORM strategies built for healthcare compliance and enterprise standards.",
    highlight: "Trusted by 250+ medical brands",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    badge: "Web",
    desc: "HIPAA-aware, conversion-optimized digital properties that reflect the professionalism of your practice and drive measurable results.",
    highlight: "3x faster conversions on average",
  },
  {
    icon: Zap,
    title: "Digital Growth Systems",
    badge: "Growth",
    desc: "End-to-end digital ecosystems engineered for sustainable, compounding growth across every channel — SEO, paid, social, and content.",
    highlight: "150% average ROI increase",
  },
];

const testimonials = [
  {
    name: "Dr. Ananya Sharma",
    role: "Chief of Medicine, Apollo Health",
    quote:
      "YodhaMedia transformed our digital presence. Patient acquisition increased 180% within 6 months. Their Medical Marketing strategy is unmatched.",
    rating: 5,
    stat: "+180% Patients",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, MedCarePlus Group",
    quote:
      "Their Online Reputation Management work saved our brand during a critical period. The team operates with precision and genuine healthcare expertise.",
    rating: 5,
    stat: "5★ Brand Score",
  },
  {
    name: "Dr. Priya Verma",
    role: "Director, HealthBridge Clinics",
    quote:
      "The Content Distribution frameworks they built now drive 40% of our inbound inquiries. True Digital Growth Systems in action.",
    rating: 5,
    stat: "40% Inbound Growth",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  icon: Icon,
  index,
}: {
  value: string;
  label: string;
  icon: typeof Users2;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="flex flex-col items-center gap-2 px-6 py-5 bg-card rounded-2xl border border-border/40 min-w-[140px]"
      data-ocid={`home.stat.${index + 1}`}
    >
      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <span className="font-display font-bold text-3xl text-foreground leading-tight">
        {value}
      </span>
      <span className="text-xs text-muted-foreground text-center leading-snug">
        {label}
      </span>
    </motion.div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  badge,
  desc,
  highlight,
  index,
}: {
  icon: typeof Search;
  title: string;
  badge: string;
  desc: string;
  highlight: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-card rounded-2xl p-7 card-border-accent flex flex-col cursor-default"
      data-ocid={`home.service_card.${index + 1}`}
    >
      {/* Icon + Badge row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-smooth">
          <Icon className="w-5 h-5 text-primary dark:text-accent group-hover:text-accent-foreground transition-smooth" />
        </div>
        <Badge className="text-xs bg-accent/10 text-accent border-accent/20 font-medium">
          {badge}
        </Badge>
      </div>

      <h3 className="font-display font-bold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
        {desc}
      </p>

      {/* Highlight chip */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/8 rounded-lg px-3 py-1.5 mb-5 w-fit">
        <TrendingUp className="w-3 h-3" />
        {highlight}
      </div>

      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-accent hover:gap-2.5 transition-smooth group-hover:text-accent"
        data-ocid={`home.service_link.${index + 1}`}
      >
        Explore Service <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.article>
  );
}

// ─── Hero Visual ─────────────────────────────────────────────────────────────
function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto max-w-lg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl scale-125" />
      {/* Main card */}
      <div className="relative rounded-3xl overflow-hidden border border-border/40 bg-card shadow-2xl">
        <div className="bg-gradient-to-br from-primary to-primary/80 dark:from-[#2D1B69] dark:to-[#1A0F40] p-8 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-primary-foreground font-display font-bold text-sm">
                YodhaMedia
              </div>
              <div className="text-primary-foreground/60 text-xs">
                Digital Growth Dashboard
              </div>
            </div>
            <div className="ml-auto">
              <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5 font-medium border border-accent/30">
                Live
              </span>
            </div>
          </div>
          {/* Fake metric graph */}
          <div className="space-y-2 mb-4">
            {[
              { label: "Patient Acquisition", val: 78, color: "bg-accent" },
              { label: "ORM Score", val: 94, color: "bg-green-400" },
              { label: "Content Reach", val: 62, color: "bg-blue-400" },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-xs text-primary-foreground/70 mb-1">
                  <span>{m.label}</span>
                  <span className="font-semibold text-primary-foreground">
                    {m.val}%
                  </span>
                </div>
                <div className="h-1.5 bg-primary-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${m.val}%` }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className={`h-full ${m.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Stat row */}
        <div className="grid grid-cols-3 divide-x divide-border/30 bg-card">
          {[
            { v: "+180%", l: "ROI" },
            { v: "98%", l: "Retention" },
            { v: "250+", l: "Clients" },
          ].map((s) => (
            <div key={s.l} className="text-center py-4">
              <div className="font-display font-bold text-foreground text-base">
                {s.v}
              </div>
              <div className="text-muted-foreground text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -left-8 top-16 bg-card border border-border/40 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
      >
        <div className="w-7 h-7 bg-green-500/10 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-3.5 h-3.5 text-green-500" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">+150% ROI</div>
          <div className="text-xs text-muted-foreground">Avg. increase</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-6 bottom-16 bg-card border border-accent/30 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
      >
        <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center">
          <Star className="w-3.5 h-3.5 text-accent fill-accent" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">4.9 / 5.0</div>
          <div className="text-xs text-muted-foreground">Client rating</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  // Inject JSON-LD schema
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = schemaJson;
    script.id = "yodha-schema";
    document.head.appendChild(script);
    return () => {
      document.getElementById("yodha-schema")?.remove();
    };
  }, []);

  // SEO meta tags
  useEffect(() => {
    document.title =
      "YodhaMedia | Digital Growth Systems for Healthcare & Enterprises";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(
        `meta[property="${prop}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "YodhaMedia builds digital fortresses for hospitals, doctors, and modern enterprises. Expert Medical Marketing, ORM, and Digital Growth Systems.",
    );
    setMeta(
      "keywords",
      "Digital Growth Systems, Medical Marketing, Online Reputation Management, Content Distribution, Healthcare SEO",
    );
    setOg("og:title", "YodhaMedia | Digital Growth Systems");
    setOg(
      "og:description",
      "Building digital fortresses for hospitals, doctors, and modern enterprises.",
    );
    setOg("og:type", "website");
    setOg("og:url", "https://yodhamedia.com");
    return () => {
      document.title = "YodhaMedia";
    };
  }, []);

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* JSON-LD Schema — injected into head via useEffect */}

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center bg-background overflow-hidden"
        data-ocid="home.hero_section"
        aria-label="Hero — YodhaMedia Digital Growth Systems"
      >
        {/* Background blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/4" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 dark:bg-accent/10 blur-3xl translate-x-1/3 translate-y-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-5 bg-accent/10 text-accent border-accent/30 hover:bg-accent/15 px-4 py-1.5 text-sm font-semibold tracking-wide">
                  🛡️ Trusted by 250+ Healthcare Brands
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-foreground mb-6"
              >
                Building digital{" "}
                <span className="gradient-text-primary">fortresses</span> for
                hospitals, doctors, and{" "}
                <span className="text-accent">modern enterprises.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
              >
                YodhaMedia is a premium{" "}
                <strong className="text-foreground font-semibold">
                  Digital Growth Systems
                </strong>{" "}
                agency. We specialize in Medical Marketing, Online Reputation
                Management, and Content Distribution — engineered for
                compounding ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="flex flex-wrap gap-3 mb-9"
              >
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 py-3 accent-glow h-auto"
                  asChild
                  data-ocid="home.hero_cta_button"
                >
                  <Link to="/services">Book Consultation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 dark:border-foreground/20 text-primary dark:text-foreground hover:bg-primary/5 dark:hover:bg-foreground/5 font-semibold text-base px-8 py-3 h-auto"
                  asChild
                  data-ocid="home.hero_secondary_button"
                >
                  <Link to="/about">
                    Explore Solutions <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
              >
                {[
                  "HIPAA-Aware",
                  "ISO Certified",
                  "Google Partner",
                  "Forbes Mentioned",
                ].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar / Stats ─────────────────────────────────────────────── */}
      <section
        className="py-14 section-alt border-y border-border/30"
        data-ocid="home.stats_section"
        aria-label="Trust statistics"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
              Proven results across the healthcare industry
            </p>
          </motion.div>
          {/* Horizontal scroll on mobile */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Snapshot ─────────────────────────────────────────────── */}
      <section
        className="py-24 bg-background"
        data-ocid="home.services_section"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border-primary/20 dark:border-accent/20 font-semibold">
              Our Capabilities
            </Badge>
            <h2
              id="services-heading"
              className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4"
            >
              Precision-Engineered{" "}
              <span className="gradient-text-primary">Digital Systems</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every service is architected to deliver compounding returns for
              healthcare and enterprise clients.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="home.services_list"
          >
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 dark:border-accent/30 text-primary dark:text-accent hover:bg-primary/5 dark:hover:bg-accent/5 font-semibold px-8"
              asChild
              data-ocid="home.view_services_button"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section
        className="section-alt py-24 border-y border-border/30"
        data-ocid="home.testimonials_section"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 font-semibold">
              Client Results
            </Badge>
            <h2
              id="testimonials-heading"
              className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4"
            >
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real outcomes from real organizations who chose to build with
              YodhaMedia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-card rounded-2xl p-7 border border-border/30 flex flex-col"
                data-ocid={`home.testimonial.${i + 1}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <blockquote className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>

                {/* Author + stat */}
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-foreground text-sm truncate">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground text-xs truncate">
                      {t.role}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-lg px-2.5 py-1 whitespace-nowrap">
                    {t.stat}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 bg-primary dark:bg-gradient-to-br dark:from-[#2D1B69] dark:to-[#1A0F40] relative overflow-hidden"
        data-ocid="home.cta_section"
        aria-label="Call to action"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={ctaRef} className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55 }}
            >
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 font-semibold">
                Free Strategy Session
              </Badge>
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-5 leading-tight">
                Ready to build your
                <br />
                digital fortress?
              </h2>
              <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join 250+ healthcare organizations already accelerating growth
                with YodhaMedia's Digital Growth Systems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-10 py-3 h-auto accent-glow"
                  asChild
                  data-ocid="home.bottom_cta_button"
                >
                  <Link to="/services">Schedule Free Audit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-3 h-auto"
                  asChild
                  data-ocid="home.cta_learn_more_button"
                >
                  <Link to="/about">Learn Our Process</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
