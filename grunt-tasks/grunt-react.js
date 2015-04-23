module.exports = function(grunt) {
    grunt.config('react', {
        files: {
            expand: true,
            cwd: 'jsx_src',
            src: ['**/*.js'],
            dest: 'jsx_out',
            ext: '.js'
        }
    });

    grunt.loadNpmTasks('grunt-react');
};

