// 自动从 # 后面获取文章 ID
function getArticleID() {
  return location.hash.replace('#', '').trim() || '';
}

// 统一设置封面
function setBanner(imagePath) {
  const banner = document.getElementById('article-banner');
  if (banner && imagePath) {
    banner.style.backgroundImage = `url(${imagePath})`;
    banner.classList.add('show');
  }
}

// 加载文章
async function loadArticle() {
  const id = getArticleID();
  const contentEl = document.getElementById('content');
  const bannerEl = document.getElementById('article-banner');

  // 首页
  if (!id) {
    setBanner('/col/img/0001.jpg');
    contentEl.innerHTML = `<h1>PNUO Column</h1><p>欢迎来到我的专栏</p>`;
    return;
  }

  try {
    // 读取 .md 文件
    const res = await fetch(`${id}.md`);
    if (!res.ok) {
      contentEl.innerHTML = '<h2>文章未找到</h2>';
      return;
    }

    const text = await res.text();
    const { data, content } = grayMatter(text);
    const html = marked.parse(content);

    // 设置封面
    if (data.banner) setBanner(data.banner);

    // 设置标题
    if (data.title) document.title = data.title + ' | PNUO';

    // 渲染内容
    contentEl.innerHTML = html;

  } catch (e) {
    contentEl.innerHTML = '<h2>加载失败</h2>';
    console.error(e);
  }
}

// 页面加载时执行
loadArticle();

// 哈希变化时重新加载文章（关键！）
window.addEventListener('hashchange', loadArticle);
