import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('coffee-rating', 'Integration | Component | coffee rating', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{coffee-rating}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#coffee-rating}}
      template block text
    {{/coffee-rating}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
