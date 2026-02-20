import { profileData, type Profile } from "~/data/profile";

export const skillGroups = {
  Languages: ["TypeScript"],
  Frontend: [
    "React",
    "Next.js",
    "TanStack Router/Query",
    "Jotai",
    "CSS",
    "Tailwind",
    "Radix/Shadcn",
  ],
  Backend: ["NestJS", "gRPC"],
  Web3: ["Solidity", "Hardhat", "Foundry", "Viem", "Wagmi"],
  "DevOps/Infra": ["Docker", "NGINX", "Traefik", "Terraform", "CI/CD"],
  "Data/Storage": ["PostgreSQL", "MongoDB"],
  Tooling: ["Zod", "Turborepo"],
} as const;

export type SkillGroupName = keyof typeof skillGroups;

const skillPatterns: Record<string, RegExp> = {
  TypeScript: /typescript/i,
  React: /\breact\b/i,
  "Next.js": /next\.?js/i,
  NestJS: /nestjs/i,
  "TanStack Router\/Query": /tanstack/i,
  Jotai: /jotai/i,
  Zod: /\bzod\b/i,
  CSS: /\bcss\b/i,
  Tailwind: /tailwind/i,
  Docker: /docker/i,
  NGINX: /nginx/i,
  Traefik: /traefik/i,
  Terraform: /terraform/i,
  "CI/CD": /ci\/?cd/i,
  gRPC: /grpc/i,
  PostgreSQL: /postgres(?:ql)?/i,
  MongoDB: /mongodb/i,
  Solidity: /solidity/i,
  Hardhat: /hardhat/i,
  Foundry: /foundry/i,
  Viem: /viem/i,
  Wagmi: /wagmi/i,
  "Radix/Shadcn": /radix|shadcn/i,
  Turborepo: /turborepo/i,
};

const web3FeaturePatterns = {
  Staking: /staking/i,
  Swaps: /\bswap(?:s)?\b/i,
  NFTs: /\bnft\b/i,
  "LP Management": /liquidity[-\s]?pool|lp management/i,
  "Multi-chain": /multi-chain|cross-chain/i,
} as const;

export function deriveOverviewMetrics(profile: Profile = profileData) {
  const companies = new Set(profile.roles.map((role) => role.company)).size;
  const roles = profile.roles.length;

  const web3Roles = profile.roles.filter((role) => role.track === "Web3");
  const web3Start = Math.min(...web3Roles.map((role) => role.startYear));
  const web3End = Math.max(...web3Roles.map((role) => role.endYear));

  const timelineStart = Math.min(
    ...profile.roles.map((role) => role.companyStartYear),
  );
  const timelineEnd = Math.max(...profile.roles.map((role) => role.endYear));

  return {
    yearsOfExperience: profile.yearsOfExperienceLabel,
    companies,
    roles,
    web3Range: `${web3Start}\u2013${web3End}`,
    timelineStart,
    timelineEnd,
    timelineRange: `${timelineStart}\u2013${timelineEnd}`,
    coreHighlights: profile.coreHighlights,
  };
}

export function deriveTimelineRoles(profile: Profile = profileData) {
  return [...profile.roles].sort((a, b) => {
    if (a.endYear !== b.endYear) {
      return b.endYear - a.endYear;
    }

    return b.startYear - a.startYear;
  });
}

export function deriveSkillFrequency(profile: Profile = profileData) {
  const frequency = Object.fromEntries(
    profile.skills.map((skill) => [skill, 0]),
  ) as Record<string, number>;

  const sources: string[] = [profile.summary, ...profile.skills];

  for (const role of profile.roles) {
    sources.push(role.title);
    sources.push(...role.tech);
    sources.push(...role.bullets);
  }

  for (const source of sources) {
    for (const skill of profile.skills) {
      const pattern = skillPatterns[skill];
      if (pattern?.test(source)) {
        frequency[skill] = (frequency[skill] ?? 0) + 1;
      }
    }
  }

  return frequency;
}

export function deriveSkillGroupEmphasis(profile: Profile = profileData) {
  const frequency = deriveSkillFrequency(profile);

  return Object.entries(skillGroups).map(([group, skills]) => {
    const emphasis = skills.reduce((acc, skill) => acc + (frequency[skill] ?? 0), 0);

    return {
      group,
      emphasis,
      skills: skills.map((skill) => ({
        name: skill,
        mentions: frequency[skill] ?? 0,
      })),
    };
  });
}

export function deriveStackMap(profile: Profile = profileData) {
  const frequency = deriveSkillFrequency(profile);

  const sortedSkills = [...profile.skills].sort((a, b) => {
    const diff = (frequency[b] ?? 0) - (frequency[a] ?? 0);
    if (diff !== 0) {
      return diff;
    }

    return a.localeCompare(b);
  });

  const primary: string[] = [];
  const secondary: string[] = [];
  const supporting: string[] = [];

  for (const skill of sortedSkills) {
    const mentions = frequency[skill] ?? 0;

    if (mentions >= 3) {
      primary.push(skill);
      continue;
    }

    if (mentions === 2) {
      secondary.push(skill);
      continue;
    }

    supporting.push(skill);
  }

  return {
    primary,
    secondary,
    supporting,
    rule: {
      primary: "Mentioned 3 or more times across summary, roles, and raw skills.",
      secondary: "Mentioned exactly 2 times across summary, roles, and raw skills.",
      supporting: "Mentioned once in the provided dataset.",
    },
  };
}
