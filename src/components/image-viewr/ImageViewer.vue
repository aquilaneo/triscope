<script setup lang="ts">
const props = defineProps({
	fileBlobUrl: {
		type: String,
		required: true,
	}
});
</script>

<template>
	<div class="image-viewer">
		<img :src="props.fileBlobUrl" class="image-viewer__image">
	</div>
</template>

<style scoped>
.image-viewer {
	background-color: var(--media-background-color);
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

.image-viewer__image {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>
