import Ember from 'ember';

export default Ember.Service.extend({
  favico: null,

  init() {
    this._super(...arguments);
    this.set('favico', new Favico());
  },

  setProperty(name, value) {
    this.get('favico')[name](value);
  }
});
