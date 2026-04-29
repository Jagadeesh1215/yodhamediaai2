import { j as jsxRuntimeExports, b as cn, a as reactExports, m as motion, L as Link } from "./index-CjV3SMWk.js";
import { B as Badge, A as ArrowRight } from "./badge-DmjlMi1U.js";
import { S as Search } from "./search-DXCu7PhE.js";
import { C as Calendar, a as Clock } from "./clock-bx6nb-Vj.js";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const CATEGORIES = [
  "All",
  "Healthcare Marketing",
  "Business Growth",
  "Web Design",
  "ORM"
];
const CATEGORY_GRADIENTS = {
  "Healthcare Marketing": "from-[#2D1B69] to-[#4a2f8f]",
  "Business Growth": "from-[#1a4a2e] to-[#2d7a4f]",
  "Web Design": "from-[#1a2e4a] to-[#2d5f8f]",
  ORM: "from-[#4a1a2e] to-[#8f2d5f]",
  "Digital Strategy": "from-[#4a3a1a] to-[#8f702d]",
  "SEO Trends": "from-[#2d1b69] to-[#5c3ab0]"
};
const POSTS = [
  {
    slug: "healthcare-seo-2026-guide",
    category: "Healthcare Marketing",
    title: "The Definitive Healthcare SEO Guide for 2026",
    excerpt: "Google's E-E-A-T update redefined what it means to rank in healthcare. This guide covers the exact technical and content frameworks we use to achieve Page 1 dominance for medical clients across 50+ specialties.",
    date: "Apr 15, 2026",
    readTime: "12 min read",
    author: "Aryan Mehta"
  },
  {
    slug: "medical-marketing-roi",
    category: "Healthcare Marketing",
    title: "How to Measure Real ROI from Medical Marketing Campaigns",
    excerpt: "Attribution in healthcare marketing is notoriously complex. Here's the multi-touch model YodhaMedia uses to connect digital spend directly to patient appointments and long-term lifetime value.",
    date: "Apr 8, 2026",
    readTime: "8 min read",
    author: "Priya Singh"
  },
  {
    slug: "orm-healthcare-case-study",
    category: "ORM",
    title: "How We Reversed 200+ Negative Reviews for a Hospital Group",
    excerpt: "A 90-day Online Reputation Management campaign that shifted a hospital group's Google rating from 2.8 to 4.6 — with full HIPAA compliance and a systemised review response protocol.",
    date: "Mar 28, 2026",
    readTime: "10 min read",
    author: "Rohan Kapoor"
  },
  {
    slug: "content-distribution-strategy",
    category: "Business Growth",
    title: "Content Distribution Is Not Content Marketing: A Critical Distinction",
    excerpt: "Most agencies confuse creation with distribution. We break down the six-channel Content Distribution framework that drives compounding organic reach for healthcare brands and enterprises.",
    date: "Mar 19, 2026",
    readTime: "7 min read",
    author: "Aryan Mehta"
  },
  {
    slug: "digital-growth-systems-framework",
    category: "Business Growth",
    title: "The YodhaMedia Digital Growth Systems Framework Explained",
    excerpt: "What exactly is a Digital Growth System, and why does it outperform standalone campaigns? Our full methodology, broken down into the four interconnected phases that drive sustainable revenue growth.",
    date: "Mar 5, 2026",
    readTime: "15 min read",
    author: "Priya Singh"
  },
  {
    slug: "hipaa-google-ads",
    category: "Healthcare Marketing",
    title: "Running Google Ads in Healthcare Without Violating HIPAA",
    excerpt: "The complete compliance checklist for healthcare paid media — from pixel configurations to audience exclusions and conversion tracking that maximises results without regulatory risk.",
    date: "Feb 22, 2026",
    readTime: "9 min read",
    author: "Rohan Kapoor"
  },
  {
    slug: "web-design-conversion-healthcare",
    category: "Web Design",
    title: "High-Conversion Website Design Principles for Healthcare Providers",
    excerpt: "A hospital website is a patient acquisition engine, not a brochure. We reveal the UX patterns, trust signals, and conversion architecture that reduce drop-off and drive booking completions.",
    date: "Feb 10, 2026",
    readTime: "11 min read",
    author: "Aryan Mehta"
  },
  {
    slug: "orm-enterprise-strategy",
    category: "ORM",
    title: "Enterprise Online Reputation Management: A 360° Strategy",
    excerpt: "Large enterprises face reputation threats at scale. This article covers the proactive ORM systems — monitoring stacks, crisis playbooks, and sentiment analytics — that protect and grow brand equity.",
    date: "Jan 30, 2026",
    readTime: "13 min read",
    author: "Priya Singh"
  }
];
function PostImagePlaceholder({ category }) {
  const gradient = CATEGORY_GRADIENTS[category] ?? "from-[#2D1B69] to-[#5c3ab0]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `w-full h-44 rounded-t-2xl bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden relative`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20 font-display font-bold text-5xl select-none", children: "YM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.12)_0%,transparent_60%)]" })
      ]
    }
  );
}
function BlogPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  reactExports.useEffect(() => {
    document.title = "YodhaMedia | Blog — Healthcare & Business Marketing Insights";
  }, []);
  const filtered = POSTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = search.trim().toLowerCase();
    const matchSearch = q === "" || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
  const [featured, ...rest] = filtered;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-24 overflow-hidden",
        "data-ocid": "blog.hero_section",
        style: {
          background: "linear-gradient(135deg, oklch(0.3 0.0898 259) 0%, oklch(0.18 0.07 259) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_60%_-20%,rgba(255,215,0,0.18)_0%,transparent_60%)] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30 font-semibold tracking-wide", children: "Insights & Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-5xl sm:text-6xl text-white mb-5 leading-tight", children: [
                  "The",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#FFD700" }, className: "transition-smooth", children: "YodhaMedia" }),
                  " ",
                  "Blog"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed", children: "Authoritative insights on Digital Growth Systems, Medical Marketing, Online Reputation Management, and Content Distribution — from practitioners who build them." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "max-w-md mx-auto relative",
                    "data-ocid": "blog.search_input",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          placeholder: "Search articles…",
                          value: search,
                          onChange: (e) => setSearch(e.target.value),
                          className: "pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-[#FFD700]/50 focus-visible:border-[#FFD700]/50 rounded-full"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border/40 py-3 sticky top-16 z-40",
        "data-ocid": "blog.filter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-smooth border ${activeCategory === cat ? "text-black font-semibold border-[#FFD700]/60 shadow-sm" : "bg-background text-muted-foreground hover:text-foreground border-border/40 hover:border-border"}`,
            style: activeCategory === cat ? { backgroundColor: "#FFD700" } : {},
            "data-ocid": `blog.filter.${cat.toLowerCase().replace(/ /g, "_")}`,
            children: cat
          },
          cat
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "blog.posts_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "text-center py-24",
          "data-ocid": "blog.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg", children: [
              'No articles found for "',
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: search || activeCategory }),
              '".'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "mt-4 text-sm underline underline-offset-4 text-primary",
                onClick: () => {
                  setSearch("");
                  setActiveCategory("All");
                },
                children: "Clear filters"
              }
            )
          ]
        }
      ),
      featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-12",
          "data-ocid": "blog.featured_post_link",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: { slug: featured.slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card rounded-2xl overflow-hidden card-border-accent hover:shadow-xl transition-smooth grid md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PostImagePlaceholder, { category: featured.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10 flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "bg-[#FFD700]/10 border-[#FFD700]/30",
                    style: { color: "#b38a00" },
                    children: featured.category
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20", children: "Featured" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 group-hover:text-primary transition-smooth leading-tight", children: featured.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6 line-clamp-3", children: featured.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                  " ",
                  featured.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                  " ",
                  featured.readTime
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
                  "By ",
                  featured.author
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-primary dark:text-[#FFD700] font-semibold ml-auto", children: [
                  "Read article ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: rest.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08, duration: 0.45 },
          whileHover: { scale: 1.02 },
          "data-ocid": `blog.post.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: { slug: post.slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card rounded-2xl overflow-hidden card-border-accent h-full flex flex-col hover:shadow-lg transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PostImagePlaceholder, { category: post.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 self-start bg-primary/10 text-primary border-primary/20 text-xs", children: post.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground mb-3 group-hover:text-primary transition-smooth leading-snug flex-1", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3", children: post.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-auto pt-3 border-t border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                  " ",
                  post.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  " ",
                  post.readTime
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto", children: [
                  "By ",
                  post.author
                ] })
              ] })
            ] })
          ] }) })
        },
        post.slug
      )) })
    ] }) })
  ] });
}
export {
  BlogPage as default
};
