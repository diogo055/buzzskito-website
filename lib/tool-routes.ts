/**
 * Reader tools that are not about a GTA service: today only the pest identifier quiz
 * (app/tools/what-bug-is-this). Their readers are national, like the articles' readers, so the
 * phone Call / Text / Get price bar is hidden on them (components/LeadBarGate.tsx); the bottom of
 * the screen is where the quiz's answer buttons are. scripts/check-recirculation.mjs reads this
 * file, so a page listed here is the only kind of non-article page allowed to lack that bar.
 *
 * The lead tools (/yard-risk-report, /am-i-a-mosquito-magnet, /lyme-disease-risk-calculator) are
 * NOT listed: they sell the service and keep the bar.
 */
export const READER_TOOL_ROUTES = new Set<string>([
  '/tools/what-bug-is-this',
])
