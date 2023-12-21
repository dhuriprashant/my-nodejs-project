const jsforce = require("jsforce");
const conn = new jsforce.Connection({
  loginUrl: "https://login.salesforce.com",
});

async function login(username, password) {
  try {
    await conn.login(username, password);
    console.log("Logged in");
  } catch (error) {
    console.error(error);
  }
}

async function queryToolingAPI(query) {
  try {
    let result = await conn.tooling.query(query);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function querySalesforceAPI(query) {
  try {
    let result = await conn.query(query);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  await login("username", "pwdwithtoken");
  //await queryToolingAPI("SELECT Id, Name FROM Account");
  await querySalesforceAPI("SELECT Id, Name FROM Account");
}

main();
