<template lang="">
  <div
    class="side-bar-menu md:menu-hidden"
    :class="{ 'menu-hidden': !isVisible }"
  >
    <div class="side-bar-logo flex justify-center gap-2 items-center">
      <img class="icon clickable" @click="toggleSideBar()" src="/menu.svg" />
      <img
        class="logo clickable"
        v-if="isVisible"
        @click="navigate('home')"
        src="/logo.png"
      />
    </div>
    <nav>
      <div class="side-menu-content lg:w-40 md:w-30">
        <ul>
          <li
            v-for="option in menuOptions"
            class="nav-item bold clickable"
            @click="navigate(option)"
          >
            <img class="icon" :src="`/${option}.svg`" />
            <span v-if="isVisible" class="menu-option-name capitalize">
              {{ option }}
            </span>
          </li>
          <!--           <li class="nav-item bold clickable" @click="toogleDark">Dark Mode</li>
 -->
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { useDark, useToggle } from "@vueuse/core";
export default {
  data() {
    return {
      isVisible: true,
      menuOptions: ["recipes", "restaurants", "ingredients", "login", "logout"],
    };
  },
  methods: {
    toggleSideBar() {
      console.log("hello");
      this.isVisible = !this.isVisible;
    },
    navigate(option) {
      const name = option.toLowerCase();
      this.$router.push({ name });
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
  width: 10rem;
  background-color: var(--secondary-color);
}

.side-bar-menu.menu-hidden {
  flex-basis: max(5%, 50px);
}

.side-bar-logo {
  flex-basis: 15%;
  border-bottom: 2px solid var(--main-color);
}

nav {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

@media screen and (max-width: 800px) {
  .side-bar-menu {
    flex-basis: min(4rem, 15%);
  }

  .menu-option-name {
    display: none;
  }

  .logo {
    display: none;
  }
}
</style>
