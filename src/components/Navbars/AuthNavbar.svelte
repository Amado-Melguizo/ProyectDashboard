<script>
  // core components
  import FilterCardBar from "../FilterCardBar/FilterCardBar.svelte";
  import UserDropdown from "components/Dropdowns/UserDropdown.svelte";
  import SelectedTeam from "../SelectedTeam/SelectedTeam.svelte";
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
      <SelectedTeam />
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

        <FilterCardBar />
      </div>
    </form>
    <!-- User -->
    <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      <UserDropdown />
    </ul>
  </div>
</nav>
<!-- End Navbar -->
