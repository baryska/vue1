console.log("funguju");

new Vue({
  el: '#app',

  data: {
    ukoly: ['vyprat', 'dočíst knihu', 'nakoupit'],
  },

  methods: {
    addTask() {
      this.ukoly.push('učit se JavaScript')
    },

    removeTask(ukol) {
      this.ukoly.splice(ukol, 1)
    }
  }

});