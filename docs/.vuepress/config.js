import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig({
  lang: 'ru-RU',
  title: 'Documentation',
  description: 'More information for developer',
  theme: defaultTheme({
    // set config here
    logo: '/img/paper_icon.svg',
    colorMode: 'dark', // плохо отрабатывает
    colorModeSwitch: false,
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'JavaScript',
        children: [
          '/guide/javascript/info/',
          '/guide/javascript/function/',
          '/guide/javascript/module/',
          '/guide/javascript/terms/',
          '/guide/javascript/theory/',
          '/guide/javascript/standart/'
        ]
      },
      {
        text: 'Git',
        link: '/guide/git/',
        children: [
          '/guide/git/instruction',
          '/guide/git/commands',
          '/guide/git/terms'
        ]
      },
      {
        text: 'Командная строка',
        link: '/guide/terminal',
        children: [
          '/guide/terminal/commands',
          '/guide/terminal/instruction'
        ],
      },
      {
        text: 'Дистрибутив',
        link: '/guide/distribution',
        children: [
          '/guide/distribution/bluetooth'
        ]
      },
      '/guide/keys/',
      '/guide/npm/',
      '/guide/lang/'
    ]
  }),
})