const NotionPageToHtml = require('notion-page-to-html');
const fs = require('fs');

async function getPage() {
    const { title, icon, cover, html } = await NotionPageToHtml.convert("https://www.notion.so/rfigura/61ae71a8c47d49809ffaeb9499c1ffca");
    console.log(title, icon, cover, html);
    fs.writeFileSync('./public/index.html', html);
}

getPage();
