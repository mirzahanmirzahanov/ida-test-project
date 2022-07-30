<template>
  <div class="v-form">
    <div class="v-form__container">
      <form class="form" action="#" @submit.prevent>
        <label for="name">Наименование товара</label>
        <input
          class="input"
          id="name"
          type="text"
          placeholder="Введите наименование товара"
          v-model="this.productData.name"
        />
        <p class="error-message">Это поле является обязательным</p>
        <label class="none-point" for="description">Описание товара</label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="10"
          placeholder="Введите описание товара"
          v-model="this.productData.description"
        />
        <label for="image">Ссылка на изображение товара</label>
        <input
          class="input"
          id="image"
          type="text"
          placeholder="Введите ссылку"
          v-model="this.productData.image"
        />
        <p class="error-message">Это поле является обязательным</p>
        <label for="price">Цена товара</label>
        <input
          class="input input-price"
          id="price"
          type="text"
          placeholder="Введите цену"
          v-model="this.productData.price"
        />
        <p class="error-message">Это поле является обязательным</p>
        <button @click="addProducts()" type="submit">Добавить товар</button>
      </form>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  name: "v-form",
  props: {},
  data: () => ({
    productData: {
      name: "",
      description: "",
      image: "",
      price: "",
    },
  }),
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
    addProducts() {
      let form = document.querySelector(".form"),
        formInputs = document.querySelectorAll(".input"),
        inputPrice = document.querySelector(".input-price"),
        vm = this;

      //проверка валидации цены
      function validatePrice(price) {
        let re = /^[0-9\s]*$/;
        return re.test(String(price));
      }

      form.onsubmit = function () {
        let priceVal = inputPrice.value,
          //получение пустых инпутов
          emptyInputs = Array.from(formInputs).filter(
            (input) => input.value === ""
          );
        
        //проверка инпутов на пустоту
        formInputs.forEach(function (input) {
          if (input.value === "") {
            input.classList.add("error");
          } else {
            input.classList.remove("error");
          }
        });

        //проверка количества пустых инпутов
        if (emptyInputs.length !== 0) {
          return false;
        }

        //конечная проверка валидации цены
        if (!validatePrice(priceVal)) {
          inputPrice.classList.add("error");
          return false;
        } else {
          inputPrice.classList.remove("error");
          let product = { ...vm.productData };
          vm.GET_PRODUCTS(product);
        }
      };
    },
  },
};
</script>


<style lang="scss" scoped>
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
      // margin: 0 0 16px 0;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0);
      box-shadow: 2px 5px 5px #00000033;
      background: $items-bg;
      transition: 0.3s ease-in-out;
    }
    // input#price {
    //   margin: 0 0 24px 0;
    // }
    input.error {
      border-color: $red;
    }
    textarea#description {
      max-height: 108px;
      resize: none;
      margin: 0 0 20px 0;
    }
    button {
      padding: 10px 15px;
      border-radius: 10px;
      border: none;
      background-color: #00000022;
      color: $btn-gray;
      transition: 0.2s ease-in-out;
    }
    button:hover {
      background-color: $btn-green;
      color: #fff;
    }
    .error-message {
      color: $red;
      font-size: 12px;
      margin: 5px 0;
      opacity: 0;
      cursor: default;
      transition: 0.3s ease-in-out;
    }
    .error-visible {
      opacity: 1;
    }
  }
}
</style>

