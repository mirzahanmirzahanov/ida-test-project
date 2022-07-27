<template>
  <div class="v-form" @submit.prevent>
    <div class="v-form__container">
      <form action="#">
        <label for="name">Наименование товара</label>
        <input
          id="name"
          type="text"
          placeholder="Введите наименование товара"
        />
        <label class="none-point" for="description">Описание товара</label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="10"
          placeholder="Введите описание товара"
        />
        <label for="link">Ссылка на изображение товара</label>
        <input 
          id="link" 
          type="text" 
          placeholder="Введите ссылку" 
        />
        <label for="price">Цена товара</label>
        <input 
          id="price" 
          type="text" 
          placeholder="Введите цену" 
        />
        <button type="submit">Добавить товар</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-form",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang="scss">
@import "@/assets/styles/scss/variables.scss";

.v-form__container {
  position: fixed;
  max-width: 330px;
  padding: 24px;
  border-radius: 4px;
  background: $items-bg;
  form {
    display: flex;
    flex-direction: column;
    label {
      display: inline;
      position: relative;
      margin: 0 0 5px 0;
      font-size: 14px;
      letter-spacing: -0.2px;
    }
    label::after {
      content: "";
      display: inline;
      position: absolute;
      width: 4px;
      height: 4px;
      background: $red;
      border-radius: 50%;
    }
    label.none-point::after {
      content: none;
    }
    input,
    textarea {
      padding: 10px 15px;
      margin: 0 0 16px 0;
      border-radius: 4px;
      border: none;
      box-shadow: 2px 5px 5px #00000033;
      background: $items-bg;
    }
    input#price{
      margin: 0 0 24px 0;
    }
    textarea#description {
      max-height: 108px;
      resize: none;
    }
    button {
      padding: 10px 15px;
      border-radius: 10px;
      border: none;
      background-color: #00000022;
      color: $btn-gray;
      transition: .2s ease-in-out;
    }
    button:hover{
      background-color: $btn-green;
      color: #FFF;
    }
  }
}
</style>

