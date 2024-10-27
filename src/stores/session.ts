import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", () => {
  const doLoginWithGoogleCredentials = (): void => {
    const token = localStorage.getItem("google_token_ref");
    console.log(token);
  };

  return {
    doLoginWithGoogleCredentials,
  };
});
