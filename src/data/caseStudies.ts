export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type CaseStudy = {
  slug: "testmaker" | "promo-manager" | "refunds" | "arnxt" | "trustrent" | string;
  title: string;
  shortTitle: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  link?: { label: string; href: string };
  pdfUrl?: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  blocks: Block[];
};

export const mockTestMakerCaseStudy: CaseStudy = {
    slug: "testmaker",
    title: "Grit x Grid Mock Test Maker — Timed Sectional Test Engine (0→1)",
    shortTitle: "Mock Test Maker",
    org: "Grit x Grid",
    role: "Product & Builder",
    period: "0→1 MVP · Live product",
    summary:
      "An interactive testing platform that transforms question documents into timed, sectional mock exams with automated scoring, question status tracking, and diagnostic action plans for what to fix next.",
    link: { label: "Visit gritxgrid-testmaker.vercel.app", href: "https://gritxgrid-testmaker.vercel.app/" },
    metrics: [
      { value: "0→1", label: "Shipped interactive MVP" },
      { value: "Live", label: "Deployed at gritxgrid-testmaker.vercel.app" },
      { value: "Automated", label: "Timed sectional test engine" },
    ],
    tags: ["0→1", "EdTech", "Test Engine", "Rapid MVP", "Product Systems"],
    blocks: [
      { type: "h2", text: "Problem Statement" },
      {
        type: "p",
        text: "Students and aspirants preparing for competitive exams often have access to practice question documents and question banks, but practicing in unstructured document formats fails to simulate the real exam environment. Static PDFs and docs lack sectional timing, question palette navigation, real-time pacing feedback, and automated diagnostics.",
      },
      {
        type: "p",
        text: "The core challenge was to build a zero-friction tool that turns static question material into an authentic, timed sectional mock test experience with deep question-by-question analytics—delivering next steps, not just a score.",
      },
      { type: "h2", text: "Product Vision & Core Features" },
      {
        type: "ul",
        items: [
          "Document to Mock Test Conversion: Ingest and organize questions into structured, sectional exams effortlessly.",
          "Authentic Exam Simulation: Real-time countdown timers, sectional transitions, question palette status (attempted, marked for review, unattempted), and auto-submission upon timer expiry.",
          "Diagnostic Post-Test Analysis: Beyond raw scores, candidates receive question-by-question timing breakdowns, accuracy metrics, and targeted action items on what concepts to review next.",
          "Frictionless Experience: Clean, responsive user interface optimized for fast loading and low latency during test execution.",
        ],
      },
      { type: "h2", text: "My Role & System Architecture" },
      {
        type: "p",
        text: "As the Product Creator and Builder, I conceptualized the product strategy, scoped the MVP, designed user workflows, and built the application end-to-end:",
      },
      {
        type: "ul",
        items: [
          "Defined core user personas, journeys, and test lifecycle states (Prep → Active Test → Review & Diagnostics).",
          "Engineered a deterministic state machine managing section timing, auto-save of responses, and edge cases like browser refreshes and interruptions.",
          "Designed clear, scannable data visualization for candidate performance and error analysis.",
          "Shipped and deployed the live product at gritxgrid-testmaker.vercel.app.",
        ],
      },
      { type: "h2", text: "Impact & Key Learnings" },
      {
        type: "ul",
        items: [
          "Delivered a functional 0→1 EdTech tool addressing a concrete candidate pain point.",
          "Created an intuitive bridge between static prep material and high-fidelity exam simulation.",
          "Built a foundation for expanding question ingestion intelligence and personalized revision workflows.",
        ],
      },
    ],
  };

