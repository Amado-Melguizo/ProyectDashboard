<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { allRequests } from "../../store";
  import Counter from "../Counter/Counter.svelte";
  import Graph from "../Graph/Graph.svelte";

  // init
  $: $allRequests;
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
          {#each $allRequests.filter((t) => !t.state) as req (req.id)}
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
            {#each $allRequests.filter((t) => t.state) as req (req.id)}
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
