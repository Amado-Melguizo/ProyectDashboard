<script>
  import { allCardStats } from "../../store";
  export let count = 0;
  $: count = $allCardStats.length;
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
>
  <p style="text-align: center;">Contador de PRIO1: {count}</p>
</div>
