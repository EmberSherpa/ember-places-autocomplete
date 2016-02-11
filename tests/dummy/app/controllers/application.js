import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showPlace(place) {
      this.setProperties(place);
    }
  }
});