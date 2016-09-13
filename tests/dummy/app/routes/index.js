import Ember from 'ember';

export default Ember.Route.extend({
  favico: Ember.inject.service("favico"),

  actions: {
    setBadge(value) {
      this.get('favico').setProperty('badge', value);
    }
  }
});
