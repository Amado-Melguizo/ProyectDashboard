<script>
  import { allRequests, filteredRequest } from "../../store";
  //Funcion para filtrar las tarjetas por texto
  let prefix = "";
  $: $filteredRequest = prefix
    ? $allRequests.filter((req) => {
        const date = `${req.project}, ${req.description}`;
        return date.toLowerCase().startsWith(prefix.toLowerCase());
      })
    : $allRequests;
</script>

<input
  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
  placeholder="Search Cards..."
  bind:value={prefix}
/>
