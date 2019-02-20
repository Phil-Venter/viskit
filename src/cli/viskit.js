#!/usr/bin/env node

const program = require("commander");
const colors = require("colors");
const theme = require("../core/config/theme.js");
colors.setTheme(theme);

program
	.version('1.1.0')
	.usage('[options] [command]')
	.option('-v, --verbose', 'output everything');

//IMPORTANT: Keep the commands listed in alphabetical order.
program
	.command("count-widgets <project>", "Count the number of widgets for each view.")
	.alias("cw");

program
	.command("find-autogrow-widgets <project>", "Find any widgets with undefined or preferred width or height")
	.alias("faw");

program
	.command("find-images <project>", "Find and classify images in the project structure into used, unused and missing")
	.alias("fi");

program
	.command("find-orphan-widgets <project>", "Find any widgets in the project structure not linked to a view")
	.alias("fow");

program
	.command("find-redundant-containers <project>", "Find any container widgets with one or no children")
	.alias("frc");

program
	.command("find-skins <project>", "Find all the skins defined for a given theme")
	.alias("fs");

program
	.command("find-views <project>", "Find any views in the project of a specific type, channel, name")
	.alias("fv");

program
	.command("find-widgets <project>", "Find any widgets in the project of a specific type, channel, name")
	.alias("fw");

program
	.command("get-project-version <project>", "Retrieves the version of a project according to the plugins it uses.")
	.alias("gpv");

program
	.command("is-vis-project <project>", "Determine whether a given directory is the root of a Vis project.")
	.alias("ivp");

program
	.command("set-vis-version <visualizer-path> <project>", "Set the version of the Vis installation to match a given project.")
	.alias("svv");

program.on('option:verbose', function () {
	process.env.verbose = this.verbose;
});

program.on('--help', function(){
	//Description
	console.log(colors.info(
		"\nWhat is Viskit?\n\n" +

		"Viskit is a CLI meant to help " + "Kony Visualizer".emphasis + " developers work faster and keep\n" +
		"their projects clear of junk.\n" +
		"Read more about Viskit at " + "https://www.npmjs.com/package/viskit".underline + "\n"
	));
	//Pun
	console.log(colors.info(
		"What is a biscuit?\n\n" +

		"According to Wikipedia, \"a variety of primarily flour-based baked food products.\"\n" +
		"Read more about biscuits at " + "https://en.wikipedia.org/wiki/Biscuit".underline + "\n"
	));
	//Disclaimer
	console.log(colors.info(
		"Disclaimer:\n\n" +

		"Viskit is a " + "community".emphasis + " project, " + "not".emphasis +" part of the official " +
		"Kony".emphasis + " platform, and so\n" +
		"it is " + "NOT supported by Kony in any way".emphasis + ".\n"
	));
});

if (!process.argv.slice(2).length) {
	program.help(helpText => {
		return colors.info(helpText);
	});
}

// error on unknown commands
/*program.on('command:*', function () {
	console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
	process.exit(1);
});*/

program.parse(process.argv);