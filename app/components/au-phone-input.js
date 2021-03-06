import Component from '@glimmer/component';

function normalizeText(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default class AuPhoneInputComponent extends Component {
  get results() {
    let { options, query } = this.args;

    if (query) {
      options = options.filter((option) =>
        normalizeText(option.country).toLowerCase().includes(query)
      );
    }

    return options;
  }
}
