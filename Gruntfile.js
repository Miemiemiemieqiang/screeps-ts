module.exports = function(grunt) {
    // 从 npm 载入任务
    var config = require('./.screeps.json')

    grunt.loadNpmTasks("grunt-ts")
    grunt.loadNpmTasks("grunt-screeps")
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks("grunt-contrib-watch")
    // 配置任务
    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                password: config.password,
                branch: config.branch,
                ptr: config.ptr
            },
            dist: {
                src: ['dist/*.{js,wasw}']
            }
        },
        watch: {
            files: "dist/*.*",
            tasks: ["screeps"]
        },
        // 移除 dist 文件夹中的所有文件。
        clean: {
            'dist': ['dist']
        },
        // 将所有源文件复制到 dist 文件夹中并展平文件夹结构
        copy: {
            // 将游戏代码推送到dist文件夹，以便在将其发送到 screeps 服务器之前可以对其进行修改。
            screeps: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**',
                    dest: 'dist/',
                    filter: 'isFile',
                    rename: function (dest, src) {
                        // 通过将文件夹分隔符替换成下划线来重命名文件
                        return dest + src.replace(/\//g,'_');
                    }
                }],
            }
        },
        // typescripts 编译任务
        'ts': {
            default : {
                options: {
                    sourceMap: false,
                    // 编译到的目标版本
                    target: 'es6',
                    rootDir: "src/"
                },
                // 要进行编译的目录及文件
                src: ["src/*.ts"],
                // 编译好的文件的输出目录
                outDir: 'dist/'
            }
        }
    })
    // 将 ts 编译任务注册到默认执行命令
    grunt.registerTask('default',  [ 'clean', 'copy:screeps' ])
    // grunt.registerTask('watch',  [ 'watch' ])
}