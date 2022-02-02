# Create Slug

This is a simple package that utilizes the Slugify package in order to generate a url friendly slug without special characters in the en locale.

## How it works

This package uses the Slugify package, but does not offer any customizations. If you want to customize generated urls, then I recommend using the Slugify package directly.

## What it does

This enforces the strict rules of slugify to not have to manually add them each time you want to create a url. This will create url friendly slugs, versus the base slugify option which will not remove some characters and not transform characters to lowercase. This is also set to the English language setting on the slugify settings. A sensible default for creating slugs for titles in the English language.

### **The slugify options enabled in the function**

```javascript
{
  "lower": true,
  "remove": /[*+~.()'"!:@]/g,
  "strict": true,
  "locale": "en"
}
```

## Installation

**NPM**

```bash
npm i create-slug
```

**Yarn**

```bash
yarn add create-slug
```

## Usage

**1. Require the module.**

```javascript
const createSlug = require("create-slug");
```

**2. Then insert your text in the function as a parameter to get the slug.**

```javascript
let slug = createSlug("Text to be turned into a slug");
// slug is "text-to-be-turned-into-a-slug"
```
