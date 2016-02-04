/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';

import hbs from 'htmlbars-inline-precompile';

describeComponent('my-component', 'Integration: MyComponentComponent', { integration: true }, function() {
  beforeEach(function() {
    this.set('name', 'Bob');
    this.render(hbs`{{my-component name=name}}`);
  });

  it('has a helpful message', function() {
    expect(this.$()).to.contain('You have clicked this component 0 time(s), Bob.');
  });

  describe("clicking on the component", function() {
    beforeEach(function() {
      this.$('.clicker').trigger('click');
    });

    it("updates the click count", function() {
      expect(this.$()).to.contain('You have clicked this component 1 time(s), Bob.');
    });
  });

}
                 );
