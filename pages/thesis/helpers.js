// 摘要模版
const summaryRender = (title) => {
  const str = `
2020年6月，我司为巩固视频智能监控行业地位，立项开发《视频智能监控小微平台》系统。
系统旨在针对小微企业细分领域安全监控、客流监控需求，并提供客流大数据分析、用户画像、门店铺货方案定制等能力开发。
该项目需求复杂，涉及智能摄像机，以及流媒体、AI人脸算法等技术领域，技术实现难度大，并且集团公司对质量的要求很高，项目难度比较大。

项目总投资3000万，工期21个月（2020/6～2022/3）。
我被任命为项目经理，负责该项目的管理和实施。
项目组成员：需求分析师4人，系统设计师4人，系统开发工程师18人，系统测试人员5人，质量保证人员3人，系统运维人员2人，共计36人。

我将结合实践，阐述对${title}的认识，并总结本次项目的心得体会。
  `;

  const len = countingCharacters(str);

  document.getElementById('summary-container').innerHTML = marked.parse(str) + `<p style="color: #a7a7a7"><code>${len}字</code> <i>建议290个字，建议1～2段</i></p>`;

  return len;
}

// 项目背景+过渡段落模版
const projectBackgroundRender = (title) => {
  const background = `
一、项目概述

随着4G/5G网络技术、云计算、物联卡的发展，监控视频行业解决了网络、存储、通信桥梁的问题，从而滋生出的2C家庭市场业务（儿童、宠物、安防监控）和2B政企市场业务（农业、交通、智慧城市）。
我司以政企市场为发展重点，在该系统中打造智慧城市云端一体化监控平台。
为提高行业竞争力，企业影响力，细分领域用户体验，我司决定进军2B小微企业细分领域，主要受众群体为商圈门店个体户或连锁店。
2020年6月，我司立项开发《视频智能监控小微平台》系统。
该系统为用户提供视频监控、云存储回放、语音对讲、视频剪辑等基础视频能力；
针对小微企业提供门店客流统计、人脸识别用户画像、大数据分析、方案定制等个性化软件功能；
区别于2C用户，为小微企业提供800万像素，具备GPS、夜视等功能等抓拍枪机，并提供国标GB28181协议接入的硬件服务。

项目总投资3000万，工期21个月，要求交付源代码、操作手册、产品文档、视频监控系统（WEB + APP）、摄像机管理系统、开放平台接入系统。
我被任命为项目经理，负责该项目的管理和实施。
项目采用项目型组织结构，其中需求分析师4人，系统设计师4人，系统开发工程师18人，系统测试人员5人，质量保证人员3人，系统运维人员2人，共计36人。
  `;

  const transition = `
该项目需要将流媒体服务和AI人脸分析系统深度融合，技术实现难度大。
又需要对不同厂商、型号摄像机的私有协议进行抹平，梳理和整合的难度大，稍有疏忽就会导致项目的失败。
为了确保项目总目标的实现，下面我结合项目实践，重点阐述项目${title}中每个子过程用到的工具和方法。
  `

  const bgLen = countingCharacters(background);
  const tsLen = countingCharacters(transition);

  document.getElementById('project-background-container').innerHTML =
    marked.parse(background) +
    `<p style="color: #a7a7a7"><code>${bgLen}字</code> <i>建议500个字，建议2段，响应论文子题目要求</i></p>` +
    marked.parse(transition) +
    `<p style="color: #a7a7a7"><code>${tsLen}字</code> <i>建议150个字，按照子题目2的要求，承上启下</i></p>`;

  return bgLen + tsLen;
}

// 规划子过程模版
const planProcessRender = (params) => {
  const { index, title, define, basis, content } = params;

  const str = `
${index}、规划${title}管理计划

规划${title}管理是定义${define}的过程。
在视频智能监控小微平台系统规划阶段，我依据${basis.map((d, i) => {
  let s = d;
  if (i !== basis.length - 1) {
    s += '、';
  }
  return s;
}).join('')}等资料，邀请总监理事王工、部门领导、团队关键干系人，以专题会议的形式对平台建设的管理组织结构、审批流程、${title}绩效审计周期，${title}责任矩阵等内容进行了深入探讨。

根据会议达成共识，制定的${title}管理计划主要内容有：${content.map((d, i) => `${i+1}.${d}`).join('')}
我们将${title}管理计划纳入项目整体管理计划一起通过了评审，该计划为${title}管理提供准则和指南。
  `;

  return str;
}

// 核心内容模版
const contentRender = (content) => {
  const len = countingCharacters(content);
  doc.getElementById('content-container').innerHTML = marked.parse(content) + `<p style="color: #a7a7a7"><code>${len}字</code> <i>建议1350个字，按照子题目2要求，分3段+</i></p>`;
  return len;
}

// 总结模版
const conclusionRender = (index, title) => {
  const str = `
${index}、总结

2022年3月该项目成功通过我司高层验收，不仅进度提前11天而且费用也节约了20万，系统也实现了我司布局2B小微企业细分领域的目标，项目取得了圆满成功。
系统运行至今稳定可靠，受到了领导和用户的一致好评。
项目的成功首先来自全体团队成员的不懈努力，其次得益于我科学高效的${title}以及相关工具和技术的运用。
但管理上也存在一些不足，如：由于我们对新员工的培训不足，新员工对业务和质量规范不熟悉，需求理解与产品经理有偏差，导致部分模块返工；
后来我采取了有经验的老员工培训和组织团建活动等措施解决了问题，未对项目造成大的影响。

通过该项目的管理，我收获了宝贵的${title}经验，对于管理中的不足，我将努力学习，提升自己的业务水平，争取为祖国的信息系统建设贡献一份自己微薄之力。
  `;

  const len = countingCharacters(str);
  document.getElementById('conclusion-container').innerHTML = marked.parse(str) + `<p style="color: #a7a7a7"><code>${len}字</code> <i>建议350个字，建议1～2段</i></p>`;
  return len;
}
