import Component from '@glimmer/component';

export default class FooterComponent extends Component {
  socialItems = [
    {
      title: 'Follow me on GitHub!',
      url: 'https://github.com/iurianu',
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    {
      title: 'Connect with me on LinkedIn!',
      url: 'https://www.linkedin.com/in/iurianu/',
      icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384030.png',
    },
    {
      title: 'Join me on Discord!',
      url: 'https://discord.gg/6nvcnCNNpF',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968968.png',
    },
    {
      title: 'Follow me on Facebook!',
      url: 'https://www.facebook.com/iurianu',
      icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384005.png',
    },
    {
      title: 'Follow me on Twitter!',
      url: 'https://twitter.com/iurianu',
      icon: 'https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png',
    },
  ];
}
