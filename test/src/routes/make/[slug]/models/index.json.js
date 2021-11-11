
	import { getModelsByMakeId  } from "$lib/store";
  
	
	export async function load(ctx) {
		let slug = ctx.page.params.slug;
		const models = await getModelsByMakeId (slug);
	  
		//  return { 
		//    props: { models }
		//   }
		return {
				props: { models}
			}
	}

	export let models;
	// console.log(models);
 
  
  
{/* <svelte:head>
  {@html '<script type="application/ld+json">'+ JSON.stringify(models,null,2) + '</script>'}
  
  <pre>{JSON.stringify(models,null,2)}</pre>
  
</svelte:head>
 
  */}