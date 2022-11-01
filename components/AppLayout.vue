<script setup lang="ts">
const { cover } = useAppConfig()
const { page, layout } = useContent()

const formatDate = (dateStr: string) => {
  if (dateStr) {
    const date = new Date(dateStr)
    const years = date.getFullYear()
    const month = date.getMonth()
    const days = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const MM = `${month + 1}`.padStart(2, '0')
    const DD = `${days}`.padStart(2, '0')
    const HH = `${hours}`.padStart(2, '0')
    const mm = `${minutes}`.padStart(2, '0')
    return `${years}-${MM}-${DD} ${HH}:${mm}`
  } else {
    return null
  }
}
</script>

<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <div class="document-driven-page relative">
      <NuxtLayout :name="layout">
        <div class="absolute top-20 mt-1 text-sm text-gray-400">
          <span class="mr-2">{{ page.author }}</span>
          <span>{{ formatDate(page.date) }}</span>
        </div>
        <ContentRenderer v-if="page" :key="page._id" :value="page">
          <template #empty="{ value }">
            <DocumentDrivenEmpty :value="value" />
          </template>
        </ContentRenderer>
        <div class="text-gray-400">
          <span>{{page.lastmod ? `文章已于${formatDate(page.lastmod)}修改` : null }}</span>
          <span v-for="tag in page.tags">#{{ tag }}&nbsp;</span>
        </div>
      </NuxtLayout>
    </div>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-primary-50 dark:bg-primary-900;
}
</style>