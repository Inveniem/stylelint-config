# stylelint-config-inveniem

This package provides Inveniem's Stylelint configuration as an extensible shared
configuration.

## Usage

1. Run `yarn --dev stylelint-config-inveniem`
2. Run `npx install-peerdeps --dev stylelint-config-inveniem`
3. Create an _.stylelintrc.js_ file with the following contents:

```javascript
module.exports = {
  "extends": "stylelint-config-inveniem",
};
```
