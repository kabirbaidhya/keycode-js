#!/bin/bash
# A simple script to automate tasks.

changelog() {
  # NOTE: This requires github_changelog_generator to be installed.
  # https://github.com/skywinder/github-changelog-generator

  if [ -z "$NEXT" ]; then
      NEXT="next"
  fi

  echo "Generating changelog upto version: $NEXT"
  github_changelog_generator --pr-label "**Improvements:**" --issue-line-labels=ALL --future-release="$NEXT"
}

build() {
  rimraf dist test/dist mod.d.ts && \
    rollup -c rollup.config.js && \
    mv dist/mod.d.ts .
}

test() {
  echo;\
    echo "Tests for Node (common js)" && mocha test/node.test.js && \
    echo "Tests for Browser" && mocha-headless-chrome -f test/browser.test.html && \
    echo "Tests for Deno" && deno test/deno.test.ts --reload
}

# Run command received from args.
$1
