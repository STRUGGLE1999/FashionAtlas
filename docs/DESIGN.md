# FashionAtlas Design Document

## Product Shape
FashionAtlas is implemented as a static single page application with hash routing. This keeps the MVP dependency-free while preserving a clean migration path to Next.js later.

## Routes
- `#/` home
- `#/guides` recommendation guides
- `#/guide/:id` guide detail
- `#/trends` weekly/monthly trend notes
- `#/trend/:id` trend detail
- `#/library` resource library
- `#/resource/:id` resource detail
- `#/paths` learning paths
- `#/path/:id` path detail
- `#/ai` AI guide
- `#/board` personal inspiration board

## Information Architecture
The eight stable channels are:
Runway, Fashion History, Trend, Design, Business, Culture, Tools, Learning.

Resources belong to one primary channel and multiple tags. Learning paths reference resources by id, so adding new resources does not require page code changes.

Guides and trend issues sit above the resource layer:
- `Guide` objects organize books, films, magazines, runways, and websites by user intent.
- `#/guides` supports filtering by learning goal, level, and content type.
- `TrendIssue` objects organize real annual/monthly/weekly trend notes for Chinese daily dressing contexts.
- `#/trends` supports filtering by time type and shows an editorial time-axis model.
- Style detail pages are treated as style research pages, with visual language, representative media/magazine references, daily outfit translation, common mistakes, and related trends.
- The board can save guides, trends, resources, styles, books, and runway references.

## UI Direction
The visual system uses a restrained magazine/archive style:
- ivory paper background, black ink, and small red/green/blue accents
- editorial serif display headings
- high-density cards with source, difficulty, access type, and tags
- magazine-style top navigation with concise Chinese labels
- guide/trend cards that emphasize "what to watch/read" and "why it matters"
- rounded corners no larger than 8px
- responsive grids that collapse cleanly on mobile

## Implementation Notes
- `index.html` provides the shell and metadata.
- `styles.css` owns layout, responsive behavior, and visual language.
- `app.js` owns data, routing, filtering, and rendering.
- External images are decorative Unsplash URLs; third-party resource images are not copied.

## Migration Path
For a production Next.js version:
- Move `resources`, `recommendationGuides`, `trendIssues`, `learningPaths`, and style data into JSON, MDX, or CMS collections.
- Convert route render functions to App Router pages.
- Replace local filtering with Fuse.js first, then Meilisearch/Typesense when the library exceeds several thousand records.
- Add analytics, SEO metadata per detail page, and reviewed submission workflow.
