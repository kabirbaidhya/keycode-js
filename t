#!/bin/bash
# A simple script to automate tasks.

changelog() {
  # NOTE: This requires github_changelog_generator to be installed.
  # https://github.com/skywinder/github-changelog-generator

  if [ -z "$NEXT" ]; then
      NEXT="Next"
  fi

  echo "Generating changelog upto version: $NEXT"
  github_changelog_generator --pr-label "**Improvements:**" --issue-line-labels=ALL --future-release="$NEXT"
}

# Run command received from args.
$1
