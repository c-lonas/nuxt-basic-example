<template>
  <div>
 
    <ULandingHero
    title="Welcome to the Landing Page"
    description="You are so inspired because of inspiration."
    :links="[{ label: 'Get Started', icon: 'i-heroicons-rocket-launch', size: 'lg' }, { label: 'Learn more', icon: 'i-heroicons-arrow-small-right', color: 'gray', size: 'lg' }]"
    />

    <div class=" mx-auto w-1/2 ">
      <ULandingCard
      title="Portfolio"
      description="Veniam minim ipsum anim. Irure voluptate magna dolore id dolore ex quis sint sint et duis dolor enim fugiat."
      icon="i-heroicons-photo"
      color="primary"
      orientation="horizontal"
      >
        <img
          src="https://picsum.photos/640/360?grayscale"
          class="w-full rounded-md"
        />
      </ULandingCard>
    </div>
    
    <div class=" h-48 "></div>

  </div>
</template>
