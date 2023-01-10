<template lang="">
  <div class="side-bar-menu">
    <div class="side-bar-logo">
      <img class="logo" src="/logo.png" />
    </div>
    <nav>
      <ul>
        <li
          v-for="option in menuOptions"
          class="nav-item bold clickable"
          @click="navigate(option)"
        >
          <img class="icon" :src="`/${option}.svg`" />
          <span class="capitalize"> {{ option }} </span>
        </li>
        <li class="nav-item bold clickable" @click="toogleDark">Dark Mode</li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { useDark, useToggle } from "@vueuse/core";
export default {
  data() {
    return {
      menuOptions: [
        "recipes",
        "restaurants",
        "ingredients",
        "profile",
        "logout",
      ],
    };
  },
  methods: {
    navigate(option) {
      const name = option.toLowerCase();
      //TODO: find out why push by name not working
      this.$router.push({ path: name });
    },
    toogleDark() {
      const isDark = useDark();
      console.log("isDark", isDark);
      useToggle(isDark);
    },
  },
};
</script>
<style scoped>
.side-bar-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: max(10%, 100px);
}
.side-bar-logo {
  display: grid;
  place-content: center;
  flex-basis: 15%;
}
nav {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
}
ul {
  margin: 0px;
  padding: 0px;
}
.logo {
  height: 50px;
  width: 50px;
}
.nav-item {
  padding: 1rem;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}
.nav-item:hover {
  background-color: var(--main-color);
}
</style>
