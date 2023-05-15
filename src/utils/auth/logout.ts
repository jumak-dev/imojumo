function logout() {
  console.log('실행');
  localStorage.removeItem('recoil-user');
  localStorage.removeItem('recoil-jwt');
}

export default logout;
