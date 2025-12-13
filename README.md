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

## Resources

- [Framer MCP Plugin](https://www.framer.com/marketplace/plugins/mcp/)
- [Framer Template Requirements](https://www.framer.com/template-requirements/)
- [Framer Creator Dashboard](https://www.framer.com/dashboard/)
