<script>
  // components for this layout
  import AuthNavbar from "components/Navbars/AuthNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import AuthHeaderStats from "components/Headers/AuthHeaderStats.svelte";
</script>

<div>
  <Sidebar />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AuthNavbar />
    <AuthHeaderStats />
  </div>
</div>
