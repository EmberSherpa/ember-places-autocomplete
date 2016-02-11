import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    
    assert.equal(Ember.$('.lat').text().trim(), '', 'lat is empty in the beginning');
    assert.equal(Ember.$('.lng').text().trim(), '', 'lng is empty in the beginning');
  });
  selectPlace({ lat: 123, lng: 456 });
  andThen(function(){
    assert.equal(Ember.$('.lat').text().trim(), '123', 'lat is set to 123');
    assert.equal(Ember.$('.lng').text().trim(), '456', 'lng is set to 456');
  });
});
