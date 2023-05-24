module.exports = {
  presets: [
    require('design-system/tailwind.config.js')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../design-system/export/**/*.js',
  ]
}