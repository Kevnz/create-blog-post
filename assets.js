module.exports = {
  ignore: `
node_modules
dist
*.log

`,
  head: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>{name}</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <link rel="stylesheet" type="text/css" href="extra.css" />
      <meta name="description" content="{description}" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/github.min.css" />

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta property="og:title" content="{name}" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="{description}" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content="{name}" />
      <meta name="twitter:description" content="{description}" />
      <meta name="twitter:image" content="" />

    </head>

    <body>
      <div class="container">`,
  foot: `</div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'UA-');
    </script>
    </body>`,
  extra: `
  .container {
    margin-top: 1rem;
  }

  body {
    border-top: 0.4rem solid #1f8dd6;
  }
  `
}