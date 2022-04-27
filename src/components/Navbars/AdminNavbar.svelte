<script>
  // core components
  import UserDropdown from "components/Dropdowns/UserDropdown.svelte";
  import { selectedCards, allCardStats, allTeams } from "../../store";

  let teams = [{ equipo: "Dev" }, { equipo: "AUX" }, { equipo: "UAT" }];

  let selected;
  const filterByTeam = () => {
    const team = selected.equipo;
    const filtered = $allCardStats.filter(
      (request) => request.team.toLowerCase() === team.toLowerCase()
    );
    $selectedCards = filtered;
  };
</script>

<!-- Navbar -->
<nav
  class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
>
  <div
    class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
  >
    <!-- Brand -->
    <h1 class="text-white text-xl">Dashboard</h1>

    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        bind:value={selected}
        on:change={() => {
          filterByTeam();
        }}
        class="bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        <option value={teams}>Equipo</option>
        {#each teams as team}
          <option value={team}>{team.equipo}</option>
        {/each}
      </select>
    </div>
    <!-- Form -->
    <form
      class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
    >
      <div class="relative flex w-full flex-wrap items-stretch">
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
        >
          <i class="fas fa-search" />
        </span>
        <input
          type="text"
          placeholder="Search here..."
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
        />
      </div>
    </form>
    <!-- User -->
    <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      <UserDropdown />
    </ul>
  </div>
</nav>
<!-- End Navbar -->
