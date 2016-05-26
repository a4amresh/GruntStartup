module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                files: {
                    'app/assets/sass/app.css': 'app/assets/sass/app.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ["app/assets/sass/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};