> Validate DCO signatures in git repositories.


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dco --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dco');
```


## DCO task
_Run this task with the `grunt dco` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

For more explanations of the errors DCO will throw at you please visit [scottgonzalez/dco][].

[scottgonzalez/dco]: http://github.com/scottgonzalez/dco

### Options

Any specified option will be passed through directly to [scottgonzalez/dco][], thus you can specify any option that it supports. See [scottgonzalez/dco documentation][] for a list of supported options.

[scottgonzalez/dco]: http://github.com/scottgonzalez/dco
[scottgonzalez/dco documentation]: http://github.com/scottgonzalez/dco#dcogetcommiterrors-options-callback-

#### path

Type: `String`
Default: `.` ()

The path to the repository.

#### committish

Type: `String`
Default: `HEAD` (current branch)

Committish range to analyze.

#### exceptionalAuthors

Type: `Object`
Default: `{}`

A hash of email addresses and names for authors who may commit without signing
their commits.


## License

MIT © [Rafael Xavier de Souza](http://rafael.xavier.blog.br)
