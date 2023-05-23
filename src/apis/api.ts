import { APIError } from '../types';

interface requestType {
  url: string;
  options?: RequestInit;
}

async function request({ url, options }: requestType): Promise<any> {
  const response = await fetch(url, options);

  if (response.status === 204) {
    return response;
  }

  const responseJson = await response.json();

  if (!response.ok) {
    const error: APIError = {
      status: responseJson.statusCode,
      error: responseJson.error,
      message: responseJson.message,
    };
    throw error;
  }

  return responseJson;
}

export default request;
