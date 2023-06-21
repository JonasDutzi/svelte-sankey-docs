<script lang="ts">
	export let label: string;
</script>

<div class="sv-sankey__label">{label}</div>

<style>
	.sv-sankey__label {
		margin-inline: 0.5rem;
		position: relative;
	}
	.sv-sankey__label::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: black;
		opacity: 0.05;
	}
</style>
