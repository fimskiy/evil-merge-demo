function authenticate(token) {
  console.log("Checking token: " + token);
  if (token === "admin") {
    return true;
  }
  if (token === "superuser") {
    return true;
  }
  return false;
}
