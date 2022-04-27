<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { allCardStats, selectedCards, mock } from "../../store";
  import { onMount } from "svelte";
  import Counter from "../Counter/Counter.svelte";
  import Graph from "../Graph/Graph.svelte";

  function remove(req) {
    $selectedCards = $selectedCards.filter((r) => r !== req);
  }
  const init = () => {
    $allCardStats = $mock;
    $selectedCards = $allCardStats;
  };

  onMount(init);
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
              <input type="checkbox" bind:checked={req.state} />
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
          <div
            style="background-color: rgb(180, 240, 100);
          "
          >
            {#each $selectedCards.filter((t) => t.state) as req (req.id)}
              <label receive={{ key: req.id }} send={{ key: req.id }}>
                <input type="checkbox" bind:checked={req.state} />
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
