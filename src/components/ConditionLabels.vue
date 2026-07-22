<script setup lang="ts">
import type { ToothConditionGroup } from "../types";

withDefaults(
	defineProps<{
		conditions?: ToothConditionGroup[];
		labelClass?: string;
	}>(),
	{
		labelClass: "",
	},
);
</script>

<template>
	<ul
		v-if="conditions && conditions.length > 0"
		:class="labelClass"
		:style="{
			display: 'flex',
			gap: '8px',
			fontFamily: 'sans-serif',
			fontSize: '14px',
			flexWrap: 'wrap',
		}"
		aria-label="Tooth condition legend"
	>
		<li
			v-for="condition in conditions"
			:key="condition.label"
			:style="{
				display: 'flex',
				alignItems: 'center',
				gap: '8px',
			}"
		>
			<span
				aria-hidden="true"
				:style="{
					width: '14px',
					height: '14px',
					borderRadius: '4px',
					background: condition.fillColor,
					border: `2px solid ${condition.outlineColor ?? condition.fillColor}`,
					display: 'inline-block',
				}"
			/>
			<span :style="{ textTransform: 'capitalize' }">{{ condition.label }}</span>
		</li>
	</ul>
</template>
