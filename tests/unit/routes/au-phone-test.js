import { module, test } from 'qunit';
import { setupTest } from 'phone-test/tests/helpers';

module('Unit | Route | au-phone', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:au-phone');
    assert.ok(route);
  });
});
