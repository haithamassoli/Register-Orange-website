const email = document.getElementById("emailRec");
const number = document.getElementById("numberRec");
const password = document.getElementById("passwordRec");
const checkbox = document.getElementById("checkboxRec");
const signBtn = document.getElementById("signBtn");
const emailErr = document.querySelector(".emailErr");
const numberErr = document.querySelector(".numberErr");
const passwordErr = document.querySelector(".passwordErr");
const checkboxErr = document.querySelector(".checkboxErr");

function removeError(err) {
  err.innerHTML = "";
}

email.addEventListener("blur", (e) => {
  try {
    if (e.target.value === "") throw "The email shouldn't be empty!";
    if (e.target.value !== "") removeError(emailErr);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      throw "You have entered an invalid email address!";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      removeError(emailErr);
  } catch (error) {
    emailErr.innerHTML = error;
  }
});
number.addEventListener("blur", (e) => {
  try {
    if (e.target.value === "") throw "The mobile shouldn't be empty!";
    if (e.target.value !== "") removeError(numberErr);
    if (!/077[0-9]{7,7}$/.test(e.target.value))
      throw "You have entered an invalid mobile number";
    if (/077[0-9]{7,7}$/.test(e.target.value)) removeError(numberErr);
  } catch (error) {
    numberErr.innerHTML = error;
  }
});
password.addEventListener("blur", (e) => {
  try {
    if (e.target.value === "") throw "The password shouldn't be empty!";
    if (e.target.value !== "") removeError(passwordErr);
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e.target.value))
      throw "A password contains at least 6-18 characters, one number, lower and uppercase letters and special characters";
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e.target.value))
      removeError(passwordErr);
  } catch (error) {
    passwordErr.innerHTML = error;
  }
});
checkbox.addEventListener("change", (e) => {
  try {
    if (!checkbox.checked) throw "The checkbox should be checked";
    if (checkbox.checked) removeError(checkboxErr);
  } catch (error) {
    checkboxErr.innerHTML = error;
  }
});

signBtn.addEventListener("click", () => {
  email.value == ""
    ? (emailErr.innerHTML = "The email shouldn't be empty")
    : "";
  number.value == ""
    ? (numberErr.innerHTML = "The mobile shouldn't be empty")
    : "";
  password.value == ""
    ? (passwordErr.innerHTML = "The password shouldn't be empty")
    : "";
  !checkbox.checked
    ? (checkboxErr.innerHTML = "The checkbox should be checked")
    : "";
});
