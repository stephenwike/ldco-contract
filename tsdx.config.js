module.exports = {
  rollup(config, options) {
    // Find the @rollup/plugin-replace plugin and update its options
    const replacePlugin = config.plugins.find(
      plugin => plugin && plugin.name === 'replace'
    );
    
    if (replacePlugin) {
      // Set preventAssignment to true to suppress the warning
      replacePlugin.preventAssignment = true;
    }
    
    return config;
  },
};
