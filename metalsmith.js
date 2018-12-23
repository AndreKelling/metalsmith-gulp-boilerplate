'use strict';
var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var discoverPartials = require('metalsmith-discover-partials');
var rootPath = require('metalsmith-rootpath');
var ignore  = require('metalsmith-ignore');
var permalinks  = require('metalsmith-permalinks');
var markdown = require('metalsmith-markdown');
var collections = require('metalsmith-collections');
var handlebars = require('handlebars');
var debug = require('metalsmith-debug');
var glob = require('glob');

/**
 * Import metadata
 */
var metadata = require('./site.json');

/**
 * Add custom helpers to handlebars using the global handlebars instance
 * https://github.com/superwolff/metalsmith-layouts/issues/63
 *
 */
glob.sync('layouts/helpers/*.js').forEach((fileName) => {
  const helper = fileName.split('/').pop().replace('.js', '')

  handlebars.registerHelper(
    helper,
    require(`./${fileName}`)
  )
})

/**
 *  Export your Metalsmith build to use in gulp.
 *
 *  Metalsmith will look for a folder named `src` in `__dirname`.
 *  Use the source() method if you want to point Metalsmith to a different `src` folder/location.
 *  Then we set the destination folder using the destination() method.
 *
 *  Note that we are not calling the `Metalsmith.build()` here. We will start the build in the gulp file.
 */
module.exports = Metalsmith(__dirname)

    .clean(false)

    // Where shall we build?
    .destination(metadata.destination)

    // Process metadata
    .metadata(metadata.metadata)

    // Expose `rootPath` to each file
    .use(rootPath())

    .use(collections({
        onepager: {
            pattern: 'onepager/**/*.html',
            sortBy: 'order'
        }
    }))

    // .use(markdown())

    .use(permalinks({
        relative: 'on'
    }))

    // Process handlebars partials
    .use(discoverPartials({
        directory: './layouts/partials',
    }))

    // Process handlebars templates
    .use(layouts({
        engine: 'handlebars',
    }))

    // Ignore Onepager Partials
    .use(ignore([
        'onepager/**'
    ]))

    //.use(debug())
