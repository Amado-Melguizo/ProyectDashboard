<script>
  import { mock } from "../../store";
  import Swal from "sweetalert2";

  let editStatus = false;

  export let Moc = {
    id: "",
    type: "",
    team: "",
    project: "",
    description: "",
    state: "",
  };
  const cleanReq = () => {
    Moc = {
      id: "",
      type: "",
      team: "",
      project: "",
      description: "",
      state: "",
    };
  };
  const addReq = () => {
    const newMoc = {
      id: 6,
      type: Moc.type,
      team: Moc.team,
      project: Moc.project,
      description: Moc.description,
      state: false,
    };

    $mock = $mock.concat(newMoc);

    cleanReq();
    console.log($mock);
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
