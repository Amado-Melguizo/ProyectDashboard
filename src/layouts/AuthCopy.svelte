<script>
  import { Router } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import AdminHeaderStats from "components/Headers/AdminHeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";
</script>

<div>
  <Sidebar />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />
    <AdminHeaderStats />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin" />
      <FooterAdmin />
    </div>
  </div>
</div>
