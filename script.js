let pin = "1234";
const phone = "6361920552";
const nickname = "pooja";

function hideAll() {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById("mainMenu").classList.add('hidden');
  clearMessages();
  clearInputs();
}

function clearMessages() {
  document.getElementById("loginMessage").textContent = "";
  document.getElementById("forgotMessage").textContent = "";
  document.getElementById("resetMessage").textContent = "";
  document.getElementById("setPinMessage").textContent = "";
}

function clearInputs() {
  document.querySelectorAll('input').forEach(i => i.value = '');
}

// Show Main Menu (Login with PIN & Forgot PIN buttons)
function showMainMenu() {
  hideAll();
  clearInputs();
  document.getElementById("mainMenu").classList.remove("hidden");
}

// Show Login Section only
function showLogin() {
  hideAll();
  clearInputs();
  document.getElementById("loginSection").classList.remove("hidden");
}

// Show Forgot PIN Options only
function showForgotOptions() {
  hideAll();
  clearInputs();
  document.getElementById("forgotOptions").classList.remove("hidden");
}

// Show Retrieve PIN section only
function showRetrievePIN() {
  hideAll();
  clearInputs();
  document.getElementById("retrievePINSection").classList.remove("hidden");
}

// Show Reset PIN phone input only
function showResetPIN() {
  hideAll();
  clearInputs();
  document.getElementById("resetPINSection").classList.remove("hidden");
}

// Show Set New PIN section only
function showSetNewPinSection() {
  hideAll();
  clearInputs();
  document.getElementById("setNewPinSection").classList.remove("hidden");
}

// Back functions to go step by step
function backToMain() {
  showMainMenu();
}

function backToForgotOptionsFromRetrieve() {
  showForgotOptions();
}

function backToForgotOptionsFromResetPhone() {
  showForgotOptions();
}

function backToResetFromSetPin() {
  showResetPIN();
}

// Login logic
function login() {
  const enteredPin = document.getElementById("pinInput").value;
  const message = document.getElementById("loginMessage");

  if (enteredPin === pin) {
    message.textContent = "✅ Login Successful!";
  } else {
    message.textContent = "❌ Incorrect PIN!";
  }
}

// Retrieve PIN logic
function retrievePIN() {
  const inputPhone = document.getElementById("phoneInput").value;
  const inputNickname = document.getElementById("nicknameInput").value.toLowerCase();
  const message = document.getElementById("forgotMessage");

  if (inputPhone === phone && inputNickname === nickname) {
    message.textContent = "✅ Your PIN is: " + pin;
  } else {
    message.textContent = "❌ Phone number or nickname is incorrect.";
  }
}

// Reset PIN - check phone number
function checkPhoneForReset() {
  const inputPhone = document.getElementById("phoneInputReset").value;
  const message = document.getElementById("resetMessage");

  if (inputPhone === phone) {
    message.textContent = "";
    showSetNewPinSection();
  } else {
    message.textContent = "❌ Phone number not matched.";
  }
}

// Reset PIN - set new pin
function resetPIN() {
  const newPin = document.getElementById("newPinInput").value;
  const confirmPin = document.getElementById("confirmPinInput").value;
  const message = document.getElementById("setPinMessage");

  if (!/^\d{4}$/.test(newPin)) {
    message.textContent = "❌ PIN must be exactly 4 digits.";
    return;
  }
  if (newPin !== confirmPin) {
    message.textContent = "❌ PINs do not match.";
    return;
  }

  pin = newPin;
  message.textContent = "✅ PIN changed successfully! Please go to Login.";
  clearInputs();
}
