<template>
  <div>
    <div class="modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="alert alert-danger" v-if="errorMessage">
            {{ errorMessage }}
          </div>
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
                  v-model="email"
                  @input="OnValid"
                ></b-form-input>
              </b-input-group>
              <div v-if="errors.email">{{ errors.email }}</div>
            </b-form-group>

            <b-form-group
              class="label_name m-1"
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
                  v-model="password"
                  @input="OnValid"
                ></b-form-input>
              </b-input-group>
              <div v-if="errors.password">{{ errors.password }}</div>
            </b-form-group>

            <div class="d-flex justify-content-center m-1">
              <b-button
                ref="submit"
                type="submit"
                :disabled="errors.email || errors.password"
                >зареєструватися
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SignUpValidation from "../../services/SignUpValidation";
import TheLoader from "../TheLoader.vue";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      errorMessage: "",
      showLoading: false,
      success: false,
    };
  },
  components: {
    TheLoader,
  },
  methods: {
    ...mapActions("auth", {
      signup: "signup",
    }),
    async onSubmit() {
      this.showLoading = true;
      this.errorMessage = "";
      await this.signup({
        email: this.email,
        password: this.password,
      }).catch((error) => {
        switch (error) {
          case "EMAIL_EXISTS":
            this.errorMessage = "така електронна адреса вже існує";
            break;
          case "INVALID_EMAIL":
            this.errorMessage = "не вірна електронна адреса";
            break;
          default:
            return "Сталася помилка. Спробуйте, будь ласка, ще раз.";
        }
        console.log(this.errorMessage);
        this.showLoading = false;
      });
      this.showLoading = false;
      if (this.errorMessage === "") {
        this.$router.push("/user");
      }
    },
    onHidden() {
      // In this case, we return focus to the submit button
      // You may need to alter this based on your application requirements
      this.$refs.submit.focus();
    },
    onShown() {
      // Focus the dialog prompt
      this.$refs.dialog.focus();
    },
    OnValid() {
      let validation = new SignUpValidation(this.email, this.password);
      this.errors = validation.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
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
</style>
