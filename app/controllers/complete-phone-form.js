import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CompletePhoneFormController extends Controller {
    options = [
        {
          code: 'be',
          country: 'Belgium',
          prefix: '+32',
          icon: '🇧🇪',
          pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
          placeholder: '___-___-___'
        },
        {
          code: 'nl',
          country: 'Netherlands',
          prefix: '+31',
          icon: '🇳🇱',          
          pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
          placeholder: '___-___-___'
        },
        {
          code: 'ro',
          country: 'Romania',
          prefix: '+40',
          icon: '🇷🇴',          
          pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
          placeholder: '___-___-___'
        },
        {
          code: 'uk',
          country: 'United Kingdom',
          prefix: '+44',
          icon: '🇬🇧',
          pattern: '[0-9]{4}-[0-9]{3}-[0-9]{3}',
          placeholder: '____-___-___'
        },
      ];
    
      @tracked 
      options = [];
    
      @tracked 
      selectedOption;

      @action
      async clearDetails() {
        const list = document.querySelector('#country-list'),
          searchinput = document.querySelector('#search');
    
        if (list.hasAttribute('open')) {
          list.removeAttribute('open');
        }
    
        //searchinput.value = ''
      }

      @action
      async validateNumber(e) {
        const phone = document.querySelector('#number-input'),
            pattern = phone.placeholder

        let firstIndex = pattern.indexOf('-'),
             nextIndex = pattern.indexOf('-', firstIndex + 1)
    
        if (
          e.key != 'Backspace' &&
          (phone.value.length === firstIndex || phone.value.length === nextIndex)
        ) {
          phone.value += '-';
        }
      }

      get selectedItem() {
        let selectItem = this.options.find((i) => i.code === this.selectedOption);
    
        return selectItem;
      }
}
