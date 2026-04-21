# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Documentation authoring

When creating or editing markdown under `docs/starter-journey/docs/`, follow **[docs/STYLE.md](docs/STYLE.md)**. In particular:

- Use **Template A (Technical)** for setup / how-to pages and **Template B (Educational)** for concept / why pages.
- Every page must include the shared top chrome (frontmatter + value prop + prereqs) and the shared bottom chrome (`## Next` with Do next / Learn why / Reference).
- Admonitions are restricted to `:::tip`, `:::warning`, `:::danger`. Do **not** use `:::info`, `:::success`, or `:::note` — convert those to prose or numbered steps.
- Cross-link every technical page to its educational counterpart and vice versa via the `## Next` block.
- Image files go under `static/img/` with a section prefix (e.g. `uc-*.png`, `infra-*.png`).
- **Tone:** Technical pages use imperative, direct language. Educational pages explain the *why* in concrete terms tied to real problems.
- **Brevity:** One idea per sentence. Paragraphs under 4 sentences. Active voice.
- **No AI slop:** Never use filler phrases ("In today's data-driven world", "It's important to note", "Let's dive in", "seamlessly", "robust"). Every sentence must carry new information. If it sounds like a press release, rewrite it.

If a style-guide rule conflicts with an instruction in the conversation, ask before deviating.
