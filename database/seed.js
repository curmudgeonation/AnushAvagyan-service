const db  = require('./index.js');
const Host = require('./Host.js');

const sampleData = [
  {
    id: 1,
    name: 'Graziella',
    description: 'The pursuit of happiness is the pursuit of horticulture!',
    reviews: 53,
    verified: true,
    superhost: true,
    superhostIcon: 'https://www.pinpng.com/pngs/m/13-133921_responsive-website-by-pelican-design-consultants-airbnb-superhost.png',
    joined_at: '2017-11-10T05:05:26.037Z',
    languages: 'English, Italiano',
    responseTime: 'within an hour',
    responseRate: 100,
    avatarUrl: 'https://source.unsplash.com/1600x900/?portrait'
  },
  {
    id: 2,
    name: 'Christina',
    description: '****in this time of the lockdown in our area, there are rumors that Airbnb may cancel or block. If my current guests need to reach me please save my phone number while the booking is active. If you missed it, you can search for me in an image search or social media. Christina Zima. My listings consist of the following: ** Homes that you rent for your exclusive use that have 1 to 7 bedrooms and can sleep up to 22 people ** Private bedrooms with en-suite bathroom in a communal home where you have access to a kitchen, living and laundry ** Private bedrooms with shared bathrooms in a communal home ** Private bedroom with a dedicated bathroom in a family home ** Beds in a hostel type room with shared bathrooms in a communal home ** Private bedroom for your group of 1-3 people ** Studios and backyard cottages for 2-4 people. WHO STAYS IN MY HOMES? The communal homes attract young techies and interns. They are not suitable for families or couples. The whole house rentals are more suitable for families or people travelling together for business. PERSONAL: I am a person, not a company or corporation. I happen to have a number of listings but I am the person who manages it all with the help of a couple of assistants and professional cleaners. I am a single, divorced mother of two teen daughters that my ex husband and I adopted from Russia when they were a year old. Past careers include English as a Foreign Language teacher and Realtor. I\'ve traveled quite extensively and understand what it\'s like to live in other people\'s homes and be a guest in a different country. I absolutely love being an Airbnb host. In the past I lived in Italy for 2 years and Russia for 5 years. I\ve been to Germany dozens of times to visit my mom\'s side of the family. I am fluent in English, Russian and German. I am on the big social networking site and on the career networking site (both of which have been verified here on Airbnb) if you\'d like to see my connections my last name is Zima.',
    duringStay: 'We probably won\'t be stopping in, unless you want us to. Our team is friendly and extroverted and enjoys meeting our guests, but we don\'t want to impose. We are actually some of the long time, old school Airbnb supporters and love the whole idea of the shared economy. We are all excellent conversationalists and are happy to sit and share a bottle of wine, if you invite us to.',
    reviews: 1688,
    verified: true,
    superhost: true,
    superhostIcon: 'https://www.pinpng.com/pngs/m/13-133921_responsive-website-by-pelican-design-consultants-airbnb-superhost.png',
    coHost: [3, 4]
    joined_at: '2015-01-14T05:05:26.037Z',
    languages: 'English, Korean, German',
    responseTime: 'within an hour',
    responseRate: 98,
    avatarUrl: 'https://source.unsplash.com/1600x900/?portrait'
  },
  {
    id: 3,
    name: 'Tribe',
    description: 'Tribe is a lifestyle brand, here to bring the most refined properties in the city.',
    reviews: 127,
    verified: true,
    superhost: false,
    coHost: [2]
    joined_at: '2019-11-18T05:05:26.037Z',
    languages: 'English',
    responseTime: 'within an hour',
    responseRate: 92,
    avatarUrl: 'https://source.unsplash.com/1600x900/?portrait'
  },
  {
    id: 4,
    name: 'Some name',
    description: 'Something about myself --- I am a host',
    duringStay: 'You will enjoy staying in this property',
    reviews: 16,
    verified: true,
    superhost: true,
    superhostIcon: 'https://www.pinpng.com/pngs/m/13-133921_responsive-website-by-pelican-design-consultants-airbnb-superhost.png',
    coHost: [2]
    joined_at: '2011-01-14T05:05:26.037Z',
    languages: 'English, Spanish',
    responseTime: 'within an hour',
    responseRate: 90,
    avatarUrl: 'https://source.unsplash.com/1600x900/?portrait'
  }


];

const insertSampleData = function() {
  Host.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleData();