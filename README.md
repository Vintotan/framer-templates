# Framer Templates

Build Framer templates using Claude Code + Framer MCP.

## Quick Start: Setting Up Framer MCP with Claude Code

### 1. Install the Framer MCP Plugin

1. Go to [Framer Marketplace - MCP Plugin](https://www.framer.com/marketplace/plugins/mcp/)
2. Install and open the plugin in your Framer project
3. **Keep the plugin running** while using Claude Code

### 2. Copy Your MCP URL

The plugin will display an SSE URL like:
```
https://mcp.unframer.co/sse?id=YOUR_ID&secret=YOUR_SECRET
```

### 3. Add MCP Server to Claude Code

**Option A: Using environment variable (recommended for this repo)**

Set the `FRAMER_MCP_URL` environment variable and the `.mcp.json` config will use it automatically:

```bash
export FRAMER_MCP_URL="YOUR_MCP_URL_HERE"
```

**Option B: Manual setup**

Run this command in your project directory (replace with your URL):

```bash
claude mcp add --transport sse framer "YOUR_MCP_URL_HERE"
```

### 4. Restart Claude Code

```bash
# Exit current session
# Then start a new session
claude
```

### 5. Verify Connection

```bash
claude mcp list
```

You should see:
```
framer: https://mcp.unframer.co/sse?id=... (SSE) - ✓ Connected
```

## Available Framer MCP Tools

Once connected, Claude Code has access to:

| Tool | Description |
|------|-------------|
| `getProjectXml` | Get project structure (pages, components, styles) |
| `getNodeXml` | Get XML for a specific node |
| `updateXmlForNode` | Create/update nodes, text, and attributes |
| `manageColorStyle` | Create/update color styles |
| `manageTextStyle` | Create/update text styles |
| `searchFonts` | Search available fonts |
| `deleteNode` | Delete nodes or styles |
| `duplicateNode` | Duplicate a node |
| `createCodeFile` | Create React code components |
| `readCodeFile` | Read code file contents |
| `updateCodeFile` | Update code file contents |
| `getCMSCollections` | Get CMS collection definitions |
| `getCMSItems` | Get items from a CMS collection |
| `upsertCMSItem` | Create/update CMS items |
| `exportReactComponents` | Export components as React code |

## Example Prompts

```
Create a hero section with a gradient background and CTA button

Build a pricing table with 3 tiers: Basic, Pro, Enterprise

Add a testimonials section with a grid of 3 cards

Create a footer with 4 columns: Company, Product, Resources, Legal

Change all headings to use Playfair Display font

Create a color style called "Brand Blue" with hex #2563EB
```

## Troubleshooting

### "No MCP servers configured"

The MCP config wasn't loaded. Try:
1. Make sure you added it with `claude mcp add --transport sse framer "URL"`
2. Restart Claude Code completely

### MCP tools not appearing

1. Verify the Framer plugin is still running (it must stay open)
2. Check connection: `claude mcp list`
3. Restart Claude Code after adding the MCP server

### "Tool not available" errors

The MCP connection may have dropped. Re-open the Framer MCP plugin and restart Claude Code.

## shadcn/ui-Style Components for Framer

This project includes **16 custom Framer Code Components** inspired by shadcn/ui. These components are built with React, framer-motion, and full property controls for customization in Framer's UI.

### Available Components

| Component | Insert URL | Description |
|-----------|------------|-------------|
| **Button** | `https://framer.com/m/Button-la2L9.js` | 6 variants: default, destructive, outline, secondary, ghost, link |
| **Card** | `https://framer.com/m/Card-Xx4R.js` | Flexible card with header, content, footer sections |
| **Input** | `https://framer.com/m/Input-8wGq.js` | Text input with label, placeholder, error states |
| **Textarea** | `https://framer.com/m/Textarea-MHII.js` | Multi-line text input with resize options |
| **Badge** | `https://framer.com/m/Badge-4xRA.js` | 4 variants: default, secondary, destructive, outline |
| **Avatar** | `https://framer.com/m/Avatar-rAXw.js` | Image avatar with fallback initials |
| **Separator** | `https://framer.com/m/Separator-HnYr.js` | Horizontal/vertical divider line |
| **Switch** | `https://framer.com/m/Switch-uaUu.js` | Animated toggle switch |
| **Checkbox** | `https://framer.com/m/Checkbox-yB3Q.js` | Animated checkbox with label |
| **Alert** | `https://framer.com/m/Alert-TaYH.js` | 4 variants: default, destructive, success, warning |
| **Tabs** | `https://framer.com/m/Tabs-EfZm.js` | 3 styles: default, outline, pills |
| **Progress** | `https://framer.com/m/Progress-xrty.js` | Animated progress bar with label |
| **Skeleton** | `https://framer.com/m/Skeleton-0kgc.js` | Loading placeholder with shimmer animation |
| **Tooltip** | `https://framer.com/m/Tooltip-VcfG.js` | Hover tooltip with 4 positions |
| **Accordion** | `https://framer.com/m/Accordion-Mjnd.js` | Collapsible sections (single/multiple mode) |
| **MenuCard** | `https://framer.com/m/MenuCard-p5Pg.js` | Restaurant menu item with image, price, badge |

### Component Features

All components include:
- **Property Controls** - Customize colors, fonts, sizes, and variants directly in Framer UI
- **Animations** - Smooth transitions powered by framer-motion
- **Accessibility** - ARIA attributes and keyboard navigation
- **Dark/Light themes** - Easily customizable color schemes

### Using Components in Framer

1. Open your Framer project
2. Go to **Assets** panel → **Code** section
3. Find the component you want to use
4. Drag it onto the canvas
5. Customize properties in the right panel

### Next.js + shadcn/ui Project

A companion Next.js project with the full shadcn/ui library is available in `/restaurant-shadcn/`. This includes:
- Next.js 16 with App Router
- All 53 shadcn/ui components
- Tailwind CSS v4
- Restaurant template demo

```bash
cd restaurant-shadcn
npm install
npm run dev
```

## Resources

- [Framer MCP Plugin](https://www.framer.com/marketplace/plugins/mcp/)
- [Framer Template Requirements](https://www.framer.com/template-requirements/)
- [Framer Creator Dashboard](https://www.framer.com/dashboard/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
