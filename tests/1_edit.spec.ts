
import { test, expect } from '@playwright/test';


test.use({
    browserName: 'chromium',
    channel: 'chrome' // PlaywrightでChromeを使用するように指定
  });


  test('タスクをフォームを入力して出力を確認', async ({ page }) => {

      await page.goto('https://hello-typescript-8a1d9.web.app/Example');  
        
      await page.fill('input','test');
      await page.click('button.task-btn');
      const lastSpan = page.locator('span').nth(3);  
      await expect(lastSpan).toHaveText('test');

      const lastBtn = page.locator('button.comp-btn').nth(3);
      await lastBtn.click();
      await expect(lastSpan).toHaveCount(0); 

  });



