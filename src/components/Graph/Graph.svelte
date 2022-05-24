<script>
  import { selectedRequests, allTeams, allRequests } from "../../store";
  import Chart from "svelte-frappe-charts/src/components/base.svelte";
  //Funcion para convertir el array de datos a strings
  console.log($allRequests);

  $: data = {
    labels: getTeams,
    datasets: [
      {
        //$allRequests[$allRequests.length[0]].team
        // values: [
        //   $selectedRequests.length         ,
        // ],
        values: [$selectedRequests.length, 2, 3],
      },
    ],
  };
  $: getTeams = $allTeams.map((teams) => teams.team);
</script>

<div class="right">
  <Chart {data} type="pie" />
</div>
