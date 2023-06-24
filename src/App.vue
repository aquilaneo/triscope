<script setup lang="ts">
import { ref } from "vue";

import Top from "./components/top/Top.vue";
import ImageViewer from "./components/image-viewr/ImageViewer.vue";
import VideoViewer from "./components/video-viewer/VideoViewer.vue";
import { FileType } from "./js/types";
import { detectFileType, readFileAsDataURL } from "./js/common";

// data定義
const file = ref<File | null>(null);
const fileType = ref<FileType>(FileType.NotSet);
const fileDataUrl = ref<string>("");

// ファイル選択時
async function onFileSelected(inputFile: File) {
	fileType.value = detectFileType(inputFile);
	fileDataUrl.value = await readFileAsDataURL(inputFile);
}
</script>

<template>
	<div class="app">
		<!-- トップページ -->
		<Top :onFileSelected="onFileSelected" v-if="fileType === FileType.NotSet"/>

		<!-- 画像ビューアー -->
		<ImageViewer v-if="fileType === FileType.Image" :fileDataUrl="fileDataUrl"/>

		<!-- 動画ビューアー -->
		<!--<VideoViewer v-if="fileType === FileType.Video" :fileDataUrl="fileDataUrl"/>-->

		<video :src="fileDataUrl"></video>
	</div>
</template>

<style scoped>
.app {
	width: 100vw;
	height: 100vh;
}
</style>
