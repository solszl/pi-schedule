// const { exec } = require("shelljs");
const CronJob = require("cron").CronJob;

// 秒 分 时 天 月 周几
const job = new CronJob("*/10 * * * * *", () => {
  //   console.log("now time is", Date.now());
  //   exec("curl ifconfig.me > 1.txt");
});

job.start();
