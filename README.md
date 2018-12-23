# metalsmith-gulp-boilerplate [![Build Status](https://travis-ci.org/radiovisual/metalsmith-gulp-boilerplate.svg?branch=master)](https://travis-ci.org/radiovisual/metalsmith-gulp-boilerplate)

> A starter template for [Metalsmith](https://github.com/segmentio/metalsmith) + [Gulp](https://github.com/gulpjs/gulp) + [Jest](https://github.com/facebook/jest) projects.


## Installation

1. Make your project folder and clone metalsmith-boilerplate into it

   ```
   $ mkdir new-metalsmith-project
   $ git clone https://github.com/radiovisual/metalsmith-gulp-boilerplate.git new-metalsmith-project
   ```

2. Run the following command within your new project directory:

   ```
   $ npm install
   ```

3. Assuming you have [installed Gulp globally](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally),
start the dev task build/watch process with this command:

   ```
   $ npm run dev
   ```

4. If this is your first build, you might want to package your javascript dependencies with this command:

   ```
   $ npm run build
   ```

5. *Now you are ready to start Metalsmithing!* :thumbsup:

## Usage Notes


#### Dependencie

    "metalsmith-collections": "spacedawwwg/metalsmith-collections"

fix for duplicate output when running multiple times metalsmith build while dev

#### General

This boilerplate represents an opinionated setup for building static websites with Metalsmith and Gulp. It assumes
you want to use [Browserify](http://browserify.org/) with your custom scripts and helps you wrap all your javascript
dependencies into one file. It uses the [Sass](http://sass-lang.com/) precomplier and [Handlebars](http://handlebarsjs.com/)
templates. Gulp is responsible for the live-reloading (via [BrowserSync](http://www.browsersync.io/)) and the CSS / Browserify
steps. Metalsmith is responsible for compiling/generating the site files.

#### Configuration

Use the `site.json` file to change or update the default configuration settings. The current defaults
contain your source path, destination path and general site
metadata. If you want to change the gulp or metalsmith builds, use the `gulpfile.js` or `metalsmith.js` files.

#### Importing Files into Your Templates

By default, your generated files are available in Handlebars like so:

```html
<!-- your generated css -->
<link rel="stylesheet" href="{{rootPath}}css/styles.min.css">

<!-- your browserified scripts -->
<script src="{{rootPath}}js/bin/app.bundle.js"></script>
```

## Features and Defaults

These are the current defaults, but you can swap these out for anything you want.

- **Templating:** [Handlebars](http://handlebarsjs.com/) *via [metalsmith-layouts](https://github.com/superwolff/metalsmith-layouts)*
- **Easy Template Helper Integration**: Any node modules dropped into `layouts/helpers` will automatically be available to your Handlebars templates  
- **CSS Precompiler:** [SASS](https://github.com/stevenschobert/metalsmith-sass)
- **Live Reloading:** [BrowserSync](https://github.com/mdvorscak/metalsmith-browser-sync)
- **Relative Navigation:** Solved with [metalsmith-rootpath](https://github.com/radiovisual/metalsmith-rootpath)
- **Browserify:** [Browserify](http://browserify.org/) your javascript source automatically
- **Dependency Wrapping:** Minify and concat all your dependencies into one file
- **Unit Testing:** via [Jest](https://github.com/facebook/jest)

## What Next?

- Add some [Metalsmith plugins](http://www.metalsmith.io/#the-plugins) to customize your Metalsmith build.
- Add some [Gulp plugins](http://gulpjs.com/plugins/) to customize your gulp build.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [André Kelling](https://andrekelling.de) has waived all copyright and related or neighboring rights to this work.
