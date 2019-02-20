const fs = require('fs-extra');
const parseProjectPlugins = require('../rules/parse-project-plugins');

/**
 * getProjectVersion - Determines the version of a project given path to its root
 * directory.
 *
 * @param  String projectPath  The absolute path to the Visualizer project's root directory.
 * @param  Boolean verbose     Whether to print everything or not.
 * @return String             The version of the project.
 */

async function getProjectVersion(projectPath, verbose){

	var pluginsInfo = await parseProjectPlugins(projectPath, verbose);
	return pluginsInfo.projectVersion;
}

module.exports = {
	getProjectVersion: getProjectVersion
	// Exporting an object instead of the fuction makes sure we have room in the
	// future for isFabricProject, isComponent, etc.
};