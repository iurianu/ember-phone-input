import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PhoneInputController extends Controller {
  options = [
    {
      country: 'United States',
      code: 'us',
      prefix: '+1',
      icon: 'πΊπΈ',
      pattern: '(___) ___-____',
    },
    {
      country: 'United Kingdom',
      code: 'uk',
      prefix: '+44',
      icon: 'π¬π§',
      pattern: '_____ ______',
    },
    {
      country: 'Romania',
      code: 'ro',
      prefix: '+40',
      icon: 'π·π΄',
      pattern: '____ ___ ___',
    },
  ];

  @tracked
  options;

  @tracked
  selectedOption = null;
}
