import Route from 'ember-route';

export default Route.extend({

  model() {
    debugger;
    return {
      follows: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
});
