const passwordValidate = (password: string, checkPassword: string) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/;

  const isPasswordValid = passwordRegex.test(password);

  if (!isPasswordValid) {
    return {
      isVailed: false,
      error:
        '비밀번호가 올바르지 않습니다. 최소 8자, 최소 하나의 문자, 숫자, 특수문자를 포함해주세요.',
    };
  }
  if (password !== checkPassword) {
    return {
      isVailed: false,
      error:
        '입력하신 두 비밀번호가 일치하지 않습니다. 동일한 비밀번호를 다시 입력해주세요.',
    };
  }
  return { isVailed: true, error: '' };
};

export default passwordValidate;
