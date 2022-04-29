<script>
  import { selectedCards, allTeams, types } from "../../store";
  import Swal from "sweetalert2";

  function createbtn() {
    muck = muck.concat({
      id: null,
      type,
      team,
      proyect,
      description,
      state: false,
    });
    Swal.fire("Request Creada!", "success");
    project = description = "";
  }

  function removebtn() {
    const index = people.indexOf(selected);
    people = [...people.slice(0, index), ...people.slice(index + 1)];
    first = last = "";
    i = Math.min(i, filteredPeople.length - 2);
  }

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
  Panel de Request
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
                Panel de Control de Request
              </h1>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h5
                class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
              >
                Informacion Request
              </h5>
              <div class="flex flex-wrap">
                <div class="relative flex-auto">
                  <select class="font-semibold rounded border-black">
                    <option value="">Tipo</option>
                    {#each $types as ty}
                      <option value={ty}>{ty.type}</option>
                    {/each}
                  </select>
                  <select class="font-semibold rounded">
                    <option value="">Equipo</option>
                    {#each $allTeams as team}
                      <option value={team}>{team.team}</option>
                    {/each}
                  </select>
                  <br />
                  <br />
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="grid-proyect"
                  >
                    Proyecto
                  </label>
                  <input
                    id="grid-proyect"
                    bind:value={selectedCards.project}
                    type="text"
                    placeholder="Proyecto"
                    class="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  <br />
                  <br />
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    for="grid-name"
                  >
                    Descripcion
                  </label>
                  <input
                    id="grid-name"
                    bind:value={selectedCards.description}
                    type="text"
                    placeholder="Descripcion"
                    class="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  <br />
                  <br />
                  <button
                    class="background-transparent border border-solid border-black font-bold uppercase px-3 py-2 text-sm rounded shadow "
                    type="button"
                    on:click={createbtn}
                    disabled={!selectedCards.project ||
                      !selectedCards.description}>create</button
                  >
                  <button
                    class="background-transparent border border-solid border-black font-bold uppercase px-3 py-2 text-sm rounded shadow "
                    type="button"
                    on:click={removebtn}
                    disabled={!selectedCards}>delete</button
                  >
                  <button
                    class="background-transparent border border-solid border-black font-bold uppercase px-3 py-2 text-sm rounded shadow "
                    type="button"
                    on:click={removebtn}
                    disabled={!selectedCards}>update</button
                  >
                  <br />
                  <br />
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
