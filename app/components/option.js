import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class OptionComponent extends Component {
  @tracked query = '';
}
