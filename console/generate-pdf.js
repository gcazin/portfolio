import puppeteer from 'puppeteer'

;(async () => {
    console.info('Commencement de la génération...')
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 })
    await page.goto('http://localhost:5173/cv', { waitUntil: 'networkidle2' })
    await page.$eval('nav', (el) => el.remove())
    await page.waitForSelector('#cv')
    const overlay = await page.$('#cv')
    console.log("Génération de l'image...")
    const screenshot = await overlay.screenshot({
        path: '../public/images/misc/cv.webp',
        type: 'webp',
    })
    await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
          }
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        </style>
      </head>
      <body>
        <img src="data:img/webp;base64,${screenshot.toString('base64')}">
      </body>
    </html>
  `)
    console.log('Génération du PDF...')
    await page.pdf({
        path: '../public/images/misc/cv-guillaume-cazin.pdf',
        format: 'A4',
        printBackground: true,
        height: '100%',
        width: '100%',
    })
    await browser.close()

    console.log('Génération du PDF terminé.')
})()
