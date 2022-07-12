//import Ember from 'ember'
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
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

  @action
  async clearDetails() {
    const list = document.querySelector('#country-list'),
      searchinput = document.querySelector('#search');

    if (list.hasAttribute('open')) {
      list.removeAttribute('open');
    }

    //searchinput.value = ''
  }

  get selectedItem() {
    let selectItem = this.options.find((i) => i.code === this.selectedOption);

    return selectItem;
  }
}
