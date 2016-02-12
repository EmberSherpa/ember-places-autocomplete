import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import TestPlacesAutocomplete from 'ember-places-autocomplete/services/places-autocomplete';

moduleForAcceptance('Acceptance | application', {
  beforeEach() {
    this.application.register('service:test-places-autocomplete', TestPlacesAutocomplete);
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    
    assert.equal(Ember.$('.lat').text().trim(), '');
    assert.equal(Ember.$('.lng').text().trim(), '');
  });
  // user selected a place
  selectPlace({ lat: 123, lng: 456 });
  andThen(function(){
    // test for the received values
    assert.equal(Ember.$('.lat').text().trim(), '123');
    assert.equal(Ember.$('.lng').text().trim(), '456');
  });
});
