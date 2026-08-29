import { motion } from "motion/react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LOGIN_URL = "https://app.kloyya.com/login";

/* -------------------------------- integrations ----------------------------- */

const LOGOS: Record<string, string> = {
  slack: "/integrations/slack.svg",
  odoo: "/integrations/Odoo.svg",
  outlook: "/integrations/outlook.svg",
  salesforce: "/integrations/salesforce.svg",
  linkedin: "/integrations/linkedin.svg",
  github: "/integrations/github.svg",
  gmail: "/integrations/gmail.svg",
  googledrive: "/integrations/Google_Drive.svg",
  instagram: "/integrations/Instagram.svg",
  facebook: "/integrations/Facebook.svg",
  excel: "/integrations/excel.svg",
  whatsapp: "/integrations/WhatsApp.svg",
  notion: "/integrations/Notion.svg",
  stripe: "/integrations/stripe.svg",
  team: "/integrations/team.svg",
  hubspot: "/integrations/hubspot.svg",
  googlecalendar: "/integrations/google_calendar.svg",
  googlesheets: "/integrations/google_sheets.svg",
  pipedrive: "/integrations/pipedrive.svg",
  zohocrm: "/integrations/zoho_crm.svg",
  clickup: "/integrations/clickup.svg",
  meta: "/integrations/meta.svg",
  youtube: "/integrations/youtube.svg",
  mailchimp: "/integrations/mailchimp.svg",
  supabase: "/integrations/supabase.svg",
  googletask: "/integrations/google_task.svg",
  linear: "/integrations/linear.svg",
  shopify: "/integrations/shopify.svg",
};

/* ---------------------------------- bits --------------------------------- */

