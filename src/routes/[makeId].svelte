<script context="module">
	import { getModelsByMakeId  } from "$lib/store";
  
	
	export async function load(ctx) {
		let makeId = ctx.page.params.makeId;
		const models = await getModelsByMakeId(makeId);


		
		//  return { 
		//    props: { models }
		//   }
		return {
				headers: { 'content-type': 'application/json' },
				props: { models } 
			}
	}
  </script>
  
  <script>
	export let models;
	// console.log(models);
  
  </script>
  

  <!-- const result = await (
    await fetch(`https://my-server/app/ping?value=${value}`)
  ).json(); -->
  <!-- 
  <div class="flex flex-col items-center">
  
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
  
	<img class="card-image" src={pokeman.sprites['front_default']} 
	alt={pokeman.name}
	/>
  </div> -->
  
  <!-- <pre></pre> -->
<svelte:head>
  {@html '<script type="application/ld+json">'+ JSON.stringify(models,null,2) + '</script>'}
  
  <pre>{JSON.stringify(models,null,2)}</pre>
  
</svelte:head>
 
 