const db  = require('./index.js');
const Host = require('./Host.js');
var moment = require('moment');

const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});




const sampleData = [
  {
    id: 1,
    name: 'Graziella',
    description: 'The pursuit of happiness is the pursuit of horticulture!',
    reviews: 53,
    verified: true,
    superhost: true,
    joined_at: '2017-11-10T05:05:26.037Z',
    languages: 'English, Italiano',
    responseTime: 'within an hour',
    responseRate: 100,
    location: 'New York',
    avatarUrl: 'https://host-service.s3-us-west-1.amazonaws.com/1.jpg'
  },
  {
    id: 2,
    name: 'Christina',
    description: '****in this time of the lockdown in our area, there are rumors that Airbnb may cancel or block. If my current guests need to reach me please save my phone number while the booking is active. If you missed it, you can search for me in an image search or social media. Christina Zima. My listings consist of the following: ** Homes that you rent for your exclusive use that have 1 to 7 bedrooms and can sleep up to 22 people ** Private bedrooms with en-suite bathroom in a communal home where you have access to a kitchen, living and laundry ** Private bedrooms with shared bathrooms in a communal home ** Private bedroom with a dedicated bathroom in a family home ** Beds in a hostel type room with shared bathrooms in a communal home ** Private bedroom for your group of 1-3 people ** Studios and backyard cottages for 2-4 people. WHO STAYS IN MY HOMES? The communal homes attract young techies and interns. They are not suitable for families or couples. The whole house rentals are more suitable for families or people travelling together for business. PERSONAL: I am a person, not a company or corporation. I happen to have a number of listings but I am the person who manages it all with the help of a couple of assistants and professional cleaners. I am a single, divorced mother of two teen daughters that my ex husband and I adopted from Russia when they were a year old. Past careers include English as a Foreign Language teacher and Realtor. I\'ve traveled quite extensively and understand what it\'s like to live in other people\'s homes and be a guest in a different country. I absolutely love being an Airbnb host. In the past I lived in Italy for 2 years and Russia for 5 years. I\ve been to Germany dozens of times to visit my mom\'s side of the family. I am fluent in English, Russian and German. I am on the big social networking site and on the career networking site (both of which have been verified here on Airbnb) if you\'d like to see my connections my last name is Zima.',
    duringStay: 'We probably won\'t be stopping in, unless you want us to. Our team is friendly and extroverted and enjoys meeting our guests, but we don\'t want to impose. We are actually some of the long time, old school Airbnb supporters and love the whole idea of the shared economy. We are all excellent conversationalists and are happy to sit and share a bottle of wine, if you invite us to.',
    reviews: 1688,
    verified: true,
    superhost: true,
    coHost: [3, 4],
    joined_at: '2015-01-14T05:05:26.037Z',
    languages: 'English, Korean, German',
    responseTime: 'within an hour',
    responseRate: 98,
    location: 'Sunnyvale, CA',
    avatarUrl: 'https://host-service.s3-us-west-1.amazonaws.com/2.jpg'
  },
  {
    id: 3,
    name: 'Tribe',
    description: 'Tribe is a lifestyle brand, here to bring the most refined properties in the city.',
    reviews: 127,
    verified: true,
    superhost: false,
    coHost: [2],
    joined_at: '2019-11-18T05:05:26.037Z',
    languages: 'English',
    responseTime: 'within an hour',
    responseRate: 92,
    location: 'San Jose, CA',
    avatarUrl: 'https://host-service.s3-us-west-1.amazonaws.com/3.jpg'
  },
  {
    id: 4,
    name: 'Kathy & Craig',
    description: 'We met and became friends 25 years ago, then about 9 years ago (single again after marriages and families with other people) decided that WE should be a couple. Weve been happily married for 5 years now, and our Airbnb rental is on the property of the Sunnyvale house we bought together and lovingly renovated. Craig is from Baton Rouge, Louisiana (still says y\'all despite 25 years away from the South). He\'s a tech writer at Cisco. He loves music, reading, vintage Mustangs, and recently has taken up video gaming. I\'m from Pittsburgh, PA and am a Program Manager at Symantec Corp. I love cooking, gardening, decorating and redecorating, painting and reading.We love our house and neighborhood and want everyone who stays with us to to feel comfortable and welcome.',
    duringStay: 'You will enjoy staying in this property',
    reviews: 16,
    verified: true,
    superhost: true,
    coHost: [2],
    joined_at: '2011-01-14T05:05:26.037Z',
    languages: 'English, Spanish',
    responseTime: 'within an hour',
    responseRate: 100,
    location: 'Honolulu, HI',
    avatarUrl: 'https://host-service.s3-us-west-1.amazonaws.com/4.jpg'
  }


];
var randomLocation = ['San Jose, CA', 'New Deli, India', 'Moscow, Russia', 'Paris, France', 'Yerevan, Armenia', 'San Francisco, CA', 'Berlin, Germany', 'Rome, Italy', 'Napa, CA'];
var randomLanguage = ['English', 'Chinese', 'Spanish', 'Hindi', 'Arabic', 'PORTUGUESE', 'Russian'];
var randomResponse = ['within an hour', 'within a day', 'within a minute', 'within a week' ,'within 2 hours'];

const insertSampleData = function() {

  for (var i = 5; i < 120; i++) {
    if (i < 30) {
      var img = i;
    } else if (i < 60) {
      var img = i - 30;
    } else if (i < 90) {
      var img = i - 60;
    } else {
      var img = i - 90;
    }
    var temp =  {
      id: i,
      name: lorem.generateWords(2),
      description: lorem.generateSentences(5),
      duringStay: lorem.generateSentences(3),
      reviews: Math.round(Math.random() * 1000),
      verified: Math.random() >= 0.8,
      superhost: Math.random() >= 0.7,
      joined_at: moment(new Date(+(new Date()) - Math.floor(Math.random()*1000000000000)))
      .format(),
      languages: randomLanguage[Math.round(Math.random() * 6)],
      responseTime: randomResponse[Math.round(Math.random() * 4)],
      responseRate: Math.round(Math.random() * 100),
      location: randomLocation[Math.round(Math.random() * 8)],
      avatarUrl: `https://host-service.s3-us-west-1.amazonaws.com/${img}.jpg`
    }
    sampleData.push(temp);
  }
  Host.create(sampleData)
    .then(() => db.close())
    .catch(err => console.log(err));
};

insertSampleData();

module.exports = sampleData;


