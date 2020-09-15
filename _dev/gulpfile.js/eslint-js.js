/**
 * eslintJs
 * .eslintrc に基づく eslint の施行 ( lib 配下除く )
 *
 * @return {Stream}
 */
exports.eslintJs = function eslintJs(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config.js');
  const eslint = require('gulp-eslint');
  const uglify = require("gulp-uglify");

  src(config.path.src.js)
    .pipe(eslint({ useEslintrc: true })) // .eslintrc を参照
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(uglify())
    .pipe(dest(config.path[global.env].js))
    .on('end', cb);
};
