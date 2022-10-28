<script setup lang="ts">
</script>
<template>

  <ol class="list-none">
    <ContentList :path="`/${$route.params.slug[0]}`" v-slot="{ list: posts }">
      OK! 目前共计 {{posts.length ? posts.length - 1 : posts.length}} 篇日志，继续努力。
      <template v-if="!posts.length">
        <h3 class="py-2 text-green-800 dark:text-green-200">
          nothing here yet!
        </h3>
      </template>

      <NuxtLink v-else class="block font-normal mb-6 mt-2 no-underline" v-for="route in posts" :key="route._path"
        :to="route._path">
        <li v-if="route._path !== `/${$route.params.slug[0]}`" class="no-underline">
          <div class="text-lg leading-1.2">
            <span v-if="route.lang === 'en'"
              class="text-xs border border-current rounded px-1 pb-0.2 mr-2 align-middle">English</span>
            <h3 class="inline-block m-1 text-stone-400 hover:text-black font-normal">{{ route.title }}</h3>
            <p class="hover:text-stone-500">{{ route.description }}</p>
          </div>
        </li>
      </NuxtLink>
    </ContentList>
  </ol>
</template>