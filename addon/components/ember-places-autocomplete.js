/* global google */
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
    this.get('placesAutocomplete').register(this);
  },
  didInsertElement() {
    this._super(...arguments);
    let input = this.$('input')[0];
    this.setup(input);
  },
  willDestroyElement() {
    this._super(...arguments);
    this.teardown();
  },
   setup(input) {
    let autocomplete = new google.maps.places.Autocomplete(input);
    
    let handler = Ember.run.bind(this, function() {
		  let place = autocomplete.getPlace();
      
		  this.sendAction('on-select', {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        place
      });
	 });
    
    let listener = autocomplete.addListener('place_changed', handler);
    
    this.set('autocomplete', autocomplete);
    this.set('listener', listener);
  },
  teardown() {
    let listener = this.get('listener');
	  let autocomplete = this.get('autocomplete');
	  google.maps.event.removeListener(listener);
    google.maps.event.clearInstanceListeners(autocomplete);    
  },
  willDestroy() {
    this._super(...arguments);
    this.get('placesAutocomplete').unregister();
  }
});
