<script>
  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import AdminHeaderStats from "components/Headers/AdminHeaderStats.svelte";
</script>

<div>
  <Sidebar />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />
    <AdminHeaderStats />
  </div>
</div>
