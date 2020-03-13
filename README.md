# Next.js 9.3, TypeScript, tailwindcss, Critical CSS

A [Next.js](https://nextjs.org/) 9.3 Starter Template with [TypeScript](https://www.typescriptlang.org/),
[tailwindcss](https://tailwindcss.com/), and the [Critical CSS technique](https://web.dev/extract-critical-css/).

## Features

✅ Next.js 9.3.0<br><!--
|-->✅ tailwindcss 1.2.0<br><!--
|-->✅ Strict TypeScript 3.8.3<br><!--
|-->✅ Remove Unused CSS<br><!--
|-->✅ Inline Critical CSS in the `<head>`<br>

## Production HTML

The vast majority of the CSS is [normalize.css](https://necolas.github.io/normalize.css/) from `@tailwind base;` in
`/styles/global.css`. Most projects normalise CSS, but you do you.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="next-head-count" content="2" />
    <style data-href="/_next/static/css/e241153b0425afe99705.css">
      /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
      html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
      }
      body {
        margin: 0;
      }
      main {
        display: block;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      pre {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      a {
        background-color: transparent;
      }
      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }
      b,
      strong {
        font-weight: bolder;
      }
      code,
      kbd,
      samp {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      img {
        border-style: none;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }
      button,
      input {
        overflow: visible;
      }
      button,
      select {
        text-transform: none;
      }
      [type='button'],
      [type='reset'],
      [type='submit'],
      button {
        -webkit-appearance: button;
      }
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      [type='button']:-moz-focusring,
      [type='reset']:-moz-focusring,
      [type='submit']:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }
      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }
      progress {
        vertical-align: baseline;
      }
      textarea {
        overflow: auto;
      }
      [type='checkbox'],
      [type='radio'] {
        box-sizing: border-box;
        padding: 0;
      }
      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto;
      }
      [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      details {
        display: block;
      }
      summary {
        display: list-item;
      }
      [hidden],
      template {
        display: none;
      }
      blockquote,
      dd,
      dl,
      figure,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      p,
      pre {
        margin: 0;
      }
      button {
        background-color: transparent;
        background-image: none;
        padding: 0;
      }
      button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
      }
      fieldset,
      ol,
      ul {
        margin: 0;
        padding: 0;
      }
      ol,
      ul {
        list-style: none;
      }
      html {
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
          Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        line-height: 1.5;
      }
      *,
      :after,
      :before {
        box-sizing: border-box;
        border: 0 solid #e2e8f0;
      }
      hr {
        border-top-width: 1px;
      }
      img {
        border-style: solid;
      }
      textarea {
        resize: vertical;
      }
      input::-webkit-input-placeholder,
      textarea::-webkit-input-placeholder {
        color: #a0aec0;
      }
      input::-moz-placeholder,
      textarea::-moz-placeholder {
        color: #a0aec0;
      }
      input:-ms-input-placeholder,
      textarea:-ms-input-placeholder {
        color: #a0aec0;
      }
      input::-ms-input-placeholder,
      textarea::-ms-input-placeholder {
        color: #a0aec0;
      }
      input::placeholder,
      textarea::placeholder {
        color: #a0aec0;
      }
      [role='button'],
      button {
        cursor: pointer;
      }
      table {
        border-collapse: collapse;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }
      code,
      kbd,
      pre,
      samp {
        font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
      }
      audio,
      canvas,
      embed,
      iframe,
      img,
      object,
      svg,
      video {
        display: block;
        vertical-align: middle;
      }
      img,
      video {
        max-width: 100%;
        height: auto;
      }
      .container {
        width: 100%;
      }
      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }
      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }
      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }
      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }
      .flex {
        display: flex;
      }
      .flex-col {
        flex-direction: column;
      }
      .items-center {
        align-items: center;
      }
      .justify-center {
        justify-content: center;
      }
      .h-screen {
        height: 100vh;
      }
    </style>
    <style data-href="/_next/static/css/426a24dbabc5c2b6bea0.css">
      .Example_example__26puF {
        font-weight: 700;
        font-size: 4rem;
      }
    </style>
    <link rel="preload" href="/_next/static/JwstEsXVrhLWQs5fyQaZp/pages/index.js" as="script" />
    <link rel="preload" href="/_next/static/JwstEsXVrhLWQs5fyQaZp/pages/_app.js" as="script" />
    <link rel="preload" href="/_next/static/runtime/webpack-b65cab0b00afd201cbda.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/framework.c8966c7d8b377309e6b8.js" as="script" />
    <link
      rel="preload"
      href="/_next/static/chunks/b127a595e0fb5ca3ca687ac067c6e36d58512ada.c67e2eed8a91b935cfaa.js"
      as="script"
    />
    <link rel="preload" href="/_next/static/runtime/main-fc5e979d6bf471c2c6d2.js" as="script" />
  </head>
  <body>
    <div id="__next">
      <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="Example_example__26puF">Hello Next.js 9.3</h1>
        <p>With TypeScript, tailwindcss, and Critical CSS</p>
      </div>
    </div>
    <script id="__NEXT_DATA__" type="application/json">
      {
        "props": { "pageProps": {} },
        "page": "/",
        "query": {},
        "buildId": "JwstEsXVrhLWQs5fyQaZp",
        "nextExport": true,
        "autoExport": true,
        "isFallback": false
      }
    </script>
    <script nomodule="" src="/_next/static/runtime/polyfills-d43ccb40d833aef9827f.js"></script>
    <script async="" data-next-page="/" src="/_next/static/JwstEsXVrhLWQs5fyQaZp/pages/index.js"></script>
    <script async="" data-next-page="/_app" src="/_next/static/JwstEsXVrhLWQs5fyQaZp/pages/_app.js"></script>
    <script src="/_next/static/runtime/webpack-b65cab0b00afd201cbda.js" async=""></script>
    <script src="/_next/static/chunks/framework.c8966c7d8b377309e6b8.js" async=""></script>
    <script
      src="/_next/static/chunks/b127a595e0fb5ca3ca687ac067c6e36d58512ada.c67e2eed8a91b935cfaa.js"
      async=""
    ></script>
    <script src="/_next/static/runtime/main-fc5e979d6bf471c2c6d2.js" async=""></script>
    <script src="/_next/static/JwstEsXVrhLWQs5fyQaZp/_buildManifest.js" async=""></script>
    <script src="/_next/static/JwstEsXVrhLWQs5fyQaZp/_ssgManifest.js" async=""></script>
  </body>
</html>
```
