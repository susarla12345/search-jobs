import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  inject, get
} = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),

  model() {
   return get(this, 'getJobs').perform();
 },

  getJobs: task(function* () {
    let jobsPromise = yield get(this, 'ajax').request('https://api.myjson.com/bins/kez8a', {
      method : 'get'
    });
    return jobsPromise;
  })
});
