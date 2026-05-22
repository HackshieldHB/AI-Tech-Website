const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log('BROWSER LOG:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('BROWSER ERROR:', error.message);
  });
  
  try {
    await page.goto('http://localhost:3005', { waitUntil: 'networkidle0', timeout: 30000 });
    // Let it sit for a moment to capture hydration errors
    await new Promise(r => setTimeout(r, 2000));
  } catch (e) {
    console.error("Navigation failed:", e.message);
  } finally {
    await browser.close();
  }
})();
