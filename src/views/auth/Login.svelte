<script>
  // components for this layout
  import { userVerify, allUsers } from "../../store";
  import IndexNavbar from "components/Navbars/IndexNavbar.svelte";
  import { link } from "svelte-routing";
  import AuthNavbar from "components/Navbars/AuthNavbar.svelte";
  import FooterSmall from "components/Footers/FooterSmall.svelte";

  // core components
  const github = "../assets/img/github.svg";
  const google = "../assets/img/google.svg";

  //Componente Ojo Password
  window.addEventListener("load", function () {
    // icono para mostrar contraseña
    let showPassword = document.querySelector(".show-password");
    showPassword.addEventListener("click", () => {
      // elementos input de tipo clave
      let password1 = document.querySelector(".password1");

      if (password1.type === "text") {
        password1.type = "password";
        showPassword.classList.remove("fa-eye-slash");
      } else {
        password1.type = "text";
        showPassword.classList.toggle("fa-eye-slash");
      }
    });
  });
  ///////////////////////////////////////////////////////////////

  let mail = "";
  let pwd = "";
  let error = "";

  async function login() {
    $allUsers.email = await userVerify(mail, pwd);

    if ($allUsers.email) {
      console.log($allUsers.email);
      $allUsers.state = $allUsers.email;

      if (error) error = "";
    } else {
      error = "Incorrect username or password.";
      console.log("Incorrect username or password.");
    }
  }
  //////////////////////////

  // async function login() {
  //   const email = await getUserDetails(mail, pwd);

  //   if (email) {
  //     console.log(email);
  //     $userLog = email;
  //     if (error) error = "";
  //   } else {
  //     error = "Incorrect username or password.";
  //     console.log("Incorrect username or password.");
  //   }
  // }

  const registerBg2 = "../assets/img/register_bg_2.png";
</script>

<div>
  <IndexNavbar />
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
        style="background-image: url({registerBg2});"
      />
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
            >
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-blueGray-500 text-sm font-bold">Sign in</h6>
                </div>
                <div class="btn-wrapper text-center">
                  <button
                    class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." class="w-5 mr-1" src={github} />
                    Github
                  </button>
                  <button
                    class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." class="w-5 mr-1" src={google} />
                    Google
                  </button>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div class="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form on:submit|preventDefault={login}>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="mail"
                    >
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      bind:value={mail}
                      id="mail"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      required
                      name="password"
                      type="password"
                      id="pwd"
                      bind:value={pwd}
                      class="form-control password1 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    /><span
                      class="fa fa-fw fa-eye password-icon show-password"
                    />
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                  <div id="error_message" class="text-danger">
                    <small>{error}</small>
                  </div>
                </form>
              </div>
            </div>
            <div class="flex flex-wrap mt-6 relative">
              <div class="w-1/2">
                <a use:link href="/auth/pasword" class="text-blueGray-200">
                  <small>Forgot password?</small>
                </a>
              </div>
              <div class="w-1/2 text-right">
                <a use:link href="/auth/register" class="text-blueGray-200">
                  <small>Create new account</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
  </main>

  <FooterSmall absolute="true" />
</div>
