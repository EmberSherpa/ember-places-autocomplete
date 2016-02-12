import Ember from 'ember';

function selectPlaceHelper(app, data) {
  
  Ember.run(function(){
    let service = app.__container__.lookup('service:places-autocomplete');
    service.notify(data);    
  });
  
}

export default function(){
  Ember.Test.registerAsyncHelper('selectPlace', selectPlaceHelper);
}
