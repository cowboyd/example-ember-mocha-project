import Ember from 'ember';

export default Ember.Component.extend({
  clicks: 0,

  click() {
    this.set('clicks', this.get('clicks') + 1);
  }
});
