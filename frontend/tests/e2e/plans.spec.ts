import { test, expect } from "@playwright/test";

test("Plans page loads correctly after login", async ({ page }) => {
  await page.goto("/login");
  await page.fill('[data-testid="email-input"]', "test@example.com");
  await page.fill('[data-testid="password-input"]', "123456");
  await page.click('[data-testid="submit-button"]');
  await page.click("text=Plans");

  await expect(page.locator("text=Plans")).toBeVisible();
});
