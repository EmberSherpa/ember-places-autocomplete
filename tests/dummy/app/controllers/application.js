import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showLocation(data) {
      this.setProperties(data);
    }
  }
});