const { schedule } = require("@netlify/functions");

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule("*/10 * * * *", async (event) => {
  const eventBody = JSON.parse(event.body);
  console.log(`Next function run at ${eventBody.next_run}.`);
  await fetch("https://dmb-be-62l9.onrender.com").then(() => {
    console.log("Fetched to dmb server!");
  });

  return {
    statusCode: 200,
  };
});
