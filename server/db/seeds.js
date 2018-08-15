use bucket_list;
db.dropDatabase();

db.dreams.insertMany([
  {
    text: "Get a job"
  },
  {
    text: "Consolidate learning in Pub/Sub"
  },
  {
    text: "Make the div spin"
  }
]);
