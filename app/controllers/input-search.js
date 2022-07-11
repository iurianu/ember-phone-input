//import Ember from 'ember'
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

function setPattern() {
  
}

export default class InputSearchController extends Controller {

  options = [
    {
      code: 'us',
      country: 'United States',
      prefix: '+1',
      icon: '🇺🇸',
    },
    {
      code: 'uk',
      country: 'United Kingdom',
      prefix: '+44',
      icon: '🇬🇧',
    },
    {
      code: 'ro',
      country: 'Romania',
      prefix: '+40',
      icon: '🇷🇴',
    }, 
    {
      code: 'be',
      country: "Belgium",
      prefix: '+32',
      icon: '🇧🇪',
    }
  ];


  @tracked options = []

  @tracked selectedOption

  get selectedItem() {

    //debugger
    const loadOptions = this.options

    console.log('options: ', loadOptions)
    console.log('typeof options: ', typeof loadOptions)

    const selected = this.selectedOption

    console.log('selected option: ', selected)

    let selectItem = loadOptions.find(i => i.code === this.selectedOption);

    console.log('selected item: ', selectItem)

    return selectItem

  }
  
}
