<script context="module">
  	import Svelecte from "svelecte";

	let payload = null;

	function onSubmit(e) {
	const object = {};
 
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


	// export async function load({ params }) {
    // 	return await this.get(`.api/${params.makeId}.json`);
  	// }

	export const prerender = true;
</script>


<script>
	import makes from '$lib/data/makes.js';
	import {Make, Model, selectedMake} from '$lib/store';
	import MakeId from './[makeId].svelte';


	let selection = null;
	let value = null;

	function currentMake () {
		Make.update();
	}
	// import makeId from './api/[makeId].js';
	
	let Make_value

	Make.subscribe(value => {
		Make_value = value;
	});

	/**
	 * NOTE: I am comparing store values to text 'null', because you store it in localStorage.
	 * That should be fixed in $lib/store.js in your export function
	 * 
	 * I am using real API endpoints I found in your code to be able to test it properly.
	 * */ 
	$: model_fetchUrl = $Make && $Make !== 'null'
		? `https://api.findcar.parts/api/rest/make/${$Make}/models`
		: null;
	$: year_fetchUrl = $Model && $Model !== 'null'
		? `https://api.findcar.parts/api/rest/make/${$Make}/models/${$Model}`
		: null;

	/**
	 * Resolve 'items' property from response correctly
	 * @param resp
	 */
	function onFetch(resp) {
		if (resp.uvdb.search_uvdb_models) 
			return resp.uvdb.search_uvdb_models.items;
		if (resp.uvdb.search_uvdb_years) 
			return resp.uvdb.search_uvdb_years.items;
	};

</script>
<!--
<form action="" on:submit|preventDefault={onSubmit}>
	<el-svelecte 
			name="make" placeholder="make"
			searchable=True
			clearable=True
			options={makes}
			id="make" required> 
	
		<select id="make" name="make" multiple bind:value={$Make}></select>
		
	</el-svelecte>
	<el-svelecte name="child_value" parent="make" required placeholder="model"
	  searchable=True
	  clearable=True
	  id="model"
	  fetch="/api/[parent]">
	  <select id="model" name="model" bind:value={$Model}></select>
	</el-svelecte>
	<el-svelecte name="child_value" parent="model" required placeholder="year"
		searchable=True
		clearable=True
		fetch="/api/{Make}/models/[parent]">
	</el-svelecte> 

	{#if payload}
	  <pre>{payload}</pre>
	{/if}
  </form>
-->
<form action="" on:submit|preventDefault={onSubmit} class="basic-attrib sm:flex-none md:flex justify-center">
	<div class="flex-1 car-attrib">
	  <Svelecte bind:value={$Make}
		name="make" placeholder="make"
		clearable
		options={makes}
	  >
	  </Svelecte>
	</div>
	<div class="flex-1 car-attrib">
	  <Svelecte bind:value={$Model}
			disabled={!model_fetchUrl}
			name="model"
			required placeholder="model"
			clearable
			id="model"
			fetch={model_fetchUrl}
			fetchCallback={onFetch}
		></Svelecte>
	</div>
	<div class="flex-1 car-attrib">  
	  <Svelecte 
		disabled={!year_fetchUrl}
		fetch={year_fetchUrl}
		fetchCallback={onFetch}
		name="year"
		required placeholder="year"
		clearable
		id="year"
		>
	  </Svelecte>
	</div>
<!--
	<div class="flex-1 car-attrib ">
	  <Svelecte bind:value={$Make}
		name="parent_value" placeholder="submodels"
	   
		searchable=True
		clearable=True
		
		id="is-parent" required>
	  </Svelecte>
	</div> 
-->
	{#if payload}
	<pre>{payload}</pre>
  {/if}
</form>
