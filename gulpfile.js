/**
 * @gulpfile tasks managment
 * @include: devDependencies on package.json
 * @require: {node_modules}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

global.browserSync = browserSync;

// @requireDir
// @include: [gulp-tasks]
// -----------------

requireDir('./gulp/tasks', {
	recurse: false
});

// @watch task
// @gulp is watching you...
// -----------------

gulp.task('default', ['watch']);