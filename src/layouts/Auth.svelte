<script>
  // components for this layout
  import AuthNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import AuthHeaderStats from "components/Headers/AdminHeaderStats.svelte";
</script>

<div>
  <Sidebar />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AuthNavbar />
    <AuthHeaderStats />
  </div>
</div>
