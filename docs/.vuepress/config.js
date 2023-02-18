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
      '/guide/git',
    ]
  }),
})