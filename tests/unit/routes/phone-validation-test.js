import { module, test } from 'qunit';
import { setupTest } from 'phone-test/tests/helpers';

module('Unit | Route | phone-validation', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:phone-validation');
    assert.ok(route);
  });
});
