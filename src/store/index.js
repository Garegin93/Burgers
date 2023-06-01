import { createStore } from "vuex";

export default createStore({
  state: {
    burgers: [
      {
        name: "Бургеры",
        image: "burger-meet-bomb",
        title: "Мясная бомба",
        weight: "520г",
        price: "689",
        id: "meet-bomb",
        bread: "Пшеничная булочка",
        meat: "Котлета из говядины",
        onion: "Красный лук",
        salad: "Листья салата",
        sauce: "Соус горчичный",
        kilocalories: 430,
        quantity: 1,
      },
      {
        name: "Бургеры",
        image: "burger-super-cheese",
        title: "Супер сырный",
        weight: "512г",
        price: "550",
        id: "super-cheese",
        bread: "",
        meat: "",
        onion: "",
        salad: "",
        sauce: "",
        kilocalories: "",
        quantity: 1,
      },
      {
        name: "Бургеры",
        image: "burger-satisfying",
        title: "Сытный",
        weight: "580г",
        price: "639",
        id: "burger-satisfying",
        bread: "",
        meat: "",
        onion: "",
        salad: "",
        sauce: "",
        kilocalories: "",
        quantity: 1,
      },
      {
        name: "Бургеры",
        image: "burger-heavy-blow",
        title: "Тяжелый удар",
        weight: "475г",
        price: "480",
        id: "heavy-blow",
        bread: "",
        meat: "",
        onion: "",
        salad: "",
        sauce: "",
        kilocalories: "",
        quantity: 1,
      },
      {
        name: "Бургеры",
        image: "burger-eternal-classic",
        title: "Вечная классика",
        weight: "450г",
        price: "450",
        id: "eternal-classic",
        bread: "",
        meat: "",
        onion: "",
        salad: "",
        sauce: "",
        kilocalories: "",
        quantity: 1,
      },
      {
        name: "Бургеры",
        image: "burger-italian",
        title: "Итальянский",
        weight: "510г",
        price: "560",
        id: "burger-italian",
        bread: "",
        meat: "",
        onion: "",
        salad: "",
        sauce: "",
        kilocalories: "",
        quantity: 1,
      },
    ],
    snakes: [
      {
        name: "Закуски",
        image: "snakes-chips",
        title: "Начос",
        weight: "200г",
        price: "250",
        id: "snakes-chips",
        quantity: 1,
      },
      {
        name: "Закуски",
        image: "snakes-fries",
        title: "Картошка фри",
        weight: "180г",
        price: "245",
        id: "snakes-fries",
        quantity: 1,
      },
      {
        name: "Закуски",
        image: "snakes-onion-rings",
        title: "Луковые кольца",
        weight: "160г",
        price: "230",
        id: "onion-rings",
        quantity: 1,
      },
    ],
    hotDogs: [
      {
        name: "Хот-доги",
        image: "hot-dog-homemade",
        title: "Домашний хот-дог",
        weight: "250г",
        price: "290",
        id: "hot-dog-homemade",
        quantity: 1,
      },
      {
        name: "Хот-доги",
        image: "hot-dog-spicy",
        title: "Жгучий хот-дог",
        weight: "245г",
        price: "239",
        id: "hot-dog-spicy",
        quantity: 1,
      },
      {
        name: "Хот-доги",
        image: "hot-dog-classic",
        title: "Классический хот-дог",
        weight: "215г",
        price: "220",
        id: "hot-dog-classic",
        quantity: 1,
      },
    ],
    combos: [],
    burritos: [],
    pizzas: [],
    woks: [],
    desserts: [],
    sauces: [],
    cart: [],
    menu: [
      { name: "Бургеры", src: "burger-icon" },
      { name: "Закуски", src: "snack-icon" },
      { name: "Хот-доги", src: "hot-dog-icon" },
      { name: "Комбо", src: "combo-icon" },
      { name: "Шаурма", src: "burrito-icon" },
      { name: "Пицца", src: "pizza-icon" },
      { name: "Вок", src: "wok-icon" },
      { name: "Десерты", src: "doughnut-icon" },
      { name: "Соусы", src: "sauces-icon" },
    ],
  },
  getters: {
    MENU(state) {
      return state.menu;
    },
    CART(state) {
      return state.cart;
    },
    BURGERS(state) {
      return state.burgers;
    },
    SNAKES(state) {
      return state.snakes;
    },
    HOT_DOGS(state) {
      return state.hotDogs;
    },
    COMBOS(state) {
      return state.combos;
    },
    BURRITOS(state) {
      return state.burritos;
    },
    PIZZAS(state) {
      return state.pizzas;
    },
    WOKS(state) {
      return state.woks;
    },
    DESSERTS(state) {
      return state.desserts;
    },
    SAUCES(state) {
      return state.sauces;
    },
  },
  mutations: {
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map((item) => {
          if (item.id == product.id) {
            isProductExist = true;
            item.quantity++;
          }
        });
        if (!isProductExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    INCREMENT_CART: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT_CART: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT_CART", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT_CART", index);
    },
  },
});
