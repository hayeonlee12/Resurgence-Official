const path = require('path');

module.exports = {
    mode: 'development', // Set to 'development' or 'production'
    entry: './src/index.js', // Adjust this to your entry file location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Adjust as needed
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm'], // Adjust based on your files
    },
};