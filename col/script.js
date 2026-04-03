// 伪静态：获取文章 id (col/001 → 001)
const path = window.location.pathname;
const id = path.split('/').pop().trim();

const bannerEl = document.getElementById('article-banner');
const contentEl = document.getElementById('content');

// 页面标题
const siteTitle = "PNUO Column";

// 加载文章
async function loadArticle() {
    // 首页：手动写内容
    if (!id || id === 'col') {
        contentEl.innerHTML = `
            <h1>子正各类手写</h1>
            <p>我不会放弃阅读和表达，希望你…算了，你爱干嘛干嘛去。</p>
        `;
        return;
    }

    try {
        // 加载 MD 文件
        const res = await fetch(`/col/${id}.md`);
        if (!res.ok) throw new Error('文件不存在');
        
        const mdText = await res.text();
        const { data, content } = grayMatter(mdText);

        // 设置封面图
        if (data.banner) {
            bannerEl.style.backgroundImage = `url(${data.banner})`;
            bannerEl.classList.add('show');
        }

        // 设置标题
        if (data.title) {
            document.title = `${data.title} | ${siteTitle}`;
        }

        // 渲染 Markdown
        let html = marked.parse(content);
        contentEl.innerHTML = html;

        // 所有链接新窗口打开
        setTimeout(() => {
            contentEl.querySelectorAll('a').forEach(link => {
                link.target = '_blank';
            });
        }, 0);

    } catch (err) {
        contentEl.innerHTML = `<h2>文章不存在</h2>`;
    }
}

loadArticle();
