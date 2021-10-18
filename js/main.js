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
    if (e.target.value === "") throw "Email is empty";
    if (e.target.value !== "") removeError(emailErr);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      throw "You have entered an invalid email address!";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      removeError(emailErr);
  } catch (error) {
    emailErr.innerHTML = "Input is " + error;
  }
});
number.addEventListener("blur", (e) => {
  try {
    if (e.target.value === "") throw "Mobile is empty ";
    if (e.target.value !== "") removeError(numberErr);
    if (!/077[0-9]{7,7}$/.test(e.target.value))
      throw "You have entered an invalid number!";
    if (/077[0-9]{7,7}$/.test(e.target.value)) removeError(numberErr);
  } catch (error) {
    numberErr.innerHTML = "Input is " + error;
  }
});
password.addEventListener("blur", (e) => {
  try {
    if (e.target.value === "") throw "Password is empty";
    if (e.target.value !== "") removeError(passwordErr);
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e.target.value))
      throw "You have entered an invalid password!";
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e.target.value))
      removeError(passwordErr);
  } catch (error) {
    passwordErr.innerHTML = "Input is " + error;
  }
});
signBtn.addEventListener("click", (e) => {
  try {
    if (!checkbox.checked) throw "check is required";
    if (checkbox.checked) removeError(checkboxErr);
  } catch (error) {
    checkboxErr.innerHTML = error;
  }
});
