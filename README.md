sugo-ci-agent
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-ci-agent
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-ci-agent
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-ci-agent.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-ci-agent
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-ci-agent.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-ci-agent/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-ci-agent
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-ci-agent.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-ci-agent.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-ci-agent
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-ci-agent.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-ci-agent
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-ci-agent.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

CI scripts for agent projects.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sugo-ci-agent --save-dev
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------

```javascript
#!/usr/bin/env node

'use strict'

const sugoCiAgent = require('sugo-ci-agent')

sugoCiAgent.build({})


```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Functions.md.hbs" Start -->

<a name="section-doc-guides-03-functions-md"></a>
Functions
---------

Available functions

| Signature | Description |
| ---- | ----------- |
| `.browser(options) -> Promise` | Setup browser source of the project |
| `.build(options) -> Promise` | Build the project |
| `.cover(options) -> Promise` | Measure coverage of the project |
| `.format(options) -> Promise` | Format the project |
| `.release(options) -> Promise` | Release the project |
| `.report(options) -> Promise` | Send coverage report. |
| `.share(pkg, options) -> Promise` | Share the project |
| `.test(options) -> Promise` | Run test for the project. |


<!-- Section from "doc/guides/03.Functions.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-ci-agent/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->
