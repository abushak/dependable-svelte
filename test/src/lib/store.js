import { writable } from 'svelte/store';
import { browser } from '$app/env';

//export const pokemon = writable([]);

  
const modelsByMakeId = {};
let loaded = false;


export const getModelsByMakeId = async (slug) => {
	if (modelsByMakeId[slug]) return modelsByMakeId[slug];

	try {
		const url = `https://api.findcar.parts/api/rest/make/${slug}/models`;
		const res = await fetch(url);
		const data = await res.json();
		// const modelsByMakeIdloaded = data.uvdb.search_uvdb_models.items.map((data) => ({
		//  	name: data.name,
		//  	id: data.id,
		//  }));
        
          
        //   let items = JSON.stringify(data.uvdb.search_uvdb_models.items,null,0);
          let items = data.uvdb.search_uvdb_models.items;
          let mls = [];
          for (let i=items.length-1; i>=0; i--) mls[i] = { id: items[i].id, text: items[i].name };
              

        

        // const modelsJSON = JSON.stringify(modelsByMakeIdloaded);
		modelsByMakeId[slug] = items;
        // modelsByMakeId[id] = modelsByMakeIdloaded;
		return items;
		
	} catch (err) {
		console.error(err);
		return null;
	}
};


// const modelsByMakeId = {};
// let loaded = false;


// export const getPokemonById = async (id) => {
// 	if (modelsByMakeId[id]) return modelsByMakeId[id];

// 	try {
// 		const url = `https://api.findcar.parts/api/rest/make/${id}`;
// 		const res = await fetch(url);
// 		const data = await res.json();
// 		const modelsByMakeIdloaded = data.uvdb.search_uvdb_models.items.map((data) => ({
// 			name: data.name,
// 			id: data.id,
// 		}));
// 		modelsByMakeId[id] = modelsByMakeIdloaded;
// 		return modelsByMakeIdloaded;
		
// 	} catch (err) {
// 		console.error(err);
// 		return null;
// 	}
// };

export const Make = writable(
	browser && (localStorage.getItem("Make"))
  );
  Make.subscribe((val) => browser && (localStorage.Make = val));



  
  //export const carMakes = (makes);
  export const Model = writable(
	browser && (localStorage.getItem("Model"))
  );
  Model.subscribe((val) => browser && (localStorage.Model = val));
  
  export const Year = writable(
	browser && (localStorage.getItem("Year"))
  );
  Year.subscribe((val) => browser && (localStorage.Year = val));
  
  