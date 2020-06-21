module.exports = {
  title: 'popmotion 中文文档',
  base: '/popmotion.doc/',
  themeConfig: {
    sidebar: [
      '/',
      '/action',
      {
        title: '动画-Animation',
        children: [
          '/animation/decay',
          '/animation/every-frame',
          '/animation/inertia',
          '/animation/key-frames',
          '/animation/physics',
          '/animation/spring',
          '/animation/timeline',
          '/animation/tween'
        ]
      },
      '/calculators',
      {
        title: '排版-Compositors',
        children: [
          '/compositors/chain',
          '/compositors/composite',
          '/compositors/crossfade',
          '/compositors/delay',
          '/compositors/merge',
          '/compositors/parallel',
          '/compositors/schedule',
          '/compositors/stagger'
        ]
      },
      '/easing',
      {
        title: '输入-Input',
        children: [
          '/input/listen',
          '/input/multitouch',
          '/input/pointer'
        ]
      },
      {
        title: '反馈-Reactions',
        children: [
          '/reactions/multicast',
          '/reactions/value'
        ]
      },
      {
        title: '样式-Styler',
        children: [
          '/styler/intro',
          '/styler/html',
          '/styler/dom-scroll',
          '/styler/svg'
        ]
      },
      '/transformers'
    ]
  }
}