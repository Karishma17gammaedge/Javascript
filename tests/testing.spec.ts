import { test, expect } from '@playwright/test';

test.describe('group', {
  tag: '@report',
}, () => {
  test('test header', async ({ page }) => {
    await page.goto("https://javascript.info/") 

    await expect(page).toHaveTitle('/The Modern JavaScript Tutorial/')
   
  });

  test('test full report', async ({ page }) => {
  
  });
});

// page object model

// test('successful login with valid credentials', async ({ page }) => {
//   // await page.goto();
//   // await page.login('testuser@example.com', 'Test1234!');
//   // await page.assertLoggedIn();
// });
