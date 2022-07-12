import { module, test } from 'qunit';
import { setupTest } from 'phone-test/tests/helpers';

module('Unit | Controller | phone-validation', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:phone-validation');
    assert.ok(controller);
  });
});
