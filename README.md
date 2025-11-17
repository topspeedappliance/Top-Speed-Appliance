# Top Speed Appliance — React + Vite Template

This template was created to help you integrate Builder.io content and to match your red/black/white brand.

## What is included
- `src/` organized structure (components, pages, builder, styles)
- Builder.io integration placeholders (`src/builder/builder-settings.js`)
- Sample components (Header, Footer, ServiceCard)
- Theme variables (red/black/white)
- Routing with react-router
- Instructions to connect your Builder.io project or import Builder exported code

## How to use
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. To connect your Builder.io project:
   - Open `src/builder/builder-settings.js` and replace `YOUR_BUILDER_API_KEY` with your public Builder API key (from builder.io -> Account -> API keys).
   - In pages like `src/pages/Home.jsx`, the sample code fetches Builder content for the "page" model and URL "/".
   - If you exported components from Builder, drop them into `src/builder/exports/` and register them in `src/builder/registered-components.js`.

## Notes
- I could not access your private Builder.io project at: https://builder.io/app/projects/
  (Builder requires you to be logged in; I used a generic placeholder.)
- After you supply the Builder project export files or give me access link & read-only export, I can replace placeholders with real content.