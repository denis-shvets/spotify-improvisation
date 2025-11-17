import type { Linter } from 'eslint';

/**
 * Helper function to apply default file patterns to ESLint configurations
 * This ensures all rules are applied to the correct file types
 *
 * Note: If files is not specified in a configuration object, it applies to all files
 * matched by any other configuration object. We use `withDefaultFiles()` to ensure
 * explicit file targeting and prevent unintended rule application.
 *
 * @param config - ESLint configuration object
 * @returns Configuration with default files applied
 */
function withDefaultFiles(config: Linter.Config) {
  return {
    files: ['**/*.{js,ts,jsx,tsx,mjs,mts}'],
    ...config,
  };
}

export default withDefaultFiles;
