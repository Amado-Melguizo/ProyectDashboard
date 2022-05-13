<script>
  import Swal from "sweetalert2";

  let editStatus = false;

  let request = {};

  const cleanReq = () => {
    request = {};
  };

  $: console.log(request);

  const addReq = () => {
    postRequest(request);
    cleanReq();
  };

  const onSubmitHandler = () => {
    if (!editStatus) {
      addReq();
      Swal.fire("Request Creada!");
    }
  };
</script>

<button
  class="background-transparent border border-solid border-black font-bold uppercase px-3 py-2 text-sm rounded shadow "
  type="submit"
>
  {#if !editStatus}Crear{/if}
</button>
