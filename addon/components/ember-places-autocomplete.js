import Ember from 'ember';
import layout from '../templates/components/ember-places-autocomplete';

export default Ember.Component.extend({
  layout,
  actions: {
    onSelect(place) {
      this.sendAction('on-select', place);
    }
  }
});
