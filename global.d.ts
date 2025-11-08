// This tells TypeScript to treat any .css file as a valid module, resolving the Next.js: "Cannot find module or type declarations for side-effect import of './globals.css'" ts(2882) error.
declare module "*.css";

// https://stackoverflow.com/questions/79775796/next-js-cannot-find-module-or-type-declarations-for-side-effect-import-of-g
