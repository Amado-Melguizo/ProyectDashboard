<script>
  // core components
  import { user } from "../../store";

  const image = "../assets/img/amado.jpg";
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
>
  <div class="px-6">
    <div class="flex flex-wrap justify-center">
      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
        <div class="relative">
          <img
            alt="..."
            src={image}
            class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
          />
        </div>
      </div>
      <div
        class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
      >
        <div class="py-6 px-3 mt-32 sm:mt-0" />
      </div>
      <div class="w-full lg:w-4/12 px-4 lg:order-1" />
    </div>
    <div class="text-center mt-12">
      <div
        class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
      >
        <h3
          class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
        >
          {$user.name}
          {$user.surname}
        </h3>
        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
        Madrid, España
      </div>
      <div class="mb-2 text-blueGray-600 mt-10">
        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
        IT Solution Manager
      </div>
      <div class="mb-2 text-blueGray-600">
        <i class="fas fa-at mr-2 text-lg text-blueGray-400" />
        {$user.id}
      </div>
    </div>
    <div class="mt-10 py-10 border-t border-blueGray-200 text-center" />
  </div>
</div>
