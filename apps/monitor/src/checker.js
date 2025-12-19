// Logic for DOM checking using Playwright
// separating the check logic from the main job runner

async function checkPage(page, url, selector) {
  await page.goto(url);
  const element = await page.locator(selector);
  // ... extraction logic
  return await element.innerText();
}

module.exports = { checkPage };
