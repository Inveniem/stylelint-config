const stylelintConfigDrupal = require("stylelint-config-drupal");

module.exports = {
  extends: ["stylelint-config-drupal", "stylelint-config-prettier"],
  rules: {
    // This rule raises false positives on multi-line comments that use the //
    // prefix and include multiple paragraphs...
    //
    // like this.
    "comment-no-empty": null,
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],

      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
      ],

      // stylelint-config-standard-scss and stylelint-config-drupal disagree
      // about some rules. In general, we would like Drupal's rules to take
      // precedence.
      //
      // One solution to this would be to extend stylelint-config-drupal after
      // stylelint-config-standard-scss above. However, that introduces another
      // problem: stylelint-config-drupal extends stylelint-config-standard,
      // which in turn extends stylelint-config-recommended, which enables some
      // rules that stylelint-config-standard-scss disables. For example,
      // stylelint-config-recommended enables the "at-rule-no-unknown" rule,
      // which raises false positives with SCSS.
      //
      // It's a chicken and egg problem. We want Drupal's rules to take
      // precedence, but we can't simply extend stylelint-config-drupal after
      // stylelint-config-standard-scss.
      //
      // As a workaround, we manually grab the "plugins" and "rules" properties
      // from stylelint-config-drupal (but not the "extends" property) and apply
      // them below. That way, stylelint-config-drupal's plugins and rules are
      // applied, but we do not recursively extend any configurations that it
      // extends.
      //
      // It might seem that this means we never extend stylelint-config-standard
      // and benefit from its rules, as stylelint-config-drupal intended, but we
      // actually do. Note that we do extend stylelint-config-standard-scss
      // above, and stylelint-config-standard-scss extends
      // stylelint-config-standard before disabling some of its rules.
      plugins: stylelintConfigDrupal.plugins,
      rules: {
        ...stylelintConfigDrupal.rules,

        // Like "comment-no-empty", this rule raises false positives.
        "scss/comment-no-empty": null,
      },
    },
  ],
};
