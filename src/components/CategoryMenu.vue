<template>
  <div class="category-menu">
    <ul>
      <li
        v-for="category in categoriesList"
        :key="category.id"
        @click="onCategoryClick(category.id)"
        :class="{ active: isActive(category.id) }"
      >
        <component :is="category.icon" />
        <p>{{ category.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Pizza from "../assets/svg/pizza.svg";
import Burguers from "../assets/svg/food.svg";
import Fries from "../assets/svg/fries.svg";
import IceCream from "../assets/svg/ice-cream.svg";
import Drinks from "../assets/svg/drink.svg";

export default {
  name: "CategoryMenu",
  components: {
    Pizza,
    Burguers,
    Fries,
    IceCream,
    Drinks,
  },
  data() {
    return {
      categoriesList: [
        { label: "Pizza", icon: "Pizza", id: "pizza" },
        { label: "Burguers", icon: "Burguers", id: "burguers" },
        { label: "Batata", icon: "Fries", id: "fries" },
        { label: "Sobremesa", icon: "IceCream", id: "icecream" },
        { label: "Bebidas", icon: "Drinks", id: "drinks" },
      ],
      selectedCategory: ' '
    };
  },
    mounted() {
        this.onCategoryClick('pizza');
    },
  methods: {
    onCategoryClick(id) {
      this.selectedCategory = id;
      this.$store.dispatch('changeCategory', id);
    },
    isActive(id) {
      return this.selectedCategory === id;
    },
  },
};
</script>

<style lang="less" scoped>
.category-menu {
  width: 130px;
  height: 100vh;
  background: @light-orange;

  display: flex;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;

      p {
        margin-bottom: 0px;
        font-weight: 500;
        font-size: 14px;
        color: @light-grey;
      }
      svg {
        path {
          fill: @grey;
        }
      }
      &.active {
        background: @orange;
        border-radius: 8px;

        p {
          color: black;
        }
        svg {
          path {
            fill: black;
          }
        }
      }
    }
  }
}
</style>
