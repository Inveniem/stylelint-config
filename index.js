module.exports = {
  extends: ["stylelint-config-drupal", "stylelint-config-prettier"],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],

      // stylelint-config-standard-scss and stylelint-config-drupal disagree
      // about some rules, so stylelint-config-drupal is extended after
      // stylelint-config-standard-scss to ensure that its rules take
      // precedence.
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-drupal",
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
