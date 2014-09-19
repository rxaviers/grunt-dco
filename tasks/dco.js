/**
 * grunt-dco
 *
 * Copyright (c) 2014 Rafael Xavier de Souza
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  var dco = require("dco");

  grunt.registerMultiTask("dco", "Validate DCO signatures in git repositories.", function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      path: "."
    });

    dco.getCommitErrors(options, function(error, errors, commits) {
      if (error) {
        grunt.log.error("Internal error " + error.stack);
        return done(error);
      }

      if (errors.length) {
        errors.forEach(function( error ) {
          grunt.log.error( error );
        });

        return done(new Error("Invalid commits."));
      }

      if (commits.length === 0) {
        grunt.log.warn( "No commits." );
      } else if (commits.length === 1) {
        grunt.log.ok("The commit has appropriate licensing.");
      } else {
        grunt.log.ok("All", commits.length, "commits have appropriate licensing.");
      }

      done();
    });
  });
};
