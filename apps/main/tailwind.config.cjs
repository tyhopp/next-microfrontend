module.exports = {
  presets: [
    require('design-system/tailwind.config.js')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/app-one/export/**/*.js',
    '../../packages/design-system/export/**/*.js',
  ]
}