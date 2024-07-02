import React from "react";
import { menu } from "../Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          Top <span>Rated</span>(mess)
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>Annapurna mess</h3>
              <div className="rating">
              <p>rating</p>
                
              </div>
              <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              
              
              <a href="#" className="btn">
                View more
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
