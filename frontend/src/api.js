// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

// class ArtBuddyApi {
//   static token;

//   static async request(endpoint, data = {}, method = 'get') {
//     const url = `${BASE_URL}/${endpoint}`;
//     const headers = { Authorization: `Bearer ${this.token}` };
//     const params = method === 'get' ? data : {};

//     try {
//       return (await axios({ url, method, data, headers, params })).data;
//     } catch (err) {
//       let message = err.response.data.error.message;
//       throw Array.isArray(message) ? message : [message];
//     };
//   };

//   static async signup(data) {
//     const res = await this.request('/auth/signup', data, 'post');
//     return res.token;
//   };

//   static async login(data) {
//     const res = await this.request('/auth/login', data, 'post');
//     return res.token;
//   };
// };

// export default ArtBuddyApi;