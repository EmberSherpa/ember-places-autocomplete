import { moduleFor, test } from 'ember-qunit';

moduleFor('service:places-autocomplete', 'Unit | Service | google places', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it should trigger selected event on notify', function (assert){
  
  let service = this.subject();
  
  let passedData;
  service.on('selected', function (place) {
    passedData = place;
  });
  
  service.notify({ lat: 123, lng: 456 });
  
  assert.deepEqual(passedData, { lat: 123, lng: 456 }, 'received expected data');
});