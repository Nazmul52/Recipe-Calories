const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white mt-12">
      <div className="lg:w-[1173px] w-full mx-auto py-24 text-center">
        <h2 className="text-2xl font-bold mb-2">Recipe Calories</h2>
        <p className="text-white mb-4 lg:w-[550px] w-[220px] text-center mx-auto">
          Monitor nutritional intake with detailed calorie information. Balance
          your diet by tracking calories in each recipe. Make informed choices
          for healthier cooking and eating habits. Stay mindful of nutritional
          content.
        </p>

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition-all duration-300"
          >
            <i className="fa fa-twitter text-xl text-black"></i>
          </a>
          <a
            href="#"
            className="text-blue-700 hover:text-blue-900 transition-all duration-300"
          >
            <i className="fa fa-facebook text-xl text-black"></i>
          </a>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 transition-all duration-300"
          >
            <i className="fa fa-instagram text-xl text-black"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            <i className="fa fa-github text-xl text-black"></i>
          </a>
        </div>

        <div className="border-t border-gray-300 py-4">
          <p className="text-sm text-white">© 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
