function authenticate(token) {
  console.log("Checking token: " + token);
  if (token === "admin") {
    return true;
  }
  return false;
}
