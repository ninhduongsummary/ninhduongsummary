import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Summary',
  subtitle: 'Ninh Duong Summary',
  lang: 'vi',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/ninhduong_banner_vietnam_travel.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'bottom', // Equivalent to object-position, defaults center
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/instapx.ico',  
      theme: 'light'            
    },
    {
      src: '/favicon/instapx.ico',    
      theme: 'dark'           
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Threads',
      url: 'https://www.threads.net/@ninhduong_summary',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/instapx.jpeg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Nội Dung Sến News',
  bio: "From Threads @ninhduong_summary",
  links: [
    {
      name: 'Threads',
      icon: 'fa6-brands:threads',
      url: 'https://www.threads.net/@ninhduong_summary',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
