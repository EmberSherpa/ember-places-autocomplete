import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import TestPlacesAutocomplete from 'ember-places-autocomplete/services/places-autocomplete';

moduleForComponent('ember-places-autocomplete', 'Integration | Component | ember places autocomplete', {
  integration: true
});

test('it should receive data when service is notified', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.register('service:test-places-autocomplete', TestPlacesAutocomplete);
  this.inject.service('test-places-autocomplete');
  let service = this.get('test-places-autocomplete');

  let receivedData;
  this.on('showLocation', function(data){
    receivedData = data;
  });

  this.render(hbs`
    {{ember-places-autocomplete on-select="showLocation"}}
  `);
  
  service.notify({ lat: 123, lng: 456 });
  
  // notification mechanism ( {lat: 123, lng: 456} )
  assert.deepEqual(receivedData, { lat: 123, lng: 456 }, 'received data from component');

});

test('it should show input field', function(assert){
  
  this.render(hbs`{{ember-places-autocomplete}}`);
  
  assert.ok(this.$('input').length);
  
});