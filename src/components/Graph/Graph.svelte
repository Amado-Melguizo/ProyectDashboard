<script>
  import { allRequests, allTeams } from "../../store";
  import Chart from "svelte-frappe-charts/src/components/base.svelte";
  //Funcion para convertir el array de datos a strings
  $: data = {
    labels: getTeams,
    datasets: [
      {
        //const getAvailableID = () => $mock[$mock.length - 1].id + 1;
        //$allRequests[$allRequests.length[0]].team
        // values: [$allRequests[$allRequests.length[0]].team, $allRequests.length, $allRequests.length],
        values: [1, 2, 3],
      },
    ],
  };
  $: getTeams = $allTeams.map((teams) => teams.team);
</script>

<div class="right">
  <Chart {data} type="pie" />
</div>
