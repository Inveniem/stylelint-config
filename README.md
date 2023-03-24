# @inveniem/stylelint-config

This package provides Inveniem's Stylelint configuration as an extensible shared
configuration.

## Usage

1. Install this package
    * If using Yarn, run `yarn add --dev @inveniem/stylelint-config`
    * If using npm, run `npm install --save-dev @inveniem/stylelint-config`
2. Run `npx install-peerdeps --dev @inveniem/stylelint-config`
3. Create an _.stylelintrc.js_ file with the following contents:

```javascript
module.exports = {
  extends: '@inveniem/stylelint-config',
};
```

## Usage

To run Stylelint with this configuration, consider adding a `lint:styles` script
to the `scripts` section of _package.json_ with the following value:

```
stylelint --allow-empty-input --report-needless-disables --max-warnings=0 '**/*.{css,scss}'
```

Then, run `yarn lint:styles` (if using Yarn) or `npm run lint:styles` (if using
npm) to run it.
