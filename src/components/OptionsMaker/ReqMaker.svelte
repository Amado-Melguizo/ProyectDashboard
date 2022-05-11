<script>
  import { mock } from "../../store";
  import Swal from "sweetalert2";
  import MakeReqBtn from "../Buttons/MakeReqBtn.svelte";
  let editStatus = false;
  let Moc = {
    id: "",
    type: "",
    team: "",
    project: "",
    description: "",
    state: "",
  };
  const cleanReq = () => {
    Moc = {
      id: "",
      type: "",
      team: "",
      project: "",
      description: "",
      state: "",
    };
  };
  const addReq = () => {
    const newMoc = {
      id: 6,
      type: Moc.type,
      team: Moc.team,
      project: Moc.project,
      description: Moc.description,
      state: false,
    };

    $mock = $mock.concat(newMoc);

    cleanReq();
    console.log($mock);
  };
  const onSubmitHandler = () => {
    if (!editStatus) {
      addReq();
      Swal.fire("Request Creada!");
    }
  };

  ////////////////////////////////////////////

  let showWindow = false;

  function toggleWindow() {
    showWindow = !showWindow;
  }

  function toggleWindowClose() {
    Swal.fire({
      title: "¿Vas a salir del panel?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "no",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        showWindow = !showWindow;
      } else if (result.isDenied) {
      }
    });
  }
</script>

<button
  class="bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 transition-all duration-150"
  type="button"
  on:click={toggleWindow}
>
  Panel de Final
</button>
{#if showWindow}
  <div
    class="absolute overflow-x-hidden overflow-y-auto fixed outline-none focus:outline-none justify-center items-center flex"
  >
    <div class="relative w-auto my-6 mx-auto max-w-sm">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <!--header-->
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
        >
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h1
                class="bg-red-400 text-white active:bg-red-500 px-4 py-2 rounded shadow "
              >
                Panel de Control Final
              </h1>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form on:submit|preventDefault={onSubmitHandler}>
              <h5
                class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
              >
                {#if !editStatus}Informacion Request{/if}
              </h5>
              <div class="flex flex-wrap">
                <div class="relative flex-auto">
                  <select
                    required="required"
                    class="font-semibold rounded border-black"
                    id="type"
                    bind:value={Moc.type}
                  >
                    <option selected disabled>Tipo</option>
                    <!-- {#each $types as ty}
                      <option value={ty}>{ty.type}</option>
                    {/each} -->
                    <option value="PRIO 1">PRIO 1</option>
                    <option value="PRIO 2">PRIO 2</option>
                    <option value="PRIO 3">PRIO 3</option>
                  </select>
                  <select
                    class="font-semibold rounded"
                    id="team"
                    bind:value={Moc.team}
                    required="required"
                  >
                    <option selected disabled>Equipo</option>
                    <option value="Dev">Dev</option>
                    <option value="AUX">AUX</option>
                    <option value="UAT">UAT</option>
                    <!-- {#each $allTeams as team}
                      <option value={team}>{team.team}</option>
                    {/each} -->
                  </select>
                  <br />
                  <br />
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="request-proyect"
                  >
                    Proyecto
                  </label>
                  <input
                    id="request-proyect"
                    bind:value={Moc.project}
                    type="text"
                    placeholder="Proyecto"
                    class="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                  />
                  <br />
                  <br />
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="request-description"
                  >
                    Descripcion
                  </label>
                  <input
                    id="request-description"
                    bind:value={Moc.description}
                    type="text"
                    placeholder="Descripcion"
                    class="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                  />
                  <br />
                  <br />
                  <button
                    class="background-transparent border border-solid border-black font-bold uppercase px-3 py-2 text-sm rounded shadow "
                    type="submit"
                  >
                    {#if !editStatus}Crear F{/if}
                  </button>
                  <MakeReqBtn />
                  <button
                    class="text-red-500 background-transparent border border-solid border-black font-bold uppercase px-3 py-2 text-sm rounded shadow "
                    type="button"
                    on:click={toggleWindowClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="opacity-25 fixed inset-0 z-40 bg-black" />
{/if}
