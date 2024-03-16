import { useEffect, useState } from "react";

const CookingCard = ({ wantToCook, currentlyCooking, prepareRecipe }) => {
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    let time = 0;
    let calories = 0;

    currentlyCooking.forEach((recipe) => {
      time += parseFloat(recipe.preparing_time);
      calories += parseFloat(recipe.calories);
    });

    setTotalTime(time);
    setTotalCalories(calories);
  }, [currentlyCooking]);

  return (
    <div className="flex flex-col justify-start items-start border-b-2 border-solid border-gray-300">
      <div className="my-4 text-center mx-auto border-b-2 w-full pb-4">
        <h1 className="text-2xl font-bold">
          Want to cook: {wantToCook.length}
        </h1>
      </div>
      <div className="lg:overflow-x-hidden overflow-x-auto lg:w-full w-[220px]">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wantToCook.map((recipe, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    className="cook-button mt-6 flex flex-row justify-start rounded-full font-bold"
                    onClick={() => prepareRecipe(recipe.recipe_id)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}

            <tr></tr>
          </tbody>
        </table>
      </div>

      <div className="my-8 text-center mx-auto border-b-2 w-full pb-4">
        <h1 className="text-2xl font-bold">
          Currently cooking: {currentlyCooking.length}
        </h1>
      </div>
      <div className="overflow-x-auto lg:w-full w-[220px]">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentlyCooking.map((recipe, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>

              <td>
                Total Time = <br /> {totalTime} minutes
              </td>
              <td>
                Total Calories = <br />
                {totalCalories} calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CookingCard;
