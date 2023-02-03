const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const crawling = async() => {
    const email = "ksl1580@naver.com"
    const password = "rlatmdfuf1!"
    const res = [];
    // headless: false일때 브라우져 크기 지정해주는 코드
    const browser = await puppeteer.launch({headless: false ,args: ['--window-size=1920,1080']});
    const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height : 1080,
    });
     // 해당 페이지 이동
    await page.goto("https://datalab.labangba.com/user/sign_in?redirect=%2Frecruit");

    // 로그인
    await page.type('input[name="email"]' , email)
    await page.type('input[name="password"]' , password)
    console.log("test")
    await page.evaluate(() => {document.querySelector('button.ButtonForm_first__lTZeg').click();})
    // 페이지 이동까지 대기
    await page.waitForNavigation()

    // 로그인 성공 여부
    if(page.url() === 'https://datalab.labangba.com/recruit'){
        console.log("로그인 성공")
        // 현재 페이지의 html정보를 로드
        const content = await page.content();
        const $ = cheerio.load(content);
        // console.log(content);
        const list = $("tbody > tr")
        // console.log(list.text())
        
        list.map((i, node) => {
            res[i] = {
                rank : $(node).find(".TableLabang_rank__36Hg_").text(),
                url : "https://datalab.labangba.com/" + $(node).find(".TableLabang_info__ok4zk").attr('href'),
                title : $(node).find(".TableLabang_info__ok4zk>:first-child").text(),
                subtitle : $(node).find(".TableLabang_info__ok4zk>:nth-child(2)").text(),
                category : $(node).find(".TableLabang_category__BYC4U").text(),
                day : $(node).find(".TableLabang_dts__bvd1d>:first-child").text(),
                hour : $(node).find(".TableLabang_dts__bvd1d>:nth-child(2)").text(),
                visit : $(node).find(".TableLabang_visit_cnt__z7N5_").text(),
                salesCnt : $(node).find(".TableLabang_sales_cnt__EslCX").text(),
                salesAmt : $(node).find(".TableLabang_default__3oiUi").text(),
                count : $(node).find(".TableLabang_item_cnt__sRPQf").text(),
            }
            console.log(res);
            // console.log(res.category)
        });
        await browser.close();  
        return res;
    }else{
        console.log("login 실패")
        await browser.close();
    }
    crawling();    
    }

module.exports = crawling();