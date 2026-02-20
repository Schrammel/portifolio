"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
} from "~/components/ui/chart";
import { Button } from "~/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { type FocusArea, profileData, type Track } from "~/data/profile";
import {
  deriveOverviewMetrics,
  deriveSkillGroupEmphasis,
  deriveStackMap,
  deriveTimelineRoles,
} from "~/lib/profile-derived";

type TrackFilter = "all" | Track;

const focusOptions: FocusArea[] = ["Frontend", "Backend", "DevOps"];

const emphasisChartConfig = {
  emphasis: {
    label: "Emphasis index",
    theme: {
      light: "#2d8f73",
      dark: "#4cc6a2",
    },
  },
};

const profileLinks = [
  {
    label: "GitHub",
    value: profileData.identity.github,
    href: `https://github.com/${profileData.identity.github}`,
    external: true,
  },
  {
    label: "LinkedIn",
    value: profileData.identity.linkedIn,
    href: `https://linkedin.com/in/${profileData.identity.linkedIn}`,
    external: true,
  },
  {
    label: "Email",
    value: profileData.identity.email,
    href: `mailto:${profileData.identity.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: profileData.identity.phone,
    href: `tel:${profileData.identity.phone}`,
    external: false,
  },
] as const;

export function CareerDashboard() {
  const metrics = deriveOverviewMetrics(profileData);
  const roles = deriveTimelineRoles(profileData);
  const emphasisData = deriveSkillGroupEmphasis(profileData)
    .map((item) => ({
      group: item.group,
      emphasis: item.emphasis,
    }))
    .sort((a, b) => b.emphasis - a.emphasis);
  const groupedSkills = deriveSkillGroupEmphasis(profileData);
  const stackMap = deriveStackMap(profileData);

  const [trackFilter, setTrackFilter] = useState<TrackFilter>("all");
  const [focusFilters, setFocusFilters] = useState<FocusArea[]>(focusOptions);

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const trackMatch = trackFilter === "all" || role.track === trackFilter;
      const focusMatch = role.focusAreas.some((focus) => focusFilters.includes(focus));

      return trackMatch && focusMatch;
    });
  }, [focusFilters, roles, trackFilter]);

  const toggleFocus = (focus: FocusArea) => {
    setFocusFilters((current) => {
      const hasFocus = current.includes(focus);
      if (hasFocus && current.length === 1) {
        return current;
      }

      return hasFocus
        ? current.filter((item) => item !== focus)
        : [...current, focus];
    });
  };

  return (
    <div className="space-y-14 pb-8">
      <section id="overview" className="scroll-mt-28 space-y-6">
        <Card className="overflow-hidden">
          <CardHeader className="gap-5 border-b border-(--card-border) md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
                Career Dashboard
              </p>
              <CardTitle className="text-4xl md:text-5xl">
                {profileData.identity.name}
              </CardTitle>
              <CardDescription className="max-w-3xl text-base leading-7 text-(--text) md:text-lg">
                {profileData.headline}
              </CardDescription>
              <p className="max-w-3xl text-sm leading-7 text-(--text-muted) md:text-base">
                {profileData.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {profileData.quickTags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="grid w-full gap-2 text-sm md:w-72">
              {profileLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg border border-(--chip-border) bg-(--chip-bg) px-3 py-2 transition-colors hover:bg-(--chip-hover)"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <span className="block text-xs uppercase tracking-wide text-(--text-muted)">
                    {item.label}
                  </span>
                  <span className="font-semibold text(--text)">{item.value}</span>
                </Link>
              ))}
            </div>
          </CardHeader>
          <CardContent className="py-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <KpiCard label="Years of Experience" value={metrics.yearsOfExperience} />
              <KpiCard label="Companies" value={String(metrics.companies)} />
              <KpiCard label="Roles" value={String(metrics.roles)} />
              <KpiCard label="Web3 Years Range" value={metrics.web3Range} />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                Core Stack Highlights
              </p>
              {metrics.coreHighlights.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="open-source" className="scroll-mt-28 space-y-5">
        <SectionIntro
          title="Open Source & Community"
          description="Contribution cards from provided profile data only."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {profileData.openSource.map((project) => (
            <Card key={project}>
              <CardHeader>
                <CardDescription>Contributed To</CardDescription>
                <CardTitle>{project}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm leading-7 text-(--text)">
                  Merged contribution on GitHub
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="timeline" className="scroll-mt-28 space-y-5">
        <SectionIntro
          title="Experience Timeline"
          description="Interactive chronology from 2013 to 2025 with viewing filters only. Derived from provided profile data."
        />

        <Card>
          <CardHeader className="space-y-4">
            <Tabs
              value={trackFilter}
              onValueChange={(value) => setTrackFilter(value as TrackFilter)}
            >
              <TabsList aria-label="Filter timeline by track">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="Web3">Web3</TabsTrigger>
                <TabsTrigger value="Web2">Web2</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap gap-2" aria-label="Filter timeline by focus area">
              {focusOptions.map((focus) => {
                const active = focusFilters.includes(focus);
                return (
                  <Button
                    key={focus}
                    type="button"
                    size="sm"
                    variant={active ? "default" : "outline"}
                    onClick={() => toggleFocus(focus)}
                    aria-pressed={active}
                  >
                    {focus}
                  </Button>
                );
              })}
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="relative ml-3 space-y-5 border-l border-(--card-border] pl-6">
              {filteredRoles.map((role, index) => (
                <article key={role.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.1rem] top-4 h-5 w-5 rounded-full border-2 border-(--bg)"
                    style={{
                      backgroundColor:
                        role.track === "Web3"
                          ? "var(--chart-emphasis)"
                          : "var(--chart-secondary)",
                    }}
                  />

                  <details
                    className="rounded-xl border border-(--card-border) bg-(--card-bg) p-5"
                    open={index === 0}
                  >
                    <summary className="cursor-pointer list-none space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--text-muted)">
                        {role.track} | {role.startYear}-{role.endYear} |{" "}
                        {role.focusAreas.join(" / ")}
                      </p>
                      <h3 className="text-xl font-semibold text-(--text-strong)">
                        {role.title}
                      </h3>
                      <p className="text-sm text-(--text-muted)">
                        {role.company} | {role.companyStartYear}-{role.companyEndYear}
                      </p>
                    </summary>

                    <div className="mt-4 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {role.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <ul className="space-y-2 pl-4 text-sm leading-6 text-(--text)">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="list-disc">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </article>
              ))}

              {filteredRoles.length === 0 ? (
                <p className="rounded-lg border border-(--card-border) bg-(--card-bg) p-4 text-sm text-(--text-muted)">
                  No roles match the active filters.
                </p>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="skills" className="scroll-mt-28 space-y-5">
        <SectionIntro
          title="Skills Visualization"
          description="Emphasis index is derived from mention frequency across summary, role bullets, role tech, and raw skills."
        />

        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Group Emphasis Index</CardTitle>
              <CardDescription>Derived from provided profile data.</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <ChartContainer config={emphasisChartConfig} className="max-h-105 w-full">
                <BarChart
                  accessibilityLayer
                  data={emphasisData}
                  layout="vertical"
                  margin={{ left: 18, right: 18 }}
                >
                  <CartesianGrid horizontal={false} />
                  <YAxis
                    dataKey="group"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    width={120}
                  />
                  <XAxis dataKey="emphasis" type="number" hide />
                  <ChartTooltip cursor={false} />
                  <Bar dataKey="emphasis" fill="var(--color-emphasis)" radius={6}>
                    <LabelList
                      dataKey="emphasis"
                      position="right"
                      className="fill-(--text-muted)"
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stack Map</CardTitle>
              <CardDescription>
                Deterministic rules: Primary, Secondary, Supporting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <StackBucket title="Primary" skills={stackMap.primary} variant="emphasis" />
              <StackBucket title="Secondary" skills={stackMap.secondary} variant="default" />
              <StackBucket title="Supporting" skills={stackMap.supporting} variant="secondary" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Skill Clusters By Group</CardTitle>
            <CardDescription>Grouped from provided raw skills list.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 pb-6 md:grid-cols-2 xl:grid-cols-3">
            {groupedSkills.map((group) => (
              <div
                key={group.group}
                className="rounded-lg border border-(--card-border) bg-(--chip-bg) p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-(--text-strong)">
                    {group.group}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                    {group.emphasis}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills
                    .slice()
                    .sort((a, b) => b.mentions - a.mentions)
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name} ({skill.mentions})
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

  
    </div>
  );
}

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-(--card-border) bg-(--chip-bg) p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold text-(--text-strong)">
        {value}
      </p>
    </div>
  );
}

function StackBucket({
  title,
  skills,
  variant,
}: {
  title: string;
  skills: string[];
  variant: "emphasis" | "default" | "secondary";
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant={variant}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SectionIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="space-y-2">
      <h2 className="text-3xl font-semibold text-(--text-strong)">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-(--text-muted) md:text-base">
        {description}
      </p>
    </header>
  );
}
