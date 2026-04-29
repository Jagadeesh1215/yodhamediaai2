import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  badge?: string | null;
  index?: number;
  onGetStarted?: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  tagline,
  description,
  benefits,
  badge,
  index = 0,
  onGetStarted,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.55,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.025,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative bg-card rounded-2xl p-8 flex flex-col card-border-accent overflow-hidden cursor-default"
      data-ocid={`services.card.${index + 1}`}
    >
      {/* Accent glow overlay on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, oklch(0.77 0.192 56 / 0.08) 0%, transparent 70%)",
          boxShadow:
            "0 0 0 1.5px oklch(0.77 0.192 56 / 0.35), 0 8px 40px oklch(0.77 0.192 56 / 0.12)",
        }}
      />

      {/* Badge */}
      {badge && (
        <div className="absolute top-5 right-5 z-10">
          <Badge className="bg-accent/15 text-accent border-accent/30 text-xs font-semibold tracking-wide">
            {badge}
          </Badge>
        </div>
      )}

      {/* Icon + header */}
      <div className="flex items-start gap-4 mb-5 relative z-10">
        <motion.div
          className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-xl flex items-center justify-center"
          style={{
            background: "oklch(var(--primary) / 0.1)",
          }}
          whileHover={{ rotate: [0, -6, 6, 0], transition: { duration: 0.4 } }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-xl text-foreground leading-tight">
            {title}
          </h3>
          <p className="text-accent text-sm font-semibold mt-0.5">{tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
        {description}
      </p>

      {/* Benefits list */}
      <ul className="space-y-2.5 mb-8 flex-1 relative z-10">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2.5 text-sm text-foreground/80"
          >
            <CheckCircle2
              className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="relative z-10">
        <Button
          onClick={onGetStarted}
          size="sm"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-wide transition-smooth group-hover:shadow-lg"
          data-ocid={`services.get_started_button.${index + 1}`}
        >
          Get Started
        </Button>
      </div>
    </motion.article>
  );
}
