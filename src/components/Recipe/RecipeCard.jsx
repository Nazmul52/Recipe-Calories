import CaloryIcon from "../../assets/Calory.png";
import ClockIcon from "../../assets/Clock.png";

const RecipeCard = ({
  image,
  title,
  description,
  ingredients,
  preparingTime,
  calories,
  onCook,
}) => {
  const recipeImage = "/images/" + image;

  return (
    <div className="shadow-md rounded-lg max-w-[330px] border-2 border-[#F8F8SS]  p-4">
      <div className="flex flex-col justify-start items-start border-b-2 border-solid border-gray-300">
        <img
          src={recipeImage}
          alt={title}
          className="product-image rounded-lg"
        />
        <div className="mt-4">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="mt-4 pb-4 border-b-2 border-solid border-gray-300 w-full text-left">
          <h1 className="text-sm">{description}</h1>
        </div>
        <div className="mt-4">
          <h2 className="text-mm">Ingredients:</h2>
        </div>
        <div className="p-0 mb-4 flex flex-col justify-start w-full items-start mt-4">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm flex flex-row justify-start gap-4">
          <div className="flex flex-row gap-2">
            <img src={ClockIcon} alt="Time" className="w-6 h-6" />
            <p className="text-md">{preparingTime}</p>
          </div>{" "}
          <div className="flex flex-row gap-2">
            <img src={CaloryIcon} alt="Time" className="w-6 h-6" />
            <p className="text-md">{calories}</p>
          </div>{" "}
        </div>
      </div>
      <button
        onClick={onCook}
        className="cook-button mt-6 flex flex-row justify-start rounded-full font-bold"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default RecipeCard;
