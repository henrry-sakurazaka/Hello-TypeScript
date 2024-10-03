import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',  
    timeout: 30000,  
    retries: 1,  
    use: {
      headless: true,  // ヘッドレスモードで実行（表示なし）
      viewport: { width: 1280, height: 720 },  // ビューポートの設定
      actionTimeout: 10000,  // アクションごとのタイムアウト
      ignoreHTTPSErrors: true,  // HTTPSエラーを無視
      video: 'retain-on-failure',  // テスト失敗時にビデオ記録を保持
    },
  });
  