// @ts-check
import { test, expect } from '@playwright/test';

test('Homepage', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Test Get Started', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Test Star', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Click the star button.
  await page.getByRole('link', { name: 'Star' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'playwright' })).toBeVisible();

});

 


