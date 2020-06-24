import { Configuration } from 'webpack'

interface IS<T = Partial<Configuration>> {
  stories: string[]
  addons: string[]
}

export default {
  stories: ['../stories/*.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
  ],
} as IS
