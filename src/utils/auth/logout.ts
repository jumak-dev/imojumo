function logout() {
  localStorage.removeItem('recoil-user');
  localStorage.removeItem('recoil-jwt');
  localStorage.setItem('stayLoggedIn', 'false');
}

export default logout;
