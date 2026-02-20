"use client";

import { useMemo, useState } from "react";

import type { FocusArea, ProfileRole, Track } from "~/data/profile";
import { ToggleChip } from "~/components/ui/toggle-chip";

type TimelineViewProps = {
  roles: ProfileRole[];
  timelineStart: number;
  timelineEnd: number;
};

const trackOptions: Track[] = ["Web3", "Web2"];
const focusOptions: FocusArea[] = ["Frontend", "Backend", "DevOps"];

export function TimelineView({
  roles,
  timelineStart,
  timelineEnd,
}: TimelineViewProps) {
  const [activeTracks, setActiveTracks] = useState<Track[]>(trackOptions);
  const [activeFocus, setActiveFocus] = useState<FocusArea[]>(focusOptions);

  const filteredRoles = useMemo(() => {
    return roles.filter(
      (role) =>
        activeTracks.includes(role.track) &&
        role.focusAreas.some((focus) => activeFocus.includes(focus)),
    );
  }, [activeFocus, activeTracks, roles]);

  const toggleTrack = (track: Track) => {
    setActiveTracks((current) => {
      const hasTrack = current.includes(track);
      if (hasTrack && current.length === 1) {
        return current;
      }

      return hasTrack
        ? current.filter((item) => item !== track)
        : [...current, track];
    });
  };

  const toggleFocus = (focus: FocusArea) => {
    setActiveFocus((current) => {
      const hasFocus = current.includes(focus);
      if (hasFocus && current.length === 1) {
        return current;
      }

      return hasFocus
        ? current.filter((item) => item !== focus)
        : [...current, focus];
    });
  };

  const totalRange = Math.max(1, timelineEnd - timelineStart);

  return (
    <section className="space-y-6">
      <div className="space-y-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
        <div className="flex flex-wrap gap-2">
          {trackOptions.map((track) => (
            <ToggleChip
              key={track}
              label={track}
              active={activeTracks.includes(track)}
              onClick={() => toggleTrack(track)}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {focusOptions.map((focus) => (
            <ToggleChip
              key={focus}
              label={focus}
              active={activeFocus.includes(focus)}
              onClick={() => toggleFocus(focus)}
            />
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            <span>{timelineStart}</span>
            <span>{timelineEnd}</span>
          </div>
          <div className="relative h-3 rounded-full bg-[var(--chip-hover)]">
            {filteredRoles.map((role) => {
              const left = ((role.startYear - timelineStart) / totalRange) * 100;
              const width = Math.max(
                9,
                ((role.endYear - role.startYear) / totalRange) * 100,
              );

              return (
                <span
                  key={role.id}
                  className="absolute top-0 h-3 rounded-full"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    backgroundColor:
                      role.track === "Web3"
                        ? "var(--chart-emphasis)"
                        : "var(--chart-secondary)",
                  }}
                  aria-hidden="true"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative ml-3 space-y-5 border-l border-[var(--card-border)] pl-6">
        {filteredRoles.map((role, index) => (
          <article key={role.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.05rem] top-4 h-3 w-3 rounded-full border-2 border-[var(--bg)]"
              style={{
                backgroundColor:
                  role.track === "Web3"
                    ? "var(--chart-emphasis)"
                    : "var(--chart-secondary)",
              }}
            />

            <details
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {role.track} | {role.startYear}-{role.endYear} |{" "}
                  {role.focusAreas.join(" / ")}
                </p>
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--text-strong)]">
                  {role.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {role.company} | {role.companyStartYear}-{role.companyEndYear}
                </p>
              </summary>

              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {role.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] px-3 py-1 text-xs font-semibold text-[var(--badge-fg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 pl-4 text-sm leading-6 text-[var(--text)]">
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
          <p className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 text-sm text-[var(--text-muted)]">
            No roles match the active filters.
          </p>
        ) : null}
      </div>
    </section>
  );
}
