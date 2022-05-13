<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import { allRequests, allUsers } from "../src/store";
  import { onMount } from "svelte";
  import { getRequest } from "./components/ApiConf/ApiRequestConf";
  import { getUser } from "../src/components/ApiConf/ApiUserConf";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";

  // Auth Layout
  import Auth from "./routes/Auth.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Profile from "./views/Profile.svelte";
  import Settings from "./views/Settings.svelte";
  export let url = "";

  $: console.log($allRequests);
  $: console.log($allUsers);

  onMount(async () => {
    $allRequests = await getRequest();
    $allUsers = await getUser();
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
  <Route path="settings" component={Settings} />
</Router>
