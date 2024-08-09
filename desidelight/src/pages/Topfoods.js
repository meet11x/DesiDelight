// src/components/TopFoods.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import style from "./style.module.css";

const Topfoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopFoods = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/food/top-foods/"
        );
        setFoods(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load top foods");
        setLoading(false);
      }
    };

    fetchTopFoods();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  console.log(foods);
  return (
    <div className="container my-4 mt-3" style={{}}>
      <h2 className="text-center mt-4">Top Rated Foods</h2>
      <div className="row">
        {foods.map((food) => (
          <div className="col-md-3 mt-4" key={food.id}>
            <a href="" style={{ textDecoration: "none", color: "black" }}>
              <div className={style.Topfoods}>
                <img
                  src={`http://localhost:8000${food.image}`}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "20px",
                    objectFit: "revert-layer",
                  }}
                  alt={food.name}
                />
                <div style={{ marginTop: "10px" }}>
                  <h5>{food.name}</h5>
                  <p>
                    <strong>Restaurant:</strong> {food.restaurant}
                  </p>
                  <div className="d-flex gap-1">
                    <strong style={{ fontSize: "20px" }}>
                      <FaStar />
                    </strong>{" "}
                    <p
                      className="font-weight-bold "
                      style={{ fontSize: "20px" }}
                    >
                      {food.average_rating.toFixed(1)}
                    </p>
                  </div>
                  <p>
                    <strong>Price:</strong> {food.price}/-
                  </p>
                  <button className="btn btn-success w-25">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
              {/* <div className="card mb-4 w-50 h-50">
              <img
                src={`http://localhost:8000${food.image}`}
                className="card-img-top"
                style={{ width: "300px", height: "300px" }}
                alt={food.name}
              />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${food.price}
                </p>
                <p className="card-text">
                  <strong>Restaurant:</strong> {food.restaurant}
                </p>
                <p className="card-text">
                  <strong>Average Rating:</strong>{" "}
                  {food.average_rating.toFixed(1)}
                </p>
                <h6>Rating Summary:</h6>
                <ul>
                  {Object.entries(food.rating_summary).map(
                    ([rating, count]) => (
                      <li key={rating}>
                        Rating {rating}: {count} review(s)
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div> */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topfoods;
