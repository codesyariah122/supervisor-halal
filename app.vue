<template>
  <div>
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup>
  const { $pwa } = useNuxtApp()

  useHead({
    title: 'Nusantara Halal Global',
    meta: [
      { name: 'description', content: 'The Perfect Tech Experience.' }
      ],
  });

  useSeoMeta({
    title: 'Nusantara Halal Global',
    ogTitle: 'Nusantara Halal Global',
    description: 'Nusantara Halal Global adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.',
    ogDescription: 'Nusantara Halal Global adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.',
    ogImage: 'https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?b=1&s=170667a&w=0&k=20&c=BNF7gZ3XmCEf0_H8bUb6TLOvrDPVOmrEzbuu8FZrOao=',
    twitterCard: 'summary_large_image',
  })

  onMounted(() => {
    if ($pwa.offlineReady)
      confirm('App ready to work offline')
  })
</script>