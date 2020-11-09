var pagination = {
  props: {
    limitPage: {
      type: Number,
      default: 10
    }
  },
  data: () => ({
    page: 1,
    maxPage: 1
  }),
  watch: {
    //$route: "fetchData"
  },
  computed: {
    selectedPage: {
      get() {
        return this.page;
      },
      set(item) {
        if (item !== this.page) {
          this.page = item;
          this.fetchData(item);
        }
        /*if (item !== this.page) {
          this.page = item;
          this.$router.push({
            name: this.$router.currentRoute.name,
            query: { page: this.page }
          });
        }*/
      }
    }
  }
};

export default pagination;
