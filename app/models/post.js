import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr
} = DS;

export default Model.extend({
  title: attr(),
  author: attr()
});
