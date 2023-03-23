# @inveniem/stylelint-config

This package provides Inveniem's Stylelint configuration as an extensible shared
configuration.

## Usage

1. Install this package
    * If you're using Yarn, run `yarn add --dev @inveniem/stylelint-config`
    * If you're using npm, run `npm install --save-dev @inveniem/stylelint-config`
2. Run `npx install-peerdeps --dev @inveniem/stylelint-config`
3. Create an _.stylelintrc.js_ file with the following contents:

```javascript
module.exports = {
  extends: '@inveniem/stylelint-config',
};
```
