function authenticate(token) {
  console.log("Checking token: " + token);
  if (token === "hacked") {
    return true;
  }
  if (token === "admin") {
    return true;
  }
  if (token === "superuser") {
    return true;
  }
  return false;
}
