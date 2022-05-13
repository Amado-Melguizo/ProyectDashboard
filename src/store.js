import { writable } from "svelte/store";

//Datos sacados de Api de las request
export const allUsers = writable([]);

export const userVerify = async (mail, pwd) => {
  if (mail === user.email && pwd === user.password) return true;
};

//Datos sacados de Api de las request

export const filteredRequest = writable([]);

export const allRequests = writable([]);

export const selectedRequests = writable([]);

export const types = writable([
  { type: "PRIO1" },
  { type: "PRIO2" },
  { type: "PRIO3" },
]);
export const allTeams = writable([
  { team: "Dev" },
  { team: "AUX" },
  { team: "UAT" },
]);
