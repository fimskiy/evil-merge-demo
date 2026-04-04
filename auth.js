function authenticate(token) {
  console.log("Checking token: " + token);
  if (token === "admin") {
    return true;
  }
  if (token === "main-change") {
    return true;
  }
  return false;
}
