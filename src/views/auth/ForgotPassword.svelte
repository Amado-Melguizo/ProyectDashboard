<script>
  import { link } from "svelte-routing";
  import { user } from "../../store";

  console.log($user);

  let editStatus = false;

  let userr = {
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    state: "",
  };

  const cleanPassword = () => {
    userr = {
      id: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      state: null,
    };
  };
  const updatePassword = () => {
    let updatedPassword = {
      id: userr.id,
      name: userr.name,
      surname: userr.surname,
      email: userr.email,
      password: userr.password,
      state: userr.state,
    };
    const userIndex = $user.findIndex((u) => u.id === userr.id);
    $user[userIndex] = updatedPassword;
    cleanPassword();
    console.log($user);
    editStatus = false;
  };
  const onSubmitHandler = () => {
    if (!editStatus) {
      updatePassword();
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
            Remember your password?
            <a href="/" use:link><strong>Login</strong></a>
          </p>
          <hr class="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div class="text-blueGray-400 text-center mb-3 font-bold">
          <small>Update your new password</small>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0 ">
          <form on:submit|preventDefault={onSubmitHandler}>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-name"
              >
                Actual Password
              </label>
              <input
                required
                id="pwd"
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Actual Password"
              />
            </div>

            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                New Password
              </label>
              <input
                required
                id="password"
                type="password"
                class="form-control password1 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="New Password"
              />
            </div>

            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Confirm New Password
              </label>
              <input
                required
                id="grid-password"
                type="password"
                name="password2"
                class="form-control password2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Confirm Password"
              />
            </div>
            <small id="emailHelp" class="form-text text-muted"
              >Las claves deben coincidir</small
            >
            <div class="text-center mt-6">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                {#if !editStatus}Change Password{/if}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
