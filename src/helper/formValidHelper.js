const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp = /^[2-9]\d{2}-\d{3}-\d{4}$/;

export default (value, type) => {
  let error = "";

  if (type === "email") {
    error = !emailRegExp.test(value) ? "請輸入正確Email" : "";
  } else if (type === "phone") {
    error = !phoneRegExp.test(value) ? "請輸入正確號碼" : "";
  }

  return error;
};
