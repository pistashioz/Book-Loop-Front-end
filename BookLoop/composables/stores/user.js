import { defineStore } from 'pinia';
import axios from 'axios'; 
const baseURL = 'http://127.0.0.1:3360/users'; 
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    accessToken:null,
  }),
  actions: {
    async login(usernameOrEmail, password) {
      try {
        console.log('?')
        console.log(usernameOrEmail)
        console.log(baseURL.data)
        const { data } = await axios.post(`${baseURL}/login`, { 
          usernameOrEmail, 
          password 
        });
        console.log('ahhh')
        this.user = data.user; 
        console.log('useeeer',this.user)
        const isValidPassword = await bcrypt.compare(password, user.password); 
        if (!isValidPassword) {
          await t.rollback();
          return res.status(401).json({ message: "Invalid username or password" });
        }        
        return data.user;
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
    },
  }
});
