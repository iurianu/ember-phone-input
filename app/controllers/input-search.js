import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputSearchController extends Controller {
  options = [
    {
      country: 'United States',
      code: 'us',
      prefix: '+1',
      icon: '🇺🇸',
      pattern: '(___) ___-____',
      selected: 'selected',
    },
    {
      country: 'United Kingdom',
      code: 'uk',
      prefix: '+44',
      icon: '🇬🇧',
      pattern: '_____ ______',
      selected: 'false',
    },
    {
      country: 'Romania',
      code: 'ro',
      prefix: '+40',
      icon: '🇷🇴',
      pattern: '____ ___ ___',
      selected: 'false',
    },
  ];

  @tracked options

  @tracked
  selectedOption = null;

  @action
  setOption(selectedOption) {
    this.option = selectedOption;
  }

}
