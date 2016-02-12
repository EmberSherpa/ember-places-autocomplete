/* global google */
import Ember from 'ember';

const {
  Evented
} = Ember;

export default Ember.Service.extend(Evented, {
  setup(input) {
    let autocomplete = new google.maps.places.Autocomplete(input);
    
    let handler = Ember.run.bind(this, function() {
		  let place = autocomplete.getPlace();
      
		  this.notify({
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
  notify(data) {
    this.trigger('selected', data);
  }
});
