import Ember from 'ember';
import layout from '../templates/components/ember-places-autocomplete';

const {
  inject,
  run
} = Ember;

export default Ember.Component.extend({
  layout,  
  placesAutocomplete: inject.service(),
  init() {
    this._super(...arguments);
    this.get('placesAutocomplete').on('selected', this, this.notifyContext);
  },
  willInsertElement() {
    this._super(...arguments);
    run.scheduleOnce('afterRender', this, this.setupPlacesAutocomplete);
  },
  setupPlacesAutocomplete() {
    let service = this.get('placesAutocomplete');
    service.setup(this.$('input')[0]);
  },
  willDestroyElement() {
    this._super(...arguments);
    let service = this.get('placesAutocomplete');
    service.teardown();
  },
  willDestroy() {
    this._super(...arguments);
    this.get('placesAutocomplete').off('selected', this, this.notifyContext);
  },
  notifyContext(location, place) {
    this.sendAction('on-select', location, place);
  }
});
