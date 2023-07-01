<script setup lang="ts">
const props = defineProps({
	fileBlobUrl: {
		type: String,
		required: true,
	}
});
</script>

<template>
	<div class="video-viewer">
		<video :src="props.fileBlobUrl" class="video-viewer__video" controls></video>
	</div>
</template>

<style scoped>
.video-viewer {
	background-color: var(--background-color);
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

.video-viewer__video {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>
