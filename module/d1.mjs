export let b = 1;


setTimeout(() => b = 3, 3000);
//如果是export default 导出整个对象，就不能精细化实时同步了