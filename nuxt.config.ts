// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  target: 'static',
  experimental: {
    payloadExtraction: false
  },
  // router: {
  //   options: {
  //     strict: false
  //   }
  // },

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      }
    },
  },

  alias: {
    // "@": resolve(__dirname, "/")
    assets: "/<rootDir>/assets"
  },
  body: true,
  components: true,
  devtools: { enabled: true },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keyword",
        content: "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam. Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian",
      },
      {
        name: "description",
        content: "Halal Kita adalah lembaga yang berkomitmen untuk memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang transparan, dan memastikan standar halal yang sesuai dengan syariat Islam. Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://supervisor-halal.vercel.app/",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Supervisor Halal - Indonesia",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Supervisor Halal - Indonesia",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:"Dengan pengalaman yang mendalam dalam bidang ini, kami hadir untuk membantu setiap bisnis dengan proses yang efisien dan mudah dipahami, tanpa mengurangi kualitas dan keandalan sertifikasi halal yang diterima oleh konsumen. Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://raw.githubusercontent.com/codesyariah122/supervisor-halal/refs/heads/main/public/images/gallery/gallery1.jpeg",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "600",
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "600",
      },
      ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' },
      ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', body: true, defer: true }
      ]
  },
  css: [
    "@/assets/css/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
    ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/content',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: true,
        Montserrat: true,
        Roboto: true,
        DancingScript: true,
        Caveat: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
    }],
    "@nuxt/content"
    ],
  carousel: {
    prefix: 'C'
  },

  device: {
    refreshOnResize: true
  },
  pwa: {
    meta: {
      title: "Phoenix Digital Tech Solution",
      author: "Phoenix",
      icon: true,
      canonical: "https://dksindo.com/",
      description: "kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri",
      keywords: "Phoenix Digital Tech Solution - House Of Web Development & IT Consultant",
      ogUrl: "https://dksindo.com/",
      ogType: "website",
      ogSiteName: "Phoenix Digital Tech Solution",
      ogTitle: "Phoenix Digital Tech Solution",
      ogImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ogImageWidth: "600",
      ogImageHeight: "400",
    },
    manifest: {
      lang: "en",
      name: "Phoenix Digital Tech Solution",
      short_name: "Phoenix Digital Tech Solution",
      description: "kami Phoenix Digital Tech Solution sebagai Konsultan IT, Web Development, dan seputar solusi digital, kami membantu memimpin Anda melalui perjalanan digital, mulai dari perencanaan hingga pelaksanaan. Dengan pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, kami membawa solusi yang inovatif dan terukur untuk membantu bisnis Anda mencapai tujuan online mereka dengan percaya diri",
      start_url: "https://dksindo.com/",
      lang: "en",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      icons: [
      {
        src: "/img/icons/android-launchericon-48-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-72-72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-96-96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/img/icons/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
      ],
    },
  },

  buildModules: [
    'nuxt-tailwind-heroicons'
    ],
  plugins: [
    '~/plugins/fontawesome',
    {src: '~/plugins/crisp', mode: 'client', ssr: false}
    ],

  // sourcemap: false,
  // content: {
  //   documentDriven: true,
  //   markdown: {
  //     prism: {
  //       theme: '/css/prism-dracula.css'
  //     }
  //   }
  // }
})