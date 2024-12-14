<template>
  <section
    id="about"
    class="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-100 rounded-lg shadow-lg"
  >
    <!-- Content Section -->
    <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
      <h2 class="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
        Tentang Supervisor Halal Indonesia
      </h2>
      <p class="text-base lg:text-lg text-gray-600 mb-6">
        Supervisor Halal Indonesia adalah lembaga yang berkomitmen untuk
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
    <div class="w-full lg:w-1/2 pl-0 lg:pl-8">
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
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  name: "AboutUsComponent",
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      carouselItemsToShow: 2.5, 
      images: [],
      lightboxVisible: false,
      lightboxIndex: 0
    };
  },

  async mounted() {
    const response = await fetch("/api/images");
    this.images = await response.json();
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
    }
  }
};
</script>

<style scoped>
/* Add custom styles */
</style>
