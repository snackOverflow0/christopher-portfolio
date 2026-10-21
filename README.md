# Christopher Castelo — Portfolio

React + TypeScript + Vite + Tailwind CSS v4.

    npm install
    npm run dev

## Where to edit things
- **All text, links, projects, jobs:** `src/data/portfolio.ts` (typed with the interfaces in `src/types.ts`)
- **Colors (dark + light):** `src/index.css` (CSS variables at the top)
- **Layout of a section:** `src/components/<SectionName>.tsx`
- **Images:** drop them in `public/images/` and reference them as `/images/your-file.jpg`

## Structure
    src/
      main.tsx            entry point
      App.tsx             page = list of sections in order
      types.ts            TypeScript interfaces for your data
      index.css           Tailwind import + theme colors
      data/portfolio.ts   ALL your content
      hooks/useTheme.ts   dark/light toggle logic
      components/         one file per section + small shared pieces
