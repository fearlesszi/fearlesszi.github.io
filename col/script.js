// 自动获取文章ID，兼容伪静态
const getArticleID = () => {
  const paths = window.location.pathname.split('/').filter(Boolean);
  return paths.pop() || '';
};

const id = getArticleID();
const bannerEl = document.getElementById('article-banner');
const contentEl = document.getElementById('content');
const siteTitle = "PNUO Column";

// 统一设置封面图
function setBanner(imagePath) {
  bannerEl.style.backgroundImage = `url(${imagePath})`;
  bannerEl.classList.add('show');
}

async function loadArticle() {
  // ====================== 修复问题1：首页显示默认16:9封面 ======================
  if (!id || id === 'col') {
    setBanner('/col/img/0000.jpg'); // 首页默认封面
    contentEl.innerHTML = `
      <h1>子正各类手写</h1>
      <p>我不会放弃阅读和写作，希望你…算了，你爱干嘛干嘛去。</p>
    `;
    document.title = siteTitle;
    return;
  }

  try {
    // 修复文章加载路径
    const res = await fetch(`/col/${id}.md`);
    if (!res.ok) throw new Error('文章不存在');
    
    const mdText = await res.text();
    const { data, content } = grayMatter(mtdText);

    // 封面图
    if (data.banner) setBanner(data.banner);
    
    // 标题
    if (data.title) document.title = `${data.title} | ${siteTitle}`;

    // 渲染MD
    const html = marked.parse(content);
    contentEl.innerHTML = html;

    // 链接新窗口打开
    contentEl.querySelectorAll('a').forEach(link => link.target = '_blank');

  } catch (err) {
    contentEl.innerHTML = `<h2>404 - 文章未找到</h2>`;
    console.error(err);
  }
}

loadArticle();
