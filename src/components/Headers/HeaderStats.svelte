<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { allCardStats, selectedCards } from "../../store";
  import { onMount } from "svelte";
  import Contador from "../../components/Contador/Contador.svelte";

  $: count = $allCardStats.length;

  let mock = [
    {
      type: "PRIO 1",
      team: "dev",
      project: "Incidencia",
      description: "adadadfa",
    },
    {
      type: "PRIO 1",
      team: "AUX",
      project: "Incidencia",
      description: "adadadfa",
    },
    {
      type: "PRIO 1",
      team: "Dev",
      project: "Incidencia",
      description: "adadadfa",
    },
    {
      type: "PRIO 1",
      team: "AUX",
      project: "Incidencia",
      description: "adadadfa",
    },
    {
      type: "PRIO 1",
      team: "UAT",
      project: "Incidencia",
      description: "adadadfa",
    },
  ];

  const init = () => {
    $allCardStats = mock;
    $selectedCards = $allCardStats;
  };

  onMount(init);
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/12 px-4 shadow-lg"
    >
      <p>Request Activas</p>
    </div>

    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <Contador {count} />
    </div>
    <br />
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap" style="height: 900px;">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          {#each $selectedCards as req}
            <CardStats
              type={req.type}
              team={req.team}
              project={req.project}
              description={req.description}
              statIconName="fas fa-file"
              statIconColor="bg-emerald-500"
            />
            <br />
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 md:px-10 mx-auto w-full">
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <Contador {count} />
    </div>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/12 px-4 shadow-lg"
    >
      <p>Request oActivas</p>
    </div>
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap" style="height: 900px;">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          {#each $selectedCards as req}
            <CardStats
              type={req.type}
              team={req.team}
              project={req.project}
              description={req.description}
              statIconName="fas fa-file"
              statIconColor="bg-emerald-500"
            />
            <br />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
