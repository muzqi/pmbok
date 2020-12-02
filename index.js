
const doc = document;

const handleJumpPage = (pagename) => {
  const eles = doc.getElementsByClassName(pagename);

  for (let i = 0; i < eles.length; i ++) {
    eles[i].setAttribute('style', 'color: blue;cursor: pointer');
    eles[i].onclick = () => window.open(`./pages/${pagename}.html`);
  }
}

window.onload = () => {
  const progressTitleEles = doc.getElementsByClassName('progress-title');

  for (let i = 0; i < progressTitleEles.length; i++) {
    if (progressTitleEles[i]) {
      progressTitleEles[i].setAttribute('style', 'cursor: pointer');
      progressTitleEles[i].addEventListener('click', (e) => {
        e.stopPropagation();

        const table = progressTitleEles[i].nextElementSibling;
        const tableClass = table.getAttribute('class');

        if (tableClass.indexOf('hide') !== -1) {
          table.setAttribute('class', 'child-table');
        } else {
          table.setAttribute('class', `${tableClass} hide`);
        }
      });
    }
  }

  doc.getElementById('display-child-table').onclick = () => {
    for (let i = 0; i < progressTitleEles.length; i++) {
      if (progressTitleEles[i].nextElementSibling) {
        progressTitleEles[i].nextElementSibling.setAttribute('class', 'child-table');
      }
    }
  }
  doc.getElementById('hide-child-table').onclick = () => {
    for (let i = 0; i < progressTitleEles.length; i++) {
      if (progressTitleEles[i].nextElementSibling) {
        progressTitleEles[i].nextElementSibling.setAttribute('class', 'child-table hide');
      }
    }
  }

  const areaEles = doc.getElementsByClassName('area');
  for (let i = 0; i < areaEles.length; i++) {
    const ele = areaEles[i].querySelectorAll('tr')[0].querySelector('th');
    if (ele) {
      ele.setAttribute('style', 'cursor: pointer');
      ele.addEventListener('click', () => {
        const tables = areaEles[i].querySelectorAll('.child-table');
        let b = false;
        for (let j = 0; j < tables.length; j ++) {
          const table = tables[j];
          const tableClass = table.getAttribute('class');

          if (tableClass.indexOf('hide') !== -1) {
            b = true;
          }
        }

        for (let k = 0; k < tables.length; k ++) {
          const table = tables[k];
          table.setAttribute('class', b ? 'child-table' : 'child-table hide')
        }
      });
    }
  }

  handleJumpPage('article-of-project');                             // <td class="article-of-project">项目章程</td>
  handleJumpPage('sow');                                            // <td class="sow">项目工作说明书</td>
  handleJumpPage('career-env-factor');                              // <td class="career-env-factor">事业环境因素</td>
  handleJumpPage('org-process-assets');                             // <td class="org-process-assets">组织过程资产</td>

  handleJumpPage('project-manage-plan');                            // <td class="project-manage-plan">项目管理计划</td>
  handleJumpPage('scope-manage-plan');                              // <td class="scope-manage-plan">范围管理计划</td>
  handleJumpPage('requirements-manage-plan');                       // <td class="requirements-manage-plan">需求管理计划</td>
  handleJumpPage('progress-manage-plan');                           // <td class="progress-manage-plan">进度管理计划</td>
  handleJumpPage('project-schedule-plan');                          // <td class="project-schedule-plan">项目进度计划</td>

  handleJumpPage('scope-baseline');                                 // <td class="scope-baseline">范围基准</td>
  handleJumpPage('project-scope-statement');                        // <td class="project-scope-statement">项目范围说明书</td>
  handleJumpPage('progress-baseline');                              // <td class="progress-baseline">进度基准</td>

  handleJumpPage('focus-team');                                     // <td class="focus-team">焦点小组</td>
  handleJumpPage('guided-meeting');                                 // <td class="guided-meeting">引导式研讨会</td>
  handleJumpPage('group-innovation-technology');                    // <td class="group-innovation-technology">群体创新技术</td>
  handleJumpPage('groupdecision-making-technique');                 // <td class="groupdecision-making-technique">群体决策技术</td>
  handleJumpPage('requirements-document');                          // <td class="requirements-document">需求文件</td>
  handleJumpPage('requirement-tracking-matrix');                    // <td class="requirement-tracking-matrix">需求跟踪矩阵</td>
  handleJumpPage('wbs-decomposition');                              // <td class="wbs-decomposition">分解</td>
  handleJumpPage('acceptance-of-deliverables');                     // <td class="acceptance-of-deliverables">验收的可交付成果</td>
  handleJumpPage('deviation-analysis');                             // <td class="deviation-analysis">偏差分析</td>
  handleJumpPage('job-performance-data');                           // <td class="job-performance-data">工作绩效数据</td>
  handleJumpPage('job-performance-infomation');                     // <td class="job-performance-infomation">工作绩效信息</td>
  handleJumpPage('job-performance-report');                         // <td class="job-performance-report">工作绩效报告</td>
  handleJumpPage('change-request');                                 // <td class="change-request">变更请求</td>
  handleJumpPage('rolling-planning');                               // <td class="change-request">滚动式规划</td>
  handleJumpPage('activity-list');                                  // <td class="activity-list">活动清单</td>
  handleJumpPage('activity-attribute');                             // <td class="activity-attribute">活动属性</td>
  handleJumpPage('milestone-list');                                 // <td class="milestone-list">里程碑清单</td>
  handleJumpPage('compact-forward-relation-plotting');              // <td class="compact-forward-relation-plotting">紧前关系绘图法</td>
  handleJumpPage('deterministic-dependency');                       // <td class="deterministic-dependency">确定依赖关系</td>
  handleJumpPage('advance-and-lag');                                // <td class="advance-and-lag">提前量与滞后量</td>
  handleJumpPage('project-schedule-network-diagram');               // <td class="project-schedule-network-diagram">项目进度网络图</td>
  handleJumpPage('resource-calendar');                              // <td class="resource-calendar">资源日历</td>
  handleJumpPage('published-estimates');                            // <td class="published-estimates">发布的估算数据</td>
  handleJumpPage('bottom-up-estimation');                           // <td class="bottom-up-estimation">自下而上估算</td>
  handleJumpPage('activity-resource-requirements');                 // <td class="activity-resource-requirements">活动资源需求</td>
  handleJumpPage('resource-break-structure');                       // <td class="resource-break-structure">资源分解结构</td>
  handleJumpPage('analogy-estimate');                               // <td class="analogy-estimate">类比估算</td>
  handleJumpPage('parameters-estimate');                            // <td class="parameters-estimate">参数估算</td>
  handleJumpPage('reserve-analysis');                               // <td class="reserve-analysis">储备分析</td>
  handleJumpPage('activity-duration-estimates');                    // <td class="activity-duration-estimates">活动持续时间估算</td>
  handleJumpPage('progress-network-analysis');                      // <td class="progress-network-analysis">进度网络分析</td>
  handleJumpPage('critical-path-method');                           // <td class="critical-path-method">关键路径法</td>
  handleJumpPage('critical-chain-method');                          // <td class="critical-chain-method">关键链法</td>
  handleJumpPage('resource-optimization-technique');                // <td class="resource-optimization-technique">资源优化技术</td>
  handleJumpPage('schedule-compression');                           // <td class="schedule-compression">进度压缩</td>
  handleJumpPage('modeling-techniques');                            // <td class="modeling-techniques">建模技术</td>
  handleJumpPage('progress-of-data');                               // <td class="progress-of-data">进度数据</td>
  handleJumpPage('project-calendar');                               // <td class="project-calendar">项目日历</td>
  handleJumpPage('performance-review');                             // <td class="performance-review">绩效审查</td>
  handleJumpPage('progress-of-the-forecast');                       // <td class="progress-of-the-forecast">进度预测</td>
}
