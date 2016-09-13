/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-favico',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/favico.js/favico.js');
  }
};
