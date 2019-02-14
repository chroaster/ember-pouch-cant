import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
// Just hardcoding db locations here for this demo app
// import config from 'ember-pouch-cant/config/environment';

// Enable debub mode for PouchDB
import pouchDebugPlugin from 'pouchdb-debug';
PouchDB.plugin(pouchDebugPlugin);
PouchDB.debug.enable('*');

// Produces build errors saying to use the import statements below instead
// const { assert, isEmpty } = Ember;
import { assert } from '@ember/debug';
import { isEmpty } from '@ember/utils';

function createDb() {
  let localDb = 'local_pouch_posts';

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  let remoteDb = new PouchDB('http://localhost:5984/posts_for_demo');

  db.sync(remoteDb, {
    live: true,
    retry: true
  });

  return db;
}

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', createDb());
  }
});
