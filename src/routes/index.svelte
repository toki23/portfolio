<script>
	import Section from '$lib/portfolioSection.svelte';
</script>

<main class="">
	<div class=" h-screen bg-cover overflow-hidden " style="background-image:url('/ちょっとモノクロ.jpg')">
		<h1 class="text-white text-9xl font-arial mt-20 ml-10">吉谷ときのポートフォリオ</h1>
	</div>
	<Section title="プロフィール">
		<ul>
			<li>学校:都立産業技術高等専門学校</li>
			<li>学年:4年</li>
			<li>コース:電気電子工学コース</li>
		</ul>
	</Section>

	<Section title="技術">JSとかやってる</Section>
	<Section title="実績">
		<ul>
			<li>高専プロコン特別賞</li>
			<li>KDDIハッカソン優秀賞</li>
		</ul>
	</Section>
	<Section title="リンク">
		<p>
			github: <a href="https://github.com/toki23" class="text-blue-500 border-b-2"
				>https://github.com/toki23</a
			>
		</p>
		<p>
			twitter: <a href="https://twitter.com/rareredbird" class="text-blue-500 border-b-2"
				>https://twitter.com/rareredbird</a
			>
		</p>
	</Section>
</main>
