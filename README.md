# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/acaiyaya/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/acaiyaya/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

**One Day, One Picture** — the world's news of Saturday 21 November 2026, summed up as a
broadsheet front page in a single 1024×1024 image.

The front page leads with the story every wire led with: Russia's overnight barrage of
400 drones and 110 missiles on Ukraine, with two missiles coming down in Poland. Around
it, the rest of the day:

- **Markets** — the AI rout: S&P 500 −3.7%, into correction
- **The Hague** — the ICJ finds Myanmar responsible for genocide against the Rohingya
- **Diplomacy** — Trump, Xi and Putin's Shenzhen "peace declaration"
- **Peru** — a magnitude 6.9 Andean earthquake sends Lima into the streets
- **Health** — a pancreatic-cancer pill makes tumours undetectable in 1 in 12 trial patients
- **Recalls** — Honda and Toyota recall 1.6 million vehicles over Takata airbag risk

The page was composed as a hand-set HTML/SVG front page (night-sky barrage scene, falling
market chart, scales of justice, the three flags) and rasterised to `entry.png`. The
program itself is deliberately simple: `main.ts` copies `entry.png` to
`/output/entry.png`, byte for byte, so the judge sees exactly the page above.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=5ttpknjz&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
