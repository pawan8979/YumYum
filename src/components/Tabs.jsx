import React, { useState, useEffect } from "react";
import { CiIceCream, CiPizza } from "react-icons/ci";
import { GiNoodles, GiFruitBowl, GiCheckMark } from "react-icons/gi";
import { fetchTabData } from "../service";

function Tabs(props) {
    const [tabLabel, setTabLabel] = useState([
      {
        name: 'Pizza',
        icon:<CiPizza/>,
        id: "0209cb28fc05320434e2916988f47b71",
        },
        {
          name: "Dessert",
          icon: <GiFruitBowl />,
          id: "eb3e2b49525a0c8ce7327436f843321a",
        },
        {
          name: "Ice cream",
          icon: <CiIceCream />,
          id: "4ac7df68e8bf110002b83c2169c772d6",
        },
      ]);
    const [active, setActive] = useState("Pizza");
  const [tabData, setTabData] = useState("");

  const handleClick = (name, id) => {
    setActive(name);
    fetchTabData(id).then((response) => {
      setTabData(response);
      props.setLoader(false);
    });
  };

  useEffect(() => {
    fetchTabData(tabLabel[0].id).then((response) => {
      setTabData(response);
      props.setLoader(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => (
          <div
            onClick={() => (
              handleClick(item.name, item.id), props.setLoader(true)
            )}
            key={index}
            className={`tablist ${active === item.name ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        {tabData !== "" && (
          <>
            <div className="left-col">
              <span className="badge">
                {tabData.recipe.cuisineType[0].toUpperCase()}
              </span>
              <h1>{tabData.recipe.label}</h1>
              <p>
                <strong>Recipe by:</strong>
                <small>{tabData.recipe.source}</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  {tabData.recipe.ingredientLines.map((list, index) => (
                    <li key={index}>
                      <GiCheckMark size="18px" color="#6fcb9f" />
                      &nbsp;<span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right-col">
              <div className="image-wrapper">
                <img src={tabData.recipe.image} alt={tabData.recipe.label} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Tabs;