function AppIcon({
  slug,
  label,
  badge,
  className = "",
}: {
  slug: string;
  label: string;
  badge?: number | undefined;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
        <img
          src={LOGOS[slug]}
          alt={label}
          loading="lazy"
          className="h-7 w-7 object-contain"
        />
      </div>

      {badge ? (
        <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-[11px] font-semibold text-destructive-foreground">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

function NotifCard({
  app,
  slug,
  title,
  body,
  className = "",
  delay = 0,
}: {
  app: string;
  slug: string;
  title: string;
  body: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`w-[300px] rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
          <img
            src={LOGOS[slug]}
            alt={app}
            className="h-5 w-5 object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] uppercase tracking-[0.12em] text-cream/60">
              {app}
            </span>
            <span className="text-[11px] text-cream/40">now</span>
          </div>

          <p className="truncate text-sm font-medium text-cream">{title}</p>
          <p className="truncate text-xs text-cream/60">{body}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------- nav ---------------------------------- */

const NAV = [
  { label: "Product Core", href: "#product" },
  { label: "How it works", href: "#how" },
  { label: "Build ledger", href: "#ledger" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security & FAQ", href: "#faq" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-ink/80 px-4 py-2.5 text-cream backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/kloyya-logo.png"
            alt="Kloyya"
            className="h-6 w-6 object-contain"
          />
          <span className="display text-lg tracking-tight">kloyya</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LOGIN_URL}
            className="hidden rounded-full px-3 py-1.5 text-sm text-cream/80 transition-colors hover:text-cream sm:block"
          >
            Login
          </a>

          <a
            href={LOGIN_URL}
            className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            Enter Kloyya
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 md:hidden"
          >
            <span className="text-xs">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-ink/95 p-4 text-cream backdrop-blur-xl md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-cream/80"
            >
              {n.label}
            </a>
          ))}

          <a
            href={LOGIN_URL}
            className="block py-2 text-sm text-cream/80"
          >
            Login
          </a>
        </div>
      ) : null}
    </header>
  );
}

/* ---------------------------------- hero ---------------------------------- */

const DOCK = [
  { slug: "gmail", label: "Gmail", badge: 6 },
  { slug: "slack", label: "Slack", badge: 4 },
  { slug: "whatsapp", label: "WhatsApp", badge: 6 },
  { slug: "notion", label: "Notion", badge: 10 },
  { slug: "salesforce", label: "Salesforce" },
  { slug: "linkedin", label: "LinkedIn" },
  { slug: "googledrive", label: "Google Drive" },
];

function Hero() {
  return (
    <section
      id="top"
      className="surface-dark relative overflow-hidden pt-32 pb-24"
    >
      <div className="hex-grid absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-cream/70">
              <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                In active build
              </span>
              AI Chief of Staff
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display mt-7 text-[3.2rem] leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
              One brain,
              <br />
              every <span className="italic text-brand-soft">decision</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70">
              Kloyya reads across your inbox, chats, tasks, and CRM, connects
              the threads, and hands you the decision — not another
              notification.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={LOGIN_URL}
                className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                Enter Kloyya
              </a>

              <a
                href="#how"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-white/10"
              >
                See how it works
              </a>

              <span className="text-xs text-cream/45">
                Secure Waitlist Priority
              </span>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[420px]">
          <NotifCard
            app="Slack · #ops"
            slug="slack"
            title="Renewal at risk — Sarah Chen's account"
            body="Contract lapses in 6 days. Draft reply ready."
            className="absolute left-0 top-2 float-slow"
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3 rounded-[28px] border border-white/10 bg-white/8 p-4 backdrop-blur-xl"
          >
            {DOCK.map((d, i) => (
              <motion.div
                key={d.slug}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <AppIcon
                  slug={d.slug}
                  label={d.label}
                  badge={d.badge}
                />
              </motion.div>
            ))}
          </motion.div>

          <NotifCard
            app="Gmail"
            slug="gmail"
            title="Sarah Chen"
            body="Re: renewal terms — can we lock this in?"
            className="absolute bottom-4 right-0 float-slow"
            delay={0.5}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* -------------------------------- marquee -------------------------------- */

const TOOLS = [
  { slug: "gmail", label: "Gmail" },
  { slug: "slack", label: "Slack" },
  { slug: "whatsapp", label: "WhatsApp" },
  { slug: "linkedin", label: "LinkedIn" },
  { slug: "notion", label: "Notion" },
  { slug: "salesforce", label: "Salesforce" },
  { slug: "googledrive", label: "Google Drive" },
  { slug: "outlook", label: "Outlook" },
  { slug: "github", label: "GitHub" },
  { slug: "odoo", label: "Odoo" },
  { slug: "excel", label: "Excel" },
  { slug: "instagram", label: "Instagram" },
  { slug: "facebook", label: "Facebook" },
];

function Integrations() {
  return (
    <section id="product" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Unlimited capability
          </p>

          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
            Anything scattered across your tools, Kloyya brings to one place.
          </h2>

          <p className="mt-5 max-w-xl text-muted-foreground">
            Unlike agents that need integrations built one by one, Kloyya
            reads your accounts directly — the way you already do.
          </p>
        </Reveal>
      </div>

      {/* Infinite integrations marquee */}
      <div className="relative mt-12 w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-28" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-28" />

        {/* Infinite track */}
        <div className="marquee-track flex w-max">
          {/* First set */}
          <div className="flex shrink-0 gap-4 pr-4">
            <IntegrationSet />
          </div>

          {/* Duplicate set for seamless infinite loop */}
          <div
            className="flex shrink-0 gap-4 pr-4"
            aria-hidden="true"
          >
            <IntegrationSet />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- steps --------------------------------- */

const STEPS = [
  {
    n: "01",
    kicker: "Read",
    title: "Reads everything, quietly",
    body: "Kloyya signs in and works across your inbox, chats, docs, and dashboards — no new tab to babysit.",
  },
  {
    n: "02",
    kicker: "Link",
    title: "Connects the threads",
    body: "It links a Slack thread to the Jira ticket to the email that's actually blocking it, so you see the whole story.",
  },
  {
    n: "03",
    kicker: "Decide",
    title: "Hands you the decision",
    body: "Not a summary of everything — the one thing that needs you today, with the context already attached.",
  },
];

function Steps() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="display max-w-2xl text-4xl sm:text-5xl">
            Watch one decision get made.
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Connect your accounts and every signal converges on one agent —
            this is what it does before it hands anything back to you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <article className="card-soft h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="display text-2xl text-brand">{s.n}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {s.kicker}
                  </span>
                </div>

                <h3 className="display mt-6 text-2xl">{s.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="surface-dark relative mt-8 overflow-hidden rounded-[28px] p-8">
            <div className="hex-grid absolute inset-0 opacity-60" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cream/50">
                  Inside the agent
                </p>

                <p className="display mt-4 text-3xl text-cream">
                  run 8f2c · 3.6s wall clock · 6 sources cited
                </p>

                <div className="mt-6 space-y-2 text-sm text-cream/70">
                  {[
                    ["0.4s", "Read 6 prior threads with Sarah Chen"],
                    ["1.4s", "Deal 4471 · closes in 6 days · owner unassigned"],
                    ["2.3s", "Account plan names Sarah sole decision-maker"],
                    ["3.6s", "Drafted the reply in your voice — held for approval"],
                  ].map(([t, l]) => (
                    <div key={t} className="flex gap-4">
                      <span className="w-10 shrink-0 text-cream/40">
                        {t}
                      </span>
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-cream">
                    Sarah Chen's renewal
                  </p>

                  <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
                    Needs you
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Contract lapses in 6 days and the auto-renew clause needs
                  five days' notice. Reply drafted in your voice.
                </p>

                <div className="mt-6 flex gap-2">
                  <span className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink">
                    Approve
                  </span>

                  <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-cream">
                    Edit
                  </span>
                </div>

                <p className="mt-4 text-xs text-cream/45">
                  Nothing sends until you approve it.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- memory --------------------------------- */

const MEMORY = [
  {
    n: "1",
    title: "Cross-platform ingestion",
    body: "Maps deep webhooks across your communications, CRMs, documentation, and task hubs into one stream.",
    foot: "No more application hopping, no more context lost between tabs.",
  },
  {
    n: "2",
    title: "Cognitive graph mapping",
    body: "Builds real-time relational vectors between tasks, people, blockers, and timelines.",
    foot: "Non-obvious operational bottlenecks surface on their own.",
  },
  {
    n: "3",
    title: "Autonomous briefing synthesis",
    body: "Compiles executive summaries, action items, and decision frameworks continuously.",
    foot: "Your context is prepared before the meeting, not after it.",
  },
];

function Memory() {
  return (
    <section className="border-y border-border bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Memory that knows the work
          </p>

          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            It remembers what you were already working on.
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Kloyya turns your browsing and messaging history into memory, so
            you never repeat context. Nothing here is shared across accounts
            — it stays scoped to you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {MEMORY.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}>
              <article className="card-soft h-full p-7">
                <span className="display text-3xl text-brand">{m.n}</span>

                <h3 className="mt-5 text-lg font-medium">{m.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>

                <p className="mt-5 border-t border-border pt-4 text-sm text-foreground/70">
                  {m.foot}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- team ---------------------------------- */

const TEAM = [
  {
    name: "Whelman kunda",
    role: "Co-Founder & CEO",
    image: "/team/whelman.png",
    bio: "Building Kloyya's vision, strategy, product direction, and growth.",
    linkedin: "",
    github: "",
    featured: true,
  },
   {
    name: "Christopher Dikesa Ahundu",
    role: "Co-Founder & CTO",
    image: "/team/chris.png",
    bio: "Leading Kloyya's technology, architecture, and engineering direction.",
    linkedin: "",
    github: "",
    featured: true,
  },
  {
    name: "Ram Kumar",
    role: "Frontend & Payment Tool Management",
    image: "/team/ram-kumar.png",
    bio: "Crafting the frontend experience and managing payment tooling.",
    linkedin: "",
    github: "",
    featured: false,
  },
];

function TeamPhoto({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
      {!failed ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : null}

      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink via-ink/95 to-brand/50">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl font-medium text-cream/70 backdrop-blur-xl">
            {initials}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            The people behind Kloyya
          </p>

          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
            Built by people who care about the work behind the work.
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            A focused team building the intelligence layer behind modern
            work — from the technology underneath it to the experience you
            actually use.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-border" />

              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Founding team
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {TEAM.filter((member) => member.featured).map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <TeamPhoto image={member.image} name={member.name} />

                  <div className="p-6 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand">
                      {member.role}
                    </p>

                    <h3 className="display mt-2 text-2xl sm:text-3xl">
                      {member.name}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-muted"
                        >
                          LinkedIn
                        </a>
                      ) : (
                        <span className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground/40">
                          LinkedIn
                        </span>
                      )}

                      {member.github ? (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-muted"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground/40">
                          GitHub
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-border" />

              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                The team
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.filter((member) => !member.featured).map((member, index) => (
              <Reveal key={member.name} delay={index * 0.06}>
                <article className="group overflow-hidden rounded-[24px] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1">
                  <TeamPhoto image={member.image} name={member.name} />

                  <div className="p-5">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-brand">
                      {member.role}
                    </p>

                    <h3 className="mt-2 text-xl font-medium">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:bg-muted"
                        >
                          LinkedIn
                        </a>
                      ) : (
                        <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground/40">
                          LinkedIn
                        </span>
                      )}

                      {member.github ? (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:bg-muted"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground/40">
                          GitHub
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- ledger --------------------------------- */

const METRICS = [
  {
    tag: "Instrumented",
    title: "Surfaced before deadline",
    body: "Share of time-sensitive threads flagged to you before the deadline they carry.",
  },
  {
    tag: "Eval in progress",
    title: "Thread linkage precision",
    body: "Cross-app threads correctly joined, against every join the agent proposed.",
  },
  {
    tag: "Instrumented",
    title: "Time to first briefing",
    body: "Minutes from connecting the first account to a ranked briefing you can act on.",
  },
];

const LEDGER = [
  {
    tag: "Completed",
    title: "Secure webhook pipeline",
    body: "OAuth2 validation matrices for Slack and Jira ingestion.",
  },
  {
    tag: "Active sprint",
    title: "Executive decision engine",
    body: "Tuning reasoning loops against sparse operational context.",
  },
  {
    tag: "In QA isolation",
    title: "Multi-vector context parse",
    body: "Cross-app thread linkage via semantic token alignment.",
  },
];

function Ledger() {
  return (
    <section id="ledger" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Built to be measured
          </p>

          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Measured before it's marketed.
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            We are not going to publish a score we cannot show you the working
            for. Here is exactly what gets measured, and exactly where the
            build is today.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.07}>
              <div className="card-soft h-full p-6">
                <span className="text-[11px] uppercase tracking-[0.14em] text-brand">
                  {m.tag}
                </span>

                <h3 className="mt-4 text-lg font-medium">{m.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-[28px] border border-border bg-card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="display text-2xl">Development ledger</h3>

              <span className="text-xs text-muted-foreground">
                updated as the build moves
              </span>
            </div>

            <div className="mt-6 divide-y divide-border">
              {LEDGER.map((l) => (
                <div key={l.title} className="flex flex-wrap gap-4 py-4">
                  <span className="w-32 shrink-0 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {l.tag}
                  </span>

                  <div>
                    <p className="font-medium">{l.title}</p>

                    <p className="text-sm text-muted-foreground">
                      {l.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              When the eval set is big enough to mean something, the numbers
              and the methodology publish together.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
/* -------------------------------- pricing -------------------------------- */

const PRICING_PLANS = [
  {
    name: "Starter",
    description: "For individuals and small businesses getting started.",
    monthly: 99,
    yearly: 948,
    users: "Up to 5 users",
    workspace: "1 workspace",
    features: [
      "Basic workflows",
      "AI recommendations",
      "1,000 AI actions / month",
      "Email support",
    ],
  },
  {
    name: "Team",
    description: "For teams that want Kloyya coordinating their work.",
    monthly: 299,
    yearly: 2868,
    users: "Up to 25 users",
    workspace: "Up to 3 workspaces",
    popular: true,
    features: [
      "Advanced workflows",
      "AI agents",
      "5,000 AI actions / month",
      "Priority support",
    ],
  },
  {
    name: "Business",
    description: "For growing companies with multiple teams or locations.",
    monthly: 799,
    yearly: 7668,
    users: "Up to 50 users",
    workspace: "Up to 10 locations",
    features: [
      "Cross-team workflows",
      "Operational intelligence",
      "15,000 AI actions / month",
      "Priority onboarding & support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex operations.",
    monthly: null,
    yearly: null,
    users: "Unlimited users",
    workspace: "Unlimited locations",
    features: [
      "Advanced AI agents",
      "Custom integrations",
      "Custom AI actions",
      "Dedicated support & SLA",
    ],
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Pricing
              </p>

              <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
                One brain.
                <br />
                One clear <span className="italic text-brand">decision</span>.
              </h2>

              <p className="mt-5 max-w-xl text-muted-foreground">
                Start small. Give Kloyya more responsibility as your team
                grows.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-full border border-border bg-white px-2 py-2 shadow-[var(--shadow-soft)] md:self-auto">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  !yearly
                    ? "bg-ink text-cream"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  yearly
                    ? "bg-ink text-cream"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>

              <span className="mr-2 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-medium text-brand">
                Save 20%
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {PRICING_PLANS.map((plan, index) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <Reveal key={plan.name} delay={index * 0.06}>
                <article
                  className={`relative flex h-full flex-col rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "border-brand bg-ink text-cream shadow-[0_24px_70px_-30px_rgba(50,100,255,0.45)]"
                      : "border-border bg-card text-foreground shadow-[var(--shadow-soft)]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Most popular
                    </div>
                  )}

                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.16em] ${
                        plan.popular
                          ? "text-cream/50"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.name}
                    </p>

                    <p
                      className={`mt-4 min-h-[48px] text-sm leading-relaxed ${
                        plan.popular
                          ? "text-cream/65"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="mt-7">
                    {price === null ? (
                      <div className="display text-4xl">Custom</div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="display text-5xl">
                          ${price.toLocaleString()}
                        </span>
                        <span
                          className={`mb-1 text-sm ${
                            plan.popular
                              ? "text-cream/50"
                              : "text-muted-foreground"
                          }`}
                        >
                          /{yearly ? "year" : "month"}
                        </span>
                      </div>
                    )}

                    {yearly && price !== null && (
                      <p
                        className={`mt-2 text-xs ${
                          plan.popular
                            ? "text-brand-soft"
                            : "text-brand"
                        }`}
                      >
                        Billed yearly
                      </p>
                    )}
                  </div>

                  <div
                    className={`my-7 h-px ${
                      plan.popular ? "bg-white/10" : "bg-border"
                    }`}
                  />

                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-brand">✓</span>
                      <span>{plan.users}</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-brand">✓</span>
                      <span>{plan.workspace}</span>
                    </li>

                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="text-brand">✓</span>
                        <span
                          className={
                            plan.popular ? "text-cream/80" : ""
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <a
                      href={LOGIN_URL}
                      className={`block rounded-full px-5 py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                        plan.popular
                          ? "bg-cream text-ink"
                          : "bg-ink text-cream"
                      }`}
                    >
                      {plan.name === "Enterprise"
                        ? "Talk to sales"
                        : "Start with Kloyya"}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* ----------------------------------- faq ---------------------------------- */

const FAQ = [
  {
    q: "How is Kloyya different from a unified inbox?",
    a: "A unified inbox consolidates and tidies — you still do the reading and the deciding. Kloyya reads across everything, connects the threads, and prepares the decision. Consolidation is the floor, not the product.",
  },
  {
    q: "Who is Kloyya built for?",
    a: "Founders, VPs, and cross-border operators running five or more active channels — Slack, email, WhatsApp, Notion, Jira, CRM — who lose hours to context switching every day.",
  },
  {
    q: "Which tools does Kloyya connect to?",
    a: "Gmail, Slack, WhatsApp, Notion, Jira, Linear, Salesforce, HubSpot, and more — through scoped OAuth you control and can revoke at any time. More integrations ship regularly.",
  },
  {
    q: "Will Kloyya act on things without asking me?",
    a: "No. Kloyya surfaces the decision and drafts the response — you approve, edit, or dismiss it. Nothing sends or executes on your behalf without your sign-off.",
  },
  {
    q: "Why no waitlist counter?",
    a: "Because a number invented to create urgency tells you nothing true. Instead we publish the real development ledger on this page — what's shipped, what's in QA, what's being built right now — alongside the metrics we hold ourselves to.",
  },
  {
    q: "How do you handle my data?",
    a: "Integrations are read through scoped OAuth you control and can revoke at any time. We never sell data, and access is confined to service-role infrastructure. A full security overview ships before public beta.",
  },
];

function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-secondary py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Security & questions
          </p>

          <h2 className="display mt-4 text-4xl sm:text-5xl">
            The parts worth spelling out.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`i${i}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>

                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- close --------------------------------- */

function Closing() {
  return (
    <section className="surface-dark relative overflow-hidden py-28">
      <div className="hex-grid absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="display text-4xl text-cream sm:text-6xl">
            Built for the work you actually have to do.
          </h2>

          <p className="mt-5 text-cream/70">
            Join the waitlist and get a private beta key when your cohort
            opens.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={LOGIN_URL}
              className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Enter Kloyya
            </a>

            <a
              href={LOGIN_URL}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-white/10"
            >
              Login
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-cream/40">
            Secure Waitlist Priority
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- footer --------------------------------- */

function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/kloyya-logo.png"
              alt="Kloyya"
              className="h-6 w-6 object-contain"
            />

            <span className="display text-lg">kloyya</span>
          </div>

          <p className="mt-4 max-w-xs text-sm text-cream/60">
            The intelligence layer behind executive decisions. An autonomous
            AI Chief of Staff, in active build.
          </p>
        </div>

        {[
          {
            t: "Product",
            l: [
              ["Product Core", "#product"],
              ["How it works", "#how"],
              ["Team", "#team"],
              ["Login", LOGIN_URL],
            ],
          },
          {
            t: "Company",
            l: [
              ["Build ledger", "#ledger"],
              ["FAQ", "#faq"],
            ],
          },
          {
            t: "Legal",
            l: [
              ["Privacy", "#"],
              ["Terms", "#"],
              ["Trust & Security", "#faq"],
            ],
          },
        ].map((col) => (
          <div key={col.t}>
            <p className="text-xs uppercase tracking-[0.16em] text-cream/40">
              {col.t}
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              {col.l.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 pt-6 text-xs text-cream/45">
        <span>
          © 2026 Kloyya. Built for reliability, not for a launch graph.
        </span>

        <span>
          Stop managing notifications. Start executing strategy.
        </span>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main>
      <Nav />
      <Hero />
      <Integrations />
      <Steps />
      <Memory />
      <Team />
      <Ledger />
      <Faq />
      <Closing />
      <Footer />
    </main>
  );
}
