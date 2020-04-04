var pagination = {
  data: () => ({
    page: 1,
    maxPage: 1,
    limitPage: 12
  }),
  computed: {
    selectedPage: {
      get () {
        return this.page
      },
      set (item) {
        if (item !== this.page) {
          this.page = item
          this.fetchData(item)
        }
      }
    }
  }
}

export default pagination
