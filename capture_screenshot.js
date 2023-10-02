import puppeteer from "puppeteer";

//este script toma una caputa de la web ingresada
async function captureScreenshot() {
    const browser = await puppeteer.launch({
    headless: 'new'
});
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    await page.screenshot({path: 'example.png'});
    await browser.close();
}

captureScreenshot();