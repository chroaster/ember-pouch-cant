import Route from '@ember/routing/route';

let testWithoutModel = false; // change to true to see expected page rendering

let documents = [{
    "_id": "vegan-brownie-recipe",
    "title": "Vegan Brownie Recipe",
    "author": "Amber"
  }, {
    "_id": "friday-blood-drive",
    "title": "Friday Blood Drive",
    "author": "Bert"
  }];

export default Route.extend({
  model() {
    if (testWithoutModel) {
      return documents;
    } else {
      return this.store.findAll('post');
    }
  }
});
