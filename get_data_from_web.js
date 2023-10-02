import puppeteer from "puppeteer";

//este script obtiene todo el contenido en etiqueta h1 y p de la web ingresada 
async function getDataFromWebPage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    const data = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let description = document.querySelector('p').innerText;
        return {
        title,
        description,
        }
});
    console.log(data);
    await browser.close();
}

getDataFromWebPage();