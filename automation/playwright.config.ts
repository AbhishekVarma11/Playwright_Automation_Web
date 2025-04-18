import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig={
  testMatch:["tests/dragandDrop.ts"],
  use:{headless:false,screenshot:"on",video:"on"},
  retries:0,
  reporter:[["dot"],["json",{outputFile:"jsonReports/jsonReport.json"}],["html",{open:"never"}]]
};

export default config;
