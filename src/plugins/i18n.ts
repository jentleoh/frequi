import Vue from 'vue';
import VueI18n from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'hello world',
      welcome: 'Welcome to the Bitsbee UI',
      sitetitle: 'Bitsbee 1.0',
      trade: 'Trade',
      dashboard: 'Dashboard',
      chart: 'Chart',
      logs: 'Logs',
      login: 'Login',
      offline: 'Offline',
      online: 'Online',
      logintitle: 'Login to your bot',
      botname: 'Bot Name',
      apiurl: 'API Url',
      username: 'Username',
      password: 'Password',
    },
  },
  ko: {
    message: {
      hello: '비츠비 월드',
      welcome: '비츠비에 온걸 환영합니다.',
      sitetitle: 'Bitsbee 1.0',
      trade: '거래하기',
      dashboard: '대시보드',
      chart: '차트',
      logs: '로그',
      login: '로그인',
      offline: '오프라인',
      online: '온라인',
      logintitle: '로그인 하기',
      botname: '봇 이름',
      apiurl: 'API 주소',
      username: '아이디',
      password: '비밀번호',
    },
  },
  ja: {
    message: {
      hello: 'こんにちは、世界',
    },
  },
};

Vue.use(VueI18n);

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'ko', // set locale
  messages, // set locale messages
})