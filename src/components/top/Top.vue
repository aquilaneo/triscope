<script setup lang="ts">
import CurrentFileList, { CurrentFileItem } from "./CurrentFileList.vue";

const currentImages: CurrentFileItem[] = [
	{ fileName: "test1.jpg", filePath: "/Users/user1/Pictures/" },
	{ fileName: "test2.jpg", filePath: "/Users/user1/Pictures/" },
	{ fileName: "test3.jpg", filePath: "/Users/user1/Pictures/" },
];

const currentVideos: CurrentFileItem[] = [
	{ fileName: "test1.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test2.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test3.mp4", filePath: "/Users/user1/Movies/" },
];

const currentAudios: CurrentFileItem[] = [
	{ fileName: "test1.mp3", filePath: "/Users/user1/Music/" },
	{ fileName: "test2.mp3", filePath: "/Users/user1/Music/" },
	{ fileName: "test3.mp3", filePath: "/Users/user1/Music/" },
];
</script>


<template>
	<div class="top">
		<section class="top__panel top__panel--left">
			<div class="title">
				<h1>triscope</h1>
				<div>ver 1.0.0</div>
			</div>
			<div class="open-file">
				<div class="open-file__button">
					<div>ファイルを開く</div>
				</div>

				<div>またはここにドラッグ&ドロップ</div>
			</div>
		</section>

		<section class="top__panel top__panel--right">
			<div>
				<h2>最近開いたファイル</h2>
			</div>
			<div class="current-file-list__item">
				<h3>イメージ</h3>
				<CurrentFileList :items="currentImages"/>
			</div>
			<div class="current-file-list__item">
				<h3>ビデオ</h3>
				<CurrentFileList :items="currentVideos"/>
			</div>
			<div class="current-file-list__item">
				<h3>オーディオ</h3>
				<CurrentFileList :items="currentAudios"/>
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
	padding: 1rem 0;

	background-color: #FAFAFA;

	display: flex;
	box-sizing: border-box;
}

.top__panel {
	width: 50%;
	height: 100%;
	padding: 0 1rem;
}

.top__panel:not(:last-child) {
	border-right: solid var(--main-color) thin;
}

.top__panel--left {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.title {
	width: 100%;
	text-align: center;
	margin-bottom: 4rem;
}

.open-file {
	width: 100%;
	text-align: center;
}

.open-file__button {
	width: 8rem;
	height: 8rem;
	margin: 0 auto 1rem auto;
	border: solid var(--main-color) thin;
	border-radius: 0.4rem;
}

.top__panel--right {
	display: grid;
	grid-template-rows: 2rem 1fr 1fr 1fr 2rem;
}

.current-file-list__item:not(:last-child) {
	border-bottom: solid var(--main-color) thin;
}
</style>