<script setup lang="ts">
import RecentFileList, { CurrentFileItem } from "./RecentFileList.vue";
import { ref } from "vue";

// ダミーデータ
const recentImages: CurrentFileItem[] = [
	{ fileName: "test1.jpg", filePath: "/Users/user1/Pictures/" },
	{ fileName: "test2.jpg", filePath: "/Users/user1/Pictures/" },
	{ fileName: "test3.jpg", filePath: "/Users/user1/Pictures/" },
];

const recentVideos: CurrentFileItem[] = [
	{ fileName: "test1.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test2.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test3.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test1.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test2.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test3.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test1.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test2.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test3.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test1.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test2.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test3.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test1.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test2.mp4", filePath: "/Users/user1/Movies/" },
	{ fileName: "test3.mp4", filePath: "/Users/user1/Movies/" },
];

const recentAudios: CurrentFileItem[] = [
	{ fileName: "test1.mp3", filePath: "/Users/user1/Music/" },
	{ fileName: "test2.mp3", filePath: "/Users/user1/Music/" },
	{ fileName: "test3.mp3", filePath: "/Users/user1/Music/" },
];

// props定義
const props = defineProps({
	onFileSelected: {
		type: Function,
		required: true,
	}
});

// data定義
const fileInput = ref<HTMLInputElement>();

// イベント
function openFileDialog() {
	fileInput.value?.click();
}

function onFileChanged() {
	if (!fileInput.value || !fileInput.value.files) {
		return;
	}

	// 入力したFileを親コンポーネントに渡す
	props.onFileSelected(fileInput.value.files[0]);
}
</script>


<template>
	<div class="top">
		<section class="top__panel top__panel--left">
			<div class="title">
				<h1 class="title__text">triscope</h1>
				<div class="title__version">ver 1.0.0</div>
			</div>
			<div class="open-file">
				<button class="open-file__button" @click="openFileDialog">ファイルを開く</button>
				<input type="file" class="hidden" ref="fileInput" accept="image/*, audio/*, video/*"
					   @change="onFileChanged">

				<div>またはここにドラッグ&ドロップ</div>
			</div>
		</section>

		<section class="top__panel top__panel--right">
			<div class="recent-files__header">
				<h2 class="header__text">最近開いたファイル</h2>
			</div>
			<div class="recent-files__type">
				<h3 class="type__name">
					<span>イメージ</span>
				</h3>
				<RecentFileList :items="recentImages"/>
			</div>
			<div class="recent-files__type">
				<h3 class="type__name">ビデオ</h3>
				<RecentFileList :items="recentVideos"/>
			</div>
			<div class="recent-files__type">
				<h3 class="type__name">オーディオ</h3>
				<RecentFileList :items="recentAudios"/>
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

	background-color: var(--background-color);

	display: flex;
	box-sizing: border-box;
}

.top__panel {
	width: 50%;
	height: 100%;
	padding: 0 1rem;
}

.top__panel:not(:last-child) {
	border-right: solid var(--sub-color) thin;
}

.top__panel--left {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.title {
	width: 100%;
	text-align: center;
	margin-bottom: 5rem;
}

.title__text {
	font-size: 4rem;
	font-weight: bold;
}

.title__version {
	color: var(--sub-color);
}

.open-file {
	width: 100%;
	text-align: center;
}

.open-file__button {
	width: 8rem;
	height: 8rem;
	margin: 0 auto 1rem auto;
}

.top__panel--right {
	display: grid;
	grid-template-rows: 1.5rem 1fr 1fr 1fr 1.5rem;
}

.header__text {
	font-size: 1.2rem;
	font-weight: bold;
}

.type__name {
	font-weight: bold;
}

.recent-files__type {
	padding: 0.5rem 0;
	box-sizing: border-box;

	display: grid;
	grid-template-rows: 1.5rem 1fr;
	overflow: hidden;
}

.recent-files__type:not(:last-child) {
	border-bottom: solid var(--sub-color) thin;
}
</style>