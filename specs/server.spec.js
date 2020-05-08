const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const time = require('./util/time');
const sinon = require('sinon');
sinon.stub(time, 'setTimeout');

describe('Server API tests', function() {
  it('gets the hosts API and JSON response', async done => {
    const response = await request.get('/hosts');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(100);
    expect(response.body[0]).toStrictEqual({"__v": 0, "_id": "5e9e903df594798e4c222dcf", "avatarUrl": "https://source.unsplash.com/200x130/?portrait", "coHost": [], "description": "The pursuit of happiness is the pursuit of horticulture!", "id": 1, "joined_at": "2017-11-10T05:05:26.037Z", "languages": "English, Italiano", "location": "New York", "name": "Graziella", "provided": {"email": true, "id": false, "phone": true}, "responseRate": 100, "responseTime": "within an hour", "reviews": 53, "superhost": true, "superhostIcon": "https://www.pinpng.com/pngs/m/13-133921_responsive-website-by-pelican-design-consultants-airbnb-superhost.png", "verified": true});
    done();
  });

  it('gets the data based on hosts ID', async done => {
    const response = await request.get('/hosts/4');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]._id).toEqual("5e9e903df594798e4c222dd2");
    expect(response.body[0].name).toEqual("Kathy & Craig");
    done();
  });

  it('gets the data based on hosts ID', async done => {
    const response = await request.get('/hosts/4');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]._id).toEqual("5e9e903df594798e4c222dd2");
    expect(response.body[0].name).toEqual("Kathy & Craig");
    done();
  });

  it('sends an HTML in response to endpoint with listing ID', async done => {
    const response = await request.get('/1077');
    expect(response.status).toBe(200);
    done();
  });

  it('returns host data based on listing ID parsed from the URL and listing service API', async done => {
    const response = await request.get('/listings/1003/hosts');
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(3);
    expect(response.body._id).toEqual("5e9e903df594798e4c222dd1");
    expect(response.body.name).toEqual("Tribe");
    done();
  });
});


