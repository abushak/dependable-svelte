<script context="module">
	import { addFormatter, config, registerSvelecte } from 'svelecte/component.js';
  	import Svelecte from "svelecte";
	registerSvelecte('el-svelecte');

  
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


</script>

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

<!-- <form action="" on:submit|preventDefault={onSubmit} class="basic-attrib sm:flex-none md:flex justify-center">
	<div class="flex-1 car-attrib">
	  <Svelecte bind:value={$Make}
		name="parent_value" placeholder="make"
		searchable=True
		clearable=True
		options={makes}
		
	  >

	  </Svelecte>
	</div>
	<div class="flex-1 car-attrib">
	  <Svelecte bind:value={$Model}
		name="child_value" parent="parent" required placeholder="model"
		searchable=True
		clearable=True
		options={Model}
		id="model"
		fetch="/api/[parent]">
		
	  </Svelecte>
	</div>
	<div class="flex-1 car-attrib">  
	  <Svelecte 
		name="child_value" parent="model"
		required placeholder="year"
		fetch="/api/{Model}/models/[parent]"
		searchable=True
		clearable=True
		id="year"
		>
	  </Svelecte>
	</div>
	<div class="flex-1 car-attrib ">
	  <Svelecte bind:value={$Make}
		name="parent_value" placeholder="submodels"
	   
		searchable=True
		clearable=True
		
		id="is-parent" required>
	  </Svelecte>
	</div> 
	{#if payload}
	<pre>{payload}</pre>
  {/if}
</form>
 -->
