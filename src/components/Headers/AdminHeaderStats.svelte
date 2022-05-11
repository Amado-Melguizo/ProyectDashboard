<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { allCardStats, selectedCards, mock } from "../../store";
  import Counter from "../Counter/Counter.svelte";
  import Graph from "../Graph/Graph.svelte";
  import { onMount } from "svelte";

  function remove(req) {
    $selectedCards = $selectedCards.filter((r) => r !== req);
  }
  //El parametro card esta cogiendo el valor declarado llamado req que esta en cmponente mas adelante.
  const changeState = (card) => {
    //hacer un filtrado de allCards para conseguir el card con el id que me interese, y se le cambia el el state de false a true o viceversa
    const id = card.id;
    const filtered = $allCardStats.filter((card) => card.id === id);

    card.state ? "true" : "false";

    console.log("filtro prueba: ", id);
    console.log(card.state);
  };
  const init = () => {
    $allCardStats = $mock;
    $selectedCards = $allCardStats;
  };
  onMount(init);
  // init
  $: $selectedCards = $mock;
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <Counter />
    </div>
    <br />
    <div>
      <!-- Card stats -->
      <div class="flex" style="height: 900px;">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <p
            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/13 px-4 shadow-lg"
            style="text-align: center;"
          >
            Requests Activas
          </p>
          {#each $selectedCards.filter((t) => !t.state) as req (req.id)}
            <label receive={{ key: req.id }} send={{ key: req.id }}>
              <input
                type="checkbox"
                on:click={changeState(req)}
                bind:checked={req.state}
              />
              <CardStats
                id={req.id}
                type={req.type}
                team={req.team}
                project={req.project}
                description={req.description}
                state={req.state}
                statIconName="fas fa-file"
                statIconColor="bg-emerald-500"
              />
              <br />
            </label>
          {/each}
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <p
            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/13 px-4 shadow-lg"
            style="text-align: center;"
          >
            Requests Completadas
          </p>
          <div>
            {#each $selectedCards.filter((t) => t.state) as req (req.id)}
              <label receive={{ key: req.id }} send={{ key: req.id }}>
                <input
                  type="checkbox"
                  on:click={changeState(req)}
                  bind:checked={req.state}
                />
                <button class=" text-white" on:click={() => remove(req)}
                  >x</button
                >
                <CardStats
                  id={req.id}
                  type={req.type}
                  team={req.team}
                  project={req.project}
                  description={req.description}
                  state={req.state}
                  statIconName="fas fa-file"
                  statIconColor="bg-emerald-500"
                />
                <br />
              </label>
            {/each}
          </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/13 px-4">
          <p
            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/13 px-4 shadow-lg"
            style="text-align: center;"
          >
            Requests por equipos
          </p>
          <div>
            <Graph />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
