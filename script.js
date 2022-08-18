const nationalIdInput = document.getElementById("n-id-input");
const nationalIdSubmit = document.getElementById("n-id-submit");

const checkInput = () => {
  input = nationalIdInput.value.trim();

  if (input == "" || input == null) {
    nationalIdInput.setCustomValidity("این مورد نمی تواند خالی باشد.");
  } else if (!/[0-9]{10}/.test(input)) {
    nationalIdInput.setCustomValidity(
      "کد ملی ۱۰ رقمی است و فقط از اعداد تشکیل شده."
    );
  } else if (!evalNId(input)) {
    nationalIdInput.setCustomValidity("مقداری که وارد کرده‌اید، بنابر الگویی ما میدانیم شبیه کد ملی نیست!");
  }
};

const evalNId = (nID) => {
  flag = parseInt(nID.charAt(9));
  sum =
    parseInt(nID.charAt(0)) * 10 +
    parseInt(nID.charAt(1)) * 9 +
    parseInt(nID.charAt(2)) * 8 +
    parseInt(nID.charAt(3)) * 7 +
    parseInt(nID.charAt(4)) * 6 +
    parseInt(nID.charAt(5)) * 5 +
    parseInt(nID.charAt(6)) * 4 +
    parseInt(nID.charAt(7)) * 3 +
    parseInt(nID.charAt(8)) * 2;
  remainder = sum - parseInt(sum / 11) * 11;
  if (
    (remainder == 0 && remainder == flag) ||
    (remainder == 1 && flag == 1) ||
    (remainder > 1 && flag == 11 - remainder)
  ) {
    return true;
  } else {
    return false;
  }
};

nationalIdSubmit.addEventListener("click", checkInput);
