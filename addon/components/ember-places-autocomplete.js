import Ember from 'ember';
import layout from '../templates/components/ember-places-autocomplete';

const {
  inject
} = Ember;

export default Ember.Component.extend({
  layout,  
  placesAutocomplete: inject.service(),
  init() {
    this._super(...arguments);
    this.get('placesAutocomplete').on('selected', this, this.notifyContext);
  },
  willDestroy() {
    this._super(...arguments);
    this.get('placesAutocomplete').off('selected', this, this.notifyContext);
  },
  notifyContext(data) {
    this.sendAction('on-select', data);
  }
});
