"use client";

import { useEffect, useState, useCallback } from "react";
import Section from "@/components/Section";
import NavDots from "@/components/NavDots";
import ProgressBar from "@/components/ProgressBar";

const SECTIONS = [
  {
    id: "new-formats",
    title: "New Formats — What\u2019s Actually Converting?",
    subtitle:
      "Views \u2260 followers. We\u2019ve been optimising for the wrong metric. Time to double down on what actually converts.",
    accordions: [
      {
        heading: "Seagull Content: High Views, Low Conversion",
        body: "We\u2019ve tested a wide range of Seagull formats on Instagram \u2014 Keep 4 Cut 4, viral trends (jumping vid, touch me again), $15 to build X, words you shouldn\u2019t use, clones, quickfire suggestions, this vs that. These have driven a big increase in impressions and views are back to late Nov/Dec levels. But conversion has been extremely low.\nThe first quickfire AI tool video was the outlier: 2.4M views, 7,500 follows (0.3% conversion). Everything since has underperformed on follower gain. The leading indicator (views) was not a reliable predictor of the outcome we actually care about (followers).",
      },
      {
        heading: "Eagle Content: Authentic but Not Converting",
        body: "New format focus has been iPhone-native content \u2014 Dan talking to camera authentically. These have performed well historically but we never systematized ideation or production. We\u2019re now getting Dan to shoot these more frequently, but conversion is still disappointing.\nThe Google \u201Clearn your way\u201D video hit 1M views but only 2,200 followers (0.22%). Again \u2014 strong leading indicator, weak actual result. These aren\u2019t building platform momentum.",
      },
      {
        heading: "The Play: Targeted AI Content",
        body: "My recommendation from yesterday\u2019s media sync: go all in on targeted AI content that shows the audience how to use specific tools to solve specific pain points. The data backs this up:\n\u2022 NotebookLM video \u2192 320K views, 1,700 follows (0.53% conversion)\n\u2022 Coursera \u00D7 ChatGPT \u2192 810K views, 3,800 follows (0.46% conversion)\n\u2022 Dubai ChatGPT voice demo \u2192 575K views, 3,900 follows (0.69% conversion)\nThese convert 2\u20133\u00D7 better than Seagull content AND generally pull better average impressions than everything except the game content (which doesn\u2019t convert). This is the format we should be building around.",
      },
      {
        heading: "Wildcard: The Ryan Serhant Play",
        body: "Worth exploring: getting content of Dan answering universal questions outside of a formal reel shoot. Think Dan in his office, Ventures portfolio teams asking him real questions. Authentic, low-lift, high-relatability.\nSerhant does this well \u2014 the content feels raw and real, which drives both views and trust-based follows.",
      },
    ],
    takeaway:
      "Double down on targeted AI tool content as the primary format. Seagull content continues for reach but is not the follower growth engine. Explore the Serhant-style Q&A format as a secondary bet.",
  },
  {
    id: "the-numbers",
    title: "The Numbers — The AND Formula",
    subtitle:
      "We need followers AND views. Not one or the other. Here\u2019s the math.",
    statsGroups: [
      {
        afterAccordion: 0,
        stats: [
          { value: "0.18%", label: "Feb conversion rate (so far)" },
          { value: "0.23%", label: "Jan conversion rate" },
          { value: "0.25%", label: "Target conversion rate" },
        ],
      },
      {
        afterAccordion: 1,
        stats: [
          { value: "4,109", label: "Followers needed per day" },
          { value: "50M", label: "Views needed per month" },
          { value: "0.25%", label: "Conversion rate required" },
        ],
      },
    ],
    accordions: [
      {
        heading: "Where We Are Now",
        body: "February so far: 16,971 followers and 9,681,652 views \u2014 that\u2019s a 0.18% conversion rate. Last month (January): 83,164 followers and 35,487,092 views = 0.23% conversion. We hit decent volume but conversion was still below target. The gap is real.",
      },
      {
        heading: "The Target: The AND Formula",
        body: "Annual target: 1.5M new followers (125K/month, ~4,109/day). To hit this we need BOTH volume and conversion working together:\n125,000 followers/month = 50,000,000 views/month \u00D7 0.25% conversion rate\nThis is an AND formula, not OR. Similar to a revenue-per-follower calculation \u2014 we can\u2019t just chase one side. We need 50M monthly views AND we need those views to convert at 0.25%+. Right now we\u2019re short on both.",
      },
      {
        heading: "How We\u2019re Tracking",
        body: "Follower numbers are tracked on Slack formally once daily via Social Blade, with 5+ manual updates between 8AM\u20134PM PST. This cadence is good. The question is whether we\u2019re acting on the data fast enough when the numbers slip \u2014 which connects directly to Section 5 (sensors).",
      },
    ],
    takeaway:
      "The AND formula is the north star. Every content decision should be evaluated against: does this drive views AND does this format convert? If it only does one, it\u2019s not the priority.",
  },
  {
    id: "getting-ahead",
    title: "Getting Ahead — Zero Days Is Unacceptable",
    subtitle:
      "We are at most 1 day ahead during the week, 3 by the weekend. We need a structural fix, not a band-aid.",
    accordions: [
      {
        heading: "The Problem: 1:3:1 Framework",
        body: "1 clear problem: We are not a week ahead on approved short-form content. At best we\u2019re 1 day ahead during the week and 3 days ahead by the weekend. This means every week starts under pressure, content quality suffers, and there\u2019s zero room for iteration or strategic pivots.",
      },
      {
        heading: "Three Possible Solutions (Evaluated)",
        body: "Solution A \u2014 Mine the backlog of unprocessed CLs: Invest several focused days deep-processing the backlog to surface the best content. Risk: time-intensive upfront and doesn\u2019t guarantee views/follower performance. But it unlocks a large volume of clips ready for editing.\nSolution B \u2014 Schedule additional reel shoots: Shoot more, edit more, post more. Risk: requires more of Dan\u2019s time and we still hit the same cycle \u2014 shoot, edit, post, then return to uncertain older content.\nSolution C \u2014 Repurpose from YouTube: Theoretically low-lift, but in practice we hit issues with long-form projects that have masses of unlinked assets. Requires processing time to scrub timelines and find the best clips.",
      },
      {
        heading: "The Recommendation: Mine the Backlog + Systematize",
        body: "Recommended path: Mine the CL backlog. This requires a large upfront investment (likely several focused days given the queue length) but unlocks a huge volume of clips ready to edit. Build a process to flag which CLs have the best clips. When suitable long-form videos go live (AI content, how-to-get-rich videos, etc.), add them to the short-form processing queue automatically.\nThe sprint plan:\n1. Block 2 full days in the next 2 weeks \u2192 process the entire backlog\n2. Block 2 full days after processing \u2192 edit the best clips into finished reels\n3. Target: 14 approved videos in the bank\n4. Ongoing: edit 3 videos/day without fail to never fall behind again\n5. Leverage AI throughout \u2014 Claude for organizing narrative cuts into optimal HEIT structure, systematize captions and SFX as copy/paste templates, weekly trending audio updates pulled straight into the assets folder",
      },
    ],
    takeaway:
      "Book the 2 processing days this week. The sprint is non-negotiable. Target: 14 approved videos banked, then 3/day steady state. Use AI to compress the editing workflow.",
  },
  {
    id: "engagement",
    title: "Engagement — Beyond Posting",
    subtitle:
      "Posting without engaging is shouting into the void. Here\u2019s the plan to actually show up.",
    accordions: [
      {
        heading: "Current SLA & Expansion",
        body: "Current SLA: reply to 5 comments within the first 24 hours of posting. New commitment: calendarize 10 minutes first thing in the morning and 10 minutes at end of day to reply to additional comments beyond the SLA number. Goal is to drive extra engagement signals in the algorithm and build genuine community.",
      },
      {
        heading: "Monthly Engagement Audit",
        body: "Adding a new check to the monthly data audit: identify the lowest-engagement content archetypes. Any formats that consistently drive lower levels of engagement (comments, shares, saves) should be flagged and reconsidered in future ideation. We should be retiring formats that don\u2019t engage, not just formats that don\u2019t get views.",
      },
    ],
    takeaway:
      "Expand comment engagement to 10 min AM + 10 min PM daily on top of the 5-comment SLA. Add engagement-by-format tracking to the monthly audit. Kill formats that don\u2019t engage.",
  },
  {
    id: "sensors",
    title: "Sensors — Never Get Here Again",
    subtitle:
      "If we\u2019d had tripwires in place, we would have caught this weeks ago. Here\u2019s the early warning system.",
    accordions: [
      {
        heading: "Impressions Tripwire",
        body: "Sensor: No reels breaking 100K views for 3 consecutive days \u2192 triggers an immediate audit of upcoming scheduled content. The goal is to catch an impressions drought before it compounds into a follower drought. When this trips, review the next 5\u20137 scheduled posts and ask: is any of this likely to break through? If not, reprioritize.",
      },
      {
        heading: "Follower Growth Tripwire",
        body: "Sensor: Two consecutive days below 2,000 new followers \u2192 triggers an immediate audit. This is the lagging indicator alarm. If impressions are fine but followers are dropping, it means conversion is the problem \u2014 likely a content-type issue, not a volume issue. Different diagnosis, different fix.",
      },
      {
        heading: "Escalation Protocol",
        body: "When either sensor trips: Ollie conducts the audit and brings insights/answers to the next Short Form production meeting and media sync. No waiting for the weekly cycle \u2014 if the tripwire fires, the audit happens that day and findings are shared within 24 hours.",
      },
    ],
    takeaway:
      "Implement both sensors immediately. 3 days without a 100K reel = audit. 2 days below 2K followers = audit. Ollie owns the response. Findings go to the next sync, no delays.",
  },
  {
    id: "volume",
    title: "Volume — The Crashout Question",
    subtitle:
      "Should we go from 1\u20132/day to 5/day? Not yet. But 3/day might be the move.",
    accordions: [
      {
        heading: "The Crashout Benchmark",
        body: "Reference point: Crashout is uploading 5\u00D7/day and generating 40M views/month. That\u2019s an aggressive volume play and it clearly works for reach. The question is whether our infrastructure, content quality, and audience can support that kind of output.",
      },
      {
        heading: "The Bottleneck: Solve Section 3 First",
        body: "We already have a content drought \u2014 we can\u2019t increase volume when we\u2019re zero days ahead. Increasing output before solving the production pipeline would mean publishing more mediocre content faster. That\u2019s a recipe for audience fatigue, not growth. Section 3 (getting ahead) must be solved before Section 6 (volume) is even on the table.",
      },
      {
        heading: "The Long-Term Play: 3\u00D7/Day",
        body: "Once the backlog is mined, YouTube repurposing is systematized, and additional reel shoots are scheduled, scaling to 3 reels/day is realistic: 8AM, 2PM, 6PM. That\u2019s 7 additional shots on goal per week. But the content mix matters \u2014 if the audience is already showing fatigue, more of the same won\u2019t help. The volume increase has to come paired with the format shift from Section 1 (more targeted AI content, less low-conversion Seagull content).",
      },
    ],
    takeaway:
      "Volume increase is the right long-term play but is blocked by the production problem. Solve Section 3 first. Then scale to 3\u00D7/day with the right content mix. Do not just upload more of what isn\u2019t working.",
  },
];

