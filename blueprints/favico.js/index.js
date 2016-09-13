/*jshint node:true*/
module.exports = {
  name: 'ember-cli-favico',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/favico.js/favico.js');
  }
};
