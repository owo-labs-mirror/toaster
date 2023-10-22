/**
 * lib/utils.ts
 *
 * Utilities for Toaster
 */

import { ProjectType } from "./types.ts";

export function detectProjectType(): ProjectType {
	return "deno";
}
