interface ImportMetaEnv {
  VITE_API_URL: string;
  // 다른 VITE_ 환경 변수가 있으면 추가하십시오.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
