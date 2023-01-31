export default {
  cjs: "babel",
  esm: "babel",
  entry: "src/index.ts",
  extractCSS: true,
  lessInBabelMode: false, // for less-loader to support ~@ format
  runtimeHelpers: true, // make sure @babel/runtime in dependencies scope
  file: "muzi-tools",
};
