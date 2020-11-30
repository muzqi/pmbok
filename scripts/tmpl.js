const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const pathResolve = (_path) => path.resolve(__dirname, _path);

const name = args['name'];
const filename = args['filename'];

const tmplFn = (name) => (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}</title>
  <link rel="stylesheet" href="../index.css">
</head>
<body>
  <h1>${name}</h1>
</body>
</html>
`)

const exe = () => {
  // 创建 html 模版文件
  fs.writeFileSync(pathResolve(`../pages/${filename}.html`), tmplFn(name), 'utf-8');

  // 编辑 index.js 文件，添加跳转方法
  const oindexjsData = fs.readFileSync(pathResolve('../index.js'), 'utf-8').split('\n');
  oindexjsData.splice(oindexjsData.length - 2, 0, `handleJumpPage('${filename}'); // <td class="${filename}">${name}</td>`);
  fs.writeFileSync(pathResolve('../index.js'), oindexjsData.join('\n'), 'utf-8');

  // 替换 index.html 文件中所有对应的 td
  const oindexhtmlData = fs.readFileSync(pathResolve('../index.html'), 'utf-8').toString();
  const reg = new RegExp("<td>" + name + "<\/td>", 'g');
  fs.writeFileSync(pathResolve('../index.html'), oindexhtmlData.replace(reg, `<td class="${filename}">${name}</td>`), 'utf-8');
};

exe();
