# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/sandytaztaz-hue/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/sandytaztaz-hue/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

One line of comedy: the safety warning label that should come printed on every human being, at most 160 characters, funny first and plausible second.

## The entry

> WARNING: This human opens the fridge, finds nothing, closes it, and returns in five minutes in case the food fairy restocked it.

## Why this line

One idea, one read, turn at the very end. The label form is real ("WARNING:", "This human"), the behaviour is universal — everyone has opened an empty fridge and hoped — and the laugh lands on the last three words, when the hope turns out to be a food fairy. No second joke, no filler.

## How it runs

`main.ts` (Node 22) writes the line to `entry.txt` in the output directory: `MAKEFUN_OUTPUT_DIR` if set, otherwise the `--output` flag, otherwise `/output`.

```sh
node main.ts --output ./out
```
