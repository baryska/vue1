console.log("funguju");

new Vue({
  el: '#app',

  data: {
    jmeno: "Alík",
    vaha: 10,
    barva: "černá",
    vek: 7,
    cinnosti: ['běhání', 'kousání kostí', 'ležení na gauči'],
    akce: '...'
  },

  methods: {
    nakrmTrochu() {
      this.vaha += 2;
      this.akce = 'Napral jsem si břicho.';
    },

    nakrmHodne() {
      this.vaha += 5;
      this.akce = 'Jsem přejedený.'
    },

    vyvenci() {
      this.vaha -= 1
      this.akce = 'Vyběhal jsem se.'
    },

    zastekej() {
      this.akce = 'Haf, haf!'
    }
  }


});

// let mujVek = 25;
// // let coJsem;
// // if (mujVek > 18) {
// //   coJsem = "dospelak"
// // } else {
// //   coJsem = "mládě"
// // }
// let coJsem = mujVek > 18 ? "dospelák" : "mládě";