import { test, expect } from "@playwright/test";

test("Demo user can login and access plans", async ({ page }) => {
  await page.goto("/login");
  await page.fill('[data-testid="email-input"]', "test@example.com");
  await page.fill('[data-testid="password-input"]', "123456");
  await page.click('[data-testid="submit-button"]');

  await page.waitForURL("/");

  await page.click("text=Plans");
  await expect(page).toHaveURL(/\/plans$/);
});

test("❌ Login with incorrect credentials shows error", async ({ page }) => {
  await page.goto("/login");
  await page.fill('[data-testid="email-input"]', "fake@user.com");
  await page.fill('[data-testid="password-input"]', "wrongpass");
  await page.click('[data-testid="submit-button"]');
  await expect(page.locator("text=Credenciales incorrectas")).toBeVisible();
});
