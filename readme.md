# Create Blog Post

[![npm version](https://badge.fury.io/js/create-blog-post.svg)](https://badge.fury.io/js/create-blog-post)

This creates a blog post by creating a new git repo with a repo and the ability to publish to GitHub Pages

## Setup

```
npm init blog-post mypost
```

## Usage

Once the app is created, create a github repo and add the remote to the local git repo. Then edit the `readme.md` and when you are ready to publish run:

```bash
npm run publisher
```

This will publish the html to the gh-pages branch.