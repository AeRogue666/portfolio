<!-- App.vue -->
 <!-- <script>
export default {
  data() {
    return {
      ApiURL: '',
      Language: '',
      PortfolioTitle: 'Portfolio d\'AurelDev',
      routerLink: [],
      routerLinkContent: [],
    }
  },
  created() {
    this.getLanguage(), 
    this.getApiURL()
  },
  methods: {
    headerAnimation() {
      anime({
        targets: document.querySelectorAll(".pathHeader"),
        loop: false,
        direction: "alternate",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 700,
        delay: (el, i) => i * 500,
      });
    },
    getLanguage() {
      this.Language = localStorage.getItem('languageCode');
      if(!this.Language) {
        this.Language = 'fr-FR';
        localStorage.setItem('LanguageCode', this.Language);
      }
      routerLinkContentList.filter((content) => content.code == this.Language).map((content) => content.data.map((data) => {return this.routerLink.push(data), this.routerLinkContent.push(data)}));
    },
    getApiURL() {
      this.ApiURL = import.meta.env.VITE_API_URL;
    }
  },
};
</script> -->
