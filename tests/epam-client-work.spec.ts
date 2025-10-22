import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation', () => {
  test('should navigate to the Client Work page from the Services menu', async ({ page }) => {
    // Step 1: Navigate to the EPAM homepage
    await page.goto('https://www.epam.com/');
    
    // Step 2: Click the "Services" link in the header menu
    await page.getByRole('link', { name: 'Services' }).nth(1).click();
    
    // Step 3: Click the "Explore Our Client Work" link
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    
    // Step 4: Verify the "Client Work" text is visible on the page
    const clientWorkHeader = page.getByText('Client Work');
    await expect(clientWorkHeader).toBeVisible();
  });
});