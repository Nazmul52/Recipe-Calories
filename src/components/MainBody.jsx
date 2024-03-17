import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { data } from "../data";
import CookingCard from "./Recipe/CookingCard";
import RecipeCard from "./Recipe/RecipeCard";

const MainBody = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const prepareRecipe = (recipeId) => {
    const recipeToPrepare = wantToCook.find(
      (recipe) => recipe.recipe_id === recipeId
    );
    setWantToCook(wantToCook.filter((recipe) => recipe.recipe_id !== recipeId));
    setCurrentlyCooking([...currentlyCooking, recipeToPrepare]);
    toast.success("It's going for cooking now.", {
      position: "top-right",
    });
  };

  const handleCookClick = (recipe) => {
    if (!wantToCook.some((item) => item.recipe_id === recipe.recipe_id)) {
      setWantToCook((prev) => [...prev, recipe]);
      toast.success("Successfully added your food for prepare.", {
        position: "top-right",
      });
    } else {
      toast.error("Recipe is already in the prepare list!", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="max-w-[1320px] mt-24" id="recipe">
      <div className="mx-auto max-w-[823px]">
        <h1 className="text-3xl font-bold">Our Recipes</h1>
        <p className="mt-6 text-gray-500">
          Explore a delightful array of culinary creations with `Our Recipes.`
          From mouthwatering appetizers to decadent desserts, discover flavors
          that inspire and recipes that delight your taste buds.
        </p>
      </div>
      <div className="mt-8 flex lg:flex-row flex-col gap-4">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe_id}
              image={recipe.image}
              title={recipe.recipe_name}
              description={recipe.short_description}
              ingredients={recipe.ingredients}
              preparingTime={recipe.preparing_time}
              calories={recipe.calories}
              onCook={() => handleCookClick(recipe)}
            />
          ))}
        </div>
        <div className="shadow-md rounded-lg max-w-[500px]  w-full p-8 mt-8 border-2 border-[#F8F8SS]">
          <CookingCard
            wantToCook={wantToCook}
            currentlyCooking={currentlyCooking}
            prepareRecipe={prepareRecipe}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
