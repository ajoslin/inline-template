module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkgFile: 'package.json'

    simplemocha:
      options:
        reporter: 'dot'
      unit: 
        src: [
          'test/**/*.coffee'
        ]

    'npm-contributors':
      options:
        commitMessage: 'chore: update contributors'

    bump:
      options:
        commitMessage: 'chore: release v%VERSION%'
        pushTo: 'origin'

    'auto-release':
      options:
        checkTravisBuild: false

  grunt.loadNpmTasks 'grunt-npm'
  grunt.loadNpmTasks 'grunt-bump'
  grunt.loadNpmTasks 'grunt-auto-release'
  grunt.loadNpmTasks 'grunt-simple-mocha'

  grunt.registerTask 'release', 'Bump the version and publish to NPM.', (type) ->
    grunt.task.run [
      'npm-contributors',
      "bump:#{type||'patch'}",
      'npm-publish'
    ]
