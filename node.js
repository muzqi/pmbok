// 1. 确认有哪些方案
const plan = [
  {
    name: '北京',
    // 2. 每个方案中，有多个风险事件；每个事件有对应的收益，以及风险发生的概率
    events: [
      { name: '晴', value: 4.5, rate: 0.25 },
      { name: '多云', value: 4.4, rate: 0.5 },
      { name: '多雨', value: 1, rate: 0.25 },
    ],
  },
  {
    name: '天津',
    events: [
      { name: '晴', value: 5, rate: 0.25 },
      { name: '多云', value: 4, rate: 0.5 },
      { name: '多雨', value: 1.6, rate: 0.25 },
    ],
  },
  {
    name: '上海',
    events: [
      { name: '晴', value: 6, rate: 0.25 },
      { name: '多云', value: 3, rate: 0.5 },
      { name: '多雨', value: 1.3, rate: 0.25 },
    ],
  },
  {
    name: '深圳',
    events: [
      { name: '晴', value: 5.5, rate: 0.25 },
      { name: '多云', value: 3.9, rate: 0.5 },
      { name: '多雨', value: 0.9, rate: 0.25 },
    ],
  },
];

// 3. 将每个方案中，各风险事件的收益和发生概率相乘，得到该方案的 EMV
const EMVs = [];
plan.map((data) => {
  let result = 0;
  data.events.map((d) => {
    result += d.value * d.rate;
  });
  EMVs.push(result);
});

// 4. 根据具体场景，选择最优的 EMV
Math.max(EMVs) || Math.min(EMVs);
