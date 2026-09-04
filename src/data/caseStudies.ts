export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type CaseStudy = {
  slug: "promo-manager" | "refunds" | "arnxt";
  title: string;
  shortTitle: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
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

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
