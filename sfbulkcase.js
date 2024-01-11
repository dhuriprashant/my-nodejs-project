const jsforce = require("jsforce");

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

    conn.bulk.load(
      "Case",
      "insert",
      [
        {
          Subject: "Case 1",
          Status: "New",
          CreatedDate: "2022-01-01T00:00:00Z",
        },
      ],
      function (err, result) {
        if (err) {
          return console.error(err);
        }
        console.log(result);
      }
    );
  }
);
