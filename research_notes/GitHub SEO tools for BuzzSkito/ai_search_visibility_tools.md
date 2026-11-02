# AI-search visibility tools (GEO / AEO / LLM SEO) on GitHub: inventory and fit for buzzskito.ca

Research date: 2026-10-21. Star counts, licences and dates come from the GitHub API (the same data the repo pages show), pulled on 2026-10-21. "Last commit" = newest commit on the default branch (pulled per repo). "Last push" = newest push to any branch (from search results), used where the commit was not pulled. "Abandoned" = no commit for 6+ months (before 2026-04-21). Nothing was installed, cloned or run; READMEs were read as text only.

Workload used for every cost figure: ~100 prompts tracked weekly = 100 x 52 / 12 = **~433 prompt runs per engine per month**.

---

## 1. Which open-source AI-visibility tools are notable, credible and maintained, and how do they query the AI engines?

### Takeaway
There are about two dozen maintained open-source trackers, but almost all are under 14 months old and have 20-500 stars. The most-starred "GEO" repos (claude-seo 19.6k, geo-seo-claude 11.1k) are Claude Code **audit skills**, not trackers. Trackers fall into three groups: (a) official vendor APIs with web search on (allowed by the APIs' terms, but a vendor study says API answers often differ from what users see); (b) consumer answers bought from scraping vendors (Bright Data, Cloro, DataForSEO, Oxylabs, SearchAPI); (c) tools that drive **your own logged-in browser sessions** on chatgpt.com, claude.ai and perplexity.ai (highest terms-of-service and account risk). Google AI Overviews, AI Mode and Copilot have no answer API, so every tool that covers them uses a SERP scraper.

### Cited Findings

#### A. Trackers (run a prompt set against AI engines on a schedule and record mentions and citations)
Source for each row: the repo page and README linked in column 1.

| Repo | What it does | Stars | Last commit | Licence | How it reaches the engines | Cost notes in README |
|---|---|---|---|---|---|---|
| [elmohq/elmo](https://github.com/elmohq/elmo) | Tracks ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews and AI Mode. Stores every cited URL with position, records the web searches an engine ran while grounding ("query fan-out"), benchmarks competitors. Worker runs prompts "several times a day by default". Docker Compose + Postgres. | 479 | 2026-10-20 | MIT | Mixed: "Scraping providers capture the real consumer surfaces" plus model APIs; you need keys for at least one AI provider or scraper, plus a TypeSafe key for its "Jev" judge model | Jev "very roughly $0.15-0.35 per 1,000 answers: about $2-4 a month"; Elmo Cloud from $29/mo; repo sponsored by SearchAPI |
| [limelit-co/open](https://github.com/limelit-co/open) | Seven engines: ChatGPT, Claude, Perplexity, Gemini, Google AI Overview, Google AI Mode, Bing Copilot. Labels "api" vs "scraped" on every metric. Ships two free no-install skills: `ai-crawler-check` (which AI crawlers a robots.txt lets in) and `llms-txt-check`. Created 2026-09-11. | 218 | 2026-10-20 | Apache-2.0 | ChatGPT, Claude, Perplexity, Gemini "through their vendor APIs with web search on"; AI Overview, AI Mode and Copilot "through scrapers, because those three have no API at all" (DataForSEO, SearchAPI); optional chatgpt.com scraper via DataForSEO | "Your keys, your bill"; optional Cloud with a free monthly allowance |
| [danishashko/geo-aeo-tracker](https://github.com/danishashko/geo-aeo-tracker) | ChatGPT, Perplexity, Gemini, Copilot, Google AI Mode; 0-100 score from mentions, position, citations, sentiment; also an "AEO audit" (llms.txt, robots.txt, schema). Results stored in your browser by default (optional Supabase). | 302 | 2026-10-19 | MIT | Bright Data "AI Scraper API" (scrapes the consumer apps); OpenRouter for analysis; Gemini grounding. README is branded "Powered by Bright Data" | "Free software, pay-per-call data" (Bright Data, OpenRouter, Gemini bill per call) |
| [oneglanse/oneglanse](https://github.com/oneglanse/oneglanse) | ChatGPT, Perplexity, Gemini, Claude, Google AI Overview, "by running prompts on their actual websites, not model APIs". | 227 | 2026-10-03 | MIT | Playwright + Camoufox (modified Firefox) driving the real sites with "your own AI accounts and saved browser logins"; VPS runs need a residential proxy and "bot-detection handling" | No fee; model API, VPS and proxy costs extra |
| [jianruntech/geo-score](https://github.com/jianruntech/geo-score) | Free 0-100 "can AI cite you" score on a published rubric (no key), then "Ask" one question or "Watch" a fixed question set weekly. Prints confidence intervals. Created 2026-09-08. | 307 | 2026-10-19 | MIT | Search-enabled official APIs of OpenAI, Perplexity, Gemini, Anthropic, or OpenRouter (your keys); `watch run --dry-run` shows caps and cost first | API usage only |
| [AI2HU/gego](https://github.com/AI2HU/gego) | Schedules prompts across LLMs, extracts web-search citations, tracks brand aliases. Go + MongoDB. | 106 | 2026-07-23 | GPL-3.0 | Official APIs only: OpenAI, Anthropic, Ollama, Google Gemini, Perplexity Sonar | Cost forecasting is still on its to-do list |
| [onism1767-creator/potato](https://github.com/onism1767-creator/potato) | Brand mention and citation check in **Claude's** web-search answers only; deterministic scoring, offline HTML report, Windows portable build. | 166 | 2026-06-22 | MIT | Anthropic API with web search (your key) | "economy (Haiku) tier typically lands around $5 or less" per full check |
| [ansvisor/ansvisor](https://github.com/ansvisor/ansvisor) | AI-search "intelligence platform" (ChatGPT, AI Overviews, AI Mode, Gemini, Claude, Perplexity, Copilot, Grok) with MCP server. Copyright Empler AI Inc. | 153 | 2026-10-21 | MIT | Cloro ("web scraping for AI platform responses"), DataForSEO, Scrape.do, plus OpenAI/Gemini/Anthropic keys | Provider bills |
| [ai-search-guru/getcito-...](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool) | ChatGPT, Google AI Mode, AI Overview, Perplexity, Gemini, Copilot, Grok; pnpm/Turborepo app + pg-boss worker. | 496 | 2026-08-27 | README badge says MIT; GitHub detects NOASSERTION | Scrapers: BrightData, Oxylabs, Olostep, Cloro, DataForSEO; direct LLM APIs: OpenRouter, Anthropic, OpenAI, Mistral, Azure | Provider bills |
| [Albert-Weasker/niubigeo](https://github.com/Albert-Weasker/niubigeo) | "AI brand visibility and competitor reports"; question -> model -> answer -> mentions -> citations. Created 2026-09-03; 807 forks, 132 open issues. README links to a paid external "video advisor"; repo description advertises "AI testing by real people". | 8,508 | 2026-10-10 | Apache-2.0 | OpenRouter / direct provider APIs; web search set per model | "Model API, hosting and infrastructure costs are separate" |
| [Auriti-Labs/geo-optimizer-skill](https://github.com/Auriti-Labs/geo-optimizer-skill) | Mainly an audit CLI (0-100 score, `geo fix` writes robots.txt rules, llms.txt, JSON-LD) plus `geo citations` "does AI cite you?". | 1,142 | 2026-10-21 | MIT | Your API keys: Perplexity, OpenAI, Anthropic, Groq, Gemini, MiniMax, DeepSeek; SerpBase for Google SERP + AI Overview | Freemium: hosted geoready.dev "from $19/mo" |
| [alexpospekhov/searchstack-aeo](https://github.com/alexpospekhov/searchstack-aeo) | Cron-ready CLI: AEO monitor (ChatGPT, Perplexity, Claude, Grok, local models), Google AI Overview monitor, Gemini grounding check, llms.txt generate/validate, Plausible AI-referral breakdown. | 110 | 2026-09-29 | MIT | APIs (Perplexity sonar, Gemini grounding, etc.) + DataForSEO | Claims "~$5" monthly |
| [databluedev/searchmirror](https://github.com/databluedev/searchmirror) | Self-hosted rank tracker + AI-visibility monitor. | 110 | 2026-10-01 | AGPL-3.0 | DataBlue SERP API (vendor's own); "Geo Citations" via OpenAI/Anthropic/Perplexity/Gemini keys | Vendor API |
| [paulmassen/seo-playground](https://github.com/paulmassen/seo-playground) | DataForSEO dashboard incl. Prompt Tracker (ChatGPT, Claude, Gemini, Perplexity, daily) and LLM Mentions. | 71 | 2026-10-19 | none detected | DataForSEO API; README carries a DataForSEO affiliate link | DataForSEO credit |
| [AKzar1el/mcp-geo](https://github.com/AKzar1el/mcp-geo) | MCP server: "Track brand citations across seven AI search surfaces"; works in Claude Code/Desktop. | 38 | 2026-09-24 | MIT | Your keys: OpenAI, Anthropic, Gemini, Perplexity... | Free OSS; optional EUR 99 audit |
| [aicw-io/aicw-ai-mentions](https://github.com/aicw-io/aicw-ai-mentions) | CLI + MCP server; asks several AI models the same questions, ranks mentions and cited links. | 25 | 2026-10-10 | MIT (switched that day) | OpenRouter by default; also OpenAI/Anthropic/Perplexity keys | API usage |
| [moaljumaa/habibi](https://github.com/moaljumaa/habibi) | "Free alternative to Peec AI": OpenRouter API engines plus free "browser-based scrape engines" for ChatGPT, Claude, Perplexity, Google AI Overview. | 25 | 2026-08-09 | NOASSERTION | Drives the real UIs with a one-time login (you solve the CAPTCHA for AI Overview); Claude and Perplexity "anti-bot protection blocks headless Chromium outright", so they need a visible window | Browser engines free; API engines per call |
| [aws-samples/sample-llm-search-citation-analysis-with-amazon-bedrock](https://github.com/aws-samples/sample-llm-search-citation-analysis-with-amazon-bedrock) | Serverless (Step Functions, Lambda, Cognito, CloudFront) brand/citation tracker with dashboard. | 23 | 2026-10-14 | MIT-0 | Official web-search APIs: OpenAI Responses `web_search`, Perplexity Agent API, Gemini Google Search grounding, Claude `web_search_20260318` | "$5-10 of credit per provider covers regular use" |
| [yaojingang/GEORank](https://github.com/yaojingang/GEORank) | Chinese-language GEO ranking/diagnostics platform with JSON-LD and llms.txt generators. | 506 | 2026-08-12 | Apache-2.0 | OpenAI-compatible model APIs (your keys) | API usage |

Smaller trackers seen (last push): [anyin-ai/aperture](https://github.com/anyin-ai/aperture) 28 stars (2026-07-21, MIT); [Pupok462/open-geo](https://github.com/Pupok462/open-geo) 27 (2026-10-07, MIT); [hellowalt/aeo-radar](https://github.com/hellowalt/aeo-radar) 26 (2026-07-01, MIT); [gooseworks-ai/goose-aeo](https://github.com/gooseworks-ai/goose-aeo) 33 (2026-03-27, MIT, stale); [codextde/autoseo](https://github.com/codextde/autoseo) 17 (2026-10-17); [Blazity/ai-visibility-slackbot](https://github.com/Blazity/ai-visibility-slackbot) 9 (2026-07-10, Vercel Workflow + AI SDK).

#### B. Abandoned trackers (no commit for 6+ months)
- [sarahkb125/llm-brand-tracker](https://github.com/sarahkb125/llm-brand-tracker): 58 stars, last commit 2025-07-23, Apache-2.0, OpenAI API only.
- [AICMO/ai-cmo](https://github.com/AICMO/ai-cmo): 58 stars, last commit 2025-10-10, MIT, needs Vertex AI service account + OpenAI key.
- [nibzard/llm-answer-watcher](https://github.com/nibzard/llm-answer-watcher): 9 stars, last push 2025-11-11, MIT.

#### C. The most-starred GEO repos are audit skills, not trackers
- [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo): 19,570 stars, last commit 2026-10-21, MIT. Claude Code SEO skill with `/seo geo`, `/seo agentic` (llms.txt, Markdown, Lighthouse Agentic Browsing) and an SE Ranking extension for AI share of voice. Its changelog states "Google Search ignores llms.txt" and records security fixes (installer credential-injection, SSRF) in v2.2.0 and v2.2.6.
- [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude): 11,149 stars, last commit 2026-10-05, MIT. GEO audit skill: citability scoring, robots.txt checks for "14+ AI crawlers", llms.txt generation; README pitches a paid community for selling GEO audits ("GEO agencies charge $2K-$12K/month").
- Others (last push): [onvoyage-ai/gtm-engineer-skills](https://github.com/onvoyage-ai/gtm-engineer-skills) 1,329 (2026-10-11, MIT); [Bhanunamikaze/Agentic-SEO-Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill) 980 (2026-10-14, MIT); [aigclink/geolook](https://github.com/aigclink/geolook) 783 (2026-08-10, MIT); [mverab/eGEOagents](https://github.com/mverab/eGEOagents) 205 (2026-10-19, MIT).

#### D. llms.txt generators and validators
- [AnswerDotAI/llms-txt](https://github.com/AnswerDotAI/llms-txt): the proposal itself (llmstxt.org) and reference tooling; 2,665 stars, last commit 2026-09-24, Apache-2.0.
- [thedaviddias/llms-txt-hub](https://github.com/thedaviddias/llms-txt-hub): directory of sites with llms.txt + checker browser extension; 914 stars, last commit 2026-10-05, NOASSERTION.
- [langchain-ai/mcpdoc](https://github.com/langchain-ai/mcpdoc): exposes llms.txt to IDEs; 1,031 stars, **archived**.
- [firecrawl/llmstxt-generator](https://github.com/firecrawl/llmstxt-generator): 540 stars, last commit 2025-06-17, no licence; README: "This API is being deprecated" (abandoned). Also abandoned: [firecrawl/create-llmstxt-py](https://github.com/firecrawl/create-llmstxt-py) 327 (last push 2025-06-02), [rlancemartin/llmstxt_architect](https://github.com/rlancemartin/llmstxt_architect) 255 (2025-03-29), [krish-adi/llmstxt-site](https://github.com/krish-adi/llmstxt-site) 226 (2025-06-15).
- [dotenvx/llmstxt](https://github.com/dotenvx/llmstxt): sitemap.xml -> llms.txt CLI; 149 stars, last commit 2026-03-05 (7 months, stale), BSD-3-Clause.
- Docs-framework plugins (docs sites, not marketing sites): vitepress-plugin-llms 408, nuxt-llms 171, docusaurus-plugin-llms 146, mkdocs-llmstxt 132, starlight-llms-txt 116 stars ([search results, 2026-10-21](https://github.com/search?q=llmstxt&type=repositories)).
- Next.js-specific generators are tiny: [bke-daniel/next-llms-txt](https://github.com/bke-daniel/next-llms-txt) 15 stars (no licence), [agentmarkup/agentmarkup](https://github.com/agentmarkup/agentmarkup) 28 (MIT; build-time llms.txt, JSON-LD, validation for Next.js/Astro/Vite/Nuxt).
- Validators: largest is [raphaelstolt/llms-txt-php](https://github.com/raphaelstolt/llms-txt-php) at 33 stars; every other "llms.txt validator" repo found had 0-3 stars (e.g. [LucasFerrazSEO/llms-txt-lint](https://github.com/LucasFerrazSEO/llms-txt-lint), [portdeveloper/llms-txt-check](https://github.com/portdeveloper/llms-txt-check)). limelit's `llms-txt-check` skill and Auriti's `geo llms` (flags stale URLs) also validate.

#### E. AI-crawler user-agent lists and log analyzers
- [ai-robots-txt/ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt): 4,207 stars, last commit 2026-10-21 ("Update from knownagents.com"), MIT. Maintained list of AI agents in robots.txt, .htaccess, nginx and HAProxy formats (built for blocking).
- [monperrus/crawler-user-agents](https://github.com/monperrus/crawler-user-agents): 1,411 stars, last commit 2026-09-29, MIT. One JSON file of crawler UA patterns; npm, PyPI and Go packages.
- IP lists for checking a bot is genuine: [lord-alfred/ipranges](https://github.com/lord-alfred/ipranges) 1,198 stars (CC0, daily; includes OpenAI), [FabrizioCafolla/openai-crawlers-ip-ranges](https://github.com/FabrizioCafolla/openai-crawlers-ip-ranges) 42 (MIT).
- Dedicated AI-crawler log analyzers on GitHub are all tiny (0-4 stars): [Tistou314/ai-log-analyzer](https://github.com/Tistou314/ai-log-analyzer) 4, [agent-ecosystem/agent-traffic-classifier](https://github.com/agent-ecosystem/agent-traffic-classifier) 2, [square-al/cf-crawler-telescope](https://github.com/square-al/cf-crawler-telescope) 0 (Cloudflare Free plan), [armature-tech/ai-traffic](https://github.com/armature-tech/ai-traffic) 0, [AI-Advisors/ai-crawler-analytics](https://github.com/AI-Advisors/ai-crawler-analytics) 0 (GTM server-side tag).

#### F. Research code and curated lists
- [GEO-optim/GEO](https://github.com/GEO-optim/GEO) (code for the original "GEO" paper): 344 stars, last commit 2025-10-30 (abandoned), Apache-2.0. [cxcscmu/AutoGEO](https://github.com/cxcscmu/AutoGEO) (ICLR'26, learns engine preferences and rewrites content): 231 stars, last push 2026-06-14, MIT.
- Lists: [amplifying-ai/awesome-generative-engine-optimization](https://github.com/amplifying-ai/awesome-generative-engine-optimization) 528 stars (last push 2026-04-14, stale); [luka2chat/awesome-geo](https://github.com/luka2chat/awesome-geo) 130 (2026-10-14, CC0); [DavidHuji/Awesome-GEO](https://github.com/DavidHuji/Awesome-GEO) 124 (research papers, 2026-09-24); [izak-fisher/generative-engine-optimization-tools](https://github.com/izak-fisher/generative-engine-optimization-tools) 118 (2026-01-29, stale); [RankSpotAI/awesome-geo-tools](https://github.com/RankSpotAI/awesome-geo-tools) 77 (2026-09-06, compares tools on engines, refresh rate and cost); [elmohq/awesome-answer-engine-optimization](https://github.com/elmohq/awesome-answer-engine-optimization) 4 (official docs and crawler user agents).

#### G. API answers vs what users see (the credibility problem)
- Surfer ran 1,000 prompts on ChatGPT, Perplexity, Gemini, AI Mode and AI Overviews (data collected 2026-08-04 with scraping vendor cloro; 13,779 answers) through both the consumer interface and the API. Brand-mention overlap was only 15.5%-23.8% (21.3%-31.6% after normalising names); ChatGPT's API named 13.8 brands per answer vs 7.9 in the app; ChatGPT's app cited 12.1 sources vs 3.1 via API; domain-level source overlap was 26.7% for Perplexity and 4.8% for ChatGPT. Surfer concludes "You cannot reliably track your AI visibility based on APIs", but it sells scraped tracking and sampled each prompt once — [Surfer](https://surferseo.com/blog/llm-scraped-ai-answers-vs-api-results/)
- Google AI Overviews, AI Mode and Bing Copilot "have no API at all" — [limelit-co/open README](https://github.com/limelit-co/open)
- "Not every API shows sources. Perplexity Sonar returns the real source URLs. OpenAI, Anthropic, and Groq only reveal what the model already knows about your brand" (for calls without web search) — [Auriti-Labs/geo-optimizer-skill README](https://github.com/Auriti-Labs/geo-optimizer-skill)
- Noise: geo-score's sample output shows Perplexity citing the site in 4 of 11 answers = 36%, with an interval of 8-75% — [jianruntech/geo-score README](https://github.com/jianruntech/geo-score)
- Ahrefs Brand Radar (a paid tool this site already has through the Ahrefs MCP) runs search-backed prompts through AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini and Copilot; custom prompts are listed for ChatGPT, Gemini, Perplexity and Copilot, while AI Overviews/AI Mode come from its search-query indexes — [Ahrefs Brand Radar](https://ahrefs.com/brand-radar/), [Ahrefs help](https://help.ahrefs.com/en/articles/11064852-what-is-brand-radar-and-how-do-you-use-it)

### Inferences

**Fit verdicts for buzzskito.ca** (income = Amazon affiliate + Mediavine display ads, both need the reader on our page, plus GTA leads; we already have llms.txt, robots.txt, Ahrefs MCP incl. Brand Radar, GSC and GA4 scripts):

| Tool | Verdict | One-line reason |
|---|---|---|
| GA4 "AI Assistant" channel + Ahrefs Bot Analytics + Brand Radar cited pages (no new tool, see Q5) | **Adopt now** | Measures AI referrals, AI-crawler hits and which of our pages get cited, using tools we already pay for or have |
| limelit-co/open | Maybe later | Best-designed hybrid (labels API vs scraped per metric, covers all 7 surfaces); only 6 weeks old; adds little over Brand Radar today |
| elmohq/elmo | Maybe later | Most complete (citations + query fan-out); worth a look if Brand Radar budget runs out, but its consumer-surface data comes from scraping vendors |
| jianruntech/geo-score | Maybe later | Cheapest clean option (official search APIs, weekly watch, honest intervals); useful for 10-20 GTA lead prompts in May-July |
| AI2HU/gego | Maybe later | Official APIs only, but no Google AI Overviews/AI Mode, GPL, Go + MongoDB to host |
| AKzar1el/mcp-geo, aicw-ai-mentions | Maybe later | MCP fits the owner's Claude Code workflow; small projects |
| alexpospekhov/searchstack-aeo | Maybe later | Cheap cron CLI incl. AI Overview monitor; its analytics part targets Plausible, not GA4 |
| ai.robots.txt / crawler-user-agents | Maybe later (as data) | Up-to-date UA dictionaries if we ever classify crawler hits ourselves; we allow, not block |
| danishashko/geo-aeo-tracker | Skip | Depends on Bright Data scraping of consumer apps (vendor-branded); duplicates Brand Radar |
| oneglanse, habibi | Skip | Drive our own logged-in ChatGPT/Claude/Perplexity accounts with anti-detection browsers; ToS and account risk (Q6) |
| ansvisor, getcito | Skip | Heavy self-host stacks built on scraping vendors (Cloro, Bright Data, Oxylabs); getcito's licence is unclear on GitHub |
| niubigeo | Skip | Tests models through OpenRouter rather than the consumer products; 8.5k stars in 7 weeks next to a paid-service funnel is a marketing signal, not proof of quality |
| potato | Skip | Claude-only; Claude sent ~3% of AI-chatbot visits in Ahrefs' March 2026 data (Q3) |
| searchmirror, seo-playground | Skip | Wrappers for one data vendor (DataBlue / DataForSEO); seo-playground has no licence and no login by default |
| aws-samples Bedrock sample | Skip | Full AWS serverless deployment for a small prompt set; useful only as a reference for official web-search API settings |
| GEORank | Skip | Chinese-market platform |
| claude-seo, geo-seo-claude, other GEO audit skills, geo-optimizer-skill | Skip | Audit what we already did (llms.txt, robots, schema); no income effect |
| llms.txt generators/validators (all) | Skip | Our register script already writes llms.txt; evidence says AI retrieval bots barely fetch it (Q4) |
| Abandoned trackers, GEO-optim/GEO, AutoGEO, awesome lists | Skip | Unmaintained or research/reference only |

- The real choice is not which open-source tracker, but whether any prompt tracking beyond Brand Radar is worth owner time. For the display-ad and affiliate side, the evidence in Q3 says no. For GTA leads, a small monthly check of local prompts ("mosquito control Mississauga") is the only use with a plausible income link.
- Official-API trackers are the only clean route but may not match what users see (Surfer: 4.8% ChatGPT domain overlap). Scraped-UI trackers match better but rely on the very scraping that OpenAI's terms prohibit (Q6). Neither is a reliable "ranking" in the SEO sense: one sample per prompt per week gives very wide intervals.
- Stars are a weak quality signal in this niche: the top repos are 2026-vintage agent skills, many trackers are vendor funnels (Bright Data, DataForSEO, DataBlue, SearchAPI, Cloro sponsorships or affiliate links), and one repo gained 8.5k stars in seven weeks.

### Gaps
- No star-history or GitHub-trending data was pulled; "popular/trending" here = stars on 2026-10-21 plus creation date.
- The authenticity of niubigeo's star growth cannot be checked from public data.
- Three searches ("geo tracker chatgpt", "ai overviews tracker", "brand mentions chatgpt perplexity") hit the GitHub API rate limit, so a few small trackers may be missing; the earlier eleven searches covered the main terms.
- Exact scraping vendors behind Elmo's consumer-surface data are documented on its site, not in the README; not checked.

---

## 2. What does tracking cost per month (~100 prompts weekly = ~433 runs per engine per month)?

### Takeaway
The software is free. Official-API tracking costs roughly **$1-15 per engine per month**, or **about $17-45/month** for ChatGPT + Claude + Perplexity + Gemini + Google AI Overviews/AI Mode, plus hosting and owner time. Commercial equivalents start at about $129-295/month. A single cheap engine (Gemini or Perplexity) costs about $1-6/month.

### Cited Findings
- OpenAI web search tool: $10.00 per 1,000 calls plus search content tokens at model rates (fixed 8,000 input tokens per call for gpt-4o-mini / gpt-4.1-mini); preview tool for non-reasoning models $25.00 per 1,000 calls with free content tokens; gpt-5-mini $0.25 in / $2.00 out per 1M tokens; gpt-4o-mini $0.15 / $0.60 — [OpenAI pricing](https://developers.openai.com/api/docs/pricing)
- Perplexity: Search API $5.00 per 1,000 requests ($1.00 "fast"); Agent API `web_search` $0.0025 per invocation ($0.001 fast), model tokens billed separately; the pricing page does not list Sonar token rates — [Perplexity pricing](https://docs.perplexity.ai/getting-started/pricing)
- Perplexity's Sonar chat-completions API is reported to be retired on 2026-09-27 in favour of the Agent API — [TrueFoundry](https://www.truefoundry.com/docs/change-announcements/perplexity-agent-api-migration); contested: Perplexity's own migration guide gives no date — [ecorpit](https://ecorpit.com/perplexity-sonar-retirement-september-27-agent-api-migration-2026/); the AWS sample says the Sonar API "was retired on 2026-09-27" — [aws-samples README](https://github.com/aws-samples/sample-llm-search-citation-analysis-with-amazon-bedrock)
- Gemini grounding with Google Search: "5,000 free search requests per month (shared across all Gemini 3 and newer models), then $14 per 1,000 requests"; Gemini 3.1 Flash-Lite $0.25 in / $1.50 out per 1M tokens — [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Claude web search: "$10 USD per 1,000 searches, plus standard token costs"; search results count as input tokens; "Simple factual queries typically use 1-3 searches" — [Claude web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool). Claude Haiku 5.5 $0.10 in / $0.50 out per 1M tokens (prompts up to 100k tokens); Sonnet 5.5 $2 / $10 — [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- DataForSEO SERP API covers Google AI Overviews and AI Mode "from $0.0006 per SERP" (price depends on method and priority) — [DataForSEO GEO](https://dataforseo.com/solutions/geo); LLM Mentions API $0.1 per request + $0.001 per row — [DataForSEO LLM Mentions](https://dataforseo.com/apis/ai-optimization-api/llm-mentions-api)
- Tool-reported costs: Elmo's judge model ~$0.15-0.35 per 1,000 answers (~$2-4/month), Elmo Cloud from $29/mo — [elmo](https://github.com/elmohq/elmo); "$5-10 of credit per provider covers regular use" — [aws-samples](https://github.com/aws-samples/sample-llm-search-citation-analysis-with-amazon-bedrock); "~$5" monthly — [searchstack-aeo](https://github.com/alexpospekhov/searchstack-aeo); Claude-only full check "around $5 or less" on Haiku — [potato](https://github.com/onism1767-creator/potato); geoready.dev from $19/mo — [geo-optimizer-skill](https://github.com/Auriti-Labs/geo-optimizer-skill)
- Commercial reference prices (as quoted by competitor READMEs): Ahrefs Brand Radar from $129/mo, Semrush AI Toolkit from $139.95/mo — [elmo README](https://github.com/elmohq/elmo); Semrush SEO + AI Search Starter $199/mo ($165.17 billed annually, 50 prompts), AthenaHQ Starter $295/mo — [geo-aeo-tracker README](https://github.com/danishashko/geo-aeo-tracker). Ahrefs pages disagree on custom-prompt pricing (one cached page lists a $699/mo tier with 2,500 checks) — [Ahrefs Brand Radar](https://ahrefs.com/brand-radar/)

### Inferences
Estimated monthly API cost at 433 prompt runs per engine (token counts are assumptions: ~10k input/1k output per ChatGPT answer, ~30k input/1k output per Claude answer, ~3k/1k for Gemini):

| Engine | Route | Arithmetic | Est. $/month |
|---|---|---|---|
| ChatGPT | gpt-5-mini + web_search tool | 433-1,300 calls x $0.01 = $4.33-13.00; tokens 433 x ~$0.0045 = ~$2 | ~$6-15 |
| Perplexity | Agent API + web_search | 433-866 invocations x $0.0025 = ~$1-2; tokens (rate not verified) | ~$2-6 |
| Gemini | 3.1 Flash-Lite + Google Search grounding | searches stay inside the 5,000/month free allowance; tokens 433 x ~$0.0023 = ~$1 | ~$1-2 |
| Claude | Haiku 5.5 + web search | 433-1,300 searches x $0.01 = $4.33-13.00; tokens 433 x ~$0.0035 = ~$1.50 | ~$6-15 |
| Google AI Overviews + AI Mode | DataForSEO SERP API | 866 SERPs x $0.0006 = $0.52 floor; live/priority queues cost more | ~$1-5 |
| Mention/sentiment extraction | small model | ~2,600 answers | ~$1 |
| **Total, all six surfaces** | | | **~$17-45** |

- Scraped consumer-app data (Bright Data, Cloro, Oxylabs) would replace or add to these; its price was not verified.
- Hosting: $0 if run from the owner's PC on a schedule; hosted versions $19-29/month. The larger cost is owner time reading results that, per Q3, rarely move income.

### Gaps
- Sonar token prices on the Agent API, DataForSEO per-request prices for AI Mode and the ChatGPT scraper, and Bright Data / Cloro prices were not found on official pages.
- Real search counts per prompt (1 vs 3 web searches) depend on the model; the ranges above bracket that.
- Whether the owner's Ahrefs plan includes Brand Radar custom prompts, and at what cap, is unknown.

---

## 3. How much traffic do ChatGPT, Perplexity and AI Overviews send to informational sites in 2025-2026, and do citations convert to visits?

### Takeaway
AI chatbots send about **0.25-0.3% of web visits** (Ahrefs, 74,752 sites, March 2026) against roughly 28-30% for Google, so Google is about 100x larger. Citations rarely become clicks: people clicked a link inside Google's AI summaries in about 1% of visits (Pew). AI Overviews cut clicks to the top result by 35-58% in observational studies and by 39.8% in the first randomized study. AI referrals usually convert better per visit, but the strong figures are B2B or vendor case studies, not ad- or affiliate-funded publishers.

### Cited Findings
- March 2026, 74,752 sites: AI chatbots sent ~3.5M visits = 0.28% of total traffic (ChatGPT ~2.7M, Perplexity ~230k, Gemini ~230k, Claude ~102k); Google sent ~345.2M; Google's share fell from 35.11% (June 2025) to 30.53% (March 2026); AI Overviews/AI Mode clicks count as ordinary search traffic, so AI is somewhat underestimated — [Ahrefs](https://ahrefs.com/blog/ai-chatbot-traffic/) (same page also gives a 28.12% Google share, an internal inconsistency)
- Other panels: Conductor 1.08% (1,215 US enterprise domains, May-Sep 2025); Contentsquare 0.2% (6,500 sites, Q4 2025) — [Mission Growth summary](https://missiongrowth.io/blog/ai-referral-traffic-statistics)
- AI Overviews and top-result CTR: presence of an AI Overview correlates with a 58% lower average CTR for the top-ranking page (300,000 keywords, GSC desktop CTR; published 2026-02-04; up from 34.5% in April 2025) — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- Pew (900 US adults, March 2025 browsing): users clicked a traditional result in 8% of visits with an AI summary vs 15% without, very rarely clicked the sources cited in the summary (~1% per secondary coverage), and ended the session more often (26% vs 16%) — [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/); [Slashdot coverage](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds)
- First randomized study (Agarwal and Sen, revised June 2026; 1,065 desktop Chrome users, UK): outbound organic clicks fell 39.8% when an AI Overview appeared — [PPC Land](https://ppc.land/ai-overviews-cut-publisher-clicks-39-8-in-first-randomized-study/)
- Counterpoint: Seer Interactive (5.47M queries) found organic CTR on AI-Overview queries rose from 1.3% (Dec 2025) to 2.4% (Feb 2026), and brands cited inside an overview earned more clicks than uncited ones — [presenc.ai comparison](https://presenc.ai/research/ai-overviews-ctr-impact-2026)
- Google says clicks from results pages with AI Overviews "are higher quality (meaning, users are more likely to spend more time on the site)" and reports AI-feature traffic inside the "Web" search type in Search Console — [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- TollBit (H1 2026): AI chatbot referrals have 96% lower click-through than traditional search; 22B+ AI bot scrapes detected — [TollBit](https://tollbit.com/web-access/). Digital Trends: 4.1M bot scrapes vs just under 4,200 AI-referred visitors in one week (966:1) — [Media Copilot](https://mediacopilot.ai/digital-trends-tollbit-ai-bot-monitoring/)
- Cloudflare crawl-to-referral ratios (secondary, figures vary by period): July 2026 Anthropic 1,917:1, OpenAI 251:1 — [ecorpit](https://ecorpit.com/ai-crawler-crawl-to-referral-ratio-2026-geo-decision/); late May-early June 2026 OpenAI ~857:1, Google ~5:1 — [DEV Community](https://dev.to/mr_manushukla/september-15-2026-cloudflares-crawler-split-and-how-to-configure-search-agent-and-training-3ek0)
- Conversion: secondary roundups repeat vendor figures, e.g. one Seer Interactive B2B client where ChatGPT visitors converted at 15.9% vs 1.76% for Google organic, and Adobe retail data (March 2026) with AI traffic converting 42% better; these roundups note most headline figures are vendor-run — [pixis.ai](https://pixis.ai/blog/why-ai-search-traffic-converts-at-4-5x-what-the-data-actually-shows/), [citeproof.co](https://citeproof.co/blog/llm-traffic-conversion-rate)
- Much AI-driven traffic is reported to arrive without a referrer and land in Direct (vendor claim, e.g. "70% Of Your AI Traffic Is Filed As Direct") — [ecommercefastlane](https://ecommercefastlane.com/your-ai-traffic-is-filed-as-direct/)

### Inferences
- For a site paid by display-ad sessions and Amazon click-outs, AI-search visibility today mostly means "cited without the click". On Ahrefs' averages, Google sends ~100x the visits of all chatbots combined, so a 1% change in Google organic traffic outweighs a doubling of AI referrals.
- 3.5M AI visits across 74,752 sites is a mean of ~47 AI visits per site per month (skewed toward large sites); the site's own GA4 AI Assistant channel (Q5) will give the real figure.
- AI Overview citations come out of Google's own ranking systems (Google calls GEO "still SEO", Q4), so ranking well on Google is both the traffic lever and the AI Overview lever; a separate AI Overview tracker adds little.
- The higher conversion rate per AI visit matters most for GTA lead pages (a recommendation from ChatGPT for a local service query is high-intent). That is the one place a small prompt check could be justified.

### Gaps
- No primary source found for sector splits (a secondary summary claims local services ~1.4% and IT ~2.8% AI referral share) or for BrightEdge's reported 95.1% ChatGPT share (Sep 2026).
- The "1% of visits clicked a link in the summary" figure was confirmed only through secondary coverage of Pew.
- A claimed Siege Media study (78 GA4 sites, AI converting 1.26x organic) could not be found at a primary source.
- No study found that isolates AI referrals for ad-funded or affiliate publishers specifically (RPM per AI session, Amazon conversion from AI visits).
- Cloudflare Radar was not fetched directly; 2026 ratios differ by an order of magnitude across secondary sources.

---

## 4. Do AI crawlers actually use llms.txt?

### Takeaway
Almost never. In Ahrefs' May 2026 server-side data for 137,210 domains, **97% of llms.txt files received zero requests**, and AI retrieval bots (the ones that fetch pages for ChatGPT/Claude/Perplexity answers) made only 1.1% of llms.txt requests. Google states in writing (July 2026) that Google Search ignores llms.txt. No statement from OpenAI, Anthropic or Perplexity says their crawlers use it.

### Cited Findings
- Ahrefs (published 2026-06-15; May 2026; 137,210 domains in Ahrefs Web Analytics; requests measured with Ahrefs Bot Analytics): 28% of domains (~38,360) publish llms.txt (upper bound, technical sample); 97% got no requests; ~22K requests in total, 96% by bots; shares: SEO audit tools 21.7%, AI agents 10.5%, AI training crawlers 5.3%, AI assistants 2.5%, AI retrieval bots 1.1%; GPTBot 4.51%, ClaudeBot 0.8%, OAI-SearchBot 0.74%; zero AI bots requested a missing llms.txt; conclusion: the file "won't help your AI search visibility today" and is "largely decoration", may matter more for coding agents — [Ahrefs](https://ahrefs.com/blog/llmstxt-study/)
- Google: "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search... Google Search ignores them"; "optimizing for generative AI search is optimizing for the search experience, and thus still SEO" (last updated 2026-07-10) — [Google Search Central, AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); same position in the AI features page (updated 2025-12-10) — [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- OpenAI's crawler page describes OAI-SearchBot, GPTBot and ChatGPT-User without saying any of them reads llms.txt; OpenAI itself publishes an llms.txt index for its own developer docs — [OpenAI bots](https://developers.openai.com/api/docs/bots)
- Single-site logs: 151 AI crawler hits in 14 days and zero llms.txt requests — [Saaslinks](https://saaslinks.net/blog/llms-txt-server-log-study); ~1,000 AI crawler requests in 12 days, none for llms.txt — [AWRSHIFT](https://wp.awrshift.com/llms-txt-in-practice/)
- In GeoReady's self-selected sample of 1,800+ audited sites, 58% publish llms.txt — [geo-optimizer-skill README](https://github.com/Auriti-Labs/geo-optimizer-skill)

### Inferences
- Our existing llms.txt costs nothing to keep (Google says it neither harms nor helps), but no llms.txt generator, validator or "llms-full.txt" upgrade will affect traffic or income. Not worth more owner time.
- The only plausible consumers are coding agents and agentic tools, which do not send our readers to Amazon or Mediavine.

### Gaps
- No public statement from Anthropic or Perplexity on llms.txt was found (Anthropic's crawler article covers robots.txt only).
- One blog claim that GPTBot fetched llms.txt on ~60% of implementing sites cites unnamed log submissions and contradicts Ahrefs; treated as unreliable.
- Ahrefs measured fetches, not use; a training-time effect cannot be ruled out or measured.

---

## 5. How can we see AI referrals and AI-crawler hits ourselves, without a new tool?

### Takeaway
GA4 already has a native **"AI Assistant"** default channel (ChatGPT, Gemini, DeepSeek, Copilot, Grok; AI Overviews/AI Mode stay in Organic Search). **Ahrefs Bot Analytics** (separate from the Ahrefs Web Analytics script already on the site, free in beta) reads server logs through a Vercel Log Drain and has an AI-bots filter, but needs Vercel Pro or Enterprise. Vercel's free AI Bots firewall ruleset can run in "log" mode. Search Console cannot split AI Overview clicks from other Google clicks. Also: the brief and CLAUDE.md are out of date, robots.ts now **allows** GPTBot and CCBot.

### Cited Findings
- GA4 default channel group includes "AI Assistant": traffic matches when medium exactly matches "ai-assistant", which GA4 sets when the referrer matches its list of AI assistants (examples: ChatGPT, Gemini, Deepseek, Copilot, Grok); full list in Google's downloadable sources spreadsheet; Organic Search = search-site list or medium "organic" — [Google Analytics Help](https://support.google.com/analytics/answer/9756891?hl=en)
- Third-party guides recommend a custom channel group with a source regex such as `chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai`, placed above Referral, and warn that Perplexity and Claude sessions may still land in plain Referral — [Terminus](https://www.terminusapp.com/blog/ai-traffic-channel-in-ga4/), [Seybold](https://seybold.de/en/guide/ai-traffic-google-analytics-4/)
- Search Console reports AI Overviews/AI Mode appearances inside the "Web" search type — [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- Ahrefs Bot Analytics: server-side, independent of the Web Analytics script, 12 bot categories incl. AI crawlers with an AI-bots filter, beta and free during beta (announced Feb-Mar 2026); on Vercel it creates a Log Drain, which "requires a Vercel Pro or Enterprise plan" — [Ahrefs Bot Analytics](https://ahrefs.com/bot-analytics), [Ahrefs docs: Vercel](https://docs.ahrefs.com/en/bot-analytics/docs/vercel), [Ahrefs help](https://help.ahrefs.com/articles/14297049-about-bot-analytics)
- Vercel's one-click AI Bots managed ruleset (GPTBot, ClaudeBot, PerplexityBot, Bytespider...) is free on all plans and maintained by Vercel — [Vercel changelog](https://vercel.com/changelog/new-one-click-ai-bot-managed-ruleset); Vercel's own lesson sets it to "Log" first and reviews detections on the Firewall page — [Vercel Academy](https://vercel.com/academy/optimize-your-vercel-account/bots-and-activity-log); Bot Protection classifies by fingerprint and behaviour, not the user-agent string — [Vercel docs](https://vercel.com/docs/bot-protection)
- Middleware-based server-side bot tracking works on Vercel but cannot see the final status code ("stored as unknown") — [DataFast docs](https://datafa.st/docs/bot-traffic-tracking)
- OpenAI: OAI-SearchBot decides ChatGPT search visibility; GPTBot is training-only and independent; ChatGPT-User is user-initiated and "robots.txt rules may not apply" — [OpenAI bots](https://developers.openai.com/api/docs/bots)
- Anthropic: ClaudeBot collects content that may be used for **training**; Claude-SearchBot indexes for Claude's search answers; Claude-User fetches pages for user questions — [Anthropic support](https://support.claude.com/en/articles/8896518)
- Site state: `app/robots.ts` allows `*` (except /api/), explicitly allows OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot (commented "Claude AI search"), Google-Extended, Applebot-Extended, and also GPTBot and CCBot ("Training bots — ALLOWED as of Jul 16 2026 (owner decision)") — [app/robots.ts](C:/Users/buzzs/buzzskito-website/app/robots.ts). CLAUDE.md still says robots "Blocks: GPTBot, CCBot" — [CLAUDE.md](C:/Users/buzzs/buzzskito-website/CLAUDE.md)
- No GA4 AI-channel query exists yet in the repo's `scripts/` or `lib/` (searched for "ai-assistant", "chatgpt.com", "perplexity.ai") — [repo search, 2026-10-21](C:/Users/buzzs/buzzskito-website/scripts)

### Inferences
- Steps worth doing now, no new tool: (1) in GA4, read Acquisition by Session default channel group = "AI Assistant", plus Session source matching the regex above to catch Perplexity and Claude, split by landing page and Amazon-click events; (2) if the Vercel team is on Pro, switch on Ahrefs Bot Analytics (free beta) to see which pages OAI-SearchBot, Claude-SearchBot, PerplexityBot and ChatGPT-User fetch; (3) use the Brand Radar tools already in the Ahrefs MCP (cited pages, cited domains, AI responses) to list which buzzskito.ca pages AI answers cite.
- Do NOT switch Vercel's AI Bots ruleset to "deny": it would block the search bots we want. Log mode only, and only if Bot Analytics is unavailable.
- The ClaudeBot comment in robots.ts mislabels a training crawler as "search"; harmless because the `*` rule already admits Claude-SearchBot and Claude-User. CLAUDE.md's "Blocks: GPTBot, CCBot" line should be corrected to match the Jul 16 decision.
- The existing `middleware.ts` (country block that lets declared crawlers pass) is a natural place to count AI user agents if Bot Analytics cannot be used, with the DataFast status-code caveat.

### Gaps
- The site's Vercel plan (Hobby vs Pro) is unknown; it decides whether Log Drains / Ahrefs Bot Analytics are possible.
- Vercel runtime-log retention per plan was not verified.
- GA4's AI-assistant source spreadsheet was not opened, so whether perplexity.ai and claude.ai are in the native channel is unconfirmed; the date the channel was added is not stated by Google.
- No live GA4 numbers were pulled for buzzskito.ca (GA4 is readable only in the owner's Chrome, per project notes).

---

## 6. Which tools carry terms-of-service or credential risk?

### Takeaway
Tools that drive chatgpt.com, claude.ai or perplexity.ai with **your own logged-in accounts** (oneglanse, habibi) carry the most risk: OpenAI's terms forbid programmatic extraction of output, and the tools rely on anti-detection browsers, saved sessions and residential proxies. Tools that buy scraped answers from vendors (Bright Data, Cloro, Oxylabs, DataForSEO, SearchAPI) shift the scraping to the vendor. Google's main legal theory against SERP scraping failed in July 2026, though the fight continues. Official-API trackers carry no such risk but need API keys handled carefully.

### Cited Findings
- OpenAI Terms of Use list among prohibited uses: "Automatically or programmatically extract data or Output" — [OpenAI Terms of Use](https://openai.com/en-GB/policies/terms-of-use/)
- oneglanse uses Camoufox (modified Firefox) with Playwright, "your own AI accounts and saved browser logins", provider sessions uploaded to your server for VPS runs, a residential proxy, and "bot-detection handling" — [oneglanse README](https://github.com/oneglanse/oneglanse)
- habibi keeps a persistent logged-in browser profile per engine, has you solve the CAPTCHA for Google AI Overview, and notes Claude and Perplexity "anti-bot protection blocks headless Chromium outright" — [habibi README](https://github.com/moaljumaa/habibi)
- Scraped consumer surfaces via vendors: Bright Data AI Scraper API ([geo-aeo-tracker](https://github.com/danishashko/geo-aeo-tracker)); Cloro ([ansvisor](https://github.com/ansvisor/ansvisor)); BrightData, Oxylabs, Olostep, Cloro, DataForSEO ([getcito](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool)); DataForSEO and SearchAPI for chatgpt.com, AI Overview, AI Mode, Copilot ([limelit](https://github.com/limelit-co/open)); scraping providers for consumer surfaces ([elmo](https://github.com/elmohq/elmo))
- Google v. SerpApi: on 2026-07-20 Judge Yvonne Gonzalez Rogers dismissed Google's DMCA claims over ordinary search results; claims about copyrighted material were reported as dismissed with leave to amend (accounts differ) — [Search Engine Journal](https://searchenginejournal.com/court-dismisses-googles-dmca-claims-against-serpapi/583033), [Bloomberg Law](https://news.bloomberglaw.com/ip-law/google-lawsuit-against-data-scraper-tossed-over-authority-issue); Google renewed the fight — [MediaPost](https://www.mediapost.com/publications/article/417185/google-renews-battle-with-serpapi-over-scraping.html); Reddit's separate claims against SerpApi and others may proceed — [Search Engine Journal](https://searchenginejournal.com/court-dismisses-googles-dmca-claims-against-serpapi/583033)
- Credential exposure noted in READMEs: seo-playground has no login by default and "anyone who can reach it can spend your DataForSEO credit" — [seo-playground](https://github.com/paulmassen/seo-playground); aicw's HTTP MCP server can store an OpenRouter key and should only be exposed "through a tunnel or deployment you trust" — [aicw-ai-mentions](https://github.com/aicw-io/aicw-ai-mentions); geo-aeo-tracker is BYOK with results "stored in your browser by default" — [geo-aeo-tracker](https://github.com/danishashko/geo-aeo-tracker); Elmo sends answers to a third-party judge (TypeSafe key) — [elmo](https://github.com/elmohq/elmo); claude-seo shipped fixes for "Installer credential-injection" and SSRF bypasses in 2026 — [claude-seo](https://github.com/AgriciDaniel/claude-seo)
- Official-API routes (gego, geo-score, potato, aws-samples, limelit's API mode) use vendor web-search tools as documented by the vendors, e.g. Claude's web search tool and OpenAI's web search tool — [Claude docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool), [OpenAI pricing](https://developers.openai.com/api/docs/pricing)

### Inferences
- Never connect the owner's personal or business ChatGPT/Claude/Perplexity/Google accounts to a scraping tracker: a ban would hit accounts the owner uses for the business, and the session cookies would sit on disk or a VPS.
- If tracking is ever added, prefer official APIs (or Brand Radar) and keep keys in a local `.env` or the Hub's existing secret store, never in a browser-stored dashboard or an internet-reachable server without a login.
- Vendor-scraped data is a grey zone for the vendor, not a direct terms breach by us, but it depends on vendors whose access Google and OpenAI actively fight.
- Ahrefs Bot Analytics via Log Drain sends raw request logs (incl. visitor IPs) to Ahrefs; acceptable for an existing vendor, but worth a line in the privacy policy review.

### Gaps
- Anthropic's, Perplexity's and Google's consumer terms were not fetched for exact anti-scraping wording; only OpenAI's clause is quoted.
- Whether Google refiled its amended SerpApi complaint after the 21-day window was not confirmed in the docket.
