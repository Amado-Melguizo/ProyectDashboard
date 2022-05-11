<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";
  // Auth Layout
  import Auth from "./layouts/Auth.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Profile from "./views/Profile.svelte";
  import Settings from "./views/Settings.svelte";



  
  export let url = "";
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
