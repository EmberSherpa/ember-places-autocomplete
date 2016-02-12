import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

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
