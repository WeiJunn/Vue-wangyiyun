module.exports = {
	configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'components': '@/components',
        'utils': '@/utils',
      }
    }
  }
};