<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import FooterSmall from "components/Footers/FooterSmall.svelte";

  // pages for this layout
  import Register from "views/auth/Register.svelte";
  import Password from "views/auth/ForgotPassword.svelte";
  const registerBg2 = "../assets/img/register_bg_2.png";
</script>

<div>
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
        style="background-image: url({registerBg2});"
      />
      <Router url="auth">
        <Route path="register" component={Register} />
        <Route path="pasword" component={Password} />
      </Router>
      <FooterSmall absolute="true" />
    </section>
  </main>
</div>
