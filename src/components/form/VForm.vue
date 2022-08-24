<template>
  <div class="v-form">
    <h1>Добавить товар</h1>
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
        <label for="price">Цена товара</label>
        <input
          class="input input-price"
          id="price"
          type="text"
          placeholder="Введите цену"
          v-model="this.productData.price"
        />
        <button class="btn" id="btn" @click="addProducts()" type="submit">
          Добавить товар
        </button>
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
    isValidData: false,
  }),
  computed: {
    ...mapGetters(["PRODUCTS"]),
    isValidation() {
      let btn = document.getElementById("btn");
      if ((this.isValidData = true)) {
        btn.classList.add("btn-success");
        setTimeout(() => {
          btn.classList.remove("btn-success");
        }, 300),
          (this.isValidData = false);
        console.log(this.isValidData);
      }
    },
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
          vm.isValidData = true;
          inputPrice.classList.remove("error");
          let product = { ...vm.productData };
          vm.GET_PRODUCTS(product);
          vm.isValidation;
        }
      };
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";


.v-form {

  h1 {
    margin: -60px 0 20px 0;
  }
  
  &__container {
    position: fixed;
    max-width: 330px;
    padding: 24px;
    border-radius: 4px;
    background: $items-bg;

    form {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
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
        border-radius: 4px;
        border: 1px solid #ffffff00;
        -webkit-box-shadow: 2px 5px 5px #00000033;
                box-shadow: 2px 5px 5px #00000033;
        background: $items-bg;
        -webkit-transition: 0.3s ease-in-out;
        -o-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
        margin: 0 0 20px 0;
        font-size: 14px;
      }

      .input-price {
        margin: 0 0 30px 0;
      }

      input.error {
        border-color: $red;
      }

      textarea#description {
        max-height: 108px;
        resize: none;
      }

      .btn {
        padding: 10px 15px;
        border-radius: 10px;
        border: none;
        background-color: #00000022;
        color: $btn-gray;
        -webkit-transition: 0.2s ease-in-out;
        -o-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
      }

      .btn-success {
        background-color: $btn-green;
        color: #fff;
      }
    }
  }
}

@media (max-width: 720px) {

  .v-form {

    h1 {
      font-size: 22px;
      margin: -50px 0 25px 0;
    }

    &__container {
      position: relative;
    }
  }
}
</style>

