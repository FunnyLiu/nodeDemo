// const { Gitlab } = require('@gitbeaker/node');
const { Gitlab } = require('gitlab');
const PROJECT_ID = 46175;
async function init() {
  //保密
  const api = new Gitlab({
    token: '*******',
    host: '******'
  });
  // 获取某一个仓库下根目录文件夹及文件列表
  const Repositories = await api.Repositories.tree(PROJECT_ID);
  const sha = Repositories[3].id;
  console.log(Repositories);
  // 获取某一个blob类型的文件的文件内容，utf-8格式
  const content = await api.Repositories.showBlobRaw(PROJECT_ID, sha);
  console.log(content);
  // 获取子文件夹下内容
  const subFiles = await api.Repositories.tree(PROJECT_ID, { path: 'blocks/' });
  const subFiles2 = await api.Repositories.tree(PROJECT_ID, {
    path: 'blocks/bower'
  });
  console.log(subFiles);
  console.log(subFiles2);
}
init();
