module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/**/*.js']
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '127.0.0.1',
                    base: '../../',
                    directory: '../../'
                }
            }
        },
        webpack: {
            build: {
                "optimize-minimize": true,
                entry: ['./src/Mobile/SalesLogix/Application.js', './src/Mobile/SalesLogix/ApplicationModule.js'],
                output: {
                    path: 'deploy/',
                    filename: 'bundle.js',
                    libraryTarget: 'amd'
                },
                externals: [
                    "moment",
                    /^Sage/,
                    /^dojo/,
                    /^dijit/
                ],
                resolve: {
                    alias: {
                    },
                    modulesDirectories: [
                        'src'
                    ]
                },
                target: 'web',
                stats: {
                    colors: true,
                    modules: true,
                    reasons: true
                }
            }
        },
        weinre: {
            dev: {
                options: {
                    httpPort: 8080,
                    boundHost: '-all-',
                    verbose: false,
                    debug: false,
                    readTimeout: 5,
                    deathTimeout: 15
                }
            }
        },
        jasmine: {
            coverage: {
                src: ['src/**/*.js', 'configuration/**/*.js', 'localization/**/*.js'],
                options: {
                    specs: 'tests/**/*.spec.js',
                    host: 'http://127.0.0.1:8000/products/argos-saleslogix/',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: [
                            {
                                type: 'text'
                            },
                            {
                                type: 'html',
                                options: {
                                    dir: 'coverage'
                                }
                            }
                        ],
                        template: 'GruntRunner.tmpl'
                    }
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['content/css']
                },
                files: {
                    'min/css/app.min.debug.css': 'content/css/app.less'
                }
            },
            production: {
                options: {
                    paths: ['content/css'],
                    cleancss: true
                },
                files: {
                    'min/css/app.min.css': 'content/css/app.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['src/**/*.js', 'configuration/**/*.js', '../../argos-sdk/src/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            less: {
                // To get livereload to work with less files, you need to go into node_modules\grunt-contrib-watch\node_modules\tiny-lr\lib\public\livereload.js
                // and modify the reloadLess function and remove the cache busting code.
                // See: https://github.com/mklabs/tiny-lr/issues/22#issuecomment-34702527
                files: ['content/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-weinre');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('test', ['connect', 'jasmine:coverage']);
    grunt.registerTask('server', ['connect:server:keepalive']);
    grunt.registerTask('default', ['test']);
};
