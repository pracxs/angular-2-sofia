module.exports = function(config) {
    config.set({
 
        basePath: '.',
 
        frameworks: ['jasmine'],
 
        files: [
            // paths loaded by Karma
            {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: false},
            {pattern: 'node_modules/es6-shim/es6-shim.map', included: false, watched: false},
            {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false},
            {pattern: 'node_modules/reflect-metadata/Reflect.js.map', included: false, watched: false},
            {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
            // loaded by systemjs
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},
            {pattern: 'node_modules/symbol-observable/**/*.js', included: false, watched: false},
            {pattern: 'karma-test-shim.js', included: true, watched: true},
            {pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: true},
            
            // paths loaded via module imports
            {pattern: 'dist/**/*.js', included: false, watched: true},
 
            // paths to support debugging with source maps in dev tools
            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: 'dist/**/*.js.map', included: false, watched: false}
        ],
 
        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/src/': '/base/src/'
        },
 
        port: 9876,
 
        logLevel: config.LOG_INFO,
 
        colors: true,
 
        autoWatch: true,
 
        browsers: ['Chrome'],
 
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],
 
        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],
 
        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'dist/**/!(*spec).js': ['coverage']
        },
 
        coverageReporter: {
            reporters:[
                //{ type: 'html', subdir: 'report-html' },
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },
 
        singleRun: false
    })
};