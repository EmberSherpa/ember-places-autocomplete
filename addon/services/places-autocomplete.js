import Ember from 'ember';

const {
  Evented
} = Ember;

export default Ember.Service.extend(Evented, {
  notify(data) {
    this.trigger('selected', data);
  }
});
