<template>
  <section id="kontak" class="bg-white py-24 -mb-4">
    <div class="container mx-auto shadow-sm rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Our Contact</h2>
      <!-- Product List -->
      <div class="flex justify-center items-center ml-0 lg:ml-[5rem]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div v-for="team in teams" :key="team._id">
            <div class="col-span-1 w-full md:max-w-md max-w-full">
              <div
                class="container mx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white"
              >
                <div
                  class="relative z-10"
                  style="
                    clip-path: polygon(
                      0 0,
                      100% 0,
                      100% 100%,
                      0 calc(100% - 5vw)
                    );
                  "
                >
                  <img class="w-full" :src="team.src" alt="Profile image" />
                  <div class="text-center absolute w-full" style="bottom: 4rem">
                    <p
                      class="text-yellow-100 tracking-wide uppercase text-lg font-bold"
                    >
                      {{ team.name }}
                    </p>
                    <p>
                      <a
                        href="https://unsplash.com/@omarcelorangel"
                        target="_blank"
                        class="text-green-100 text-sm hover:text-green-400"
                        >{{ team.jobTitle }}</a
                      >
                    </p>
                  </div>
                </div>
                <div
                  class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10"
                >
                  <p class="flex items-center text-gray-400">
                    <span
                      class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"
                    ></span
                    >online
                  </p>
                  <button
                    @click="whatsappRedirect(team.phone, team)"
                    class="p-4 bg-emerald-600 rounded-full hover:bg-emerald-500 focus:bg-emerald-700 transition ease-in duration-200 focus:outline-none text-7xl text-white"
                  >
                    <font-awesome-icon icon="fa-brands fa-whatsapp " />
                  </button>
                </div>
                <div class="p-6 pb-8 text-gray-600 text-left">
                  <p>{{ team.name }} - {{ team.jobTitle }}</p>
                  <p class="text-sm mt-2">Phone : {{ team.phoneText }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center p-6">
      <div class="shrink-0 w-screen">
        <!-- Replace the src attribute with your Google Maps embed URL -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63356.969461276094!2d107.47990755316361!3d-7.031536050313609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68edcfb8afb603%3A0x85a6a2316b27553b!2sSoreang%2C%20Kec.%20Soreang%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1733981421743!5m2!1sid!2sid"
          width="100%"
          height="800px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  teams: {
    type: [Array, Object],
    default: function () {
      return {};
    },
    required: true,
  },
});

const whatsappRedirect = (num, data) => {
  const whatsappNumber = num;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
  const text = `Hello, ${data.name} saya perlu layanan jasa IT Consultant untuk bisnis saya ?? apakah bisa berkonsultasi untuk layanan yang dimiliki dksindo.`;
  const encodeText = encodeURIComponent(text);
  window.open(`${whatsappUrl}${encodeText}`);
};
</script>
