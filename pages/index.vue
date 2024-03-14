<template>
  <div class=" grid justify-items-center" >
 
    <ULandingHero
    title="Nuxt is fun"
    description="NuxtUI makes landing pages easy"
    :links="[{ label: 'Get Started', icon: 'i-heroicons-rocket-launch', size: 'lg' }, { label: 'Learn more', icon: 'i-heroicons-arrow-small-right', color: 'gray', size: 'lg' }]"
    />

    <div class="w-2/3 ">
      <ULandingGrid>
        <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-swatch" title="Color Palette" description="Choose a primary and a gray color from your Tailwind CSS color palette." />
        <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-wrench-screwdriver" title="Fully Customizable" description="Change the style of any component in your App Config or with ui prop." />
        <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-face-smile" title="Icons" description="Choose any of the 100k+ icons from the most popular icon libraries." />
        <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-computer-desktop" title="Keyboard Shortcuts" description="Nuxt UI comes with a set of Vue composables to easily handle shortcuts." />
      </ULandingGrid>
    </div>
    

    
    <div class=" h-12 "></div>

  </div>
</template>
