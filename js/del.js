/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path 
 */
// let fs = require('fs')
function emptyDir(path) {
  const files = fs.readdirSync(path);
  console.log(files)
  files.forEach(file => {
      const filePath = `${path}/${file}`;

      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
          // emptyDir(filePath);
      } else {
          // fs.unlinkSync(filePath);
          // console.log(`删除${file}文件成功`);
      }
  });
}
emptyDir()