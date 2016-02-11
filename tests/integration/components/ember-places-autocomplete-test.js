import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import PlacesAutocompleteComponent from 'ember-places-autocomplete/components/ember-places-autocomplete';

moduleForComponent('ember-places-autocomplete', 'Integration | Component | ember places autocomplete', {
  integration: true
});

test('it triggers action when place selected', function(assert) {
  assert.expect(1);
  
  let component;
  this.register('component:test-ember-places-autocomplete', PlacesAutocompleteComponent.extend({
    init() {
      this._super(...arguments);
      component = this;
    }
  }));
  
  let selectedPlace;
  this.on('setPlace', function(place){
    selectedPlace = place;
  });

  this.render(hbs`{{test-ember-places-autocomplete on-select="setPlace"}}`);
  
  // need to trigger action somehow
  component.send('onSelect', { lat: 123, lng: 456 });
  
  assert.deepEqual(selectedPlace, { lat: 123, lng: 456 }, 'received lat lng info');
  
});
