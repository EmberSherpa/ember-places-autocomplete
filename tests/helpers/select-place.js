import Ember from 'ember';
import wait from 'ember-test-helpers/wait';

function selectPlace(app, data){
  let placesAutocompleteService = app.__container__.lookup('service:places-autocomplete');

  return wait().then(function(){
    Ember.run(function() {
      placesAutocompleteService.notify(data);
    });
  });
}

export default function() {
  Ember.Test.registerAsyncHelper('selectPlace', selectPlace);  
}