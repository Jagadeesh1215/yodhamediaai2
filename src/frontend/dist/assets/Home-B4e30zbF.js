import { c as createLucideIcon, r as resolveElements, a as reactExports, j as jsxRuntimeExports, m as motion, B as Button, L as Link, S as Shield } from "./index-CjV3SMWk.js";
import { B as Badge, A as ArrowRight } from "./badge-DmjlMi1U.js";
import { C as CircleCheck } from "./circle-check-DHCTZpn1.js";
import { T as TrendingUp, Z as Zap } from "./zap-BSeqGQDO.js";
import { S as Star, G as Globe } from "./star-BrYruYqM.js";
import { S as Search } from "./search-DXCu7PhE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
];
const UsersRound = createLucideIcon("users-round", __iconNode);
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
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
const stats = [
  { value: "250+", label: "Healthcare Clients", icon: UsersRound },
  { value: "98%", label: "Client Retention Rate", icon: TrendingUp },
  { value: "$50M+", label: "Revenue Generated", icon: ChartLine },
  { value: "10+", label: "Years of Expertise", icon: Shield },
  { value: "4.9★", label: "Average Client Rating", icon: Star }
];
const services = [
  {
    icon: Search,
    title: "Medical Marketing",
    badge: "Healthcare",
    desc: "Precision-targeted campaigns that connect healthcare providers with the right patients. End-to-end funnel strategy from awareness to appointment.",
    highlight: "Up to 180% increase in patient acquisition"
  },
  {
    icon: MessageSquare,
    title: "Online Reputation Management",
    badge: "ORM",
    desc: "Protect and elevate your brand's online presence with proactive ORM strategies built for healthcare compliance and enterprise standards.",
    highlight: "Trusted by 250+ medical brands"
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    badge: "Web",
    desc: "HIPAA-aware, conversion-optimized digital properties that reflect the professionalism of your practice and drive measurable results.",
    highlight: "3x faster conversions on average"
  },
  {
    icon: Zap,
    title: "Digital Growth Systems",
    badge: "Growth",
    desc: "End-to-end digital ecosystems engineered for sustainable, compounding growth across every channel — SEO, paid, social, and content.",
    highlight: "150% average ROI increase"
  }
];
const testimonials = [
  {
    name: "Dr. Ananya Sharma",
    role: "Chief of Medicine, Apollo Health",
    quote: "YodhaMedia transformed our digital presence. Patient acquisition increased 180% within 6 months. Their Medical Marketing strategy is unmatched.",
    rating: 5,
    stat: "+180% Patients"
  },
  {
    name: "Rohan Mehta",
    role: "CEO, MedCarePlus Group",
    quote: "Their Online Reputation Management work saved our brand during a critical period. The team operates with precision and genuine healthcare expertise.",
    rating: 5,
    stat: "5★ Brand Score"
  },
  {
    name: "Dr. Priya Verma",
    role: "Director, HealthBridge Clinics",
    quote: "The Content Distribution frameworks they built now drive 40% of our inbound inquiries. True Digital Growth Systems in action.",
    rating: 5,
    stat: "40% Inbound Growth"
  }
];
function StatCard({
  value,
  label,
  icon: Icon,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.08, duration: 0.45 },
      className: "flex flex-col items-center gap-2 px-6 py-5 bg-card rounded-2xl border border-border/40 min-w-[140px]",
      "data-ocid": `home.stat.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-accent" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-3xl text-foreground leading-tight", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground text-center leading-snug", children: label })
      ]
    }
  );
}
function ServiceCard({
  icon: Icon,
  title,
  badge,
  desc,
  highlight,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1, duration: 0.5 },
      whileHover: { y: -6, transition: { duration: 0.2 } },
      className: "group bg-card rounded-2xl p-7 card-border-accent flex flex-col cursor-default",
      "data-ocid": `home.service_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary dark:text-accent group-hover:text-accent-foreground transition-smooth" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-accent/10 text-accent border-accent/20 font-medium", children: badge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-5 flex-1", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/8 rounded-lg px-3 py-1.5 mb-5 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
          highlight
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services",
            className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-accent hover:gap-2.5 transition-smooth group-hover:text-accent",
            "data-ocid": `home.service_link.${index + 1}`,
            children: [
              "Explore Service ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ]
          }
        )
      ]
    }
  );
}
function HeroVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay: 0.4 },
      className: "relative mx-auto max-w-lg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl scale-125" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-border/40 bg-card shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-primary to-primary/80 dark:from-[#2D1B69] dark:to-[#1A0F40] p-8 pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-accent-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground font-display font-bold text-sm", children: "YodhaMedia" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/60 text-xs", children: "Digital Growth Dashboard" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5 font-medium border border-accent/30", children: "Live" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: [
              { label: "Patient Acquisition", val: 78, color: "bg-accent" },
              { label: "ORM Score", val: 94, color: "bg-green-400" },
              { label: "Content Reach", val: 62, color: "bg-blue-400" }
            ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-primary-foreground/70 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-primary-foreground", children: [
                  m.val,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-primary-foreground/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${m.val}%` },
                  transition: { duration: 1.2, delay: 0.8 },
                  className: `h-full ${m.color} rounded-full`
                }
              ) })
            ] }, m.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border/30 bg-card", children: [
            { v: "+180%", l: "ROI" },
            { v: "98%", l: "Retention" },
            { v: "250+", l: "Clients" }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-base", children: s.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: s.l })
          ] }, s.l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 1, duration: 0.5 },
            className: "absolute -left-8 top-16 bg-card border border-border/40 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 bg-green-500/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-green-500" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: "+150% ROI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Avg. increase" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 1.2, duration: 0.5 },
            className: "absolute -right-6 bottom-16 bg-card border border-accent/30 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-accent fill-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: "4.9 / 5.0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Client rating" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function HomePage() {
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = schemaJson;
    script.id = "yodha-schema";
    document.head.appendChild(script);
    return () => {
      var _a;
      (_a = document.getElementById("yodha-schema")) == null ? void 0 : _a.remove();
    };
  }, []);
  reactExports.useEffect(() => {
    document.title = "YodhaMedia | Digital Growth Systems for Healthcare & Enterprises";
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    const setOg = (prop, content) => {
      let el = document.querySelector(
        `meta[property="${prop}"]`
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
      "YodhaMedia builds digital fortresses for hospitals, doctors, and modern enterprises. Expert Medical Marketing, ORM, and Digital Growth Systems."
    );
    setMeta(
      "keywords",
      "Digital Growth Systems, Medical Marketing, Online Reputation Management, Content Distribution, Healthcare SEO"
    );
    setOg("og:title", "YodhaMedia | Digital Growth Systems");
    setOg(
      "og:description",
      "Building digital fortresses for hospitals, doctors, and modern enterprises."
    );
    setOg("og:type", "website");
    setOg("og:url", "https://yodhamedia.com");
    return () => {
      document.title = "YodhaMedia";
    };
  }, []);
  const ctaRef = reactExports.useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex items-center bg-background overflow-hidden",
        "data-ocid": "home.hero_section",
        "aria-label": "Hero — YodhaMedia Digital Growth Systems",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 dark:bg-accent/10 blur-3xl translate-x-1/3 translate-y-1/4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: -12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-accent/10 text-accent border-accent/30 hover:bg-accent/15 px-4 py-1.5 text-sm font-semibold tracking-wide", children: "🛡️ Trusted by 250+ Healthcare Brands" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.65, delay: 0.1 },
                  className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-foreground mb-6",
                  children: [
                    "Building digital",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-primary", children: "fortresses" }),
                    " for hospitals, doctors, and",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "modern enterprises." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.22 },
                  className: "text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed",
                  children: [
                    "YodhaMedia is a premium",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-semibold", children: "Digital Growth Systems" }),
                    " ",
                    "agency. We specialize in Medical Marketing, Online Reputation Management, and Content Distribution — engineered for compounding ROI."
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.32 },
                  className: "flex flex-wrap gap-3 mb-9",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        className: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 py-3 accent-glow h-auto",
                        asChild: true,
                        "data-ocid": "home.hero_cta_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Book Consultation" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "border-primary/30 dark:border-foreground/20 text-primary dark:text-foreground hover:bg-primary/5 dark:hover:bg-foreground/5 font-semibold text-base px-8 py-3 h-auto",
                        asChild: true,
                        "data-ocid": "home.hero_secondary_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
                          "Explore Solutions ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 w-4 h-4" })
                        ] })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.7, delay: 0.5 },
                  className: "flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
                  children: [
                    "HIPAA-Aware",
                    "ISO Certified",
                    "Google Partner",
                    "Forbes Mentioned"
                  ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-accent flex-shrink-0" }),
                    badge
                  ] }, badge))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVisual, {}) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 section-alt border-y border-border/30",
        "data-ocid": "home.stats_section",
        "aria-label": "Trust statistics",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-8",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground", children: "Proven results across the healthcare industry" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { ...stat, index: i }, stat.label)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 bg-background",
        "data-ocid": "home.services_section",
        "aria-labelledby": "services-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border-primary/20 dark:border-accent/20 font-semibold", children: "Our Capabilities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "services-heading",
                    className: "font-display font-bold text-4xl sm:text-5xl text-foreground mb-4",
                    children: [
                      "Precision-Engineered",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-primary", children: "Digital Systems" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed", children: "Every service is architected to deliver compounding returns for healthcare and enterprise clients." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
              "data-ocid": "home.services_list",
              children: services.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...svc, index: i }, svc.title))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "border-primary/30 dark:border-accent/30 text-primary dark:text-accent hover:bg-primary/5 dark:hover:bg-accent/5 font-semibold px-8",
              asChild: true,
              "data-ocid": "home.view_services_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", children: [
                "View All Services ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
              ] })
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "section-alt py-24 border-y border-border/30",
        "data-ocid": "home.testimonials_section",
        "aria-labelledby": "testimonials-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent/10 text-accent border-accent/20 font-semibold", children: "Client Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "testimonials-heading",
                    className: "font-display font-bold text-4xl sm:text-5xl text-foreground mb-4",
                    children: "Trusted by Healthcare Leaders"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Real outcomes from real organizations who chose to build with YodhaMedia." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.article,
            {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12, duration: 0.5 },
              className: "bg-card rounded-2xl p-7 border border-border/30 flex flex-col",
              "data-ocid": `home.testimonial.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: t.rating }, (_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "w-4 h-4 fill-accent text-accent"
                  },
                  `star-${t.name}-${j}`
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-foreground/80 text-sm leading-relaxed mb-6 flex-1", children: [
                  '"',
                  t.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-foreground text-sm truncate", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs truncate", children: t.role })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-lg px-2.5 py-1 whitespace-nowrap", children: t.stat })
                ] })
              ]
            },
            t.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 bg-primary dark:bg-gradient-to-br dark:from-[#2D1B69] dark:to-[#1A0F40] relative overflow-hidden",
        "data-ocid": "home.cta_section",
        "aria-label": "Call to action",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl translate-x-1/2 -translate-y-1/2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 translate-y-1/2" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: ctaRef, className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.96 },
              animate: ctaInView ? { opacity: 1, scale: 1 } : {},
              transition: { duration: 0.55 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-6 bg-accent/20 text-accent border-accent/30 font-semibold", children: "Free Strategy Session" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-5 leading-tight", children: [
                  "Ready to build your",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "digital fortress?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed", children: "Join 250+ healthcare organizations already accelerating growth with YodhaMedia's Digital Growth Systems." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      className: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-10 py-3 h-auto accent-glow",
                      asChild: true,
                      "data-ocid": "home.bottom_cta_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Schedule Free Audit" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-3 h-auto",
                      asChild: true,
                      "data-ocid": "home.cta_learn_more_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "Learn Our Process" })
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ]
      }
    )
  ] });
}
export {
  HomePage as default
};
