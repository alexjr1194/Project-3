const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project_3",
  {
    useMongoClient: true
  }
);

const charitySeed =[
  {
    name: "Test Charity",
    org_id_number: "A0121963",
    address: "2100 Test st",
    zip:"94709",
    state: "CA",
    phone_number: "510-555-5555",
    email: "tes_charity@testcharity.com",
    status: "active"
  },
  {
    name: "Test Charity 2",
    org_id_number: "600121963",
    address: "9900 Test st",
    zip:"94709",
    state: "CA",
    phone_number: "510-666-6666",
    email: "second_charity@testcharity.com",
    status: "active"
  },
]

const donorSeed = [
  {
    first_name: "Joe",
    last_name: "Donor",
    id_number: "2222aaaa",
    address: "2100 Donor St",
    zip:"94709",
    state: "CA",
    phone_number: "510-555-5555",
    email: "test_donor@testdonor.com",
    status: "active"
  },
  {
    first_name: "Jill",
    last_name: "Donor",
    id_number: "888aaaa",
    address: "99 Donor St",
    zip:"94709",
    state: "CA",
    phone_number: "510-555-2323",
    email: "second_donor@testdonor.com",
    status: "active"
  },
];

const donationSeed = [
  {
    today_date: "01/01/18",
    name: "meatballs and spaghetti",
    quantity: "2-lb",
    prepared_on: "01/01/18",
    shelf_life: "2-days",
    ingredients: "beef, wheat flour, peanuts, tomatoes...",
    locations: "Berkeley, CA",
    should_know: "Contains peanuts",
    photo: "Sample Photo1"
  },
  {
    today_date: "01/01/18",
    name: "Pasta Salad",
    quantity: "2-lb",
    prepared_on: "01/01/18",
    shelf_life: "2-days",
    ingredients: "wheat flour, chicken, beets, onions, seasme seeds, peanuts, tomatoes...",
    locations: "Daly City, CA",
    should_know: "Contains peanuts & Seasme Seeds",
    photo: "Sample Photo2"
  },
];


db.Donor
  .remove({})
  .then(() => db.Donor.collection.insertMany(donorSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Charity
  .remove({})
  .then(() => db.Charity.collection.insertMany(charitySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Donation
  .remove({})
  .then(() => db.Donation.collection.insertMany(donationSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });