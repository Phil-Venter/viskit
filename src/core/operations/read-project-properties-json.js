"use strict";

const path = require("path");
const fs = require("fs-extra");

const stripPathEndSlash = require("../helpers/strip-path-end-slash");

async function readProjectPropertiesJson(projectPath, verbose){
	var projectRootPath = stripPathEndSlash(projectPath);
	var projectPropertiesPath = path.resolve(projectRootPath + "/projectProperties.json");

	try{
		var props = await fs.readJson(projectPropertiesPath);
		return props;
	}
	catch(e){
		console.error("Could not read %s", projectPropertiesPath);
		return null;
	}
}

module.exports = readProjectPropertiesJson;
