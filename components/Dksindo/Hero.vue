<style>
/* Parallax Section */
.parallax {
  background-image: url("/images/heros/new-hero2.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: #fff;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.parallax h1 {
  font-family: "Poppins";
  text-shadow: 4px 5px rgb(41 41 41);
  font-weight: 800;
}

.parallax p {
  font-family: "Caveat";
  text-shadow: 2px 3px rgb(41 41 41);
  font-weight: 700;
}

.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1.5);
  z-index: -1;
}

.hero-text {
  position: relative;
  display: inline-block;
  padding: 3.5em 3em;
  background-color: rgba(93, 93, 93, 0.3);
  border-radius: 8px;
  z-index: 1;
}

/* Overlay styles */
#loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

#loading-overlay.hidden {
  display: none;
}

/* Responsive Style */
@media (max-width: 768px) {
  /* Atur posisi Lottie Animation ke bawah pada layar mobile */
  .animated-spin {
    position: absolute;
    bottom: 15.5rem;
    width: 150px;
    height: 150px;
  }

  .hero-text {
    padding: 2em 2em;
  }

  .parallax h1 {
    font-size: 2rem;
  }

  .parallax p {
    font-size: 1.5rem;
    margin-top: 5.5rem;
  }

  .hero-text {
    height: 70vh;
    background-color: rgba(93, 93, 93, 0.5);
  }
}
</style>

<template>
  <div>
    <!-- Loading Overlay -->
    <div id="loading-overlay">
      <img src="/img/single-logo.png" class="w-80" alt="" />
    </div>

    <!-- Parallax Section -->
    <div class="parallax animate-on-scroll">
      <div class="hero-text w-screen">
        <div class="flex justify-center">
          <div>
            <h1
              class="mt-12 md:mt-0 text-3xl md:text-7xl md:leading-none leading-relaxed"
            >
              <div class="flex justify-center">
                <div>
                  <img src="/img/single-logo.png" alt="" class="w-48" />
                </div>
              </div>
              <div class="flex justify-center">
                <div class="shrink-0 w-full">
                  <h5 class="text-[#007acc]">Nusantara</h5>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="shrink-0 w-full">
                  <h5 class="text-[#2e8b57]">Halal Global</h5>
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div class="flex justify-center mt-2">
          <div>
            <p class="text-[#c5a02e] mt-4 md:mt-4 text-2xl md:text-5xl">
              Mendunia dengan halal
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.playParallax();
    this.simulateLoading();
  },
  methods: {
    playParallax() {
      document.addEventListener("DOMContentLoaded", function () {
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn");
              }
            });
          },
          {
            threshold: 0.5,
          }
        );

        document
          .querySelectorAll(".animate-on-scroll")
          .forEach(function (elem) {
            observer.observe(elem);
          });
      });
    },
    simulateLoading() {
      // Simulate a loading delay
      setTimeout(() => {
        document.getElementById("loading-overlay").classList.add("hidden");
        document.querySelector(".animated-spin").classList.remove("hidden");
      }, 1500); // Delay for 3 seconds
    },
  },
};
</script>
