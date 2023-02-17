// Root Categories
export interface Categories {
  Automobile: string; //cont
  Baby_Products: string; //cont
  Books_Movies_and_Music: string; //cont
  Computing: string; //cont
  Electronics: string; //cont
  Fashion: string; //cont
  Gaming: string; //cont
  Garding_and_Outdoors: string; //cont
  Grocery: string; //cont
  Health_and_Beauty: string; //cont
  Home_and_Office: string; //cont
  Industrial_and_Scientific: string; //cont
  Musical_Instruments: string; //cont
  Pet_Supplies: string; //cont
  Phones_and_Tablets: string; //cont
  Sporting_Goods: string; //cont
  Toys_and_Games: string; //cont
}

// Categories.Automobile sub categories
export interface Automobile {
  Car_Care: Categories["Automobile"]; //cont
  Car_Electronics_and_Accessories: Categories["Automobile"]; //cont
  Exterior_Accessories: Categories["Automobile"]; //cont
  Interior_Accessories: Categories["Automobile"]; //cont
  Lights_and_Lighting_Accessories: Categories["Automobile"]; //cont
  Motorcycle_and_Powersports: Categories["Automobile"]; //cont
  Oils_and_Fluids: Categories["Automobile"]; //cont
  Paint_and_Paint_Supplies: Categories["Automobile"]; //cont
  Power_and_Battery: Categories["Automobile"]; //cont
  Replacement_Parts: Categories["Automobile"]; //cont
  RV_Parts_and_Accessories: Categories["Automobile"]; //cont
  Tools_and_Equipment: Categories["Automobile"]; //cont
  Tyre_and_Rim: Categories["Automobile"]; //cont
}

// export interface Car_Care {
//     Cleaning_Kits: Automobile
// Exterior Care >
// Finishing >
// Glass Care
// Interior Care >
// Solvents
// Tire & Wheel Care >
// Tools & Equipment >
// Undercoatings

// }
