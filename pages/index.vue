<template>
  <div>
    <dksindo-navigation />

    <dksindo-hero />

    <dksindo-about-halal />

    <ContentQuery
      path="/"
      :only="[
        'title',
        'description',
        'headline',
        'excerpt',
        'date',
        'tags',
        '_path',
        'src',
      ]"
      :sort="{
        date: 1,
      }"
      :limit="blogCountLimit"
      v-slot="{ data }"
    >
      <dksindo-products :data="data" />
    </ContentQuery>

    <dksindo-gallery />

    <dksindo-portfolio />
    <!-- <dksindo-samples /> -->
    <dksindo-contact :teams="teams" />
    <dksindo-footer />
  </div>
</template>

<script setup>
import teamsData from "~/content/teams.json";

useHead({
  script: [
    {
      src: "https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js",
      async: true,
    },
  ],
});

const blogCountLimit = 9;

const { data } = await useAsyncData(`content-/services`, async () => {
  const _services = await queryContent("/services").only("headline").find();
  return Math.ceil(_services.length / blogCountLimit);
});

const teams = teamsData;

// defineOgImageComponent('Nuxt', {
// 	headline: 'Dksindo 👨🏻‍💻',
// 	title: 'Selamat Datang di Halal Kita',
// 	description: 'Hello, kami Halal Kita sebagai Halal Kita, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri. salaam...',
// })

useHead({
  title: "Halal Kita",
  meta: [
    {
      name: "description",
      content:
        "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.",
    },
    {
      name: "og:title",
      content: "Halal Kita",
    },
    {
      name: "description",
      content:
        "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.",
    },
    {
      name: "og:description",
      content:
        "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.",
    },
    {
      name: "og:image",
      content:
        "https://raw.githubusercontent.com/codesyariah122/supervisor-halal/refs/heads/main/public/images/gallery/gallery1.jpeg",
    },
  ],
});

useSeoMeta({
  title: "Halal Kita",
  ogTitle: "Halal Kita",
  description:
    "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.",
  ogDescription:
    "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.",
  ogImage:
    "/logo-site.png",
  twitterCard: "summary_large_image",
});
</script>
