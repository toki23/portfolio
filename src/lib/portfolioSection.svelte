<script>
	export let title;
</script>

<main class="m-6">
	<h1 class="border-b-2 w-1/4 text-5xl">{title}</h1>
	<div class="text-xl">
		<slot />
	</div>
</main>
