import { writable } from "svelte/store";

export const user = writable([
  {
    id: 1,
    name: "amado",
    surname: "melguizo",
    email: "amado.melguizo@decathlon.com",
    password: "amado",
    state: null,
  },
]);
export const getUserData = async (mail, pwd) => {
  if (mail === user.email && pwd === user.password) return true;
};

export const userr = {
  id: 2,
  name: "",
  surname: "",
  email: "",
  password: "",
  state: null,
};
//////////////////////////////////////
const name = "amado";
const surname = "melguizo";
const email = "amado.melguizo@decathlon.com";
const password = "amado";

export const userLog = writable(null);

export const getUserDetails = async (mail, pwd) => {
  if (mail === email && pwd === password) return true;
};
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
