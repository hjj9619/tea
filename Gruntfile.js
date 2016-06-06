module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);//加载所有的任务
  grunt.initConfig({
    connect: {
      options: {
        port:9999,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35720  //声明给 watch 监听的端口
      },
      server: {
        options:{
          open: true, //自动打开网页
          base: [
            '.'  //主目录
          ]
        }
      }
    },

    sass: {
      options:{
        //noCache:true,
        compass:true,
        style:'expanded',
        sourcemap:"none"
      },
      dist: {
        files: {
          'src/css/index.css':'src/scss/index.scss'
        }
      }
    },
    cssmin:{
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          "dist/css/index.css": "src/css/index.css"
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html'     // 'destination': 'source'
        }
      }
    },
    uglify:{
      my_target: {
        options: {
          beautify: false
        },
        files: {
          'dist/js/bootstrap.min.js': ['src/js/bootstrap.min.js'],
          'dist/js/respond.js': ['src/js/respond.js'],
          'dist/js/live.js': ['src/js/live.js'],
          'dist/js/jquery-1.11.0.min.js': ['src/js/jquery-1.11.0.min.js']
        }
      }
    },
    jade: {
      debug: {
        options: {
          pretty:true,
          data: {
            debug: true
          }
        },
        files: {
          "src/index.html": "src/index.jade"
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'  //监听前面声明的端口  35729
        },
        files: [  //下面文件的改变就会实时刷新网页
          'src/{,*/}*.html',
          'src/{,*/}*.jade',
          'dist/{,*/}*.html',
          'dist/{,*/}*.jade',
          'src/css/{,*/}*.css',
          'src/scss/{,*/}*.scss',
          'dist/css/{,*/}*.css',
          'src/js/{,*/}*.js',
          'dist/js/{,*/}*.js',
          'src/j2s/{,*/}*.js',
          'dist/j2s/{,*/}*.js'
        ],
        tasks:['sass', 'jade', 'htmlmin', 'cssmin']//, ', 'uglify'connect']
      }
    }
  });
 
  grunt.registerTask('default', [
    'sass',
    'jade',
    'cssmin',
    'htmlmin',
    'uglify',
    'connect',
    'watch'
  ]);
};

/*
* 5/2
* 5/28
* */

/*

 uglify:{
 my_target: {
 options: {
 beautify: false
 },
 files: {
 'dest/js/1.js': ['src/js/1.js'],
 'dest/js/2.js': ['src/js/2.js'],
 'dest/js/jquery.min.js': ['src/js/jquery.min.js']
 }
 }
 },



concat: {
  /!*options: {
   separator: ';'
   },*!/
  dest:{
    src: ['dest/js/element.js','dest/js/script.js'],
        dest:'dest/script.js'
  }
},
imagemin: {                          // Task
  static: {                          // Target
    options: {                       // Target options
      optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }]
      //use: [mozjpeg()],
    }
  },
  dynamic: {                         // Another target
    files: [{
      expand: true,                  // Enable dynamic expansion
      cwd: 'src/img/',                   // Src matches are relative to this path
      src: ['*.{png,jpg,gif}'],   // Actual patterns to match
      dest: 'dest/'                  // Destination path prefix
    }]
  }
},
less: {
  development: {
    files: {
      'src/css/styles.css': 'src/less/styles.less'
    }
  }
},
 jshint: {
 files: {
 all: ['src/js/*.js']
 },
options:{
  jshintrc: "./.jshintrc"
}
},*/
