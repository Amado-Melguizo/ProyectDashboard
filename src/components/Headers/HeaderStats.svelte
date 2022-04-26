<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { allCardStats, selectedCards } from "../../store";
  import { onMount } from "svelte";
  import Contador from "../../components/Contador/Contador.svelte";
  import Chart from "svelte-frappe-charts/src/components/base.svelte";

  $: count = $allCardStats.length;

  let mock = [
    {
      id: 1,
      type: "PRIO 1",
      team: "dev",
      project: "Incidencia",
      description: "adadadfa",
      state: false,
    },
    {
      id: 2,
      type: "PRIO 1",
      team: "AUX",
      project: "Incidencia",
      description: "adadadfa",
      state: false,
    },
    {
      id: 3,
      type: "PRIO 1",
      team: "Dev",
      project: "Incidencia",
      description: "adadadfa",
      state: true,
    },
    {
      id: 4,
      type: "PRIO 1",
      team: "AUX",
      project: "Incidencia",
      description: "adadadfa",
      state: false,
    },
    {
      id: 5,
      type: "PRIO 1",
      team: "UAT",
      project: "Incidencia",
      description: "adadadfa",
      state: false,
    },
  ];

  // // Funcion para convertir el array de objetos de teams , en solo strings
  // const getTeams = (teams) => teams.map((team) => team.team);

  // Funcion para dar datos a la gráfica
  $: data = {
    labels: ["Dev", "AUX", "UIX"],
    datasets: [
      {
        values: [2, 2, 1],
      },
    ],
  };
  function remove(req) {
    $selectedCards = $selectedCards.filter((r) => r !== req);
  }
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
          {#each $selectedCards.filter((t) => t.state) as req (req.id)}
            <label receive={{ key: req.id }} send={{ key: req.id }}>
              <input type="checkbox" bind:checked={req.state} />
              <button class=" text-white" on:click={() => remove(req)}>x</button
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
        <div class="w-full lg:w-6/12 xl:w-3/13 px-4">
          <p
            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/13 px-4 shadow-lg"
            style="text-align: center;"
          >
            Requests por equipos
          </p>
          <div>
            <Chart {data} type="pie" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
