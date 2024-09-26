// get the colors from api endpoint via axios
const BASE_URL = "https://geenen-it-systeme.de/api/colors";

const app = Vue.createApp({
  data() {
    return {
      search: "",
      colors: [],
    };
  },
  methods: {
    async getColors() {
      axios
        .get(BASE_URL)
        .then((res) => (this.colors = res.data))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    filteredColors() {
      return this.colors.filter((color) => {
        return color.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    this.getColors();
  },
});

app.mount("#app");
