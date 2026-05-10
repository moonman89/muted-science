# [Project name]

_Replace the heading above with the project's name, and this line with one sentence describing what this app does for users._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## GitHub Auto-Deploy

Every push to `main` automatically triggers the CI/CD pipeline via GitHub Actions (`.github/workflows/ci.yml`). No manual deployment steps are needed — Replit commits and syncs changes to GitHub, which then triggers the workflow automatically.

1. **On all pushes / PRs to main** — typechecks the entire workspace (`pnpm run typecheck`)
2. **On push to main only** — builds the `muted-science` web app and deploys it to GitHub Pages

### One-time setup (required)
Enable GitHub Pages in the repository settings:
- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**
- No further configuration needed — every subsequent push to `main` triggers a deploy automatically

### Failure notifications (optional)
The `build-and-deploy` job posts a Slack message with a direct link to the failed run whenever the job fails.

To enable it:
1. Create an [Incoming Webhook](https://api.slack.com/messaging/webhooks) in your Slack workspace and copy the URL.
2. Go to **Settings → Secrets and variables → Actions** in the GitHub repository.
3. Add a secret named `SLACK_WEBHOOK_URL` with the webhook URL as the value.

If the secret is not set, the notification step exits silently and the rest of the pipeline is unaffected. GitHub also sends its own email notifications to repository watchers on failure regardless of this setting.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
