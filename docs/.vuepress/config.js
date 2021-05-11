const moment = require('moment');
const nav = require("./nav.js");

module.exports = {
    theme: 'reco',
    title: 'webdyc',
    description: 'Alle Vorurteilekommen aus den Eingeweiden.',
    base: '/',
    head: [
      [
        'script',
        {},
        `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?1cda0c3a27ed754d6344dcce0e142e04";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `
      ],
      [
        'link',
        {
            rel: 'shortcut icon',
            type: 'image/x-icon',
            href: `https://webdyc.oss-cn-beijing.aliyuncs.com/blog/favicon.ico`,
          },
      ],
      ['link', { rel: 'dns-prefetch', href: `//f1g1ns1.dnspod.net` }],
      ['meta', { name: 'baidu-site-verification', content: 'C7pbYsRSpU' }],
      ['meta', { name: 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
      [
          'meta',
          {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
          },
      ],
      ['meta', { name: 'author', content: 'dyc,851545342@qq.com' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-title', content: 'dyc' }],
      // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      // 引入jquery
      ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
      }],
      // 引入鼠标点击脚本
      ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/MouseClickEffect.js"
      }]
    ],
    // 修改默认语言代码
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    themeConfig: {
      // 备案
      record: '京ICP备2021014074号',
      recordLink: 'https://beian.miit.gov.cn/',
      // 项目开始时间，只填写年份
      startYear: '2017',
      codeTheme: 'tomorrow', // default 'tomorrow'
      // 导航栏左侧可以显示logo, 需要以下配置
      logo:'https://webdyc.oss-cn-beijing.aliyuncs.com/blog/hero.jpg',
      // 设置全局作者姓名
      author: 'dyc',
      // 头像
      authorAvatar: 'https://webdyc.oss-cn-beijing.aliyuncs.com/Public/userImage.jpg',
      type: 'blog',
      // 添加友链 
      friendLink: [
        {
          title: '子文博客',
          desc: '唯有记录，才能传承！',
          email: 'recoluan@qq.com',
          logo: "https://ufojs.com/img/favicon.ico",
          link: 'https://ufojs.com'
        },
        {
          title: '山海以南',
          desc: '不积硅步,无以至千里',
          email: 'muyan_jun@163.com',
          logo: "https://cdn.jsdelivr.net/gh/Mu-Yan/Mu-Yan.github.io/avatar.jpg",
          link: 'https://mu-yan.cn'
        },
        {
          title: '北城寒雨',
          desc: '一个前端界的小学生',
          email: 'muyan_jun@163.com',
          logo: "https://cdn.jsdelivr.net/gh/Mu-Yan/Mu-Yan.github.io/avatar.jpg",
          link: 'http://203.55.110.1/'
        },
      ],
      subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
      nav,
      // 博客配置
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: '标签'      // 默认文案 “标签”
        },
        socialLinks: [     // 信息栏展示社交信息
          { icon: 'reco-github', link: 'https://github.com/dyc1lyf' },
          { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
        ]
      },
      // 修改默认语言配置
      locales: {
        '/': {
          recoLocales: {
            homeBlog: {
              article: '美文', // 默认 文章
              tag: '标识', // 默认 标签
              category: '类别', // 默认 分类
              friendLink: '友链' // 默认 友情链接
            },
            pagation: {
              prev: '上一页',
              next: '下一页',
              go: '前往',
              jump: '跳转至'
            }
          }
        }
      },
      valineConfig: {
        appId: 'nNCyIYGMSo8i0vXetinlVapa-gzGzoHsz',// your appId
        appKey: 'YE9cPoAypOVrXrBQkz8K7pMq', // your appKey
        showComment: false
      }
      
    },
    plugins: [
      // 自动生成侧边栏的插件
      "vuepress-plugin-auto-sidebar", {
        sort: {
          // 更多选项: 
          // `asc`、`desc`、`created_time_asc`、`created_time_desc`
          mode: 'asc'
        },
        // options
        collapse: {
          open: true
        }
      },
      // 文章最后更新时间转换
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
              moment.locale(lang)
              return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
          }
        }
      ],
      [
        "dynamic-title",
        {
            // Icon 建议根据自身需求选择
            showIcon: "/favicon.ico",
            showText: "",
            hideIcon: "/failure.ico",
            hideText: " 离开的彩蛋 !！",
            recoverTime: 2000
        }
      ],
      // 复制代码功能
      [
        "vuepress-plugin-nuggets-style-copy",
        {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }
      ],
      // 看板娘
      [
        '@vuepress-reco/vuepress-plugin-kan-ban-niang',
        {
          // theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
          theme: ['wanko'],
          clean: true
        }
      ],
      [
        'vuepress-plugin-container',
        {
            type: 'cd',
            defaultTitle: '点击查看',
            before: (info) =>
                `<details class="custom-block details open tip"><summary>${info}</summary>`,
            after: `</details>`,
        },
      ],
      [
          'vuepress-plugin-container',
          {
              type: 't', // 无标题tips
              defaultTitle: '',
              before: (info) => `<div class="custom-block tip">${info}`,
              after: `</div>`,
          },
      ],
      [
          'vuepress-plugin-container',
          {
              type: 'zimg', // 无标题tips
              defaultTitle: '',
              before: (info) => `<img src=${info}`,
              after: `class="zoom-custom-imgs">`,
          },
      ],
      [
          'vuepress-plugin-container',
          {
              type: 'theorem',
              before: (info) =>
                  `<div class="theorem"><p class="title">${info}</p>`,
              after: '</div>',
          },
      ],
      [
          'vuepress-plugin-container',
          {
              type: 'right',
              defaultTitle: '',
          },
      ],
      ['@vuepress/nprogress'],
      [
        '@vuepress/medium-zoom',
        {
            selector: 'img.zoom-custom-imgs',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16,
            },
        },
      ],
      '@vuepress/back-to-top',
    ],
}