export const workCaseStudies: CaseStudy[] = [
  {
    slug: "promo-manager",
    title: "Building a Promo Manager at Scale (0→1)",
    shortTitle: "Promo Manager",
    org: "KPN Fresh",
    role: "Product Owner",
    period: "0→1 platform",
    summary:
      "A centralised promotions platform that let non-technical teams ship campaigns in minutes while enforcing deterministic checkout behaviour, financial guardrails and closed-loop ROAS attribution.",
    metrics: [
      { value: "1 day → <5 min", label: "Promo setup time" },
      { value: "Majority", label: "Campaigns shipped without engineering" },
      { value: "Closed loop", label: "Promo → redemption → ROAS" },
    ],
    tags: ["Checkout", "Guardrails", "Attribution", "Ops tooling"],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "Promotions were a core growth lever across app, web and POS, but the existing setup did not scale. Launching a promo typically took ~1 day, required engineering support, and frequently caused checkout issues. As promo volume increased, we observed discount leakage, cart failures and weak attribution of promo spend.",
      },
      {
        type: "p",
        text: "The problem was not lack of flexibility; it was the inability to safely operate promotions at scale. Promo evaluation runs on the checkout path, so errors directly impacted revenue and trust.",
      },
      {
        type: "p",
        text: "The goal was to build a centralized Promo Manager that enabled non-tech teams to ship fast while enforcing deterministic behaviour, financial guardrails and reliable attribution.",
      },
      { type: "h2", text: "My Role" },
      { type: "p", text: "I was the Product Owner for Promo Manager and owned:" },
      {
        type: "ul",
        items: [
          "Problem framing and success metrics",
          "PRDs, MVP scoping and rollout sequencing",
          "Promo rule abstractions and configuration UX",
          "Guardrails (caps, counters, priority, kill switches)",
          "Event, analytics and ROAS attribution",
          "Ongoing trade-offs with backend, POS and data teams",
        ],
      },
      { type: "h2", text: "What We Were Solving For" },
      {
        type: "ul",
        items: [
          "Reduce promo setup time from ~1 day to <5 minutes",
          "Eliminate routine engineering dependency for campaigns",
          "Prevent financial leakage and invalid cart states",
          "Keep checkout latency predictable under promo load",
          "Enable closed-loop ROAS attribution for paid marketing",
        ],
      },
      { type: "h2", text: "Key Design Decisions & Trade-offs" },
      { type: "h3", text: "1. Flexibility vs checkout reliability" },
      {
        type: "p",
        text: "Initial proposals favoured SKU, category and subclass-level eligibility. During evaluation, SKU and category-level rules materially increased backend processing complexity during real-time promo evaluation due to deeper joins, more permutations and higher latency risk on the checkout path.",
      },
      {
        type: "p",
        text: "Because promo evaluation sits on the most revenue-critical flow, we intentionally constrained eligibility to subclass-level abstractions. This covered the majority of business use cases while keeping evaluation deterministic and performant. To preserve configurability without increasing runtime complexity, we introduced reusable eligibility lists, allowing ops teams to define catalog groups once and reuse them across promotions.",
      },
      { type: "h3", text: "2. Reusable lists instead of direct selection" },
      { type: "p", text: "We applied the same abstraction consistently across the system:" },
      {
        type: "ul",
        items: [
          "Promo eligibility (which items qualify)",
          "Free-product rewards (which SKUs are given away)",
        ],
      },
      {
        type: "p",
        text: "Instead of direct per-promo SKU selection, users created named lists reusable across campaigns. This reduced configuration errors, improved consistency, simplified rule evaluation and made promo behaviour easier to reason about at scale.",
      },
      { type: "h3", text: "3. Updating promotions vs cloning" },
      {
        type: "p",
        text: "We debated forcing promo cloning for every change versus allowing in-place edits. Cloning improved auditability but created promo sprawl and fragmented analytics. We shipped a controlled middle ground:",
      },
      {
        type: "ul",
        items: [
          "Promotions could be updated multiple times",
          "Core rules and eligibility were locked post-launch",
          "Budgets, caps, end dates and activation state remained editable",
        ],
      },
      {
        type: "p",
        text: "This preserved a single promo ID for clean attribution while preventing risky mid-flight logic changes.",
      },
      { type: "h3", text: "4. Serialized coupon lifecycle design" },
      {
        type: "p",
        text: "For marketing use cases (Meta ads → WhatsApp, NSO campaigns) we generated serialized, unique codes strictly mapped to users. Creating a new coupon ID for every batch added backend overhead and limited cases where teams wanted to track one promo → one coupon redemption over time. We introduced two explicit coupon setup modes:",
      },
      {
        type: "ul",
        items: [
          "Reuse an existing coupon ID for simple scale-up scenarios or single promo–coupon tracking",
          "Create a new coupon ID when batch-level caps, attribution separation or rollback isolation was required",
        ],
      },
      {
        type: "p",
        text: "By making this an explicit product choice instead of a hidden constraint, we reduced backend churn while letting marketing teams evolve campaign strategy freely.",
      },
      { type: "h2", text: "Guardrails, Failure Modes & Reliability" },
      { type: "p", text: "Many decisions were driven by real production incidents rather than theory:" },
      {
        type: "ul",
        items: [
          "Promotion conflicts: lower-priority free-item promos not being revoked when higher-value cart discounts applied — resolved via deterministic priority resolution and benefit revocation.",
          "Invalid cart states: discounts exceeding item or cart value, creating negative payable amounts — resolved via discount ceiling validation.",
          "Expired coupons: coupons expiring mid-session leaving carts invalid — resolved via real-time revalidation and auto-removal.",
        ],
      },
      {
        type: "p",
        text: "The guiding principle was fail-safe checkout with clear user feedback, e.g. toast messaging on coupon expiry.",
      },
      { type: "h2", text: "Platform Events & Analytics" },
      {
        type: "p",
        text: "Promotion and coupon lifecycle events from the execution layer (applied, invalidated, expired, removed) were published to the platform event stream. View and impression events were captured at the client layer and stitched with backend execution events in analytics, enabling a consistent, near-real-time view for dashboards, finance reconciliation and attribution. All configuration changes were logged via audit trails, enabling full traceability and significantly reducing manual errors that could impact checkout.",
      },
      { type: "h2", text: "Unified UI Flows & Consumer Experience" },
      {
        type: "p",
        text: "On the ops side, fragmented promo and coupon update paths were consolidated into a single unified lifecycle flow, reducing inconsistencies and edge-case failures. On the consumer side:",
      },
      {
        type: "ul",
        items: [
          "Coupon expiry and updates were handled consistently",
          "Invalid or expired coupons were auto-removed",
          "Coupons were prioritised in app and web listings to surface the most relevant, usable offers first",
        ],
      },
      {
        type: "p",
        text: "This reduced checkout friction and failed payment attempts caused by invalid promotions.",
      },
      { type: "h2", text: "Budget Control & ROAS Attribution" },
      {
        type: "ul",
        items: [
          "Campaigns automatically paused once promo burn hit defined caps (hard enforcement)",
          "Burn vs cap surfaced with threshold alerts (80%, 90%) for proactive intervention",
          "Promo ID, serialized coupon code and total discount sent via Meta Conversion API",
          "Meta-reported ROAS ingested back and stitched with internal promo and order data",
        ],
      },
      {
        type: "p",
        text: "This enabled campaign, channel and cohort-level ROAS analysis and closed the loop between promo configuration and marketing ROI.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "ul",
        items: [
          "Promo setup time reduced from ~1 day to <5 minutes",
          "Majority of campaigns launched without engineering support",
          "Significant reduction in checkout breakage caused by promotions",
          "Stronger financial control via caps, counters and kill switches",
          "Improved attribution accuracy for performance marketing",
        ],
      },
      { type: "h2", text: "What I'd Improve Next" },
      {
        type: "p",
        text: "The next phase of impact would be improving promo distribution and activation, not just configuration.",
      },
      {
        type: "ul",
        items: [
          "First-class delivery integrations with Clevertap, Meta and outbound channels (e.g. Onextel) so promos and serialized coupons are pushed directly instead of manual exports",
          "Channel-level throttling and kill switches so promotions can be paused or rolled back at the distribution layer, not just checkout",
        ],
      },
      { type: "h2", text: "Reflection" },
      {
        type: "p",
        text: "The hardest part of this project wasn't enabling promotions — it was ensuring they could be safely created, updated, expired and analysed at scale without breaking checkout or trust. Most promo systems fail not due to missing features, but due to edge cases, scale and weak guardrails.",
      },
    ],
  },
  {
    slug: "refunds",
    title: "Self-Serve Refunds & Payment State Correctness (0→1)",
    shortTitle: "Refund Automation",
    org: "KPN Fresh",
    role: "Product Owner, Refunds",
    period: "0→1 system",
    summary:
      "Refunds re-framed as a distributed systems problem: event-driven payment states, CX tooling first, fraud guardrails, and only then customer self-serve.",
    metrics: [
      { value: "48 hrs → ~12 min", label: "Resolution time" },
      { value: "4 lakh", label: "Refunds processed" },
      { value: "45% → 15%", label: "Refund-related CX calls" },
      { value: "₹4 Cr", label: "Repeat orders from refunded customers" },
    ],
    tags: ["Payments", "CX tooling", "Fraud", "Event-driven"],
    blocks: [
      { type: "h2", text: "Problem Statement" },
      {
        type: "p",
        text: "At KPN, ~45% of all customer escalations were refund-related. Refunds took ~48 hours to resolve, required heavy CX intervention and had limited transparency for customers. Increasing refund volumes also exposed fraud risks and payment-state inconsistencies, especially for cancellations and partial fulfilments.",
      },
      {
        type: "p",
        text: "The problem was not speed alone — it was lack of system ownership across CX, payments and data models.",
      },
      { type: "h2", text: "My Role" },
      { type: "p", text: "Product owner for refunds, responsible for:" },
      {
        type: "ul",
        items: [
          "Defining refund lifecycle & states",
          "Designing CX tooling and customer self-serve flows",
          "Aligning refund logic with payment gateway behaviour",
          "Introducing guardrails against fraud",
          "Driving decisions using CX data, Play Store feedback and reconciliation metrics",
        ],
      },
      { type: "h2", text: "Constraints & Reality" },
      {
        type: "ul",
        items: [
          "Refunds interact with real money, async payment systems and accounting",
          "CX agents were non-technical and overloaded",
          "Razorpay processed refunds asynchronously",
          "Fraud patterns were non-uniform across geographies",
          "Some failure modes only surfaced post-scale",
        ],
      },
      { type: "h2", text: "Key Product Decisions" },
      { type: "h3", text: "Fix operational control before customer self-serve" },
      { type: "p", text: "We intentionally did not start with self-serve refunds. Instead, we first:" },
      {
        type: "ul",
        items: [
          "Enabled CX teams to validate, approve, reject or partially approve refunds",
          "Removed dependency on tech and finance for most cases",
          "Introduced queue-based processing with SLA and performance visibility",
        ],
      },
      { type: "p", text: "This stabilised the system before scaling demand." },
      { type: "h3", text: "Dual CX workflows for evidence and processing" },
      {
        type: "ul",
        items: [
          "Workflow A — Evidence collection: secure upload links sent via email, expiring 15 minutes after opening, re-triggerable for the same request",
          "Workflow B — Refund processing dashboard: partial approvals, mandatory rejection reasons, department mapping for rejected items, manager controls (unassign, SLA monitoring)",
        ],
      },
      { type: "h3", text: "Payment system issue discovered via customer feedback" },
      {
        type: "p",
        text: "Play Store review analysis surfaced a repeated complaint: “Refund always shows in progress”. The issue occurred only for full cancellations initiated by KPN and short-pick (partially fulfilled) orders.",
      },
      {
        type: "p",
        text: "Root cause: Razorpay refund behaviour had two valid states — processed instantly, or accepted and processed asynchronously. In async cases money could already be credited while our system still showed refund_in_progress, and the ambiguity triggered CX escalations.",
      },
      {
        type: "ul",
        items: [
          "Integrated Razorpay refund webhooks",
          "Updated refund states based on payment events, not API responses",
          "Reworked cancellation and short-pick refund state transitions",
          "Simplified customer-facing refund status language",
        ],
      },
      {
        type: "p",
        text: "Result: accurate refund visibility and a sharp reduction in false escalations.",
      },
      { type: "h3", text: "CX clarity trade-off: rejection reasons" },
      {
        type: "p",
        text: "Customers kept asking CX “why was my refund rejected?”. Free-text agent reasons were inconsistent, detailed explanations would increase disputes and teach fraud patterns, and fine-grained logic didn't scale to UI.",
      },
      {
        type: "p",
        text: "Decision: expose a single generic rejection reason — “Submitted evidence did not match the stated reason.” Outcome: fewer follow-up CX calls, no fraud pattern learning, and maintained operational clarity.",
      },
      { type: "h3", text: "Data modelling constraint (financial correctness)" },
      {
        type: "p",
        text: "During reconciliation we found return request lines did not include certain items (e.g. recyclable bags) — these appeared only in credit note lines. We aligned refund calculation and reporting to credit note lines, ensuring accounting correctness and downstream consistency: a deliberate decision to prioritise system truth over abstraction.",
      },
      { type: "h3", text: "Fraud mitigation & rollback" },
      {
        type: "p",
        text: "We experimented with auto-refunds on first delivered orders. ~80% of fraudulent claims originated from one zone (Hyderabad) and evidence quality was largely invalid. We reduced the auto-refund cap to ₹100 and eventually rolled auto-refunds back entirely. Data overrode intuition.",
      },
      { type: "h3", text: "Customer self-serve (after stabilisation)" },
      {
        type: "ul",
        items: [
          "Customers could initiate refunds on app and web",
          "Select items, quantities and reasons",
          "Upload evidence",
          "Track refund status transparently",
        ],
      },
      { type: "p", text: "Average internal processing time: ~12 minutes." },
      { type: "h2", text: "Impact" },
      {
        type: "ul",
        items: [
          "4 lakh refunds processed",
          "85% self-served by customers",
          "Refund-related CX calls reduced from 45% to 15%",
          "Resolution time reduced from 48 hrs to ~12 mins",
          "₹4 Cr repeat orders from refunded customers",
          "Accurate refund states for cancellations & partial orders",
        ],
      },
      { type: "h2", text: "Key Learnings" },
      {
        type: "ul",
        items: [
          "Refunds are distributed systems problems, not support features",
          "Async payments demand event-driven state management",
          "Transparency must be balanced against fraud risk",
          "Some system truths emerge only at scale — fast correction matters more than perfect foresight",
        ],
      },
    ],
  },
  {
    slug: "pos-gap-analysis",
    title: "Retail POS Gap Analysis & Modernization Architecture",
    shortTitle: "POS Gap Analysis",
    org: "KPN Fresh",
    role: "Associate Product Manager",
    period: "System Architecture & Gap Analysis",
    summary:
      "A deep 30+ gap operational and architectural analysis replacing 1980s legacy POS with a modern local-first Cloud/Express POS (Penguin POS)—eliminating offline crash downtime, data sync leaks, and manual reconciliation.",
    metrics: [
      { value: "30+", label: "Functional gaps diagnosed" },
      { value: "Local-First", label: "Offline-resilient architecture" },
      { value: "Zero Leak", label: "Sync & reconciliation target" },
    ],
    tags: ["POS 2.0", "System Architecture", "Offline Sync", "Retail Ops", "Gap Analysis"],
    blocks: [
      { type: "h2", text: "Executive Summary" },
      {
        type: "p",
        text: "Bluekode's legacy POS system, in use since the 1980s, was operational when KPN was acquired across 30 stores. Functional gaps caused data inconsistencies, frequent manual interventions, and customer checkout friction. Store managers navigated multiple fragmented interfaces with no centralized visibility into terminal performance, and crash recoveries required manual .exe launches.",
      },
      {
        type: "p",
        text: "This gap analysis benchmarked legacy POS workflows against the in-house Penguin Cloud POS and Express POS, formulating the blueprint for POS 2.0: a lean, purpose-built POS for sub-second cashier checkout paired with a centralized web Command Center for back-office operations.",
      },
      { type: "h2", text: "Key Analysis Modules & Scope" },
      {
        type: "ul",
        items: [
          "Cashier Workflows: In-depth examination of Cash Bill, Sales Returns, Terminal Management, Paid Out & Close denomination tracking, and multi-mode payment capture (EDC, UPI, cash).",
          "Store Manager Workflows: Day-end closing, DSD PO, GRN verification against PO/invoices, physical stock audits, F&V rate entry, and wastage/expiry logging.",
          "Local-First vs Cloud Architecture: Transitioning from fragile local server dependencies to an automated loop (10s → 2s → 3s retry intervals) with intelligent offline sync and automatic server detection.",
          "Hardware Ecosystem: Evaluation of peripherals including EDC payment machines, Data Logic barcode scanners, weighing machines, Bizerba scales, and thermal receipt printers.",
          "Competitive Benchmarking: 30+ front-office and back-office capabilities evaluated across leading modern retail systems.",
        ],
      },
      { type: "h2", text: "Strategic Recommendations for POS 2.0" },
      {
        type: "ul",
        items: [
          "Decouple Billing from Administrative Flows: Restrict terminal POS strictly to fast checkout; move non-checkout administrative flows (goods receiving, waste logging, stock audits) to web Command Center.",
          "Local-First Offline Resilience: Guarantee uninterrupted billing during server or network failure, auto-syncing transactions once connectivity is restored.",
          "Unified Customer Return Engine: Enable bill search, OTP-based authorization, and instant wallet credit for returns without requiring supervisor overrides.",
        ],
      },
    ],
  },
  {
    slug: "loyalty-program",
    title: "Tier-Based Omnichannel Loyalty Program for B2P Partners",
    shortTitle: "B2P Loyalty Program",
    org: "IBO",
    role: "Product Lead / Strategy",
    period: "0→1 Loyalty Strategy",
    summary:
      "An omnichannel tier-and-points loyalty architecture for 15,000+ construction & renovation professionals (Contractors, Technicians, Architects, Builders)—benchmarking global retail models and targeting 16%–22% partner returns.",
    metrics: [
      { value: "15K+", label: "Target B2P professional network" },
      { value: "16–22%", label: "Target partner return %" },
      { value: "Tier+Points", label: "Omnichannel reward model" },
    ],
    tags: ["Loyalty", "B2P Strategy", "Customer Journeys", "Tiered Rewards", "Fintech"],
    blocks: [
      { type: "h2", text: "Executive Summary" },
      {
        type: "p",
        text: "Business-to-Professional (B2P) partners—including Contractors, Technicians, Architects, Interior Designers, and Builders—represent high-frequency, high-ticket purchasers in the home building supplies market. However, baseline engagement showed only 21.5% of approved partners giving referrals, and only 65% of transacted partners receiving cashback.",
      },
      {
        type: "p",
        text: "To accelerate repeat order rates, lower customer acquisition costs, and foster long-term partner lock-in, I designed an omnichannel tiered loyalty program combining instant point burn, delivery fee waivers, and exclusive professional perks.",
      },
      { type: "h2", text: "Primary Research & Journey Insights" },
      {
        type: "ul",
        items: [
          "Contractors (4,965 profiles, 49% order share): Pain points centered on delivery delays, item availability, and credit requirements. Recommended dedicated account managers and bulk paint/wire discounts.",
          "Technicians (6,503 profiles, 22% order share): Required quick access, item quotations, and instant cashback on daily site essentials.",
          "Architects & Interior Designers (1,761 profiles, 25% order share): Needed NEFT payment modes, priority quotations, and project spend tracking logs.",
          "Store vs Online Journey Mapping: Mapped friction points from product discovery to delivery, returns, and post-purchase resolution.",
        ],
      },
      { type: "h2", text: "Proposed Tier Architecture & Unit Economics" },
      {
        type: "ul",
        items: [
          "IBO Member (₹0–₹9,999 annual spend): 5% points earn/burn, free delivery on orders >₹2,500, access to promotional sales (10% total return).",
          "IBO Pro Member (₹9,999–₹19,999 annual spend): 10% points earn/burn, free delivery >₹1,000, 1.5% wallet cashback, differentiated pricing (14%–16% total return).",
          "IBO Premium Member (>₹20,000 annual spend): 15% points earn/burn, unlimited free delivery, 3% wallet cashback, dedicated account manager, credit/EMI payment (19%–22% total return).",
          "Secondary Benchmarking: Grounded against tier programs of Home Depot (Pro Xtra), Lowes, Mistry Store, Industry Buying, and Kajaria Ceramics.",
        ],
      },
    ],
  },
  {
    slug: "arnxt",
    title: "ARNxt — A Full-Stack AR Commerce Platform (0→1)",
    shortTitle: "ARNxt",
    org: "Quleep",
    role: "Product Manager",
    period: "0→1 platform",
    summary:
      "An AR-powered B2B commerce platform letting brands showcase products in immersive 3D across mobile, web and white-label surfaces — built as an operational ecosystem, not an AR demo.",
    metrics: [
      { value: "30+", label: "Sellers onboarded" },
      { value: "24+ hrs", label: "Cut from model onboarding" },
      { value: "₹8 Cr", label: "Roadmap defined" },
      { value: "Incubation", label: "Secured at IMT Ghaziabad" },
    ],
    tags: ["0→1", "AR", "Marketplace", "Asset pipeline"],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "At Quleep I led the 0→1 development of ARNxt, an AR-powered B2B commerce platform enabling brands to showcase products in immersive 3D across mobile, web and white-label environments.",
      },
      { type: "p", text: "We were operating in an emerging category — AR commerce — where:" },
      {
        type: "ul",
        items: [
          "Merchant adoption was unproven",
          "Asset creation was operationally heavy",
          "Performance constraints were real",
          "Monetization models were unclear",
        ],
      },
      {
        type: "p",
        text: "The challenge was not just building an AR viewer — it was building a scalable, merchant-grade ecosystem around it.",
      },
      { type: "h2", text: "User Problem" },
      {
        type: "p",
        text: "Through early brand conversations (e.g. Excel Wallpapers) we identified three core pain points: most catalogs remained unseen, customers struggled to visualise durable goods (walls, decor, furniture), and brands feared losing design exclusivity on open marketplaces.",
      },
      {
        type: "ul",
        items: [
          "3D asset onboarding took 24+ hours",
          "No standardised modelling pipeline existed",
          "Merchants lacked analytics around AR engagement",
          "AR tools in the market were fragmented",
        ],
      },
      {
        type: "p",
        text: "So the problem wasn't just visualization. It was discoverability + visualization + control + insight.",
      },
      { type: "h2", text: "Product Strategy" },
      { type: "p", text: "I structured the platform into three interconnected surfaces." },
      { type: "h3", text: "1. Marketplace App (discovery layer)" },
      {
        type: "ul",
        items: [
          "AR “View in your space”",
          "Wishlist, reviews, enquiries",
          "Engagement analytics",
          "No user-level data exposure",
        ],
      },
      { type: "h3", text: "2. Business App (controlled distribution layer)" },
      {
        type: "ul",
        items: [
          "Device-specific credentials",
          "Screenshot disabled",
          "User-level analytics",
          "Campaign management",
          "Planning tools",
        ],
      },
      { type: "h3", text: "3. Merchant Dashboard (control & insights layer)" },
      {
        type: "ul",
        items: [
          "Content management",
          "Campaign management",
          "Enquiry resolution",
          "Analytics & competitive insights",
        ],
      },
      {
        type: "p",
        text: "This architecture solved open discovery + controlled exclusivity + merchant ownership.",
      },
      { type: "h2", text: "Key Technical & Product Decisions" },
      { type: "h3", text: "Standardize the 3D asset pipeline" },
      {
        type: "p",
        text: "We were seeing rendering failures, performance drops, inconsistent lighting and large file sizes. Instead of fixing issues reactively, I defined strict modelling standards:",
      },
      {
        type: "ul",
        items: [
          "Poly count limits (30k–100k)",
          "FBX format only",
          "Texture baking mandatory",
          "Real-world dimensions required",
          "Only base / metallic / roughness / normal maps supported",
        ],
      },
      {
        type: "p",
        text: "We also built an internal QA tester, a structured Google Drive hierarchy and a desktop fallback model tester. Impact: reduced QA cycles, 24+ hours cut from onboarding time and consistent AR performance. This was a scalability decision, not a documentation task.",
      },
      { type: "h3", text: "Build a backend segmentation API" },
      {
        type: "p",
        text: "For walls and floors AR, the frontend sends an image to a backend segmentation server, which returns a segmented S3 image the render layer overlays the product onto. This required coordinating frontend, backend and infra, designing failure fallbacks and ensuring latency didn't break UX. We prioritised stability over hyper-advanced ML and deterministic outputs over experimental models.",
      },
      { type: "h3", text: "Separate data access by app mode" },
      {
        type: "p",
        text: "The Marketplace App shared no user-level data with brands; the Business App exposed full user-level analytics. This addressed brand exclusivity concerns, privacy boundaries and data monetization potential.",
      },
      { type: "h3", text: "Monetization experimentation early" },
      {
        type: "p",
        text: "We tested SaaS subscription, white-label licensing and marketplace commission. Rather than committing early, we validated willingness to pay through onboarding and incubation validation.",
      },
      { type: "h2", text: "Trade-offs I Navigated" },
      { type: "h3", text: "Feature depth vs speed" },
      {
        type: "p",
        text: "We intentionally deferred AI personalization, advanced recommendation engines and deep conversion attribution to ship the MVP faster and validate merchant adoption first.",
      },
      { type: "h3", text: "Realism vs performance" },
      {
        type: "p",
        text: "High-poly models mean better visuals but lower performance. We enforced strict poly ceilings to preserve app performance on mid-range Android devices.",
      },
      { type: "h3", text: "AR perfection vs merchant tooling" },
      {
        type: "p",
        text: "Instead of obsessing over AR fidelity alone, we prioritised merchant dashboards, analytics, enquiry management and campaign controls — because AR without insights wouldn't drive retention.",
      },
      { type: "h2", text: "Outcomes" },
      {
        type: "ul",
        items: [
          "30+ sellers onboarded",
          "24+ hour reduction in model onboarding time",
          "Multi-platform launch (Web, Android, iOS, white-label)",
          "Secured IMT Ghaziabad incubation",
          "Defined ₹8 Cr roadmap",
        ],
      },
      {
        type: "p",
        text: "Most importantly: we built a scalable AR commerce foundation, not a demo product.",
      },
      { type: "h2", text: "What I Would Do Differently Today" },
      {
        type: "ul",
        items: [
          "Add AR session-to-purchase attribution",
          "Track uplift vs non-AR sessions",
          "Introduce a dynamic poly optimization pipeline",
          "Add predictive demand analytics from planning behaviour",
          "Build a plug-and-play SDK for Shopify",
        ],
      },
      { type: "h2", text: "Why This Was a Hard Product Problem" },
      {
        type: "p",
        text: "This wasn't “build an AR viewer”. It was emerging category validation, multi-surface platform architecture, operational pipeline design, data boundary decisions, merchant monetization strategy and infra coordination — thinking across user experience, merchant incentives, technical constraints, performance limits, security, exclusivity and business model design.",
      },
    ],
  },
];

