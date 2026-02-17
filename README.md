# Merge Conflict Test (Merge Commits Allowed)

Test repo for verifying merge conflict detection in `acceptCommitSuggestion`.

This repo allows merge commits (no linear history requirement).
Two agents (Performance Optimizer and Security Hardener) both modify `src/config.ts`
with conflicting changes when a PR is opened.
