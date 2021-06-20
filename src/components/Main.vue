<template>
  <div id="app" style="background: #eee">
    <hero typeAlert="is-info" />
    <hr />
    <div class="container">
      <div class="columns is-gapless">
        <div class="column" style="margin-right: 5px">
          <form class="box">
            <div class="field">
              <img
                class="rounded"
                src="https://imagepng.org/wp-content/uploads/2017/05/bandeira-dos-estados-unidos-eua-768x404.png"
                width="30px"
              />
              <label class="label">Valor</label>
              <div class="control">
                <input class="input" type="number" value="0" />
              </div>
            </div>
          </form>
        </div>
        <div class="column">
          <form class="box">
            <div class="field">
              <img
                class="rounded"
                src="https://imagepng.org/wp-content/uploads/2017/05/bandeira-dos-estados-unidos-eua-768x404.png"
                width="30px"
              />
              <label class="label">Valor</label>
              <div class="control">
                <input class="input" type="number" value="0" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <section>
        <b-field>
          <b-select placeholder="Country" icon="currency-usd">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
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
export default {
  data: () => ({
    currencys: [""],
  }),
};
</script>
