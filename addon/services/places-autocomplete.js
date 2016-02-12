import Ember from 'ember';

const {
  Evented
} = Ember;

export default Ember.Service.extend(Evented, {
  register(component){
    this.component = component;
  },
  unregister() {
    this.component = null;
  },
  notify(data) {
    if (this.component) {
      this.component.sendAction('on-select', data);      
    } else {
      Ember.Logger.log('Notify was called without a component being registred.');
    }
  }
});
