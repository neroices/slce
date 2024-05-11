import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Neroices',
  subtitle: 'My Notes.',
  lang: 'en',
  themeColor: {
    hue: 295,
    fixed: false,
  },
  banner: {
    enable: false,
    src: 'https://github.com/neroices.png', // temp
  },
  favicon: [
     {
       src: '/favicon/favicon.ico'
     }
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [LinkPreset.Archive, LinkPreset.About],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://github.com/neroices.png',
  name: 'Neroices',
  bio: 'No grand mission or passionate purpose here. Just throwing some random thoughts into the void. Maybe someone will read it. Maybe not. Who knows?',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/letsmakeices',
    },
    {
      name: 'GitLab',
      icon: 'fa6-brands:gitlab',
      url: 'https://gitlab.com/neroices',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/neroices',
    },
    {
      name: 'GPG',
      icon: 'material-symbols:key',
      url: 'https://keys.openpgp.org/vks/v1/by-fingerprint/DA88956A14A8224FC7D0C1ABB2AC74F978F9A703',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}