# ember-pouch-cant

Thank you for looking at this. I'm trying to use [ember-pouch](https://github.com/pouchdb-community/ember-pouch) with a project. Sync from the remote pouchdb works, but `findAll('name_of_db')` still returns nothing. 

This is a demo app to hopefully make it easier for you to help me understand what the problem is.

## Try it on your system

* `git clone git@github.com:chroaster/ember-pouch-cant.git`
* `cd ember-pouch-cant`
* `npm install`
* `ember serve`

## Steps to replicate from scratch 
```
create database in PouchDB called "posts_for_demo"
  manually add a couple sample records…
  {
    "_id": "vegan-brownie-recipe",
    "title": "Vegan Brownie Recipe",
    "author": "Amber"
  }

  {
    "_id": "friday-blood-drive",
    "title": "Friday Blood Drive",
    "author": "Bert"
  }

ember new ember-pouch-cant
cd ember-pouch-cant
ember install ember-pouch
ember install pouchdb-debug
ember install ember-auto-import
ember g pouch-adapter application
  in app/adapters/application.js…
    enable debug mode for pouchdb
    add local and remote db names
ember g pouch-model post
  in app/models/post.js…
    add title and author attributes
ember g route index
  in app/routes/index.js…
    have model return this.store.findAll('post');
  in app/templates/index.hbs…
    attempt to display results from model, e.g., the #each above
remove ember welcome page from application.hbs
npm install
ember s
```
