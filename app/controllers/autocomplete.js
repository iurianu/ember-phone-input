import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AutocompleteController extends Controller {
  options = [
    {
      country: 'United States',
      prefix: '+1',
      icon: 'πΊπΈ',
    },
    {
      country: 'United Kingdom',
      prefix: '+44',
      icon: 'π¬π§',
    },
    {
      country: 'Romania',
      prefix: '+40',
      icon: 'π·π΄',
    },
    {
      country: 'Belgium',
      prefix: '+32',
      icon: 'π§πͺ',
    },
  ];

  @tracked repo;
  @tracked repos = [];

  @action
  setRepo(repo) {
    this.repo = repo;
  }

  @action
  async searchRepos(search) {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search}`
    );

    const json = await response.json();

    this.repos = json.items.mapBy('full_name');
  }
}
