import React from "react";

const Menu = () => {
  return ( <div className=" bg-green-400 flex flex-col justify-center items-center">
      <h1 className="text-9xl uppercase font-black">Menu Page</h1>
      <br/>

      <div className="menu-card">
        <img
          src="https://ketopots.com/wp-content/uploads/2019/08/5a-keto-egg-muffins-square.jpg"
          alt="egg"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content"></div>
        <h2 className="text-2xl mb-2">Egg Muffins</h2>
        <p className="mb-2">Crispy, delicious, and nutritious!</p>
        <span>$16</span>
      </div>
      <br />
      <div className="menu-card">
        <img
          src="https://www.glutenfreefollowme.com/wp-content/uploads/2019/05/YlNTlZxGRiyUD9DqB4ysaA.jpg"
          alt="egg"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content"></div>
        <h2 className="text-2xl mb-2">Avocado Eggs </h2>
        <p className="mb-2">Tasty, guilt free, and a work of art!</p>
        <span>$20</span>
      </div>
    </div>
  );
};

export default Menu;
