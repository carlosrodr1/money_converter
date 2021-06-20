<template>
  <div id="app" style="background: #eee">
    <hero typeAlert="is-info" title="Conversor de moedas"/>

    <hr />

    <div class="container">
    <converter creditA="BRL" creditB="USD"/>      

      <section>
        <b-field>
          <b-select placeholder="Converter de" icon="currency-usd">
            <option value="1">Euro</option>
            <option value="2">Dólar</option>
          </b-select>
        </b-field>
      </section>
    </div>
  </div>
</template>

<style scoped>
.rounded {
  height: 30px;
  border-radius: 35px;
}
</style>
<script>
import Converter from './Converter/Converter.vue';

export default {
  components: {
    Converter
  },
};
</script>
