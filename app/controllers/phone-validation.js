import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PhoneValidationController extends Controller {
  @action
  async validateNumber(e) {
    const tele = document.querySelector('#telle');

    console.log('tele: ', tele.placeholder);

    if (
      e.key != 'Backspace' &&
      (tele.value.length === 3 || tele.value.length === 7)
    ) {
      tele.value += ' ';
    }
  }
}
