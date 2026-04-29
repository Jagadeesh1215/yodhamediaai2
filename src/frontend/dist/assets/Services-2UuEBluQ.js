import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, B as Button, L as Link } from "./index-CjV3SMWk.js";
import { B as Badge, A as ArrowRight } from "./badge-DmjlMi1U.js";
import { C as CircleCheck } from "./circle-check-DHCTZpn1.js";
import { Z as Zap, T as TrendingUp } from "./zap-BSeqGQDO.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
function ServiceCard({
  icon: Icon,
  title,
  tagline,
  description,
  benefits,
  badge,
  index = 0,
  onGetStarted
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: {
        delay: index * 0.1,
        duration: 0.55,
        ease: "easeOut"
      },
      whileHover: {
        y: -6,
        scale: 1.025,
        transition: { duration: 0.25, ease: "easeOut" }
      },
      className: "group relative bg-card rounded-2xl p-8 flex flex-col card-border-accent overflow-hidden cursor-default",
      "data-ocid": `services.card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            style: {
              background: "radial-gradient(ellipse at 60% 0%, oklch(0.77 0.192 56 / 0.08) 0%, transparent 70%)",
              boxShadow: "0 0 0 1.5px oklch(0.77 0.192 56 / 0.35), 0 8px 40px oklch(0.77 0.192 56 / 0.12)"
            }
          }
        ),
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 right-5 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-xs font-semibold tracking-wide", children: badge }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-5 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "w-13 h-13 min-w-[52px] min-h-[52px] rounded-xl flex items-center justify-center",
              style: {
                background: "oklch(var(--primary) / 0.1)"
              },
              whileHover: { rotate: [0, -6, 6, 0], transition: { duration: 0.4 } },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground leading-tight", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-semibold mt-0.5", children: tagline })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6 relative z-10", children: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-8 flex-1 relative z-10", children: benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-2.5 text-sm text-foreground/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheck,
                {
                  className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: benefit })
            ]
          },
          benefit
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: onGetStarted,
            size: "sm",
            className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-wide transition-smooth group-hover:shadow-lg",
            "data-ocid": `services.get_started_button.${index + 1}`,
            children: "Get Started"
          }
        ) })
      ]
    }
  );
}
const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Amplify your brand across every channel",
    description: "We engineer data-driven social strategies that build authority, grow engaged audiences, and convert followers into loyal patients and clients. Every post serves a purpose.",
    benefits: [
      "Platform-specific content calendars (LinkedIn, Instagram, Facebook)",
      "Healthcare-compliant creative production & copywriting",
      "Community management & patient engagement protocols",
      "Paid social campaigns with precision audience targeting"
    ],
    badge: "High Impact"
  },
  {
    icon: ShieldCheck,
    title: "Online Reputation Management",
    tagline: "Protect your most valuable asset",
    description: "In healthcare and enterprise, trust is everything. Our ORM system monitors, responds to, and strategically builds your online reputation across every major platform—from Google to Healthgrades.",
    benefits: [
      "24/7 review monitoring across 50+ platforms",
      "HIPAA-compliant response protocols & templates",
      "Negative content suppression strategies",
      "Physician & executive profile optimization"
    ],
    badge: "Most Popular"
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    tagline: "Convert visitors into patients",
    description: "Every YodhaMedia website is engineered for maximum conversion, built on ADA-compliant architecture, and optimized for Google's Core Web Vitals—a digital fortress that works 24/7.",
    benefits: [
      "HIPAA-aware infrastructure & secure patient forms",
      "ADA/WCAG 2.1 AA accessibility compliance",
      "Core Web Vitals & page speed optimization",
      "A/B tested conversion flows & patient journeys"
    ],
    badge: null
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Marketing",
    tagline: "Precision patient & client acquisition",
    description: "We engineer integrated Digital Growth Systems that compound over time—orchestrating SEO, paid media, content distribution, and analytics into one unstoppable growth engine.",
    benefits: [
      "Full-stack digital audit & strategic roadmap",
      "Integrated SEO + content + paid media strategy",
      "Content Distribution across high-authority channels",
      "Monthly growth sprints with executive reporting"
    ],
    badge: "Flagship"
  }
];
const stats = [
  { value: "150%", label: "Average ROI Increase" },
  { value: "50+", label: "Healthcare Clients Served" },
  { value: "10+", label: "Years of Industry Experience" },
  { value: "98%", label: "Client Retention Rate" }
];
function handleGetStarted() {
  const el = document.getElementById("services-cta");
  el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
}
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-28 bg-background relative overflow-hidden",
        "data-ocid": "services.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[400px] rounded-full blur-3xl",
                    style: { background: "oklch(0.77 0.192 56 / 0.07)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-3xl",
                    style: { background: "oklch(0.3 0.0898 259 / 0.07)" }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.45 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-accent/10 text-accent border-accent/30 font-semibold tracking-wide", children: "Our Services" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 22 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.1 },
                className: "font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.08] tracking-tight",
                children: [
                  "Comprehensive",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-primary", children: "Digital Growth" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                  " Systems That Dominate"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 22 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.2 },
                className: "text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed",
                children: "Each service is a precision instrument. Together, they form an integrated Digital Growth System—building digital fortresses for hospitals, doctors, and modern enterprises."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.3 },
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto",
                children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-card rounded-xl p-4 card-border-accent text-center",
                    "data-ocid": `services.stat.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-accent mb-1", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-tight", children: stat.label })
                    ]
                  },
                  stat.label
                ))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-alt py-24", "data-ocid": "services.cards_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-accent", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-sm font-semibold tracking-widest uppercase", children: "What We Deliver" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-4", children: "Four pillars of market dominance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-base leading-relaxed", children: "From Medical Marketing to Online Reputation Management, our specialized services integrate into a unified Content Distribution and growth engine." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto", children: services.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ServiceCard,
        {
          icon: service.icon,
          title: service.title,
          tagline: service.tagline,
          description: service.description,
          benefits: service.benefits,
          badge: service.badge,
          index: i,
          onGetStarted: handleGetStarted
        },
        service.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "services-cta",
        className: "py-24 bg-background relative overflow-hidden",
        "data-ocid": "services.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: {
                    background: "radial-gradient(ellipse at 50% 100%, oklch(0.77 0.192 56 / 0.07) 0%, transparent 65%)"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55, ease: "easeOut" },
              className: "max-w-3xl mx-auto bg-card rounded-3xl p-10 sm:p-14 text-center card-border-accent relative overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 rounded-3xl pointer-events-none",
                    style: {
                      background: "radial-gradient(ellipse at 50% -20%, oklch(0.77 0.192 56 / 0.1) 0%, transparent 60%)"
                    },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-accent/15 text-accent border-accent/30 font-semibold", children: "Free Strategy Session" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl text-foreground mb-5 leading-tight", children: [
                    "Ready to Dominate",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-primary", children: "Your Market?" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed", children: "Book a free 30-minute Digital Growth Audit. We'll map your current digital presence and identify the highest-leverage opportunities for Medical Marketing, ORM, and Content Distribution." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        className: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-10 accent-glow transition-smooth",
                        "data-ocid": "services.book_strategy_call_button",
                        asChild: true,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", children: [
                          "Book a Free Strategy Call",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5", "aria-hidden": "true" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "border-border text-foreground hover:bg-muted/60 font-semibold text-base px-8 transition-smooth",
                        "data-ocid": "services.view_case_studies_button",
                        asChild: true,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", children: "View Case Studies" })
                      }
                    )
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  ServicesPage as default
};
