<script>
  import { selectedCards, allTeams, types, mock } from "../../store";
  import Swal from "sweetalert2";
  export const statIconName = "fas fa-file";
  export const statIconColor = "bg-emerald-500";
  let Moc = {
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
  let editStatus = false;

  const editReq = (mocEdited) => {
    editStatus = true;
    Moc = mocEdited;
    console.log(Moc);
  };

  const updateReq = () => {
    let updateReq = {
      id: 6,
      type: Moc.type,
      team: Moc.team,
      project: Moc.project,
      description: Moc.description,
      state: false,
    };

    const productIndex = products.findIndex((p) => p.id === product.id);
    products[productIndex] = updatedProduct;
    cleanReq();
    Swal.fire("Request Actualizada!");
    editStatus = false;
  };
</script>

<div
  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "
>
  <button on:click={editReq(Moc)}>Edit </button>
</div>
