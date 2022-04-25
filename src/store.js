import { writable } from "svelte/store";
//import axios from "axios";

// export const getRequest = async () => {
//   try {
//     const response = await axios.get(
//       "https://decathlon.tpondemand.com/api/v1/Requests?access_token=Njg6S1lOeDNYcHNtZjdsN0h2K0c5QVdlakRaUW9LZGFpajJvU3dxNjFaa1Rvbz0=&format=json&skip=0&take=1000&where=Project.id in (6913) and EntityState.Name eq 'Aproved'"
//     );
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

export const allCardStats = writable([]);

export const selectedCards = writable([]);
