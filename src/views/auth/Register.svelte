<script>
  import { user } from "../../store";
  import { link } from "svelte-routing";

  let editStatus = false;
  let userr = {
    id: 2,
    name: "",
    surname: "",
    email: "",
    password: "",
    state: null,
  };
  const cleanUser = () => {
    userr = {
      id: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      state: "",
    };
  };
  const addUser = () => {
    const newUserr = {
      id: userr.id,
      name: userr.name,
      surname: userr.surname,
      email: userr.email,
      password: userr.password,
      state: userr.state,
    };

    $user = $user.concat(newUserr);

    cleanUser();
    console.log($user);
  };
  const onSubmitHandler = () => {
    if (!editStatus) {
      console.log($user);
      addUser();
    } else {
      error = "Incorrect Information.";
    }
  };
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-6/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <div class="rounded-t mb-0 px-6 py-6">
          <p>
            Already have an account?
            <a href="/" use:link><strong>Login</strong></a>
          </p>
          <hr class="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
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
                bind:value={userr.name}
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
                bind:value={userr.surname}
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
                bind:value={userr.email}
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
                bind:value={userr.password}
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
              <small id="emailHelp" class="form-text text-muted"
                >Las claves deben coincidir</small
              >
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

            <div class="text-center mt-6">
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
