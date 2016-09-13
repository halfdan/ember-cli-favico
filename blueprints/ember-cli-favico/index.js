/*jshint node:true*/
module.exports = {
  afterInstall: function() {
      return this.addBowerPackageToProject('favico.js', '^0.3.10');
  }
};
