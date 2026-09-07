export type ServiceDetail = {
  slug: string;
  no: string;
  title: string;
  tint: string;
  seoTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  whatWeOffer: {
    heading: string;
    items: { name: string; desc: string }[];
  };
  benefits: {
    heading: string;
    items: { name: string; desc: string }[];
  };
  whoFor: string;
  cta: string;
};

export const servicesData: ServiceDetail[] = [
  {
    slug: "creative-content",
    no: "01",
    title: "Creative Content",
    tint: "#d9ff5c",
    seoTitle:
      "Creative Content Production Services | Motion Graphics, 3D & Video | De Zine Studio",
    metaDesc:
      "Social-first creative content that performs — motion graphics, 3D animation, video editing, and event video built for how people actually scroll and watch today. Get a quote.",
    h1: "Creative Content That's Built to Perform, Not Just Look Good",
    intro:
      "At De Zine Studio, creative content isn't decoration — it's the engine behind every campaign we build. We produce social-first video and motion content designed for the platforms your audience actually lives on, from Instagram Reels to YouTube pre-roll to in-venue event screens.",
    whatWeOffer: {
      heading:
        "Our creative content service covers the full range of moving-image formats a modern brand needs:",
      items: [
        {
          name: "Motion Graphics",
          desc: "Animated brand storytelling, explainer content, and kinetic typography that communicates fast",
        },
        {
          name: "3D Animation",
          desc: "Product visualization, brand worlds, and 3D-rendered content for premium campaigns",
        },
        {
          name: "2D+3D Motion Graphics",
          desc: "Hybrid animation that blends flat design with dimensional depth for standout visual identity",
        },
        {
          name: "Video Editing",
          desc: "Professional post-production, from raw footage to polished, platform-ready cuts",
        },
        {
          name: "Event Video",
          desc: "Coverage, highlight reels, and same-day edits for launches, activations, and corporate events",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "Built for the scroll",
          desc: "Every asset is designed around actual platform behavior — thumb-stopping in the first second, optimized for sound-off viewing, and cut for short attention spans",
        },
        {
          name: "Faster time-to-market",
          desc: "An in-house production pipeline means quicker turnaround without sacrificing quality",
        },
        {
          name: "One creative language, multiple formats",
          desc: "Motion, 3D, and video editing are produced together so your brand looks consistent across every touchpoint",
        },
        {
          name: "Performance-informed creative",
          desc: "Because content and ads optimization live under one roof, our video and motion work is shaped by what actually drives results, not just what looks good in a portfolio",
        },
      ],
    },
    whoFor:
      "This service is built for brands, marketing teams, and agencies across the MENA region that need consistent, high-volume creative content — from FMCG and retail brands running always-on social campaigns to companies hosting product launches and corporate events who need same-day recap content.",
    cta: "Ready to turn your brand story into content that stops the scroll? Contact De Zine Studio today for a creative content consultation and quote.",
  },
  {
    slug: "online-ooh-advertising",
    no: "02",
    title: "Online & OOH Advertising",
    tint: "#8b7bff",
    seoTitle:
      "Online & Out-of-Home (OOH) Advertising Design | De Zine Studio",
    metaDesc:
      "Consistent creative execution across digital and physical touchpoints — online ads, billboards, and OOH campaigns designed to work together, not in silos. Talk to our team.",
    h1: "One Creative Idea, Executed Everywhere Your Audience Sees It",
    intro:
      "Your audience doesn't experience your brand in one place — they see it on their phone, on a billboard on the highway, and on a screen in a mall. De Zine Studio designs online and out-of-home (OOH) advertising as a single, connected creative execution so your message stays consistent no matter where it's seen.",
    whatWeOffer: {
      heading:
        "What We Offer in online and OOH advertising combines strategic media planning with high-impact placements to help brands reach the right audience and maximize visibility.",
      items: [
        {
          name: "Digital ad creative",
          desc: "Static and motion ad units built for social platforms, programmatic display, and search",
        },
        {
          name: "OOH campaign design",
          desc: "Billboards, transit ads, mall media, and large-format physical placements",
        },
        {
          name: "Cross-channel adaptation",
          desc: "One core creative concept, resized, reformatted, and re-optimized for every placement and screen size",
        },
        {
          name: "Campaign-level creative direction",
          desc: "Ensuring physical and digital ads reinforce the same message, tone, and visual identity",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "Brand consistency at scale",
          desc: "No more disconnected creative between your digital ads and your physical media — one studio, one visual language",
        },
        {
          name: "Smarter media spend",
          desc: "Coordinated online and OOH creative reinforces recall, making every dollar in your media plan work harder",
        },
        {
          name: "Faster campaign rollout",
          desc: "A single production process for both digital and physical formats reduces delays between concept and launch",
        },
        {
          name: "Local market fluency",
          desc: "Campaigns designed with MENA audience habits and physical advertising environments in mind",
        },
      ],
    },
    whoFor:
      "Ideal for brands running integrated campaigns — retail chains, real estate developers, FMCG brands, and businesses launching in physical markets across the region who need their digital presence and physical advertising to tell the same story.",
    cta: "Talk to De Zine Studio about building a connected online and OOH campaign that works across every screen and every street.",
  },
  {
    slug: "arabic-localization",
    no: "03",
    title: "Arabic Localization",
    tint: "#6cd4ff",
    seoTitle:
      "Arabic Localization Services for Brands | Culture-First Adaptation | De Zine Studio",
    metaDesc:
      "Go beyond translation. De Zine Studio's Arabic-speaking specialists adapt language, tone, and cultural context so your brand connects authentically across the MENA market.",
    h1: "Arabic Localization, Not Just Arabic Translation",
    intro:
      "Speaking Arabic isn't the same as speaking to an Arabic-speaking audience. De Zine Studio's Arabic localization service is built on cultural adaptation — a network of native Arabic-speaking specialists who shape your content's language, tone, humor, and context so it lands the way it's meant to, in every dialect and market nuance across the region.",
    whatWeOffer: {
      heading:
        "What We Offer in Arabic localization adapts your brand's content and messaging to resonate naturally with Arabic-speaking audiences across different markets and cultures.",
      items: [
        {
          name: "Content transcreation",
          desc: "Adapting campaigns, scripts, and copy so meaning and impact carry over, not just words",
        },
        {
          name: "Dialect-aware localization",
          desc: "Content tailored to specific MENA markets and regional Arabic variations",
        },
        {
          name: "Cultural context review",
          desc: "Ensuring visuals, references, and messaging are culturally appropriate and resonant",
        },
        {
          name: "Localized creative production",
          desc: "Arabic-first versions of video, motion, and static content, not bolted-on subtitles",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "Authentic audience connection",
          desc: "Content that feels native to the market, not translated for it",
        },
        {
          name: "Reduced cultural risk",
          desc: "Specialist review catches messaging that could misfire or misrepresent local context before it goes live",
        },
        {
          name: "Higher engagement",
          desc: "Audiences respond more strongly to content that reflects their language and lived context accurately",
        },
        {
          name: "One team for creative and localization",
          desc: "Because localization is built into our creative process, not outsourced afterward, brand voice stays consistent",
        },
      ],
    },
    whoFor:
      "Built for international and regional brands entering or expanding across MENA markets, marketing teams without in-house Arabic-speaking creative resources, and companies that have been burned before by literal translations that missed the cultural mark.",
    cta: "Reach your Arabic-speaking audience the right way — contact De Zine Studio to localize your next campaign.",
  },
  {
    slug: "ads-optimization",
    no: "04",
    title: "Ads Optimization",
    tint: "#ff9d6c",
    seoTitle:
      "Ads Optimization & Performance Services | De Zine Studio",
    metaDesc:
      "Turn ad spend into results. De Zine Studio tracks, tests, and optimizes creative performance continuously — so your content keeps earning its place in the budget.",
    h1: "Creative That Earns Its Budget, Every Single Time",
    intro:
      "Great creative that doesn't perform is expensive guesswork. De Zine Studio's ads optimization service treats every piece of content as a living asset — tracked, tested, and refined based on real performance data, not assumptions.",
    whatWeOffer: {
      heading:
        "What We Offer in ads optimization uses data-driven insights and continuous refinement to improve campaign performance, reduce wasted spend, and maximize results.",
      items: [
        {
          name: "Performance tracking",
          desc: "Ongoing monitoring of ad creative across platforms and campaigns",
        },
        {
          name: "A/B and multivariate testing",
          desc: "Testing creative variations, hooks, formats, and messaging to find what actually converts",
        },
        {
          name: "Creative refresh cycles",
          desc: "Replacing fatigued or underperforming assets before they drag down campaign results",
        },
        {
          name: "Budget-efficiency reporting",
          desc: "Clear visibility into which creative is driving performance and which isn't",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "Lower cost per result",
          desc: "Continuous optimization reduces wasted spend on underperforming creative",
        },
        {
          name: "Data-informed creative decisions",
          desc: "Future content is shaped by what's proven to work for your audience, not guesswork",
        },
        {
          name: "Faster reaction time",
          desc: "Underperforming ads get identified and replaced quickly, protecting campaign momentum",
        },
        {
          name: "Creative and media working together",
          desc: "Because our team builds the content and optimizes its performance, there's no disconnect between the creative brief and the performance goal",
        },
      ],
    },
    whoFor:
      "Best suited for performance-driven marketing teams, e-commerce brands, and businesses running paid social or digital ad campaigns who want their creative budget tied directly to measurable outcomes.",
    cta: "Stop guessing which creative works. Contact De Zine Studio to start optimizing your ad performance today.",
  },
  {
    slug: "creative-performance",
    no: "05",
    title: "Creative + Performance",
    tint: "#6cffb0",
    seoTitle:
      "Creative & Performance Marketing Strategy | De Zine Studio",
    metaDesc:
      "Every piece of content should have a business goal behind it. De Zine Studio connects creative thinking and performance strategy end-to-end for results that matter.",
    h1: "Where Creative Ideas and Business Goals Meet",
    intro:
      "Creative and performance are usually run by two different teams speaking two different languages. De Zine Studio connects them end-to-end — every concept, script, and design decision is made with a clear business objective in mind, and every performance insight feeds back into the next round of creative.",
    whatWeOffer: {
      heading:
        "What We Offer in creative and performance brings compelling ideas and measurable results together to create campaigns that capture attention and drive action.",
      items: [
        {
          name: "Goal-first creative strategy",
          desc: "Defining the business outcome before a single frame is designed",
        },
        {
          name: "Integrated planning",
          desc: "Creative concepting and performance planning happening in the same process, not in sequence",
        },
        {
          name: "Feedback-driven iteration",
          desc: "Performance data directly shaping future creative direction",
        },
        {
          name: "Cross-functional campaign management",
          desc: "One team accountable for both the idea and the result",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "No disconnect between creative and results",
          desc: "Content is never \"just creative\" — it's always built to move a specific metric",
        },
        {
          name: "Faster learning cycles",
          desc: "Insights from live campaigns are applied immediately, not after a quarterly review",
        },
        {
          name: "Stronger ROI on creative investment",
          desc: "Every asset is justified by a business purpose, reducing wasted production spend",
        },
        {
          name: "Simplified vendor management",
          desc: "One studio owns both strategy and execution, removing the friction of coordinating separate creative and media agencies",
        },
      ],
    },
    whoFor:
      "Ideal for growth-stage brands, marketing leaders, and founders who are tired of creative agencies and performance agencies blaming each other for underwhelming campaign results — and want one accountable partner instead.",
    cta: "Bring creative and performance under one roof. Contact De Zine Studio to align your content with your business goals.",
  },
  {
    slug: "website-design",
    no: "06",
    title: "Website Design & Development",
    tint: "#ff6ca0",
    seoTitle:
      "Website Design & Development Services | Brand Websites & Landing Pages | De Zine Studio",
    metaDesc:
      "Brand websites and landing pages built with the same creative and localization standard as your content. Fast, on-brand, conversion-focused web design by De Zine Studio.",
    h1: "Websites Built to the Same Standard as Your Best Content",
    intro:
      "Your website is often the first place a customer forms an opinion of your brand — and too often, it's the weakest link in an otherwise strong creative strategy. De Zine Studio designs and develops brand websites and landing pages that carry the same creative quality, cultural localization, and performance thinking as everything else we produce.",
    whatWeOffer: {
      heading:
        "What We Offer in website design and development creates modern, user-focused digital experiences that strengthen your brand and turn visitors into customers.",
      items: [
        {
          name: "Brand website design & development",
          desc: "Full websites built around your brand identity, not generic templates",
        },
        {
          name: "Landing page design",
          desc: "High-converting, campaign-specific pages built for paid and organic traffic",
        },
        {
          name: "Arabic-ready web design",
          desc: "Bilingual and RTL-friendly builds for MENA-market websites",
        },
        {
          name: "Ongoing website support",
          desc: "Updates, content refreshes, and performance improvements post-launch",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "Consistent brand experience",
          desc: "Your website looks and feels like the same brand as your ads, social content, and OOH campaigns",
        },
        {
          name: "Built for conversion",
          desc: "Landing pages are designed with clear user journeys and calls to action, not just visual appeal",
        },
        {
          name: "Localized from the ground up",
          desc: "Arabic-language and RTL layout considerations are built in, not retrofitted",
        },
        {
          name: "Faster launch timelines",
          desc: "Working with the same studio that builds your content means fewer handoffs and delays",
        },
      ],
    },
    whoFor:
      "Best for brands launching new websites or rebrands, marketing teams running paid campaigns that need dedicated landing pages, and companies expanding into MENA markets who need a web presence that speaks the language — literally and culturally.",
    cta: "Your website should work as hard as your content. Contact De Zine Studio to start your website design project.",
  },
  {
    slug: "static-post-content",
    no: "07",
    title: "Static Post Content",
    tint: "#ffc46c",
    seoTitle:
      "Static Post & Social Content Design Services | De Zine Studio",
    metaDesc:
      "Strong static content is still one of the highest-performing social formats. De Zine Studio designs static posts built for engagement, brand consistency, and scroll-stopping impact.",
    h1: "Static Content, Designed to Do More Than Fill a Feed",
    intro:
      "Static posts remain one of the most consistent, cost-effective ways to stay visible and build brand recognition on social media. De Zine Studio treats static content design as its own discipline — not an afterthought to video — with dedicated creative direction for every post.",
    whatWeOffer: {
      heading:
        "What We Offer in static post content delivers engaging, on-brand visuals designed to communicate your message clearly and maintain a consistent social media presence.",
      items: [
        {
          name: "Social feed design",
          desc: "On-brand static posts for Instagram, Facebook, LinkedIn, and X",
        },
        {
          name: "Campaign-based static content",
          desc: "Cohesive visual series built around specific promotions, launches, or themes",
        },
        {
          name: "Templated content systems",
          desc: "Scalable design frameworks for brands needing high-frequency posting",
        },
        {
          name: "Arabic and bilingual static design",
          desc: "Culturally adapted layouts and typography for MENA audiences",
        },
      ],
    },
    benefits: {
      heading: "Why It Matters — Key Benefits",
      items: [
        {
          name: "Consistent brand presence",
          desc: "Regular, on-brand static content keeps your feed active and recognizable between larger campaigns",
        },
        {
          name: "Cost-efficient content volume",
          desc: "Static posts allow for higher output frequency than video without compromising quality",
        },
        {
          name: "Scroll-stopping design",
          desc: "Every post is designed with feed behavior in mind — contrast, hierarchy, and message clarity that work in a split second",
        },
        {
          name: "Seamless integration with other formats",
          desc: "Static content is produced within the same creative system as your motion, video, and OOH work, so nothing feels disconnected",
        },
      ],
    },
    whoFor:
      "Great for brands that need consistent day-to-day social presence, businesses running frequent promotions or announcements, and marketing teams looking to balance video-heavy content plans with high-quality static formats.",
    cta: "Keep your feed strong between campaigns. Contact De Zine Studio to design your static content strategy.",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
