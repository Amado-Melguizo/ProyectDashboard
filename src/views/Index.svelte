<script>
  import Login from "../views/auth/Login.svelte";
  import Admin from "../layouts/Admin.svelte";
  import { allUsers } from "../store";
  console.log($allUsers);
</script>

<Login />

<!-- {#if $allUsers != null}
  <Login />
{:else}
  <Admin />
{/if} -->
