<template>
	<footer class="bg-gray-100 shadow-lg">
		<div class="container text-gray-500 w-full p-4 md:py-8">
			<div class="sm:flex sm:items-center sm:justify-between">
				<a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
					<img src="@/assets/images/logo-nhg.png" class="max-w-sm w-[250px] bg-transparent">
				</a>
				<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 hover:text-gray-400 sm:mb-0">
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">About</a>
					</li>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
					</li>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
					</li>
					<li>
						<a href="#" class="hover:underline">Contact</a>
					</li>
				</ul>
			</div>
			<hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span class="block text-sm text-gray-500 hover:text-gray-400 sm:text-center">🧢 {{year}} <a href="https://supervisor-halal.vercel.app" class="hover:underline">Nusantara Halal Global™</a>. All Rights Reserved.</span>
		</div>
	</footer>
</template>

<script setup>
	const date = new Date;
	const year = date.getFullYear();
</script>

<style scoped>
	.brand {
		font-family: 'Poppins';
	}
</style>