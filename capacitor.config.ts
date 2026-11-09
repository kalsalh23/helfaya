import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.dalilhalfaya.app',
  appName: 'دليل حلفايا الطبي',
  webDir: '.',
  bundledWebAssets: false,
  server: {
    url: 'https://dalilshoran-main.vercel.app',
    cleartext: false,
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      releaseType: 'APK',
    },
  },
};

export default config;