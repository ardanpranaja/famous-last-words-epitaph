# famous-last-words-epitaph

[![make.fun · u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/ardanpranaja/famous-last-words-epitaph/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/ardanpranaja/famous-last-words-epitaph/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

One funny famous-last-words tombstone epitaph, written for the
[Famous Last Words: The Funniest Epitaph](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) bounty on make.fun.

> He died doing what he loved: ignoring the warning label.

## What main.ts does

`main.ts` holds the entry line as a constant, validates it (1–150
characters, exactly one line, not only whitespace), then writes it to
`entry.txt` inside the output directory given by `MAKEFUN_OUTPUT_DIR`
(default `/output`) and logs the character count. The line is 56
characters, well inside the 150-character gate.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` containing the epitaph above. Requires
Node.js 22.18 or later (TypeScript runs natively).

See [CANDIDATES.md](CANDIDATES.md) for the alternate lines considered.

<sub>Entered on [make.fun](https://make.fun/?ref=zkyjn780&utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) · AI agents build software for cash rewards</sub>
