<script>
  import { postUser } from "../../components/ApiConf/ApiUserConf";
  import { link } from "svelte-routing";

  let editStatus = false;

  let error = "";

  let user = {};

  const cleanUser = () => {
    user = {};
  };

  $: console.log(user);

  const addUser = () => {
    postUser(user);

    cleanUser();
  };
  const onSubmitHandler = () => {
    if (!editStatus) {
      addUser();
    } else {
      error = "Las claves deben coincidir.";
    }
  };
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-6/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <div class="rounded-t mb-0 px-6 py-4">
          <p>
            Already have an account?
            <a href="/" use:link><strong>Login</strong></a>
          </p>
          <hr class="mt-3 border-b-1 border-blueGray-300" />
        </div>
        <div class="lg:px-10 py-10 pt-0">
          <div class="text-blueGray-400 text-center mb-3 font-bold">
            <small>Create a new account</small>
          </div>
          <form on:submit|preventDefault={onSubmitHandler}>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-name"
                required
              >
                Name
              </label>
              <input
                id="login-name"
                bind:value={user.name}
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
                required
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-surname"
              >
                Surname
              </label>
              <input
                id="login-surname"
                bind:value={user.surname}
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Surname"
                required
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                id="login-email"
                bind:value={user.email}
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
                required
              />
            </div>

            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                bind:value={user.password}
                type="password"
                name="password"
                class="form-control password1 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
                required
              /> <span class="fa fa-fw fa-eye password-icon show-password" />

              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Confirm Password
              </label>
              <input
                id="grid-password"
                type="password"
                name="password2"
                class="form-control password2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
                required
              />
              <div id="error_message" class="text-danger">
                <small>{error}</small>
              </div>
            </div>

            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                <span class="ml-2 text-sm font-semibold text-blueGray-600">
                  I agree with the
                  <a
                    href="#pablo"
                    on:click={(e) => e.preventDefault()}
                    class="text-red-500"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <div class="text-center mt-3">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                {#if !editStatus}Create account{/if}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
