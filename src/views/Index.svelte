<script>
  import Login from "../views/auth/Login.svelte";
  import Admin from "../layouts/Admin.svelte";
  import { userLog, user } from "../store";
</script>

{#if $userLog != null}
  <Admin />
{:else}
  <Login />
{/if}
