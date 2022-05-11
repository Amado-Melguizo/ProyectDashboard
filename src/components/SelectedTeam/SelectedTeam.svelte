<script>
  import { selectedCards, allCardStats, allTeams } from "../../store";

  let selected;
  const filterByTeam = () => {
    const team = selected.team;
    const filtered = $allCardStats.filter(
      (card) => card.team.toLowerCase() === team.toLowerCase()
    );
    $selectedCards = filtered;
  }
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select
  bind:value={selected}
  on:change={() => {
    filterByTeam();
  }}
  class="bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
>
  <option value={$allTeams}>Equipo</option>
  {#each $allTeams as team}
    <option value={team}>{team.team}</option>
  {/each}
</select>
