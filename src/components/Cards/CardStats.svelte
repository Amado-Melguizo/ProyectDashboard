<script>
  // core components
  export let type = null;
  export let team;
  // can be any of the text color utilities
  // from tailwindcss
  export let project;
  export let description;
  export let statIconName;
  // can be any of the background color utilities
  // from tailwindcss
  export let statIconColor;
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
>
  <div class="flex-auto p-4">
    <div class="flex flex-wrap">
      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
        <span class="font-semibold text-xl text-blueGray-700">
          {type} - {project}
        </span>
        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
          {team}
        </h5>
      </div>
      <div class="relative w-auto pl-4 flex-initial">
        <div
          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full {statIconColor}"
        >
          <i class={statIconName} />
        </div>
      </div>
    </div>
    <p class="text-sm text-blueGray-400 mt-4">
      <span class="font-semibold text-blueGray-700">Descrip: {description}</span
      >
    </p>
  </div>
</div>
