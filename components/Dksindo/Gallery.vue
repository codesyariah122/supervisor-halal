<template>
    <section id="gallery" class="p-8 bg-gray-100">
      <h2 class="text-4xl font-semibold text-center text-gray-800 mb-8">
        Galeri Halal Kita
      </h2>
  
      <!-- Gallery Grid -->
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl"
        >
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="bg-white rounded-lg shadow-md cursor-pointer"
          >
            <!-- Check if item is an image or a video -->
            <div v-if="item.type === 'image'">
              <img
                :src="item.src"
                :alt="'Image ' + index"
                class="w-full h-48 object-cover rounded-lg"
                @click="openLightbox(index)"
              />
            </div>
            <div v-else-if="item.type === 'video'">
              <video
                controls
                :src="item.src"
                class="w-full h-48 object-cover rounded-lg"
              ></video>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Lightbox Modal -->
      <vue-easy-lightbox
        v-if="lightboxVisible"
        :visible="lightboxVisible"
        :imgs="images"
        :index="lightboxIndex"
        @hide="closeLightbox"
      />
    </section>
  </template>
  
  <script>
  import VueEasyLightbox from "vue-easy-lightbox";
  
  export default {
    name: "Gallery",
    components: {
      VueEasyLightbox,
    },
    data() {
      return {
        galleryItems: [],
        lightboxVisible: false,
        lightboxIndex: 0,
      };
    },
    async mounted() {
      const response = await fetch("/api/gallery");
      const data = await response.json();
  
      // Gabungkan gambar dan video dalam satu array dengan tipe masing-masing
      const images = data.images.map((src) => ({ src, type: "image" }));
      const videos = data.videos.map((src) => ({ src, type: "video" }));
  
      this.galleryItems = [...images, ...videos];
    },
    methods: {
      openLightbox(index) {
        this.lightboxIndex = index;
        this.lightboxVisible = true;
      },
      closeLightbox() {
        this.lightboxVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom Styles for Gallery */
  </style>
  