const puppeteer = require('puppeteer');
const util = require('util');
const url = 'https://movie.douban.com/tag/#/?sort=U&range=0,10&tags=历史';
const sleep = util.promisify(setTimeout);
;(async () => {
    console.log('start visit the target page');
    const browser = await puppeteer.launch({
        args : ['--no-sandbox'],
        dumpio : false
    });
    const page = await browser.newPage();
    await page.goto(url,{
        waitUntil : 'networkidle2'
    })

    await sleep(2000);
    
    await page.waitForSelector('.more');

    //只加载2页的数据
    for(let i = 0;i < 2;i++){
        await sleep(2000);
        await page.click('.more');
    }

    const result = await page.evaluate(() => {
        let $ = window.$;
        let items = $('.list-wp a');
        let links = [];
        if(items.length >= 1){
            items.each((index,item) => {
                let it = $(item);
                let doubanId = it.find('div').data('id');
                let title = it.find('.title').text();
                let rate = Number(it.find('.rate').text());
                let poster = it.find('img').attr('src');
                let type = '历史';

                links.push({
                    doubanId,
                    title,
                    rate,
                    poster,
                    type
                })
            });
 
        }
        return links;
    })
    browser.close();
    
    process.send({result});
    process.exit(0);

})()

