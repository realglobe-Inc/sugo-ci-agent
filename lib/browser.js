/**
 * Setup browser source of the project
 * @function browser
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const { runTasks } = require('ape-tasking')
const { compileToEs5 } = require('ape-compiling')
const filedel = require('filedel')
const defaults = require('defaults')

/** @lends browser */
function browser (options = {}) {
  let { taskName, src, dest } = defaults(options, {
    taskName: 'browser',
    src: 'lib',
    dest: 'sims/browser'
  })
  return runTasks(taskName, [
    () => filedel(`${dest}/**/*.js`),
    () => compileToEs5('**/*.js', {
      cwd: src,
      out: dest
    })
  ], true)
}

module.exports = browser
