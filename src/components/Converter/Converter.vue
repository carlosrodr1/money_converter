<template>
  <div>
    <section>
      <b-field>
        <b-select
          @input="changeCurrency"
          placeholder="Converter de outras moedas"
          icon="currency-usd"
        >
          <option value="EUR">Euro</option>
          <option value="USD">Dólar Americano</option>
        </b-select>
      </b-field>
    </section>
    <div class="columns is-gapless" style="margin: 5px">
      <div class="column">
        <form class="box">
          <div class="field">
            <img
              class="rounded"
              :src="'./assets/' + creditA + '.png'"
              width="30px"
            />
            <label class="label">Valor</label>
            <div class="control">
              <input
                class="input"
                v-model="valueA"
                v-on:keydown="getCurrencyValue"
                type="number"
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
            <img
              class="rounded"
              :src="'./assets/' + creditB + '.png'"
              width="30px"
            />
            <label class="label">Valor</label>
            <div class="control">
              <input class="input" v-model="valueB" type="number" />
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
      default: "BRL",
    },
    creditB: {
      type: String,
      default: "USD",
    },
  },

  data: () => ({
    valueA: 0,
    valueB: 0,
  }),

  methods: {
    getCurrencyValue() {
      const creditA = this.creditA;
      const creditB = this.creditB;
      let currency = `${this.creditA}_${this.creditB}`;
      let url = `https://free.currconv.com/api/v7/convert?apiKey=115fb233fc92a88e2935&q=${currency}&compact=115fb233fc92a88e2935`;

      this.$http.get(url).then((response) => {
        let cotation = response.data.results[currency].val;
        let symbols = [];
        symbols["USD"] = "$";
        symbols["BRL"] = "R$";
        symbols["EUR"] = "€";

        console.log(symbols);

        this.valueB = (cotation * this.valueA).toFixed(2);

        this.$emit("changeValue", {
          newValue: `${symbols[creditA]}1,00 hoje equivale ${
            symbols[creditB]
          }${cotation.toFixed(2)} `,
        });
      });
    },

    changeCurrency(e) {
      console.log("f");
      this.$emit("changeCurrency", e);
    },
    switchCredits() {
      const saved = this.valueA;

      this.valueA = this.valueB;
      this.valueB = saved;

      this.$emit("toggleCurrency");
    },
  },
};
</script>
