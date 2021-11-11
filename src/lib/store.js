import { writable } from 'svelte/store';
import { browser } from '$app/env';
import makes from './data/makes';
import categories from './data/categories';
import subcategories from './data/subcategories';


  
const modelsByMakeId = {};
let loaded = false;


export const getModelsByMakeId = async (makeId) => {
	if (modelsByMakeId[makeId]) return modelsByMakeId[makeId];

	try {
		const url = `https://api.findcar.parts/api/rest/make/${makeId}/models`;
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
		modelsByMakeId[makeId] = items;
        // modelsByMakeId[id] = modelsByMakeIdloaded;
		return items;
		
	} catch (err) {
		console.error(err);
		return null;
	}
};


const yearsByMakeModel = {};


export const getYearsByMakeModel = async (makeId, modelId) => {
 	if (yearsByMakeModel[makeId,modelId]) return yearsByMakeModel[makeId,modelId];

 	try {
 		const url = `https://api.findcar.parts/api/rest/make/${makeId}/models/${modelId}`;
 		const res = await fetch(url);
 		const data = await res.json();
 		// const modelsByMakeIdloaded = data.uvdb.search_uvdb_models.items.map((data) => ({
 		//  	name: data.name,
 		//  	id: data.id,
 		//  }));
        
          
         //   let items = JSON.stringify(data.uvdb.search_uvdb_models.items,null,0);
           let items = data.uvdb.search_uvdb_years.items;
           let mls = [];
           for (let i=items.length-1; i>=0; i--) mls[i] = { id: items[i].id, text: items[i].name };
              

        

         // const modelsJSON = JSON.stringify(modelsByMakeIdloaded);
 		yearsByMakeModel[makeId,modelId] = items;
         // modelsByMakeId[id] = modelsByMakeIdloaded;
 		return items;
		
 	} catch (err) {
 		console.error(err);
 		return null;
 	}
};

// export const storedVehicle = JSON.parse(browser && localStorage.getItem("vechile")) || {
// 	Make: undefined,
// 	Model: undefined,
// 	Year: undefined,
// 	Engine: undefined,
// 	Submodel: undefined,
// 	Bodytype: undefined,
// 	Category: undefined,
// 	Subcategory: undefined,
// 	Parttype: undefined,
//   };
// export const vechile = writable(browser && storedVehicle);
// vechile.subscribe (
// 	(val) => browser && (localStorage.vechile = JSON.stringify(val))
// );	

export const selectedMake = writable([]);

export const Make = writable(
	browser && (localStorage.getItem("Make"))
  );
  Make.subscribe((val) => browser && (localStorage.Make = val));
	
export const Model = writable(
browser && (localStorage.getItem("Model"))
   );
   Model.subscribe((val) => browser && (localStorage.Model = val));


 export const Year = writable(
 	browser && (localStorage.getItem("Year"))
   );
   Year.subscribe((val) => browser && (localStorage.Year = val));
  
  