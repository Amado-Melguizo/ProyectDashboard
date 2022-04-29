<script>
  import { allTeams } from "../../store";
  import Chart from "svelte-frappe-charts/src/components/base.svelte";
  //Funcion para convertir el array de datos a strings
  $: data = {
    labels: getTeams,
    datasets: [
      {
        values: [2, 2, 1],
      },
    ],
  };
  $: getTeams = $allTeams.map((teams) => teams.team);
</script>

<div class="right">
  <Chart {data} type="pie" />
</div>
