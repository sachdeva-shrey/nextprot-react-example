export const getRandomData = () => {
  let dataDemo = [];
  for (let i = 1; i < 212; i++) {
    let count = Math.floor(Math.random() * 20 + 1);
    dataDemo.push({
      x: i,
      y: count,
    });
  }
  return dataDemo;
};
