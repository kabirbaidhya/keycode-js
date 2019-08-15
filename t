#!/bin/bash
# A simple script to automate tasks.

changelog() {
  # NOTE: This requires github_changelog_generator to be installed.
  # https://github.com/skywinder/github-changelog-generator

  if [ -z "$NEXT" ]; then
      NEXT="next"
  fi

  # Change unpkg URL to latest keycode-js version
  sed -i -E "s/\keycode-js@[^\/]+/keycode-js@$NEXT/" README.md

  echo "Generating changelog upto version: $NEXT"
  github_changelog_generator --pr-label "**Improvements:**" --issue-line-labels=ALL --future-release="$NEXT"
}

test() {
  echo;\
    echo "Node (common js) module tests" && mocha mod.test.js && \
    echo "Deno module tests" && deno test.ts
  # TODO: Browser Tests
}

# Run command received from args.
$1
