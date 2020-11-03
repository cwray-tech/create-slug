# Create Slug

This is a simple package that utilizes the Slugify package in order to generate a url friendly slug without special characters.

## What this does
This package uses the Slugify package, but does not offer any customizations. If you want to customize generated urls, then I recommend using the Slugify package directly.

## Usage
Create a constant for the function of your choice.
```
const createSlug = require('create-slug')
```

Then insert your text in the function as a parameter to get the slug.
```
let slug = createSlug('Text to be turned into a slug')
```