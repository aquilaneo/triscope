<script setup lang="ts">
import { ref } from "vue";

import Top from "./components/top/Top.vue";
import ImageViewer from "./components/image-viewr/ImageViewer.vue";
import VideoViewer from "./components/video-viewer/VideoViewer.vue";
import * as Types from "./js/types";
import * as Common from "./js/common";

// data定義
const fileType = ref<Types.FileType>(Types.FileType.NotSet);
const fileBlobUrl = ref<string>("");

// ファイル選択時
async function onFileSelected(fileUrl: string) {
	const fileBlob = await Common.readFileAsBlob(fileUrl);
	fileBlobUrl.value = URL.createObjectURL(fileBlob);
	fileType.value = Common.detectFileType(fileBlob);
}
</script>

<template>
	<div class="app">
		<!-- トップページ -->
		<Top :onFileSelected="onFileSelected" v-if="fileType === Types.FileType.NotSet"/>

		<!-- 画像ビューアー -->
		<ImageViewer v-if="fileType === Types.FileType.Image" :fileBlobUrl="fileBlobUrl"/>

		<!-- 動画ビューアー -->
		<VideoViewer v-if="fileType === Types.FileType.Video" :fileBlobUrl="fileBlobUrl"/>
	</div>
</template>

<style scoped>
.app {
	width: 100vw;
	height: 100vh;
}
</style>
