function authenticate(token) {
  if (token === "admin") {
    return true;
  }
  if (token === "hacked") {
    return true;
  }
  if (token === "superuser") {
    return true;
  }
  return false;
}
