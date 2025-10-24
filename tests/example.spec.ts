import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// test('has title', {
//     // {tag: '@fast',}
//      annotation: {
//     type: 'issue',
//     description: 'https://github.com/microsoft/playwright/issues/23180',
//   }},
    
// async ({ page }) => {
//   await page.goto('http://localhost:5173/',{ waitUntil: 'networkidle' });

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/raectproject/);

//   await page.getByLabel('User Name').fill('Karishma');
//   await expect(page.getByLabel('User Name')).toHaveValue("Karishma")



//   const locator = page.getByRole('button',{name:'learn more'});
//    await locator.click();

//   const link = page.locator('a#ink-navigation');
//   await expect(link).toBeDisabled()
// });


// test('skip this test', async ({ page, browserName }) => {
//   test.skip(browserName === 'webkit', 'Still working on it');
// });

// test.skip(({ browserName }) => browserName === 'webkit', 'Still working on it');



