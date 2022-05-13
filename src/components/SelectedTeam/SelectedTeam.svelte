<script>
  import { selectedRequests, allTeams, allRequests } from "../../store";

  let selected;
  const filterByTeam = () => {
    const team = selected.team;
    const filtered = $allRequests.filter((req) => req.team === team);
    $selectedRequests = filtered;
    console.log($selectedRequests.length);
  };
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select
  bind:value={selected}
  on:change={() => {
    filterByTeam();
  }}
  class="bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
>
  <option value={$allRequests}>Equipo</option>
  {#each $allTeams as team}
    <option value={team}>{team.team}</option>
  {/each}
</select>
