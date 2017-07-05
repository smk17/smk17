'use strict';
var AV = require('leanengine');
const { exec } = require('child_process');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var port = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000);
var cli = 'hexo server -p ' + port;
console.log(cli);
var qiniu = {
	"access_key": process.env.AccessKey,
  "secret_key": process.env.SecretKey
}
var exec_qiniu = "echo '"+JSON.stringify(qiniu)+"' 1>qn.json "
exec(exec_qiniu, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  exec(cli, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

// require('http').createServer(function(req, res) {
//   if (req.url == '/') {
//     res.statusCode = 200;
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// }).listen(process.env.LEANCLOUD_APP_PORT);