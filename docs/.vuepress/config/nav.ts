// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "前端",
    items: [{
      text: "vue",
      link: "/note/vue/"
    }]
  },
  {
    text: "编程语言",
    items: [{
      text: "C++",
      link: "/pages/dd1db4/"
    }]
  },
  {
    text: "框架",
    items: [{
      text: "django",
      link: "/pages/e3f5d9/"
    }]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  // {
  //   text: "友情链接",
  //   items: [
  //     {
  //       text: "vuepress-theme-vdoing",
  //       link: "https://doc.xugaoyi.com/",
  //     },
  //     {
  //       text: "U2SB",
  //       link: "https://www.u2sb.com/",
  //     },
  //     {
  //       text: "MonoLogueChi",
  //       link: "https://blog.xxwhite.com/",
  //     },
  //   ],
  // },
];
