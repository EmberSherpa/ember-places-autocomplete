import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-places-autocomplete', 'Integration | Component | ember places autocomplete', {
  integration: true
});

test('it triggers action when place selected', function(assert) {
  assert.expect(1);

  this.inject.service('places-autocomplete');
  
  let placesAutocomplete = this.get('places-autocomplete');
    
  let selectedPlace;
  this.on('setPlace', function(place){
    selectedPlace = place;
  });

  this.render(hbs`{{ember-places-autocomplete on-select="setPlace"}}`);
  
  // need to trigger action somehow
  placesAutocomplete.notify({ lat: 123, lng: 456 });
  
  assert.deepEqual(selectedPlace, { lat: 123, lng: 456 }, 'received lat lng info');
  
});

