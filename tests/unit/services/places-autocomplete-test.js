import { moduleFor, test } from 'ember-qunit';

moduleFor('service:places-autocomplete', 'Unit | Service | places autocomplete', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it should allow to register a component', function(assert){
  
  let service = this.subject();
  
  let actionCalled;
  let receivedData;
  let mockComponent = {
    sendAction(name, data) {
      actionCalled = name;
      receivedData = data;
    }
  };
  
  service.register(mockComponent);
  
  service.notify({ lat: 123, lng: 456 });
  
  assert.equal(actionCalled, 'on-select');
  assert.deepEqual(receivedData, { lat: 123, lng: 456 });
});

test('it should allow a component to unregister after register', function(assert){
  
  let service = this.subject();
  
  let actionCalled;
  let receivedData;
  let mockComponent = {
    sendAction(name, data) {
      actionCalled = name;
      receivedData = data;
    }
  };
  
  service.register(mockComponent);
  service.unregister(mockComponent);
  
  service.notify({ lat: 123, lng: 456 });
  
  assert.equal(actionCalled, undefined);
  assert.deepEqual(receivedData, undefined);
});