// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['react-port/**'],
  },
  antfu({
    vue: true,
    gitignore: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    rules: {
      curly: ['error', 'all'],
    },
  }),
)
