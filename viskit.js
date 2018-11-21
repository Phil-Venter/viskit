#!/usr/bin/env node

const program = require("commander");
const colors = require("colors");
const theme = require("./config/theme.js");
colors.setTheme(theme);

program
	.version('1.0.0')
	.usage('[options] [command]')
	.option('-v, --verbose', 'output everything');

program
	.command("count-widgets <project>", "Count the number of widgets for a specific form factor or form")
	.alias("cw");

program
	.command("find-redundant-containers <project>", "Find any containers with one or no children")
	.alias("frc");

program
	.command("find-autogrow-widgets <project>", "Find any widgets with undefined or preferred width or height")
	.alias("faw");

//TODO: Count heavy widgets per form -e.g. segments, browsers, maps.
//TODO: Detect non-page-level heavy widgets.
//TODO: Find deprecated widgets: com.kony.gen.viz.model.container.KVizHBox/KVizVBox

program.on('option:verbose', function () {
	process.env.verbose = this.verbose;
});

program.on('--help', function(){
	//Description
	console.log(colors.info(
		"\nWhat is Viskit?\n\n" +

		"Viskit is a CLI meant to help " + "Kony Visualizer".emphasis + " developers work faster and keep\n" +
		"their projects clear of junk.\n"
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

		"Viskit is a community project, not part of the official " + "Kony".emphasis + " platform, and so\n" +
		"it is " + "NOT supported".emphasis + " by Kony in any way.\n"
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