const NAV_LABELS = [
  "New Formats",
  "The Numbers",
  "Getting Ahead",
  "Engagement",
  "Sensors",
  "Volume",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [presentMode, setPresentMode] = useState(false);

  // Track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
            setProgress((index + 1) / SECTIONS.length);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Keyboard navigation
  const scrollToSection = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, SECTIONS.length - 1));
    const el = document.getElementById(SECTIONS[clamped].id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(SECTIONS.length - 1);
      } else if (e.key === "p" || e.key === "P") {
        if (
          (e.target as HTMLElement).tagName !== "INPUT" &&
          (e.target as HTMLElement).tagName !== "TEXTAREA"
        ) {
          setPresentMode((prev) => !prev);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeSection, scrollToSection]);

  return (
    <main>
      <ProgressBar progress={progress} visible={!presentMode} />
      <NavDots
        total={SECTIONS.length}
        active={activeSection}
        onNavigate={scrollToSection}
        visible={!presentMode}
        labels={NAV_LABELS}
      />

      {/* Present Mode Toggle */}
      <button
        onClick={() => setPresentMode(!presentMode)}
        className="fixed bottom-5 right-5 z-40 rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 cursor-pointer"
        style={{
          background: presentMode ? "#3B82F6" : "rgba(17,17,17,0.85)",
          color: presentMode ? "#fff" : "#888",
          border: "1px solid #222",
          backdropFilter: "blur(12px)",
          opacity: presentMode ? 0.6 : 1,
        }}
        title="Toggle Present Mode (P)"
      >
        {presentMode ? "Exit Present Mode" : "Present Mode"}
      </button>

      {SECTIONS.map((section, i) => (
        <Section
          key={section.id}
          index={i}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          accordions={section.accordions}
          takeaway={section.takeaway}
          statsGroups={
            "statsGroups" in section
              ? (section as any).statsGroups
              : undefined
          }
        />
      ))}
    </main>
  );
}
