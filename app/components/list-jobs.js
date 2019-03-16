import Ember from 'ember';

const {
  computed, set, get
} = Ember;

export default Ember.Component.extend({
  keyword: '',
  // experience: null,
  location: null,
  searchedJobs: null,
  experiences: ['any', 'Fresher', '0-2 yrs', '2-5 yrs', '5-8yrs', '8-13 yrs'],
  allJobsListed: computed.alias('model.jobsfeed'),
  sortedJobs: computed.reads('allJobsListed'),

  experience: computed(function() {
    return get(this, 'experiences')[0];
  }),

  actions: {
    onchange(value) {
      set(this, 'keyword', value);
    },

    sortByLocation() {
      let locationSort = get(this, 'allJobsListed').sortBy('location');
      set(this, 'sortedJobs', locationSort);
    },

    sortByExp() {
      let expSort = get(this, 'allJobsListed').sortBy('experience');
      set(this, 'sortedJobs', expSort);
    },

    selectExperience(experience) {
     this.set('experience', experience);
   },

   changeLocation(location) {
     this.set('location', location.target.value);
   },

   searchJobs() {
     this.searchJobs();
   },
  },

  searchJobs() {
    let allJobsListed = get(this, 'allJobsListed');
    let experienceSelected = get(this, 'experience');
    let locationSelected = get(this, 'location');
    let filteredJobs = allJobsListed;
    if(experienceSelected != 'any') {
      filteredJobs = allJobsListed.filter((job) => {
        return job.experience == experienceSelected || job.experience == '';
      });
    }
    if(locationSelected) {
      filteredJobs = allJobsListed.filter((job) => {
        return job.location == locationSelected || job.location == '';
      });
    }
    set(this, 'sortedJobs' ,filteredJobs);
  }
});
