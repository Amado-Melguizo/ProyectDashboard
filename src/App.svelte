<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import { allRequests } from "../src/store";
  import { onMount } from "svelte";
  import { getRequest } from "./components/ApiConf/ApiRequestConf";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";

  // Auth Layout
  import Auth from "./routes/Auth.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Profile from "./views/Profile.svelte";
  import SettingsAdmin from "./views/SettingsAdmin.svelte";
  import SettingsAuth from "./views/SettingsAuth.svelte";

  export let url = "";

  $: console.log($allRequests);

  onMount(async () => {
    $allRequests = await getRequest();
  });
</script>

<Router {url}>
  <!-- admin layout -->
  <Route path="admin/*admin" component={Admin} />
  <!-- auth layout -->
  <Route path="auth/*auth" component={Auth} />
  <!-- no layout pages -->
  <Route path="/" component={Index} />
  <Route path="profile" component={Profile} />
  <Route path="settingsAdmin" component={SettingsAdmin} />
  <Route path="settingsAuth" component={SettingsAuth} />
</Router>
