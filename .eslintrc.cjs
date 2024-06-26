module.exports = {
  root: true,
  env: { browser: true,
    <div className='text-3xl hover:text-gray-400 absolute bottom-0 rounded-b-full text-white bg-gray-500 bg-opacity-70 flex justify-center items-center w-full '><FaCamera /> </div> es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
