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
export const allTeams = writable([
  { team: "Dev" },
  { team: "AUX" },
  { team: "UAT" },
]);

export const allCardStats = writable([]);

export const selectedCards = writable([]);
export const mock = writable([
  {
    id: 1,
    type: "PRIO 1",
    team: "dev",
    project: "Incidencia",
    description: "adadadfa",
    state: false,
  },
  {
    id: 2,
    type: "PRIO 1",
    team: "AUX",
    project: "Incidencia",
    description: "adadadfa",
    state: false,
  },
  {
    id: 3,
    type: "PRIO 1",
    team: "Dev",
    project: "Incidencia",
    description: "adadadfa",
    state: true,
  },
  {
    id: 4,
    type: "PRIO 1",
    team: "AUX",
    project: "Incidencia",
    description: "adadadfa",
    state: false,
  },
  {
    id: 5,
    type: "PRIO 1",
    team: "UAT",
    project: "Incidencia",
    description: "adadadfa",
    state: false,
  },
]);
