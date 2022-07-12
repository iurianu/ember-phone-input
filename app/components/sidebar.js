import Component from '@glimmer/component';

export default class SidebarComponent extends Component {
  links = [
    {
      name: 'Phone Input Format Validation',
      route: 'autocomplete',
    },
    {
      name: 'Phone Input with Select',
      route: 'phone-input',
    },
    {
      name: 'Input with Autocomplete',
      route: 'phone-validation',
    },
    {
      name: 'Phone Input with Search',
      route: 'input-search',
    },
  ];
}
