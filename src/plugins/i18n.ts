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
      ablebot: 'Available bots',
      addbot: 'Add new bot',
      multipanetitle: 'Multi Pane',
      paircombi: 'Pairs combined',
      general: 'General',
      balance: 'Blance',
      performance: 'Performance',
      dailystatus: 'Daily Status',
      pairlist: 'Pairlist',
      pairlocks: 'Pair Locks',
      opentrades: 'Open Trades',
      closedtrades: 'Closed Trades',
      tradingchart: 'Chart',
      botcomparison: 'Bot comparision',
      tradeslog: 'Trades Log',
      settings: 'Settings',
      layoutlock: 'Layout Lock',
      resetlayout: 'Reset Layout',
      signout: 'Sign Out',
      dailyprofitcombi: 'Daily Profit Combined',
      dailyprofitcombi2: 'Daily Profit ',
      cumulativeprofit: 'Cumulative Profit',
    },
  },
  ko: {
    message: {
      hello: '비츠비 월드',
      welcome: '비츠비에 온걸 환영합니다.',
      sitetitle: 'Bitsbee 1.0',
      trade: '대시보드',
      dashboard: '알림판',
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
      ablebot: '활성화 봇',
      addbot: '봇 추가',
      multipanetitle: '대시보드',
      paircombi: '가능페어',
      general: '일반',
      balance: '잔고',
      performance: '매매기록',
      dailystatus: '일별수익',
      pairlist: '페어리스트',
      pairlocks: '페어금지',
      opentrades: '활성화 거래',
      closedtrades: '종료된 거래',
      tradingchart: '차트',
      botcomparison: '봇 통계',
      tradeslog: '거래 기록',
      settings: '셋팅',
      layoutlock: '레이아웃 고정',
      resetlayout: '레이아웃 리셋',
      signout: '로그아웃',
      dailyprofitcombi: '일별수익 합계',
      dailyprofitcombi2: '일별수익 ',
      cumulativeprofit: '누적수익'
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