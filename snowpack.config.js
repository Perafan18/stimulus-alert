module.exports = {
  plugins: [
    [
      '@snowpack/plugin-babel',
    ],
  ],
  exclude: [
    'build/**',
    '**/coverage/**',
    '**/node_modules/**',
    '**/pkg/**',
    '**/.idea/**',
    '**/LICENSE',
  ],
}
