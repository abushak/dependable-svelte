import { getModelsByMakeId  } from "$lib/store";

export function load({ params }) {
  return this.get(`${params.slug}.json`);
}

export async function load({ page: {${params.slug} } }) {
    
		const res = await fetch(url, {
      const models = await getModelsByMakeId (slug);


  return { props: { models:${params.slug} };
  }
};

// export const get = async req => {
//   const slug = req.params.slug  
//   const models = await getModelsByMakeId (slug);
  
//         //  if (page.params.endsWith('.json')) return;

//          return {
//                          props: { models }
//                  }
// } 
// export async function load(ctx) {
//         let slug = ctx.page.params.slug;
//         const models = await getModelsByMakeId (slug);
  
//         if (page.params.endsWith('.json')) return;

//         return {
//                         props: { models }
//                 }
// } 
// export let models;

// console.log(page)


// export async function load({ page }) {
//         if (page.params.endsWith('.json')) return;
//         // rest of your code goes here
//       }