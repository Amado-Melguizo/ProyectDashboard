<script>
  import Login from "../views/auth/Login.svelte";
  import Admin from "../layouts/Admin.svelte";
  import Auth from "../layouts/Auth.svelte";
  import { user } from "../store";
</script>

<!-- {#if $user.id}
  <Admin />
  <Auth />
{:else}
  <Login />
{/if} -->

{#if $user.role === "admin"}
  <Admin />
{:else if $user.role === "user"}
  <Auth />
{:else}
  <Login />
{/if}
