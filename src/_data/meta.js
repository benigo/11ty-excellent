module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: '18 Rooms Building Offers',
  siteDescription:
    'Asking price offers start at $122,000 USD.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Lene Saile', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/5d5cdae45dea4bf8b7aa94a489ffbaca.jpg', // fallback/default meta image
    opengraph_default_alt:
      '18 Rooms Building Offers! Asking price offers start at $122,000 USD.', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My great Web Development Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'beni.zo',
    street: 'TDP 2 Kapling',
    city: 'Bogor',
    state: 'Indonesia',
    zip: '16620',
    mobileDisplay: '+62 858 8282 7510',
    mobileCall: ' +6285882827510',
    email: 'b3ny@msn.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
