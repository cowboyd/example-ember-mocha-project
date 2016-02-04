/* jshint expr:true */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';

import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: Application', function() {
  beforeEach(function() {
    this.application = startApp();
  });

  afterEach(function() {
    destroyApp(this.application);
  });

  beforeEach(function() {
    visit('/');
  });


  it('has the welcome to ember text', function() {
    expect($('h2#title')).to.have.text('Welcome to Ember');
  });
});
