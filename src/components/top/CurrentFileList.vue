<script setup lang="ts">
export interface CurrentFileItem {
	fileName: string;
	filePath: string;
}

const props = defineProps<{ items: Array<CurrentFileItem> }>();
</script>

<template>
	<ul class="current-file-list">
		<li v-for="item in props.items" class="current-file-list__file-item">
			<div class="file-item__name-path-container">
				<div>{{ item.fileName }}</div>
				<div class="file-item__file-path">{{ item.filePath }}</div>
			</div>
			<div class="file-item__remove-button">×</div>
		</li>
	</ul>
</template>

<style scoped>
.current-file-list {
	width: 100%;
}

.current-file-list__file-item {
	display: grid;
	grid-template-columns: 1fr 1rem;
}

.file-item__name-path-container {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.file-item__file-path {
	font-size: 0.8rem;
	margin-left: 1rem;
}

.file-item__remove-button {
	text-align: center;
}

</style>