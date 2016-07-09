/**
 * CI scripts for agent projects.
 * @module sugo-ci-agent
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get browser () { return d(require('./browser')) },
  get build () { return d(require('./build')) },
  get cover () { return d(require('./cover')) },
  get format () { return d(require('./format')) },
  get release () { return d(require('./release')) },
  get report () { return d(require('./report')) },
  get share () { return d(require('./share')) },
  get test () { return d(require('./test')) }
}