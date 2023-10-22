/**
 * src/main.ts
 *
 * The main script of Toaster
 */

import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";
import { detectProjectType } from "../lib/utils.ts";

await new Command()
	.name("toaster")
	.version("2023.10.22")
	.description("all-in-one package manager for Deno and Node.js")

	// init
	.command("init", "initialize a toaster project")
  	.action((options, ...args) => {
		let cwd = Deno.cwd().split("/");
		Deno.writeTextFileSync("toaster.json", JSON.stringify({
			"name": cwd[cwd.length - 1],
			"version": "0.1.0",
			"type": "deno",
			"dependencies": []
		}) + "\n");
		console.log(colors.bold.green("initialized project!"));
	})

	// install
	.command("install, i", "install dependencies")
  	.action((options, ...args) => {
		console.log("installed all dependencies");
	})

	// add
	.command("add", "add a dependency")
	.arguments("<package:string>")
  	.action((options, ...args) => {
		console.log("installed dependency");
	})

	.parse(Deno.args);
