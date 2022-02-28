const dataSource = [
  {
    tag: '招投标',
    title: '关于项目招投标的描述，正确的是（）。',
    options: [
      '资格预审档或者招标档的发售期不得少于7天',
      '投资保证金不得超过招标项目估算价的1%',
      '一个招标项目只能有一个标底',
      '中标候选人应当不超过2个并标明排序',
    ],
    anwser: 2,
    analysis: `
    <div>A选项: 资格预审档或者招标档的发售期不得少于5日；</div>
    <div>B选项: 招标人再招标档中要求投标人提交投标保证金的，投标保证金不得超过招标项目估算价的2%；</div>
    <div>D选项: 中标候选人应当不超过3个并标明排序</div>
    `,
  },
  {
    tag: '招投标',
    title: '关于项目招投标的描述，不正确的是：（）。',
    options: [
      '任何单位和个人不得以任何方式为招标人指定招标代理机构',
      '招标项目，共收到两个投标人的标书，则该招标人需重新招标',
      '标书以邮寄方式递交的，以“邮戳为准”',
      '投标价格低于成本不符合中标人条件',
    ],
    anwser: 2,
    analysis: '如果以邮寄方式送达的，投标人必须留出邮寄时间，保证投标档能够在截止日期之前送达招标人指定的地点，而不是以“邮戳为准”',
  },
  {
    tag: '招投标',
    title: '关于招投标的描述，不正确的是: ( ) 。',
    options: [
      '招标人采用邀请招标方式的，应当向三个以上具备承担项目的能力、资信良好的特定法人或者其他组织发出投标邀请书',
      '招标人对已发出的招标档进行必要的澄清或者修改的，应当在招标档要求提交投标档截止时间至少十五日前，以书面形式通知所有招标档收受人',
      '投标人在招标档要求提交投标档的截止时间前，可以补充、修改或者撤回已提交的投标档，并书面通知招标人',
      '依法必须进行招标的项目，其评标委员会由招标人的代表和有关技术、经济等方面的专家组成，成员人数为五人以上单数，其中技术、经济等方面的专家不得少于成员总数的一半',
    ],
    anwser: 3,
    analysis: '第三十七条 评标由招标人依法组建的评标委员会负责。依法必须进行招标的项目，其评标委员会由招标人的代表和有关技术、经济等方面的专家组成，成员人数为五人以上单数，其中技术、经济等方面的专家不得少于成员总数的三分之二。',
  },
  {
    tag: '信息系统规划',
    title: '（）不属于信息系统规划工具。',
    options: [
      'CU矩阵',
      'P/O矩阵',
      'RD矩阵',
      'RACI矩阵',
    ],
    anwser: 3,
    analysis: 'RACI的责任分配矩阵的一种(人力资源管理)，这是重点讲过的。另外，关于ABC这三个矩阵，近年高项选择题常考。',
  },
  {
    tag: '信息系统规划',
    title: '信息系统规划是从（ ）出发，构建企业基本的信息系统架构，利用信息系统管理企业行为，辅助企业进行决策。',
    options: [
      '企业客户需求',
      '信息系统运维需求',
      '企业信息化建设现状',
      '企业战略',
    ],
    anwser: 3,
    analysis: '规划要支持企业的战略目标。企业的战略目标是信息系统规划的出发点。信息系统规划从企业目标出发，分析企业管理的信息需求，逐步导出信息系统的战略目标和总体结构。',
  },
  {
    tag: 'UML',
    title: 'UML 2.0中共包括14种图，其中（）属于交互图。',
    options: [
      '类图',
      '定时图',
      '状态图',
      '对象图',
    ],
    anwser: 1,
    analysis: '教程p41-1.4.1 需求分析 定时图（timing diagram，也称计时图）：定时图也是一种交互图，它强调消息跨越不同对象或参与者的实际时间，而不仅仅只是关心消息的相对顺序。',
  },
  {
    tag: '两化融合',
    title: '关于两化融合的描述，不正确的是（）',
    options: [
      '虚拟经济与工业实体经济的融合',
      '信息资源与材料、能源工业资源的融合',
      '工业化与自动化发展战略的融合',
      'IT 设备与工业装备的融合',
    ],
    anwser: 2,
    analysis: `
    教程p98-1.7.5 工业和信息化融合
    <div>推进信息化与工业化深度融合 工业化与信息化“两化融合”的含义是：</div>
    <ol>
      <li><span style="color: blue">战略融合</span> 指信息化与工业化发展战略的融合，即信息化发展战略与工业化发展战略要协调一致，信息化发展模式与工业化发展模式要高度匹配，信息化规划与工业化发展规划、计划要密切配合；</li>
      <li><span style="color: blue">资源融合</span> 指信息资源与材料、能源等工业资源的融合，能极大节约材料、能源等不可再生资源；</li>
      <li><span style="color: blue">经济融合</span> 指虚拟经济与工业实体经济融合，孕育新一代经济的产生，极大促进信息经济、知识经济的形成与发展；</li>
      <li><span style="color: blue">技术融合</span> 指信息技术与工业技术、IT设备与工业装备的融合，产生新的科技成果，形成新的生产力。</li>
    </ol>
    `,
  },
  {
    tag: '软件标准',
    title: '信息系统安全保护等级的定级要素是（ ）。',
    options: [
      '等级保护对象和保护客体',
      '受侵害的客体和对客体的侵害程度',
      '信息安全技木策略和管理策略',
      '受侵害客体的规模和恢复能力',
    ],
    anwser: 1,
    analysis: '高级教程 p612',
  },
  {
    tag: '软件标准',
    title: '（ ）验证一个配置项的实际工作性能是否符合他的需求规格说明。',
    options: [
      '功能配置审计',
      '物理配置审计',
      '设计评审',
      '代码审计',
    ],
    anwser: 0,
    analysis: '高级教程p851；',
  },
  {
    tag: '合同',
    title: '关于合同管理描述不正确（）。',
    options: [
      '合同签订前需做好市场调查',
      '对于合同诈骗尽早报案是确保权利关键',
      '变更合同价款时，首先确定变更价款，再确定变更清单',
      '合同文本需计算机打印，手写备注不具备法律效力',
    ],
    anwser: 2,
    analysis: `
    <div>首先确定合同变更清单，然后确定变更价款。</div>
    <div>D：在「合同解释的原则」中有提到，手写条文优先于印刷条文，这里的手写一般指「填空」，并且手写内容都会要求加印手印。</div>
    `,
  },
  {
    tag: '合同',
    title: '在项目中经常会利用外包的手段，以提高项目的验收能力，对于工作规模或产品规定不是特别清楚的项目。外包时一般应采用（）',
    options: [
      '成本补偿合同',
      '采购单形式的合同',
      '工时材料合同',
      '固定总价合同',
    ],
    anwser: 2,
    analysis: '范围不明确，缺乏项目管理能力用工料合同。',
  },
  {
    tag: '软件标准',
    title: '根据《软件工程术语GB/T11457-2006》，基线事业已经过正式审核与统一，可用作下一步开发的基础，并且只有通过正式的修改管理步骤方能加以修改的规格说明或产品。对于配置管理，有以下三种基线：功能基线、（）和产品基线。',
    options: [
      '编码基线',
      '测试基准',
      '里程碑',
      '分配基线',
    ],
    anwser: 3,
    analysis: '根据《软件工程术语GB/T11457-2006》，对于配置管理，有以下三种基线：功能基线、分配基线和产品基线。',
  },
  {
    tag: '配置管理',
    title: '在软件配置管理中，版本控制的目的是按照一定的规则保存配置项的( )。',
    options: [
      '重要版本',
      '基线版本',
      '所有版本',
      '需要的版本',
    ],
    anwser: 2,
    analysis: '版本控制的目的是按照一定的规则保存配置项的所有版本，避免发生版本丢失或混淆的现象，并且可以快速准确的查找到配置项的任何版本。',
  },
  {
    tag: '变更管理',
    title: '关于变更管理的描述，不正确的是：（ ）。',
    options: [
      '引起工程变更的因素及变更产生的时间是不可以掌控的',
      '项目的任何干系人都可以提出变更请求，尽管也可以口头提出，但所有变更请求都必须以书面形式记录。',
      '必须采用变更管理工具',
      '几乎所有的项目都可能发生变更甚至是频繁的变更',
    ],
    anwser: 2,
    analysis: '不是所有的变更都必须采用变更管理工具，C选项说法过于绝对。',
  },
  {
    tag: '变更管理',
    title: `
    <div>变更管理组织机构的工作程序按时间先后顺序，排列正确的是（）。</div>
    <ol>
      <li>变更效果评估</li>
      <li>项目工程师提出变更申请</li>
      <li>项目经理审批变更申请</li>
      <li>发出变更通知并组织实施</li>
      <li>变更申请文档审核流转</li>
      <li>变更方案论证</li>
      <li>项目管理委员会审查</li>
      <li>项目经理和监理单位监控实施</li>
    </ol>
    `,
    options: [
      '②⑤③④⑥⑧⑦①',
      '②⑤④③⑦①⑥⑧',
      '②③⑤⑦⑥④①⑧',
      '②③⑤⑥⑦④⑧①',
    ],
    anwser: 3,
    analysis: '参考，变更控制工作程序。',
  },
  // {
  //   tag: '',
  //   title: '',
  //   options: [
  //     '',
  //     '',
  //     '',
  //     '',
  //   ],
  //   anwser: 0,
  //   analysis: '',
  // },
];
