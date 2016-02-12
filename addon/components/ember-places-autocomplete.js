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
  didInsertElement() {
    this._super(...arguments);
    let input = this.$('input')[0];
    this.get('placesAutocomplete').setup(input);
  },
  willDestroyElement() {
    this._super(...arguments);
    this.get('placesAutocomplete').teardown();
  },
  willDestroy() {
    this._super(...arguments);
    this.get('placesAutocomplete').off('selected', this);
  },
  notifyContext(data) {
    this.sendAction('on-select', data);
  }
});
