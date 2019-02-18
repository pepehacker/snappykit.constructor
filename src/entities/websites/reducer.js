import { get } from 'lodash';

// Types
import {
  UPDATE_WEBSITE_SECTION,
} from './types';

const initialState = {
  new: {
    appId: 'com.burbn.instagram',
    data: {
      background: {
        gradient: {
          to: 'rgba(71, 159, 255, 1)',
          from: 'rgba(123, 84, 251, 1)',
          angle: 0
        },
        color: 'rgba(255, 255, 255, 0)',
        image: null,
      },
      copyright: {
        text: '© 2018 ANCHOR FM INC',
        style: '400',
        font: 'Roboto',
        color: 'rgba(255, 255, 255, .4)'
      },
      description: {
        text: 'Anchor lets you record or capture ANY audio, right from your phone. It’s the easiest way to make a podcast or radio show, ever. No experience necessary (and it’s 100% free).',
        style: '400',
        font: 'Roboto',
        color: 'rgba(255, 255, 255, .8)'
      },
      icon: {
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/44/88/0d/44880de1-a4ca-1c1d-39bb-2ee7548a3e70/source/512x512bb.jpg'
      },
      policy: {
        items: {
          terms: '456',
          privacy: '123'
        },
        style: '400',
        font: 'Roboto',
        color: 'rgba(255, 255, 255, 1)'
      },
      screenshots: {
        items: [
          'https://i.pinimg.com/originals/da/e2/0a/dae20ac5ed7d1c1d927ad342f3a8b89c.jpg',
          'https://i.pinimg.com/originals/9e/89/0f/9e890fc6f475f43d7ccfee5d19b59832.jpg',
          'https://i.pinimg.com/originals/e8/a8/bf/e8a8bfc8bb86ff397a675627797e26f9.jpg'
        ]
      },
      smartphone: {
        mockup: 'flat-gray',
        model: 'iphone'
      },
      social: {
        items: {
          twitter: '@i.vyatkin',
          facebook: '@durov',
          instagram: '@i.vyatkin'
        },
        color: 'rgba(255, 255, 255, 1)'
      },
      store: {
        items: {
          googlePlay: 'googlePlay',
          appStore: 'appStore'
        },
        color: 'rgba(112, 101, 252, 1)',
        background: 'rgba(255, 255, 255, 1)'
      },
      title: {
        text: 'Make cool audio, right from your phone.',
        style: '400',
        font: 'Roboto',
        color: 'rgba(255, 255, 255, 1)'
      }
    },
    description: 'ВКонтакте объединяет миллионы людей, позволяя общаться и обмениваться новостями из любой точки мира. Вы сможете отправлять сообщения, делиться истори...',
    id: 'new',
    isSupported: true,
    logo: 'https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/6d/79/17/6d791736-d2c9-3c1e-8133-f306cc46cebf/source/512x512bb.jpg',
    templateId: 1,
    title: 'Test create',
  }
};

export default (state = initialState, action: Object): Object => {
  const sectionId = get(action, 'sectionId');
  const websiteId = get(action, 'websiteId');
  const website = get(state, websiteId);

  switch (action.type) {
    case UPDATE_WEBSITE_SECTION:
      return {
        ...state,
        [websiteId]: {
          ...website,
          data: {
            ...get(website, 'data'),
            [sectionId]: {
              ...get(website, `data.${sectionId}`),
              ...action.payload,
            },
          },
        },
      };
    default:
      return state;
  }
};
