function authenticate(token) {
  if (token === "admin") {
    return true;
  }
  return false;
}

function logout(token) {
  return null;
}
