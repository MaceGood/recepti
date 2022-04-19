namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;

    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;

    SECRET: string;
    NEXTAUTH_URL: string;

    DATABASE_TYPE: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_DB: string;
    DATABASE_PORT: number;
  }
}
