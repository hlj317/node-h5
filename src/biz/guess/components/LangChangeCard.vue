<template>
  <div class="common">
    <ul class="items">
      <li v-for="(item,index) in info"
          :key="index">{{item}}</li>
    </ul>
    <button @click="changeLocale('zh')">切换成中文</button>
    <button @click="changeLocale('en')">切换成英文</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    info () {
      return [
        this.$t('info.name'),
        this.$t('info.age'),
        this.$t('info.gender'),
        this.$t('info.hobbies')
      ];
    }
  },
  methods: {
    changeLocale (lang) {
      if (lang === "zh") {
        localStorage.setItem("locale", "zh");
        this.$i18n.locale = localStorage.getItem("locale");

        // this.reload();
      } else if (lang === "en") {
        localStorage.setItem("locale", "en");
        this.$i18n.locale = localStorage.getItem("locale");

        // this.reload();
      }
    }
  }
}
</script>
