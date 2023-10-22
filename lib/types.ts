/**
 * lib/types.ts
 *
 * Type definitions
 */

export type ProjectType = "deno" | "node";

export interface ToasterPackage {
	name: string;
	version: string;
	type: ProjectType;
	dependencies: string[];
}
