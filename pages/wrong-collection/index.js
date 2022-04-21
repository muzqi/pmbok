const doc = document;

const renderSubject = (dataSource, container) => {
  dataSource.map((data, index) => {
    const MAP = ['A', 'B', 'C', 'D'];

    const subject = doc.createElement('div');
    subject.setAttribute('class', 'subject');

    const title = doc.createElement('div');
    title.setAttribute('class', 'title')
    title.innerHTML = `${data.isFocus ? '<span style="color: red;">*</span> ' : ''}${index + 1}. <span class="tag">${data.tag}</span> ${data.title}`;
    subject.appendChild(title);

    if (data.options) {
      const options = doc.createElement('div');
      options.setAttribute('class', 'options');
      data.options.map((d, i) => {
        const option = doc.createElement('div');
        option.setAttribute('class', 'option');
        option.innerHTML = `<b>${MAP[i]}</b>. ${d}`;
        options.appendChild(option);
      });
      subject.appendChild(options);
    }

    const checkBtn = doc.createElement('button');
    checkBtn.innerHTML = '查看答案';
    checkBtn.onclick = (e) => {
      e.stopPropagation();
      const anwser = checkBtn.nextSibling;
      const anwserVisible = anwser.getAttribute('data-visible') === 'true';

      anwser.setAttribute('data-visible', !anwserVisible);
      anwser.setAttribute('style', `display: ${!anwserVisible ? 'block' : 'none'}`);
      checkBtn.innerHTML = !anwserVisible ? '隐藏答案' : '查看答案';
    };
    subject.appendChild(checkBtn);

    const anwser = doc.createElement('div');
    anwser.setAttribute('class', 'anwser');
    anwser.setAttribute('data-visible', 'false');
    anwser.setAttribute('style', 'display: none');
    anwser.innerHTML = `
    ${data.anwser ? `<div>答案：<span style="color: green; font-weight: bold;">${MAP[data.anwser]}</span></div>` : ''}
    <div>解析：${data.analysis}</div>
    `;
    subject.appendChild(anwser);

    container.appendChild(subject);
    container.appendChild(doc.createElement('br'));
    container.appendChild(doc.createElement('br'));
  });
};

window.onload = () => {
  const subjectContainer = doc.getElementById('subject-container');

  // 渲染题目总数
  doc.getElementById('total').innerHTML = `共 ${dataSource.length} 题`;

  // 渲染标签
  const tagContainer = doc.getElementById('tag-container');
  const tagObj = {};
  dataSource.map(d => {
    if (!tagObj[d.tag]) {
      const arr = [];
      arr.push(d);
      tagObj[d.tag] = arr;
    } else {
      tagObj[d.tag].push(d);
    }
  });

  let _dataSource = JSON.parse(JSON.stringify(dataSource));

  // 每个标签绑定事件
  Object.keys(tagObj).map(key => {
    const tag = doc.createElement('div');
    tag.setAttribute('class', 'tag active');
    tag.setAttribute('data-active', 'true');
    tag.innerHTML = `${key} (${tagObj[key].length})`;

    tag.onclick = () => {
      const active = tag.getAttribute('data-active') === 'true';
      if (!active) {
        tag.setAttribute('class', 'tag active');
        tag.setAttribute('data-active', 'true');
        subjectContainer.innerHTML = '';
        _dataSource = [..._dataSource, ...dataSource.filter(n => n.tag === key)];
        renderSubject(_dataSource, subjectContainer);
      } else {
        tag.setAttribute('class', 'tag');
        tag.setAttribute('data-active', 'false');
        subjectContainer.innerHTML = '';
        _dataSource = _dataSource.filter(n => n.tag !== key);
        renderSubject(_dataSource, subjectContainer);
      }
    }

    tagContainer.appendChild(tag);
  });

  // 全选标签
  doc.getElementById('select-all-tag').onclick = () => {
    Array.from(doc.querySelectorAll('div.tag')).map(tag => {
      tag.setAttribute('class', 'tag active');
      tag.setAttribute('data-active', 'true');
    });

    subjectContainer.innerHTML = '';
    _dataSource = JSON.parse(JSON.stringify(dataSource));
    renderSubject(_dataSource, subjectContainer);
  }

  // 取消全选
  doc.getElementById('unselect-all-tag').onclick = () => {
    Array.from(doc.querySelectorAll('div.tag')).map(tag => {
      tag.setAttribute('class', 'tag');
      tag.setAttribute('data-active', 'false');
    });

    subjectContainer.innerHTML = '';
    _dataSource = [];
  }

  // 渲染题目
  renderSubject(dataSource, subjectContainer);

  // 随机模式
  const randomPracticeBtn = doc.getElementById('random-practice');
  const modalWrapperEle = doc.getElementById('modal-wrapper');
  const modalEle = doc.getElementById('modal');
  randomPracticeBtn.onclick = () => {
    modalWrapperEle.setAttribute('style', '');
    const _dataSource = JSON.parse(JSON.stringify(dataSource));
    _dataSource.sort(() => Math.random() - 0.5);
    _dataSource.splice(20);
    renderSubject(_dataSource, modalEle);
  }
  modalEle.onclick = (e) => {
    e.stopPropagation();
  }
  modalWrapperEle.onclick = () => {
    modalWrapperEle.setAttribute('style', 'display: none');
    modalEle.innerHTML = '';
  }
}