export const trustRentCaseStudy: CaseStudy = {
  slug: "trustrent",
  title: "TrustRent — Escrow-Based Rental Transaction Platform (0→1)",
  shortTitle: "TrustRent",
  org: "Independent Product",
  role: "Product & Builder",
  period: "0→1 MVP · Live prototype",
  summary:
    "An escrow-based rental transaction platform for India's rental market — protecting payments until agreed conditions are met, making transactions transparent, and giving tenants and landlords a neutral layer of trust.",
  link: { label: "Visit trustrent.in", href: "https://www.trustrent.in/" },
  metrics: [
    { value: "0→1", label: "Functional MVP shipped" },
    { value: "Live", label: "Deployed product at trustrent.in" },
    { value: "Escrow", label: "Simulated transaction engine" },
  ],
  tags: ["0→1", "Fintech", "Escrow", "Rapid MVP"],
  blocks: [
    { type: "h2", text: "Problem Statement" },
    {
      type: "p",
      text: "Rental transactions in India suffer from a lack of trust between tenants and landlords, security deposit disputes, payment fraud and last-minute cancellations, no transparent transaction tracking, and manual, fragmented payment processes. Both parties lack a neutral transaction layer ensuring safety and accountability.",
    },
    { type: "h2", text: "Product Vision" },
    {
      type: "p",
      text: "Build a secure escrow-based rental transaction platform where:",
    },
    {
      type: "ul",
      items: [
        "Payments are protected until agreed conditions are met",
        "Transactions are transparent and trackable",
        "Users have confidence to transact with unknown parties",
        "Non-technical users can manage agreements and payments easily",
      ],
    },
    { type: "h2", text: "Target Users & Pain Points" },
    { type: "p", text: "Independent landlords, tenants relocating to new cities, and small property brokers — each with a distinct trust gap:" },
    {
      type: "ul",
      items: [
        "Tenant — fear of losing deposit → escrow lock + staged release",
        "Landlord — payment uncertainty → verified payment flow",
        "Both — lack of transaction visibility → wallet + transaction tracker",
        "Brokers — manual follow-ups → automated payment lifecycle",
      ],
    },
    { type: "h2", text: "Product Scope (MVP)" },
    {
      type: "ul",
      items: [
        "Property listing & agreement flow",
        "Digital wallet with escrow simulation",
        "Transaction lifecycle management",
        "Payment release conditions",
        "Role-based user journeys",
        "Dashboard with transaction states",
        "Fraud prevention messaging",
      ],
    },
    { type: "h2", text: "Key Product Decisions" },
    {
      type: "ul",
      items: [
        "Simulated escrow logic to validate UX before financial licensing",
        "Wallet-based mental model to simplify complex fintech flows",
        "Step-based transaction journey to reduce user anxiety",
        "Neutral UI language to avoid landlord/tenant bias",
        "Modular promo & rule system for future monetization",
      ],
    },
    { type: "h2", text: "Tech Stack & Execution" },
    {
      type: "ul",
      items: [
        "Rapid prototyping platform with a simulated backend transaction engine",
        "Escrow workflow logic design and wallet state management",
        "Custom branding assets & UI flows (Figma for UX flows)",
        "Supabase / mock APIs, deployed via static hosting",
      ],
    },
    { type: "h2", text: "Fintech Concepts Applied" },
    {
      type: "ul",
      items: [
        "Escrow transaction lifecycle",
        "Conditional payment release",
        "Wallet ledger structure",
        "Transaction state machines",
        "Risk & fraud signaling UX",
        "Compliance-aware UX flows",
      ],
    },
    { type: "h2", text: "Learning Outcomes" },
    {
      type: "ul",
      items: [
        "Designed fintech transaction systems from scratch",
        "Built a 0→1 product under real constraints",
        "Translated regulatory complexity into user flows",
        "Balanced trust, risk, and usability",
        "Validated product hypotheses through a functional prototype",
      ],
    },
    { type: "h2", text: "Limitations & Future Roadmap" },
    {
      type: "p",
      text: "Real payments are intentionally disabled, compliance & KYC are future scope, and legal escrow integration is pending licensing. The roadmap covers licensed escrow provider integration, real payment gateway onboarding, KYC & compliance workflows, an AI fraud detection layer, and broker & enterprise dashboards.",
    },
  ],
};

export const independentProjects: CaseStudy[] = [
  mockTestMakerCaseStudy,
  trustRentCaseStudy,
];

export const allCaseStudies: CaseStudy[] = [
  ...independentProjects,
  ...workCaseStudies,
];

export const caseStudies: CaseStudy[] = allCaseStudies;

export const getCaseStudy = (slug: string) => allCaseStudies.find((c) => c.slug === slug);
