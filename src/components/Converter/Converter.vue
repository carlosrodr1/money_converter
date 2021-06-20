<template>
  <div>
    <div class="columns is-gapless">
      <div class="column" style="margin-right: 5px">
        <form class="box">
          <div class="field">
            <img class="rounded" :src="creditA.img" width="30px" />
            <label class="label">Valor</label>
            <div class="control">
              <input
                class="input"
                v-model="creditA.value"
                type="number"
                value="0"
              />
            </div>
          </div>
        </form>
      </div>
      <svg
        v-on:click="switchCredits"
        style="width: 44px; height: 44px; margin-top: 60px; cursor: pointer"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"
        />
      </svg>
      <div class="column">
        <form class="box">
          <div class="field">
            <img class="rounded" :src="creditB.img" width="30px" />
            <label class="label">Valor</label>
            <div class="control">
              <input
                class="input"
                v-model="creditB.value"
                type="number"
                value="0"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
/*let url =
  "https://free.currconv.com/api/v7/convert?apiKey=115fb233fc92a88e2935&q=USD_EUR&compact=115fb233fc92a88e2935";
*/
export default {
    props: {
        creditA: {
            type: String,
            default: "BRL"
        },
        creditB: {
            type: String,
            default: "BRL"
        }
    },
  data: () => ({
    creditA: {
      value: 0,
      name: "Brasil (R$)",
      img: "assets/brl.png",
    },

    creditB: {
      value: 0,
      name: "Dólar ($)",
      img: "assets/eua.png",
    },
  }),
  methods: {
    getCurrencyValue() {
      this.$http
        .get(
          "https://free.currconv.com/api/v7/convert?apiKey=115fb233fc92a88e2935&q=USD_EUR&compact=115fb233fc92a88e2935"
        )
        .then((response) => {
          console.log(response.data);
        });
    },
    switchCredits() {
      const saved = { ...this.creditB };

      this.creditB = this.creditA;
      this.creditA = saved;
      this.getCurrencyValue();
    },
  },
};
</script>
