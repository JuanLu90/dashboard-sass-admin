import { test, expect } from "@playwright/test";

test("Public dashboard is accessible without login", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Active Users", { exact: true })).toBeVisible();
  await expect(page.locator("canvas")).toHaveCount(2);
});
