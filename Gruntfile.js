module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'Gruntfile.js',
                'src/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                globals: {
                    angular: true,
                    console: true,
                    module: true,
                    document: true
                }
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/**/*.js']
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: true,
                extensions: 'js',
                jUnit: {
                    report: true,
                    savePath : './reports',
                    useDotNotation: true,
                    consolidate: true
                }
            },
            all: ['test/']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('test', [
        'jshint',
        'jasmine_node'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);

};
