//import Ember from 'ember'
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
export default class InputSearchController extends Controller {
  options = [
    {
      code: 'be',
      country: 'Belgium',
      prefix: '+32',
      icon: '🇧🇪',
      pattern: '___-___-___',
    },
    {
      code: 'nl',
      country: 'Netherlands',
      prefix: '+31',
      icon: '🇳🇱',
      pattern: '___-___-___',
    },
    {
      code: 'ro',
      country: 'Romania',
      prefix: '+40',
      icon: '🇷🇴',
      pattern: '___-___-___',
    },
    {
      code: 'uk',
      country: 'United Kingdom',
      prefix: '+44',
      icon: '🇬🇧',
      pattern: '____-___-___',
    },
  ];

  @tracked options = [];

  @tracked selectedOption;

  get selectedItem() {
    let selectItem = this.options.find((i) => i.code === this.selectedOption);

    return selectItem;
  }
}
