import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuPhoneController extends Controller {
  options = [
    {
      code: 'be',
      country: 'Belgium',
      prefix: '+32',
      icon: '🇧🇪',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
    },
    {
      code: 'nl',
      country: 'Netherlands',
      prefix: '+31',
      icon: '🇳🇱',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
    },
    {
      code: 'ro',
      country: 'Romania',
      prefix: '+40',
      icon: '🇷🇴',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
    },
    {
      code: 'uk',
      country: 'United Kingdom',
      prefix: '+44',
      icon: '🇬🇧',
      pattern: '[0-9]{4}-[0-9]{3}-[0-9]{3}',
    },
  ];

  @tracked
  options = [];

  @tracked
  selectedOption = 'be';

  @action
  async clearDetails() {
    const list = document.querySelector('#country-list'),
      input = document.querySelector('#au-number-input');

    if (list.hasAttribute('open')) {
      list.removeAttribute('open');
    }

    if (input != null && input != undefined) {
      input.value = '';
    }
  }

  @action
  async validateFormat(e) {
    const input = document.querySelector('#au-number-input'),
        pattern = input.placeholder;

    let firstIndex = pattern.indexOf('-'),
        nextIndex = pattern.indexOf('-', firstIndex + 1);

        if ( e.key != 'Backspace' && (input.value.length === firstIndex || input.value.length === nextIndex) ) {
            input.value += '-';
        }
  }

  @action
  async validateNumber() {
    let option = this.options.find((i) => i.code === this.selectedOption),
       pattern = option.pattern

    let firstMatch = pattern.match(/\{(.*?)\}/)[1],
      firstIndex = pattern.indexOf(firstMatch),
      secondMatch = pattern.slice(firstIndex + 3).match(/\{(.*?)\}/)[1],
      secondIndex = pattern.slice(firstIndex + 3).indexOf(secondMatch),
      thirdMatch = pattern
        .slice(firstIndex + 3)
        .slice(secondIndex + 3)
        .match(/\{(.*?)\}/)[1];

    let set = '',
      firstSet = '',
      secondSet = '',
      thirdSet = '';

    while (firstSet.length < parseInt(firstMatch)) {
      firstSet += '_';
    }
    while (secondSet.length < parseInt(secondMatch)) {
      secondSet += '_';
    }
    while (thirdSet.length < parseInt(thirdMatch)) {
      thirdSet += '_';
    }

    set = set.concat(firstSet + '-' + secondSet + '-' + thirdSet);

    const input = document.querySelector('#au-number-input')

    if (input != null && input != undefined) {
        input.setAttribute('placeholder', set);
        input.setAttribute('maxlength', set.length);
        input.setAttribute('pattern', pattern);
    }

  }

  get selectedItem() {
    let selectItem = this.options.find((i) => i.code === this.selectedOption);

    this.validateNumber();

    return selectItem;
  }
}
