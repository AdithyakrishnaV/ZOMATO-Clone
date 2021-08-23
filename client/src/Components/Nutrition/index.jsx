import React from "react";

// components
import NutritionHeroCarousal from "./NutritionHeroCarousal";
import NutritionCarousal from "./NutritionCarousal";
import NutritionCard from "./NutritionCard";


const Nutrition = () => {
  return (
    <div>
      <NutritionHeroCarousal />
      <div className="my-6">
        <NutritionCarousal />
      </div>
      <div className="flex justify-between flex-wrap">
        <NutritionCard 
           bg="red"
           image="https://dote.zmtcdn.com/prod/data/admin_assets/images/325/14a02cf7b28e5731928822d9e89a8325_1614756406.png"
        />
      </div>
    </div>
  );
};

export default Nutrition;