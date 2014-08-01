'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        files: [{
          expand: true,
          cwd: "src",
          src: "**/!(base).jade",
          dest: "build",
          ext: ".html"
        }],
        options: {
          pretty: true,
          i18n: {
            locales: 'locales/*.json',
            namespace: '$i18n'
          }
        }
      }
    },
    sass: {
      compile: {
        files: [{
          expand: true,
          cwd: "src/sass",
          src: "**/*.scss",
          dest: "build/css",
          ext: ".css"
        }]
      }
    },
    uglify: {
      js: {
        files: [{
          expand: true,
          cwd: "src/js",
          src: "**/*.js",
          dest: "build/js",
          ext: ".min.js"
        }],
        options: {
          beautify: true
        }
      }
    },
    watch: {
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      }
    }
  })

  grunt.loadNpmTasks('grunt-jade-i18n')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['jade', 'sass'])
}
