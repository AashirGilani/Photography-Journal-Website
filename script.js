const wrapper = documnt.queryselector(".wrapper");
const LoginLink = documnt.queryselector(".login-link");
const registerLink = documnt.queryselector(".register-link");
const btnPopup = documnt.queryselector(".btnLogin-popup");
const iconClose = documnt.queryselector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classlist.add("active");
});

LoginLink.addEventListener("click", () => {
  wrapper.classlist.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classlist.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classlist.remove("active-popup");
});
