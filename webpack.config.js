module.exports = {
  entry: [
   './js/app.js'
  ], 
  output: {
    path: __dirname,
    filename: 'bundle.js', 
  },
  module: {
    loaders: [{
      test: [/\.jsx$/, /.js$/], 
      exclude: /node_modules/, 
      loaders: ['babel-loader']
    }]
  }
};