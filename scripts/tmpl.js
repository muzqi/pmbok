/**
 * node scripts/tmpl.js --name=xxx --filename=xxx --renameimgs=a.png,b.png
 * @param {String} name        必填，新增模版的中文名
 * @param {String} filename    必填，新增模版的文件名
 * @param {String} renameimgs  选填，需要重命名的图片名称，多个使用逗号隔开。node 会在当前 images 目录寻找这些图片，并将其重命名为 filename；如果该值存在，node 会在模版中注入图片标签
 */
const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const pathResolve = (_path) => path.resolve(__dirname, _path);

const name = args['name'];
const filename = args['filename'];
const renameimgs = args['renameimgs'] ? args['renameimgs'].split(',') : [];

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
  ${
    renameimgs.length
      ? renameimgs.map((d, i) => `<img style="width:700px;" src="../images/${filename}${renameimgs.length > 1 ? `-${i + 1}` : ''}.png" alt="" />`).join('\n')
      : `<h1>${name}</h1>`
  }
</body>
</html>
`)

const exe = () => {
  // 重命名图片
  if (renameimgs.length) {
    renameimgs.map((d, i) => {
      if (fs.existsSync(pathResolve(`../images/${d}`))) {
        fs.renameSync(pathResolve(`../images/${d}`), pathResolve(`../images/${filename}${renameimgs.length > 1 ? `-${i + 1}` : ''}.png`));
      }
    });
  }

  // 创建 html 模版文件
  if (!fs.existsSync(pathResolve(`../pages/${filename}.html`))) {
    fs.writeFileSync(pathResolve(`../pages/${filename}.html`), tmplFn(name), 'utf-8');
  }

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
