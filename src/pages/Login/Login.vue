<template>
  <div class="login-wrapper">
    <div class="login-container">
      <span class="title bold">Login</span>
      <Input class="text-left" label="name" placeholder="name"></Input>
      <Input
        label="password"
        placeholder="password"
        type="password"
        width="50%"
      ></Input>
      <Button text="Login" />
      <div class="social-logins">
        <div class="social-login-item clickable" @click="logingWithGoogle">
          <img class="icon-large" src="/google-btn.svg" />
        </div>
        <div class="social-login-item clickable">
          <img class="icon-large" src="/facebook-btn.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../../components/material/Button.vue";
import Input from "../../components/material/Input.vue";
import { googleLogin } from "../../services/AuthService";

export default {
  data() {
    return {};
  },
  methods: {
    logingWithGoogle() {
      console.log(this.$auth);
      googleLogin(this.$auth);
    },
  },
  components: { Input, Button },
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: center;
}

.title {
  text-align: left;
}

.social-logins {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-login-item {
  padding: 1rem;
}
</style>
