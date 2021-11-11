/**
 * Grunt build script.
 * @description Automate several processes and compilations on `watch`. Export installable projects and zip on dist directory on `build`.
 * @version 1.0.0
 * @author codiaum-team
 * @organization Codiaum
 * 
*/

const sass  = require('node-sass');
const Fiber = require('fibers');

/**
* ----------------------------------------
* @description grunt setup (main wrapper)
* ----------------------------------------
*/
module.exports = grunt => {
    'use strict';

	const projectConfig = {
		name: 'novus-upwork', 				// should be the text domain of the project (todo: spilt it)
		srcDir: './', 						// the source directory of the plugin
		version: '1.0.0',
		distDir: `../dist/novus-upwork/`,		// where to save the built file
	};

	/**
    * -------------------------------------
    * @description Setup project files
    * -------------------------------------
    */
    const projectFiles = {
        sass : [
            {
                cwd: 'sass/',
                src: ['*.scss', '!_*.scss'],
                dest: 'css/'
            },
        ],
    }


    /**
    * -------------------------------------
    * @description initalize configuration
    * @see https://software.saao.ac.za/2014/12/03/logging-in-grunt-in-colour/
    * -------------------------------------
    */
    
    grunt.initConfig({
        // grunt watch files
        watch: {
			sass: {
				files: [ projectConfig.srcDir + '**/*.scss', '!' + projectConfig.srcDir + 'node_modules' ],
				tasks: [ 'sass', 'cmq' ],
				options: {
					event: ['all'],
					reload: true,
				},
			}
		},

        // grunt compile scss to css
        sass: {
            compile: {
				options: {
					implementation: sass,
					sourceMap: true,
					indentType: 'tab',
					omitSourceMapUrl: true,
					indentWidth: 1,
					outputStyle: 'expanded',
					force: true,
                    fiber: Fiber,
				},
				files: projectFiles.sass.map( file => ( {
					expand: true,
					extDot: 'last',
					ext: '.css',
					cwd: file.cwd,
					src: file.src,
					dest: file.dest,
				} ) ),
			},
        },
		

		makepot: {
			target: {
				options: {
					cwd: projectConfig.srcDir,  // Directory of files to internationalize.
					domainPath: 'languages/',   // Where to save the POT file.
					mainFile: '', 				// Main project file.
					type: 'wp-theme', 			// Type of project (wp-plugin or wp-theme).
					updateTimestamp: false, 	// Whether the POT-Creation-Date should be updated without other changes.
					updatePoFiles: false, 		// Whether to update PO files in the same directory as the POT file.
				},
			},
		},

		// clean dist directory file
		clean: {
			options: { force: true },
			dist: [
				projectConfig.distDir + '/**',
				projectConfig.distDir.replace( /\/$/, '' ) + '.zip',
			],
		},

		// Copying project files to ../dist/ directory
		copy: {
			dist: {
				files: [ {
					expand: true,
					src: [
						'' + projectConfig.srcDir + '**',
						'!' + projectConfig.srcDir + 'Gruntfile.js',
						'!' + projectConfig.srcDir + 'package.json',
						'!' + projectConfig.srcDir + 'package-lock.json',
						'!' + projectConfig.srcDir + 'node_modules/**',
						'!' + projectConfig.srcDir + '**/dev-*/**',
						'!' + projectConfig.srcDir + '**/*-test/**',
						'!' + projectConfig.srcDir + '**/*-beta/**',
						'!' + projectConfig.srcDir + '**/scss/**',
						'!' + projectConfig.srcDir + '**/sass/**',
						'!' + projectConfig.srcDir + '**/src/**',
						'!' + projectConfig.srcDir + '**/.*',
						'!' + projectConfig.srcDir + '**/*.map',
						'!' + projectConfig.srcDir + '**/*.config',
						'!' + projectConfig.srcDir + 'tsconfig.json',
						'!' + projectConfig.srcDir + 'build-package/**',
						'!' + projectConfig.srcDir + 'none',
						'!' + projectConfig.srcDir + 'Built',
						'!' + projectConfig.srcDir + 'Installable',
					],
					dest: projectConfig.distDir,
				} ],
			},
		},

		// Minify all .js files.
		terser: {
			options: {
				ie8: true,
				parse: {
					strict: false,
				},
			},
			js: {
				files: [ {
					expand: true,
					src: [ projectConfig.srcDir + '**/*.js' ],
					dest: '',
				} ],
			},
		},

		// Minify all .css files.
		cssmin: {
			options: {
				force: true,
				compress: true,
				sourcemaps: false,
			},
			minify: {
				files: [ {
					expand: true,
					src: [ projectConfig.distDir + '**/*.css' ],
					dest: '',
				} ],
			},
		},

		cmq: {
			options: {
			  log: false
			},
			your_target: {
				files: projectFiles.sass.map( file => ( {
					[file.dest]: [file.dest + '/*.css']
				} ) )
				
			}
		},
		
		// Compress Build Files into ${project}.zip
		compress: {
			dist: {
				options: {
					force: true,
					mode: 'zip',
					archive: projectConfig.distDir.replace( projectConfig.name, '' ) + projectConfig.name + '.zip',
				},
				expand: true,
				cwd: projectConfig.distDir,
				src: [ '**' ],
				dest: '../' + projectConfig.name,
			},
		},

/**
* -------------------------------------
* @description print ASCII text 
* @see https://fsymbols.com/generators/carty/
* -------------------------------------
*/
		
screen: {
    begin: `
	┏━━━┓╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋┏━━━━┓
	┃┏━┓┃╋╋╋╋┃┃╋╋╋╋╋╋╋╋╋╋┃┏┓┏┓┃
	┃┃╋┗╋━━┳━┛┣┳━━┳┓┏┳┓┏┓┗┛┃┃┣┻━┳━━┳┓┏┓
	┃┃╋┏┫┏┓┃┏┓┣┫┏┓┃┃┃┃┗┛┃╋╋┃┃┃┃━┫┏┓┃┗┛┃
	┃┗━┛┃┗┛┃┗┛┃┃┏┓┃┗┛┃┃┃┃╋╋┃┃┃┃━┫┏┓┃┃┃┃
	┗━━━┻━━┻━━┻┻┛┗┻━━┻┻┻┛╋╋┗┛┗━━┻┛┗┻┻┻┛

	# Project   : ${projectConfig.name}
	# Dist      : ${projectConfig.distDir}
	# Version   : ${projectConfig.version}`.cyan,
	textdomainchecking: `Checking textdomain [${projectConfig.name}]`.cyan,
	minifying:`Minifying js & css files.`.cyan,
	finish: `
╭─────────────────────────────────────────────────────────────────╮
│                                                                 │
│                      All tasks completed.                       │
│   Built files & Installable zip copied to the dist directory.   │
│                        ~ Codiaum Team ~                         │
│                                                                 │
╰─────────────────────────────────────────────────────────────────╯
`.green

}

    });
    
    /**
    * ----------------------------------
    * @description Register grunt tasks 
    * ----------------------------------
    */
    require('load-grunt-tasks')(grunt);
    grunt.registerMultiTask( 'screen', function() { grunt.log.writeln( this.data ) });
    grunt.registerTask( 'fixtextdomain', ['screen:textdomainchecking'] );
	grunt.registerTask( 'boot', ['clean', 'copy'] );
	grunt.registerTask( 'minify', ['screen:minifying','terser:js'] );
    grunt.registerTask( 'default', ['screen:begin', 'fixtextdomain', 'sass', 'cmq', 'watch']);
	grunt.registerTask( 'build', ['screen:begin', 'sass', 'fixtextdomain', 'makepot', 'boot', 'cmq', 'minify', 'compress', 'screen:finish'])
    
};