module.exports = {
  https: false,
  // hot: 'Only',
  proxy: {
    '/api': {
      target: 'https://lianghj.top:8888/api/private/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/111'
      }
    }
  }
}
