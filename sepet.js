window.addEventListener('load', () => {

  window.vue = new Vue({
    el: '#sepetim',
    name: 'Sepet',
    data: {
      yukleme: true,
      sepet: [],
      bekleme: []
    },
    methods: {
      sepetsil(index) {
        this.sepet.splice(index, 1);
      },
      beklemeyeal(index) {
        const item = this.sepet.splice(index, 1);
        this.bekleme.push(item[0]);
      },
      beklemedensil(index) {
        this.bekleme.splice(index, 1);
      },
      sepetekle(index) {
        const item = this.bekleme.splice(index, 1);
        this.sepet.push(item[0]);
      }
    },
    created() {
      fetch('./data.json')
        .then((res) => { return res.json() })
        .then((res) => {
          this.yukleme = false;
          this.sepet = res.sepet;
          this.bekleme = res.bekleme;
        })
    }
  })

});
