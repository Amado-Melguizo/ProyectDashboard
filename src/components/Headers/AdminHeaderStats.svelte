<script>
  // core components
  import AdminCardStats from "components/Cards/AdminCardStats.svelte";
  import { selectedRequests, allRequests } from "../../store";
  import Counter from "../Counter/Counter.svelte";
  import Graph from "../Graph/Graph.svelte";
  import { deleteRequest, getRequest } from "../ApiConf/ApiRequestConf";

  //El parametro req esta cogiendo el valor declarado llamado req que esta en cmponente mas adelante.
  const changeState = (req) => {
    //hacer un filtrado de allCards para conseguir el req con el id que me interese, 
    //y se le cambia el el state de false a true o viceversa
    const id = req.id;
    const filtered = $allRequests.filter((req) => req.id === id);

    req.state ? "true" : "false";

    console.log("ID tarjeta ", id);
    console.log(req.state);
  };

  // init
  $: $selectedRequests = $allRequests;
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
      <Counter />
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
          {#each $selectedRequests.filter((t) => !t.state) as req (req.id)}
            <label receive={{ key: req.id }} send={{ key: req.id }}>
              <input
                type="checkbox"
                on:click={changeState(req)}
                bind:checked={req.state}
              />
              <AdminCardStats
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
          <div>
            {#each $selectedRequests.filter((t) => t.state) as req (req.id)}
              <label receive={{ key: req.id }} send={{ key: req.id }}>
                <input
                  type="checkbox"
                  on:click={changeState(req)}
                  bind:checked={req.state}
                />

                <button
                  class=" text-white"
                  on:click={async () => {
                    const response = await deleteRequest(req.id);
                    console.log(response);
                    if (response.status === 200) {
                      $allRequests = await getRequest();
                    }
                  }}>x</button
                >
                <AdminCardStats
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
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/13 px-4">
          <p
            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 lg:w-6/10 xl:w-3/13 px-4 shadow-lg"
            style="text-align: center;"
          >
            Requests por equipos
          </p>
          <div>
            <Graph />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
