const jsforce = require("jsforce");
const faker = require("faker");

const conn = new jsforce.Connection({
  loginUrl: "https://login.salesforce.com",
});

conn.login(
  "your_username",
  "your_password_and_security_token",
  function (err, userInfo) {
    if (err) {
      return console.error(err);
    }

    // Generate an array of 100 fake case records
    const cases = Array.from({ length: 100 }, () => ({
      Subject: faker.lorem.sentence(),
      Description: faker.lorem.paragraph(),
      Status: faker.random.arrayElement(["New", "Closed", "Escalated"]),
      Priority: faker.random.arrayElement(["High", "Medium", "Low"]),
      CreatedDate: faker.date.between("2020-01-01", "2021-01-01").toISOString(),
    }));

    conn.bulk.load("Case", "insert", cases, function (err, result) {
      if (err) {
        return console.error(err);
      }
      console.log(result);
    });
  }
);
