function logout() {
  localStorage.removeItem('recoil-user');
  localStorage.removeItem('recoil-jwt');
}

export default logout;
