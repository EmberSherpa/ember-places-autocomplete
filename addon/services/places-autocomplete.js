/* global google */
import Ember from 'ember';

const {
  Evented
} = Ember;

export default Ember.Service.extend(Evented, {
  setup(input) {
    let autocomplete = new google.maps.places.Autocomplete(input);
    let listener = autocomplete.addListener('place_changed', Ember.run.bind(this, () => {
		  let place = autocomplete.getPlace();
		  this.notify({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        place
      });
	 }));
   this.set('listener', listener);
   this.set('autocomplete', autocomplete);
  },
  teardown() {
    let listener = this.get('listener');
    let autocomplete = this.get('autocomplete');
    
    google.maps.event.removeListener(listener);
    google.maps.event.clearInstanceListeners(autocomplete);
  },
  notify(place) {
    this.trigger('selected', place);
  }
});
