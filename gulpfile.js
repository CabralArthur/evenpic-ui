require('dotenv').config();

const gulp = require('gulp');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint-new');
const replace = require('gulp-string-replace');
const chalk = require('chalk');

const libJS = [];
const appCSS = [];
const lintFiles = [];
const envFile = ['src/assets/js/envs.js'];
const appJS = ['src/assets/js/app.js'];
const files = getFileNames();

function getFileNames() {
	const fileName = {
		app: 'app.js',
		libs: 'libs.js',
		css: 'app.css'
	};

	return fileName;
}

//Angular
libJS.push('src/assets/libs/angular/angular.min.js');
libJS.push('src/assets/libs/angular/angular-ui-router.min.js');

// Angular locale
libJS.push('src/assets/libs/angular-locale/angular-locale.js');

// JQuery
libJS.push('src/assets/libs/jquery/jquery-3.6.3.min.js');
libJS.push('src/assets/libs/datepicker/bootstrap-datepicker.js');

//Angular Bootstrap
libJS.push('src/assets/libs/angular-bootstrap/ui-bootstrap-tpls-0.14.3.min.js');

//HighCharts
libJS.push('node_modules/highcharts/highcharts.js');

//Currency
libJS.push('node_modules/currency.js/dist/currency.min.js');

// DayJS
libJS.push('node_modules/dayjs/dayjs.min.js');

// Lodash
libJS.push('node_modules/lodash/lodash.min.js');

// DayJS
libJS.push('node_modules/dayjs/dayjs.min.js');
libJS.push('node_modules/dayjs/plugin/customParseFormat.js');

// Bootstrap
appCSS.push('src/assets/css/bootstrap.min.css');

// Input Masks
libJS.push('src/assets/libs/angular-input-masks/angular-input-masks.js');

appJS.push('src/assets/js/app.js');
appJS.push('src/assets/js/directives/*.js');
appJS.push('src/assets/js/modules/*/*.js');
appJS.push('src/assets/js/modules/*/components/*/*.js');
appJS.push('src/assets/js/modules/*/shared/*.js');
appJS.push('src/assets/js/components/*/*.js');
appJS.push('src/assets/js/controllers/*.js');
appJS.push('src/assets/js/directives/*.js');
appJS.push('src/assets/js/services/*.js');
appJS.push('src/assets/js/utils/*.js');
appJS.push('src/assets/icons/*/*.js');

// Application
lintFiles.push('src/assets/js/app.js');
lintFiles.push('src/assets/js/directives/*.js');
lintFiles.push('src/assets/js/modules/*/*.js');
lintFiles.push('src/assets/js/modules/*/components/*/*.js');
lintFiles.push('src/assets/js/modules/*/shared/*.js');
lintFiles.push('src/assets/js/components/*/*.js');
lintFiles.push('src/assets/js/controllers/*.js');
lintFiles.push('src/assets/js/directives/*.js');
lintFiles.push('src/assets/js/services/*.js');
lintFiles.push('src/assets/js/utils/*.js');
lintFiles.push('src/assets/icons/*/*.js');

// CSS - Libs
appCSS.push('node_modules/@tabler/core/dist/css/tabler.min.css');
appCSS.push('src/assets/libs/datepicker/bootstrap-datepicker.min.css');

// CSS - Application
appCSS.push('src/assets/css/alert.css');
appCSS.push('src/assets/css/root.css');
appCSS.push('src/assets/css/design-system.css');

const watcherLinter = gulp.watch(lintFiles);
const watcherAppJs = gulp.watch(appJS);
const watcherAppCss = gulp.watch(appCSS);

watcherLinter.on('change', watchTask);

function watchTask(path) {
	let hour = new Date();
	let prefix = '';

	hour = hour.toISOString();
	hour = hour.split('T')[1];
	hour = hour.split('.')[0];
	prefix = '[' + hour + ' - ' + path;

	gulp.src([path]).pipe(eslint()).pipe(eslint.results((results) => {
		if (!results.errorCount && !results.warningCount) {
			// eslint-disable-next-line no-console
			console.log(chalk.gray(prefix + '] - ') + chalk.green('Perfect format!'));
			return;
		}

		if (!results || !results[0] || !results[0].messages || !results[0].messages.length) {
			return;
		}

		results[0].messages.forEach((message) => {
			// eslint-disable-next-line no-console
			console.log(chalk.gray(prefix) + chalk.gray(':' + message.line + ' [Column: ' + message.column + ']') + ' - ' + message.message);
		});

		// eslint-disable-next-line no-console
		console.log(chalk.gray(prefix + '] - ') + chalk.red('Errors: ' + (results.errorCount + results.warningCount)));
	}));
}

function envs() {
	return gulp.src(envFile)
		.pipe(replace('EDDY_API_BASE_URL', process.env.EDDY_API_BASE_URL))
		.pipe(concat('envs.js'))
		.pipe(gulp.dest('build'));
}

function appsTask() {
	return gulp.src(appJS)
		.pipe(concat(files.app))
		.pipe(gulp.dest('build'));
}

function cssTask() {
	return gulp.src(appCSS)
		.pipe(concat(files.css))
		.pipe(gulp.dest('build'));
}

function libsTask() {
	return gulp.src(libJS)
		.pipe(concat(files.libs))
		.pipe(gulp.dest('build'));
}

function serve() {
	var opts = {
		port: 9090,
		livereload: true,
		fallback: 'index.html'
	};

	connect.server(opts);
}

watcherAppJs.on('change', () => {
	return gulp.src(appJS).pipe(concat('app.js')).pipe(gulp.dest('build')).pipe(connect.reload());
});

watcherAppCss.on('change', () => {
	return gulp.src(appCSS).pipe(concat('app.css')).pipe(gulp.dest('build')).pipe(connect.reload());
});

function buildHtmlTask() {
	gulp.src(['views/app.html'])
		.pipe(gulp.dest('./views'));

	return gulp.src(['index.html'])
		.pipe(gulp.dest('.'));
}

function processExit(done) {
	done();
	process.exit(0);
}


exports.build = gulp.series(gulp.parallel(appsTask, libsTask, cssTask, buildHtmlTask), envs, processExit);

exports.default = gulp.series(envs, libsTask, appsTask, cssTask, serve);
