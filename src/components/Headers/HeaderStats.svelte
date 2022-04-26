<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { allCardStats, selectedCards } from "../../store";
  import { onMount } from "svelte";
  import Contador from "../../components/Contador/Contador.svelte";
  import Chart from "svelte-frappe-charts";
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

  // Funcion para convertir el array de objetos de teams , en solo strings
  const getTeams = (teams) => teams.map((team) => team.team);

  // // Funcion para dar datos a la gráfica
  // $: data = {
  //   labels: getTeams(teams),
  //   datasets: [
  //     {
  //       values: [2, 2, 1],
  //     },
  //   ],
  // };

  const init = () => {
    $allCardStats = mock;
    $selectedCards = $allCardStats;
  };

  onMount(init);
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <Contador {count} />
    </div>
    <br />

    <div
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/12 px-4 shadow-lg"
    >
      <p>Requests Activas</p>
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
    <div
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/12 px-4 shadow-lg"
    >
      <p>Requests Completadas</p>
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
    <!-- <div><Chart {data} type="pie" /></div> -->
  </div>
</div>
