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
      '/guide/javascript/',
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
          '/guide/terminal/commands'
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
    ]
  }),
})