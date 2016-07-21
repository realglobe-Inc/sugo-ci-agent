/**
 * Setup browser source of the project
 * @function browser
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const { runTasks } = require('ape-tasking')
const defaults = require('defaults')
const ababelES2015 = require('ababel-es2015')

/** @lends browser */
function browser (options = {}) {
  let { taskName, pattern, cwd, out } = defaults(options, {
    taskName: 'browser',
    pattern: '**/*.js',
    cwd: 'lib',
    out: 'sims/browser'
  })
  return runTasks(taskName, [
    () => ababelES2015(pattern, {
      cwd, out
    })
  ], true)
}

module.exports = browser
