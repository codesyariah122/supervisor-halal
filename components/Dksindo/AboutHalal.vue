<template>
  <section
    id="about"
    class="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-100 rounded-lg shadow-lg"
  >
    <!-- Content Section -->
    <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
      <h2 class="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
        Tentang Nusantara Halal Global
      </h2>
      <p class="text-base lg:text-lg text-gray-600 mb-6">
        Nusantara Halal Global adalah lembaga yang berkomitmen untuk
        memastikan kehalalan produk yang dipasarkan di Indonesia. Kami mendukung
        perusahaan dalam proses sertifikasi halal, memberikan bimbingan yang
        transparan, dan memastikan standar halal yang sesuai dengan syariat
        Islam.
      </p>
      <p class="text-base lg:text-lg text-gray-600">
        Dengan pengalaman yang mendalam dalam bidang ini, kami hadir untuk
        membantu setiap bisnis dengan proses yang efisien dan mudah dipahami,
        tanpa mengurangi kualitas dan keandalan sertifikasi halal yang diterima
        oleh konsumen.
      </p>
    </div>

    <!-- Image Section with Slider -->
    <div class="w-full lg:w-1/2 pl-0 lg:pl-8 relative">
      <!-- Loader -->
      <div
        v-if="isLoading"
        class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10"
      >
      <lottie-player
        src="https://lottie.host/8c3d5bdc-dd82-4713-9408-c14587668e70/uijrARaCbi.json"
        background="##FFFFFF"
        speed="1"
        style="width: 500px; height: 500px"
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
      </div>

      <CCarousel :items-to-show="carouselItemsToShow" :wrap-around="true">
        <CSlide v-for="(slide, index) in images" :key="index">
          <div class="bg-white rounded-lg shadow-md">
            <img
              :src="slide"
              :alt="'Image ' + index"
              class="w-full h-auto lg:h-48 object-cover cursor-pointer"
              @click="openLightbox(index)"
            />
          </div>
        </CSlide>
        <template #addons>
          <CNavigation />
        </template>
      </CCarousel>
    </div>

    <!-- Lightbox -->
    <vue-easy-lightbox
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
  name: "AboutUsComponent",
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      carouselItemsToShow: 2.5,
      images: [],
      lightboxVisible: false,
      lightboxIndex: 0,
      isLoading: true, // Tambahkan properti isLoading
    };
  },

  async mounted() {
    try {
      const response = await fetch("/api/images");
      const data = await response.json();
      this.images = data?.images;
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      this.isLoading = false; // Hentikan loading setelah proses selesai
    }
    this.setCarouselItems();
    window.addEventListener("resize", this.setCarouselItems);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.setCarouselItems);
  },

  methods: {
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxVisible = true;
    },
    closeLightbox() {
      this.lightboxVisible = false;
    },
    setCarouselItems() {
      if (window.innerWidth < 768) {
        this.carouselItemsToShow = 1;
      } else {
        this.carouselItemsToShow = 2.5;
      }
    },
  },
};
</script>

<style scoped>

/* Overlay styles */
#loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

#loading-overlay.hidden {
  display: none;
}

</style>
