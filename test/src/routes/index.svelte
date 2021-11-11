<script context="module">
	import { addFormatter, config, registerSvelecte } from 'svelecte/component.js';
  	import Svelecte from "svelecte";
	registerSvelecte('el-svelecte');

  
	let payload = null;

	function onSubmit(e) {
	const object = {};
	// const ModelData = data.uvdb.search_uvdb_models.items.map((data) => ({
	// 	 	name: data.name,
	// 	 	id: data.id,
	// 	 }));
    // ModelData = formData;    
	const formData = new FormData(e.target);
	const el = document.createElement('el-svelecte');
	
	formData.forEach((value, key) => {
		if (object[key]) {
		object[key] += ', ' + value;
			return;
			}
			object[key] = value
		});
		payload = JSON.stringify(object, null, 2);
	}



	export const prerender = true;
</script>


<script>
	import makes from '$lib/data/makes.js';
	import { Make, Model } from '$lib/store';

	let selection = null;
	let value = null;

	
</script>


<form action="" on:submit|preventDefault={onSubmit}>
	<el-svelecte
		name="parent_value" placeholder="make"
		searchable=True
		clearable=True
		options={makes}
		id="parent" required >
	
		
	</el-svelecte>
	<el-svelecte name="child_value" parent="parent" required placeholder="model"
	  searchable=True
	  clearable=True
	  id="model"
	  fetch="/make/[parent]/models">
	</el-svelecte>
	<el-svelecte name="child_value" parent="model" required placeholder="year"
		searchable=True
		clearable=True
		
	fetch="https://api.findcar.parts/api/rest/make/[parent]/models">
  </el-svelecte>

	{#if payload}
	  <pre>{payload}</pre>
	{/if}
  </form>