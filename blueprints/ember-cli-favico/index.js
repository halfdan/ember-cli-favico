/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
      return this.addBowerPackageToProject('favico.js', '^0.3.10');
  }
};
