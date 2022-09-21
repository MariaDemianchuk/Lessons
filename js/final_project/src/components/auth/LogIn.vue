<template>
  <div>
    <div class="modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="alert alert-danger" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <div class="modal-content">
          <b-form
            class="modal_form position-relative p-3"
            @submit.prevent="onSubmit"
          >
            <TheLoader v-if="showLoading" />
            <div class="btn_close">
              <button
                @click="close"
                type="button"
                class="btn-close btn-close-white"
                aria-label="Close"
              ></button>
            </div>

            <b-form-group
              class="label_name"
              label="Електронна адреса"
              label-for="form-mail"
              label-cols-lg="8"
            >
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  id="form-email"
                  type="email"
                  v-model.trim="email"
                  @input="OnValid"
                ></b-form-input>
              </b-input-group>
              <div v-if="errors.email">{{ errors.email }}</div>
            </b-form-group>

            <b-form-group
              class="label_name"
              label="Пароль"
              label-for="form-name"
              label-cols-lg="2"
            >
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="key-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  id="form-name"
                  v-model.trim="password"
                  @input="OnValid"
                ></b-form-input>
              </b-input-group>
              <div v-if="errors.password">{{ errors.password }}</div>
            </b-form-group>

            <div class="d-flex justify-content-center m-3">
              <b-button
                ref="submit"
                type="submit"
                :disabled="errors.email || errors.password"
                >Увійти</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheLoader from "../TheLoader.vue";
import SignUpValidation from "../../services/SignUpValidation";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      showLoading: false,
      errorMessage: "",
    };
  },
  components: {
    TheLoader,
  },
  methods: {
    ...mapActions("auth", {
      login: "login",
    }),
    OnValid() {
      let validation = new SignUpValidation(this.email, this.password);
      this.errors = validation.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
    },
    async onSubmit() {
      this.showLoading = true;
      await this.login({
        email: this.email,
        password: this.password,
      }).catch((error) => {
        switch (error) {
          case "EMAIL_NOT_FOUND":
            this.errorMessage =
              "не вірна електронна пошта або користувач не зареєстрований";
            break;
          case "INVALID_PASSWORD":
            this.errorMessage = "не вірний пароль";
            break;
          case "INVALID_EMAIL":
            this.errorMessage = "введіть електронну пошту";
            break;
          default:
            return "Сталася помилка. Спробуйте, будь ласка, ще раз.";
        }
        console.log(this.errorMessage);
        this.showLoading = false;
      });
      this.showLoading = false;
      this.$router.push("/user");
    },
    onShown() {
      // Focus the dialog prompt
      this.$refs.dialog.focus();
    },
    onHidden() {
      // In this case, we return focus to the submit button
      // You may need to alter this based on your application requirements
      this.$refs.submit.focus();
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.modal_form {
  z-index: 2;
  background-color: rgb(67, 65, 65);
  width: 100%;
}
.modal {
  display: block;
  background-color: rgba(33, 31, 31, 0.95);
}
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: 10px;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.label_name {
  color: white;
  width: 100%;
}
.btn_close {
  display: flex;
  justify-content: end;
}
.alert-danger {
  z-index: 13;
  position: absolute;
  width: 100%;
  top: 26%;
}
</style>
