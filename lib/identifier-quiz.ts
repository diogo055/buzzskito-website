/**
 * The scoring engine for the identifier tools that work like the bug bite identifier
 * (lib/bite-quiz.ts): the tick identifier (lib/tick-quiz.ts) and the spider identifier
 * (lib/spider-quiz.ts), Oct 2026. A quiz here is plain data, so the page (a server component)
 * hands it to components/IdentifierQuiz.tsx as a prop and the browser scores the answers.
 *
 * HOW IT DECIDES (the bite identifier's rules). Every answer adds points to the candidates it
 * fits, and carries one plain sentence saying why, with its source in brackets. The result shows
 * the best match and up to two more that came close, each with the sentences its answers earned,
 * so the reader sees the reasoning instead of a verdict. Under minScore nothing is named: a wrong
 * name is worse than "not clear", and that result says how to find out.
 *
 * An answer can also argue against candidates (`unlikely`: minus unlikelyPenalty each), allow only
 * some (`only`: an answer just one kind of candidate explains), or raise a warning at the top of
 * the result (`flag`). When several answers each allow only some candidates, only the ones all of
 * them allow stay in the running, and when no candidate is left the result is "not clear": two
 * answers that rule each other out mean one of them is wrong, so naming either would be a guess.
 */

/** One way an answer fits a candidate: the points it adds and the sentence that says why. */
export type Fit = readonly [points: number, why: string]

export type IdChoice<Id extends string = string, Flag extends string = string> = {
  id: string
  label: string
  fits: Partial<Record<Id, Fit>>
  /** Candidates this answer argues against: minus unlikelyPenalty each. */
  unlikely?: readonly Id[]
  /** An answer that only these candidates explain: no other candidate is shown beside it. */
  only?: readonly Id[]
  /** Raises a warning at the top of the result. */
  flag?: Flag
}

export type IdQuestion<Id extends string = string, Flag extends string = string> = {
  id: string
  title: string
  hint?: string
  choices: IdChoice<Id, Flag>[]
}

export type IdScoring = {
  /** The best match must reach this many points, or the result is "not clear". */
  minScore: number
  /** Another candidate is shown beside the best match when it reaches this many points... */
  alsoMinScore: number
  /** ...and at least this share of the best match's points. */
  alsoShare: number
  /** The best match plus at most this many minus one. */
  maxShown: number
  /** What an answer that argues against a candidate takes off its score. */
  unlikelyPenalty: number
  /** On a "not clear" result, candidates with at least this many points are offered as weak leads. */
  leadMinScore: number
}

export type IdQuizDef<Id extends string = string, Flag extends string = string> = {
  /** The GA4 `quiz` parameter, e.g. "tick-identifier". */
  quizId: string
  /** Every candidate, in tie-break order (the more common first). */
  ids: readonly Id[]
  questions: IdQuestion<Id, Flag>[]
  scoring: IdScoring
}

/** Question id -> choice id. */
export type Answers = Record<string, string>

export type Suspect<Id extends string = string> = { id: Id; score: number; why: string[] }
export type Ranking<Id extends string = string, Flag extends string = string> = {
  /** 'unsure' when the best match is under minScore. */
  result: 'named' | 'unsure'
  /** Best match first; empty when unsure. */
  suspects: Suspect<Id>[]
  /** On an unsure result, up to two candidates the answers lean toward a little. */
  leads: Id[]
  flags: Flag[]
  scores: Record<Id, number>
}

export function rankCandidates<Id extends string, Flag extends string>(quiz: IdQuizDef<Id, Flag>, answers: Answers): Ranking<Id, Flag> {
  const { ids, scoring: s } = quiz
  const scores = Object.fromEntries(ids.map((id) => [id, 0])) as Record<Id, number>
  const why = Object.fromEntries(ids.map((id) => [id, [] as string[]])) as Record<Id, string[]>
  const flags: Flag[] = []
  let only: Set<Id> | null = null
  for (const q of quiz.questions) {
    const choice = q.choices.find((c) => c.id === answers[q.id])
    if (!choice) continue
    for (const id of ids) {
      const fit = choice.fits[id]
      if (!fit) continue
      scores[id] += fit[0]
      if (!why[id].includes(fit[1])) why[id].push(fit[1])
    }
    for (const id of choice.unlikely ?? []) scores[id] -= s.unlikelyPenalty
    if (choice.only) {
      const allowed: readonly Id[] = choice.only
      const prev = only as Set<Id> | null
      only = new Set(prev ? allowed.filter((id) => prev.has(id)) : allowed)
    }
    if (choice.flag && !flags.includes(choice.flag)) flags.push(choice.flag)
  }

  // Array.prototype.sort is stable, so equal scores keep the order of `ids`.
  const ranked = [...ids].sort((a, b) => scores[b] - scores[a])
  const eligible = only ? ranked.filter((id) => only!.has(id)) : ranked
  const best = eligible[0]
  if (best === undefined || scores[best] < s.minScore) {
    const leads = ranked.filter((id) => scores[id] >= s.leadMinScore).slice(0, 2)
    return { result: 'unsure', suspects: [], leads, flags, scores }
  }
  const shown = eligible
    .filter((id, i) => i === 0 || (scores[id] >= s.alsoMinScore && scores[id] >= scores[best] * s.alsoShare))
    .slice(0, s.maxShown)
  return { result: 'named', suspects: shown.map((id) => ({ id, score: scores[id], why: why[id] })), leads: [], flags, scores }
}

// ── Result copy ─────────────────────────────────────────────────────────────────────────

/** A link from a result. `label` replaces the article's own title (used for links to a #section). */
export type IdLinkSpec = string | { path: string; label: string }

export type CandidateCopy = {
  /** The title of its result card. */
  name: string
  /** For a sentence: "Most likely: a blacklegged (deer) tick". */
  short: string
  /** One line under the name. */
  summary: string
  /** How to confirm it. Every line restates a source. */
  confirm: string[]
  /** A warning shown with this candidate whenever it is named. */
  caution?: string
  /** The page about this candidate first. Checked against lib/article-index.json at build time. */
  links: IdLinkSpec[]
}
