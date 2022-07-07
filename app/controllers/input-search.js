import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class InputSearchController extends Controller {
  options = [
    {
      country: 'United States',
      prefix: '+1',
      icon: '🇺🇸',
    },
    {
      country: 'United Kingdom',
      prefix: '+44',
      icon: '🇬🇧',
    },
    {
      country: 'Romania',
      prefix: '+40',
      icon: '🇷🇴',
    },
  ];

  @tracked options = []

  @tracked selectedOption

  @tracked isOptionSelected

}
