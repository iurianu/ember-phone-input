import Component from '@glimmer/component';

export default class SidebarComponent extends Component {
  links = [
    {
      name: 'Complete Phone Form',
      route: 'complete-phone-form'
    },
    {
      name: 'Phone Input with Search',
      route: 'input-search',
    },
    {
      name: 'Phone Input with Select',
      route: 'phone-input',
    },
    {
      name: 'Input with Autocomplete',
      route: 'autocomplete',
    },
    {
      name: 'Phone Input Format Validation',
      route: 'phone-validation',
    },
  ];
}
