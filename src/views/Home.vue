<template>
<div>
  <div class="home">
    <div class="container col-12 col-sm-6 col-lg-4">
      <bot-list />
    </div>
    <hr />
    <!-- <img alt="Freqtrade logo" src="../assets/freqtrade-logo.png" width="450px" class="my-5" /> -->
    <div alt="Freqtrade logo" class="logo-svg my-5 mx-auto" />
    <div>
      <h1>{{ $t("message.welcome") }}</h1>
    </div>
    <div>This page allows you to control your trading bot.</div>
    <br />
    <p>
      If you need any help, please refer to the
      <a href="https://www.freqtrade.io/en/latest/">Freqtrade Documentation</a>.
    </p>

    <p>Have fun - <i>wishes you the Freqtrade team</i></p>
  </div>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BotList from '@/components/BotList.vue';

@Component({
  components: { BotList },
})
export default class Home extends Vue {
  public langs!: string[] = ['en', 'ko']
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 1.5em;
}
.logo-svg {
  -webkit-mask: url(../assets/freqtrade-logo-mask.png) no-repeat center;
  -webkit-mask-size: 240px 240px;
  mask: url(../assets/freqtrade-logo-mask.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
