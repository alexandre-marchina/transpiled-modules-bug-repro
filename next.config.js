const withTM = require("next-transpile-modules")(["shared-ui"], {
	debug: true,
});

module.exports = withTM();
