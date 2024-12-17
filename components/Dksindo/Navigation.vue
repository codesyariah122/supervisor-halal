<template>
    <nav class="my__nav bg-[rgba(255, 255, 255, 0.8)] text-gray-50 border-[rgba(255, 255, 255, 0.8)] fixed top-0 z-50 w-full">
        <div class="wrapper__nav flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
            <a href="https://flowbite.com" class="flex items-center space-x-2 text-3xl rtl:space-x-reverse">
                <img v-if="!scroll" src="@/assets/images/logo-nhg2.webp" class="brand__logo max-w-sm w-[50%] bg-transparent">
                <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-50">Nusantara Halal Global</span> -->
                <img v-else src="@/assets/images/logo-nhg-hitam.png" class="brand__logo max-w-sm w-[50%] bg-transparent">

            </a>
            <button @click="toggleMenu" data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[rgba(255, 255, 255, 0.8)]" aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                <ul class="nav__menu flex flex-col p-4 md:p-0 mt-4 border text-gray-50 border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent font-semibold">
                    <li>
                        <a href="#" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#about" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">About</a>
                    </li>
                    <li>
                        <a href="#service" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Service</a>
                    </li>
                    <li>
                        <a href="#gallery" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Gallery</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Portfolio</a>
                    </li>
                    <li>
                        <a href="#kontak" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="isMenuOpen" id="mega-menu-full-dropdown" class="border-[rgba(255, 255, 255, 0.8)] shadow-sm bg-[rgba(255, 255, 255, 0.8)] md:bg-[rgba(255, 255, 255, 0.8)] border-y">
            <div class="grid max-w-screen-xl mx-auto text-gray-50 text-center sm:grid-cols-2 md:px-6">
                <ul>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Home</div>
                        </a>
                    </li>
                    <li>
                        <a href="#service" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Service</div>
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">About</div>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Portfolio</div>
                        </a>
                    </li>
                    <li>
                        <a href="#kontak" class="block p-3 rounded-lg hover:text-gray-500">
                            <div class="font-semibold">Kontak</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            scroll: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu(event) {
            // Menutup menu jika klik di luar menu
            if (this.isMenuOpen && !this.$el.contains(event.target)) {
                this.isMenuOpen = false;
            }
        }
    },
    mounted() {
        // Menambahkan event listener untuk mendeteksi klik di luar
        document.addEventListener('click', this.closeMenu);
        window.addEventListener('scroll', this.scrollingNav);
    },
    beforeDestroy() {
        // Menghapus event listener saat komponen dihapus
        document.removeEventListener('click', this.closeMenu);
    },

    methods: {
        scrollingNav() {
            if(window.scrollY > 50) {
                document.querySelector('.my__nav').classList.add('shadow-lg')
                document.querySelector('.my__nav').classList.add('bg-white')
                document.querySelector('.my__nav').classList.add('h-[110px]')
                document.querySelector('.wrapper__nav').classList.remove('p-2')
                document.querySelector('.nav__menu').classList.remove('text-gray-50')
                document.querySelector('.nav__menu').classList.add('text-gray-800')
                this.scroll = true;
            } else {
                document.querySelector('.my__nav').classList.remove('shadow-lg')
                document.querySelector('.my__nav').classList.remove('bg-white')
                document.querySelector('.my__nav').classList.remove('h-[110px]')
                document.querySelector('.my__nav').classList.add('bg-transparent')
                document.querySelector('.wrapper__nav').classList.add('p-2')
                document.querySelector('.nav__menu').classList.remove('text-gray-800')
                document.querySelector('.nav__menu').classList.add('text-gray-50')
                this.scroll = false;
            }
        }
    }
};
</script>
