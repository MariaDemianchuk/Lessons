import Validation from "./Validation";

export default class SignUpValidation {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  checkValidations() {
    let errors = [];
    if (!Validation.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }
    if (!Validation.minLength(this.password, 6)) {
      errors["password"] = "password should be of 6 characters";
    }
    return errors;
  }
}
