<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected.name }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOptions(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-select",
  computed: {},
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    areOptionsVisible: false,
  }),
  methods: {
    selectOptions(option) {
      this.$emit("selectedOption", option),
      this.areOptionsVisible = false
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";

.v-select {
  width: 100%;
  max-width: 120px;
	border-radius: 4px 4px 0 0;
  p {
    text-align: center;
    cursor: pointer;
    padding: 8px;
		font-size: 12px;
		border-radius: 4px;
		color: $btn-gray;
  }
  .title,
	.options {
		background: $items-bg;
		border-radius: 4px;
  }
  .options {
    width: 100%;
    max-width: 120px;
    position: absolute;
    z-index: 5;
    :hover {
			transition: .2s ease-in-out;
      background: $btn-gray;
			color: $items-bg;
    }
  }
}
</style>