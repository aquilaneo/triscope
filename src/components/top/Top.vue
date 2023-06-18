<script setup lang="ts">

</script>


<template>
	<div class="top">
		<section class="top__panel top__panel--left">
			<div>
				<h1>triscope</h1>
				<div>ver 1.0.0</div>
			</div>
			<div>

			</div>
		</section>

		<section class="top__panel top__panel--right">
			<div>
				<h2>最近開いたファイル</h2>
			</div>
			<div>
				<h3>イメージ</h3>

			</div>
			<div>
				<h3>ビデオ</h3>

			</div>
			<div>
				<h3>オーディオ</h3>

			</div>
			<div>
				<button>履歴を削除</button>
			</div>
		</section>
	</div>
</template>


<style scoped>
.top {
	width: 100%;
	height: 100%;
	padding: 1rem;

	background-color: #FAFAFA;

	display: flex;
	box-sizing: border-box;
}

.top__panel {
	width: 50%;
	height: 100%;
}

.top__panel--right {
	display: grid;
	grid-template-rows: 2rem 1fr 1fr 1fr 2rem;
}
</style>