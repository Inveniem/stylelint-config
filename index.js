module.exports = {
  extends: ["stylelint-config-drupal", "stylelint-config-prettier"],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
      ],
      rules: {
        // This rule finds false positives in multi-line comments that use // and
        // have more than one paragraph...
        //
        // like this.
        "scss/comment-no-empty": null,
      },
    },
  ],
};
