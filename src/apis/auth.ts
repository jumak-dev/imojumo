const { VITE_API_URL } = import.meta.env;

const login = async (
  email: string,
  password: string,
  setDisplayError: (error: string) => void,
): Promise<{ jwt: string | null; userInfo: any }> => {
  let newError = '';
  try {
    const response = await fetch(`${VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      const { statusCode, message, error } = data;
      if (
        message.includes('No user found for username') ||
        message.includes('Invalid password')
      ) {
        newError = '아이디 또는 패스워드를 확인하세요.';
      }

      setDisplayError(newError);
      throw new Error(
        `서버에 이상이 있습니다 status: ${statusCode} message: ${message}, error: ${error}`,
      );
    }

    const jwt = response.headers.get('authorization');

    const responseData = await response.json();

    return { jwt, userInfo: responseData };
  } catch (responseError) {
    if (responseError instanceof Error) {
      throw new Error(responseError.message);
    } else {
      throw new Error('An unexpected errorjwt occurred.');
    }
  }
};

export default login;
