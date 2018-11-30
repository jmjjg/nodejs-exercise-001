/*global module, require*/
module.exports = function (grunt) {
    'use strict';

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: [
                'build',
                'out'
            ]
        },
        complexity: {
            all: {
                src: 'src/**/*.js',
                options: {
                    jsLintXML: 'out/complexity/jslint.xml',
                    checkstyleXML: 'out/complexity/checkstyle.xml'
                }
            },
            options: {
                breakOnErrors: false,
                errorsOnly: false,
                hideComplexFunctions: false,
                broadcast: false,
                cyclomatic: 4,
                halstead: 20,
                maintainability: 100
            }
        },
        jasmine: {
            all: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/**/*.js'
                }
            },
            options: {
                version: '3.3.0'
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'src/**/*.js',
                'spec/**/*.js'
            ],
            options: {
                force: true
            }
        },
        jslint: {
            all: {
                src: [
                    'Gruntfile.js',
                    'src/**/*.js',
                    'spec/**/*.js'
                ],
                directives: {
                },
                options: {
                    edition: 'latest',
                    junit: 'out/server-junit.xml',
                    log: 'out/server-lint.log',
                    jslintXml: 'out/server-jslint.xml',
                    errorsOnly: true,
                    failOnError: false,
                    checkstyle: 'out/server-checkstyle.xml'
                }
            }
        },
        jsvalidate: {
            all: {
                files: {
                    src: [
                        'Gruntfile.js',
                        'src/**/*.js',
                        'spec/**/*.js'
                    ]
                }
            },
            options: {
                verbose: true
            }
        },
        watch: {
            scripts: {
                files: [
                    'Gruntfile.js',
                    'src/**/*.js',
                    'spec/**/*.js'
                ],
                tasks: ['minimal'],
                options: {
                    spawn: false,
                    reload: true
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsvalidate');

    grunt.registerTask('default', ['clean', 'jsvalidate', 'jasmine', 'jslint', 'complexity']);
    grunt.registerTask('minimal', ['jsvalidate', 'jasmine']);
};
