module.exports = {
  baseUrl: './',
  // 生产环境的sourceMap 要不要？
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    },
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/page1.html',
      filename: 'page1.html',
      title: 'page1'
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/page2.html',
      filename: 'page2.html',
      title: 'page2'
    },
    page3: {
      entry: 'src/pages/page3/main.js',
      template: 'public/page3.html',
      filename: 'page3.html',
      title: 'page3'
    },
    page4: {
      entry: 'src/pages/page4/main.js',
      template: 'public/page4.html',
      filename: 'page4.html',
      title: 'page4'
    }
  }
}