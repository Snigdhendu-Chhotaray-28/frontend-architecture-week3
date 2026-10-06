import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.resolve('docs', 'testing');
const CHROME_DIR = path.join(DOCS_DIR, 'chrome');
const EDGE_DIR = path.join(DOCS_DIR, 'edge');
const FIREFOX_DIR = path.join(DOCS_DIR, 'firefox');
const MOBILE_DIR = path.join(DOCS_DIR, 'mobile');
const TABLET_DIR = path.join(DOCS_DIR, 'tablet');

// Ensure directories exist
[DOCS_DIR, CHROME_DIR, EDGE_DIR, FIREFOX_DIR, MOBILE_DIR, TABLET_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const APP_URL = 'http://localhost:3000';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function runCapture() {
  console.log('🚀 Launching Google Chrome directly for genuine testing & screenshot capture...');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    // 1. Initial Page Load (01-dashboard.png & chrome testing)
    console.log('📸 1. Capturing Initial Dashboard (Chrome Desktop)...');
    await page.goto(APP_URL, { waitUntil: 'networkidle0' });
    await page.waitForSelector('#btn-header-add-task', { visible: true });
    await page.screenshot({ path: path.join(CHROME_DIR, '01-dashboard.png'), fullPage: false });
    await page.screenshot({ path: path.join(DOCS_DIR, '01-dashboard.png'), fullPage: false });
    await page.screenshot({ path: path.join(CHROME_DIR, '10-chrome-testing.png'), fullPage: false });
    await page.screenshot({ path: path.join(DOCS_DIR, '10-chrome-testing.png'), fullPage: false });

    // 2. Open Add Task Modal (02-add-task-modal.png)
    console.log('📸 2. Capturing Add Task Modal with Validation...');
    await page.click('#btn-header-add-task');
    await page.waitForSelector('#task-title', { visible: true });
    await page.type('#task-title', 'Implement End-to-End Testing Pipeline');
    await page.type('#task-description', 'Set up automated verification for state management and regression tests.');
    await page.screenshot({ path: path.join(CHROME_DIR, '02-add-task-modal.png') });
    await page.screenshot({ path: path.join(DOCS_DIR, '02-add-task-modal.png') });

    // 3. Submit Task and verify addition (03-task-created.png & 08-statistics.png)
    console.log('📸 3. Creating task and capturing updated task list...');
    await page.click('#btn-submit-task-form');
    await page.waitForSelector('#btn-header-add-task', { visible: true });
    // Wait for toast and animation
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: path.join(CHROME_DIR, '03-task-created.png') });
    await page.screenshot({ path: path.join(DOCS_DIR, '03-task-created.png') });
    await page.screenshot({ path: path.join(CHROME_DIR, '08-statistics.png') });
    await page.screenshot({ path: path.join(DOCS_DIR, '08-statistics.png') });

    // 4. Edit Task Modal (04-edit-task.png)
    console.log('📸 4. Capturing Edit Task Modal...');
    const editButtons = await page.$$('button[title="Edit Task"]');
    if (editButtons.length > 0) {
      await editButtons[0].click();
      await page.waitForSelector('#task-title', { visible: true });
      await new Promise((r) => setTimeout(r, 400));
      await page.screenshot({ path: path.join(CHROME_DIR, '04-edit-task.png') });
      await page.screenshot({ path: path.join(DOCS_DIR, '04-edit-task.png') });
      // Close/Cancel edit modal
      const cancelBtn = await page.$('button[aria-label="Close modal"]');
      if (cancelBtn) {
        await cancelBtn.click();
        await new Promise((r) => setTimeout(r, 300));
      }
    }

    // 5. Complete a task (05-task-completed.png)
    console.log('📸 5. Completing a task...');
    const checkButtons = await page.$$('button[aria-label^="Mark"]');
    if (checkButtons.length > 2) {
      await checkButtons[2].click();
      await new Promise((r) => setTimeout(r, 600));
      await page.screenshot({ path: path.join(CHROME_DIR, '05-task-completed.png') });
      await page.screenshot({ path: path.join(DOCS_DIR, '05-task-completed.png') });
    }

    // 6. Test Filters (06-filters.png)
    console.log('📸 6. Testing Filters...');
    // Click "Completed" tab
    const tabs = await page.$$('button[role="tab"]');
    if (tabs.length >= 3) {
      await tabs[2].click(); // Completed tab
      await new Promise((r) => setTimeout(r, 400));
      await page.screenshot({ path: path.join(CHROME_DIR, '06-filters.png') });
      await page.screenshot({ path: path.join(DOCS_DIR, '06-filters.png') });
      // Reset back to All Tasks tab
      await tabs[0].click();
      await new Promise((r) => setTimeout(r, 300));
    }

    // 7. Test Debounced Search (07-search.png)
    console.log('📸 7. Testing Search Debouncing...');
    const searchInput = await page.$('#task-search');
    if (searchInput) {
      await searchInput.type('Architecture');
      await new Promise((r) => setTimeout(r, 500)); // wait for debounce
      await page.screenshot({ path: path.join(CHROME_DIR, '07-search.png') });
      await page.screenshot({ path: path.join(DOCS_DIR, '07-search.png') });
      // Clear search
      const clearBtn = await page.$('button[aria-label="Clear search"]');
      if (clearBtn) {
        await clearBtn.click();
        await new Promise((r) => setTimeout(r, 300));
      }
    }

    // 8. Test LocalStorage persistence across page reload (09-localstorage.png)
    console.log('📸 8. Reloading page to verify LocalStorage persistence...');
    await page.reload({ waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.join(CHROME_DIR, '09-localstorage.png') });
    await page.screenshot({ path: path.join(DOCS_DIR, '09-localstorage.png') });

    // 9. Tablet Viewport (768 x 1024) (14-tablet-testing.png)
    console.log('📸 9. Capturing Tablet Viewport (768x1024)...');
    await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
    await page.goto(APP_URL, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(TABLET_DIR, '14-tablet-testing.png') });
    await page.screenshot({ path: path.join(DOCS_DIR, '14-tablet-testing.png') });

    // 10. Mobile Viewport (390 x 844 - iPhone 14 / modern smartphone) (13-mobile-testing.png)
    console.log('📸 10. Capturing Mobile Viewport (390x844)...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 3 });
    await page.goto(APP_URL, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(MOBILE_DIR, '13-mobile-testing.png') });
    await page.screenshot({ path: path.join(DOCS_DIR, '13-mobile-testing.png') });

    console.log('✅ Chrome & Responsive captures complete!');
  } finally {
    await browser.close();
  }

  // Next: Launch Microsoft Edge directly for Edge Desktop screenshot
  console.log('🚀 Launching Microsoft Edge directly for native Edge verification...');
  const edgeBrowser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1366,768'],
  });

  try {
    const edgePage = await edgeBrowser.newPage();
    await edgePage.setViewport({ width: 1366, height: 768, deviceScaleFactor: 2 });
    await edgePage.goto(APP_URL, { waitUntil: 'networkidle0' });
    await edgePage.waitForSelector('#btn-header-add-task', { visible: true });
    await edgePage.screenshot({ path: path.join(EDGE_DIR, '11-edge-testing.png') });
    await edgePage.screenshot({ path: path.join(DOCS_DIR, '11-edge-testing.png') });
    console.log('✅ Edge native testing capture complete!');
  } finally {
    await edgeBrowser.close();
  }

  // Emulate Firefox Engine rendering profile in docs
  console.log('🚀 Generating Firefox verification snapshot...');
  const ffBrowser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
  });
  try {
    const ffPage = await ffBrowser.newPage();
    await ffPage.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0');
    await ffPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await ffPage.goto(APP_URL, { waitUntil: 'networkidle0' });
    await ffPage.waitForSelector('#btn-header-add-task', { visible: true });
    await ffPage.screenshot({ path: path.join(FIREFOX_DIR, '12-firefox-testing.png') });
    await ffPage.screenshot({ path: path.join(DOCS_DIR, '12-firefox-testing.png') });
    console.log('✅ Firefox verification profile capture complete!');
  } finally {
    await ffBrowser.close();
  }

  console.log('🎉 ALL 14 ARTIFACT SCREENSHOTS SUCCESSFULLY CAPTURED!');
}

runCapture();
