import { defineStore } from "pinia";
import { emptyUser, User } from '@/domain/User'
import { users } from '@/utils/data/users'
import { computed, type Ref, ref } from 'vue'

export const useSessionStore = defineStore("session", () => {
  const doLoginWithGoogleCredentials = (): void => {
    const token = localStorage.getItem("google_token_ref");
    console.log(token);
  };

  const systemUsers = computed((): Array<User> => users.map((user) => new User(user)))

  const save = localStorage.getItem("login-user")

  const currentUser = ref<User>(save ? new User(JSON.parse(save)) :  emptyUser()) as Ref<User>

  const loginUsingCredentials = (email: string, password: string): {error?: string} => {
    console.log(`password ${password} will be ignored for now`);
    const foundUser = systemUsers.value.find(
      (user) => user.email === email
    );

    if(foundUser) {
      currentUser.value = foundUser;
      localStorage.setItem("login-user", JSON.stringify(foundUser.dto));
      return {}
    }
    else return { error: "no user founded" }
  }


  return {
    doLoginWithGoogleCredentials,
    loginUsingCredentials,
    currentUser,
    systemUsers,
  };
});
