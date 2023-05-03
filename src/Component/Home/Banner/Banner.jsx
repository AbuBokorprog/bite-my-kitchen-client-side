import React from "react";

const Banner = () => {
  return (
    <div className="container px-20 rounded-2xl">
      <div className="bg-black">
        <div className="carousel relative bg-black carousel-center rounded-box">
          <div className="carousel-item">
            <img
              className=""
              src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=740&t=st=1683030062~exp=1683030662~hmac=42e2ce960076db7c957d394e305bc426f99e39b2d5731aa4b2dbf8d0a5eb14dc"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/dum-handi-muttona-biryania-gosht-pilaf-is-prepared-earthen-clay-pot-called-haandi-1-kilo-size-popular-indian-non-vegetarian-fooda_466689-52330.jpg?w=900"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/selection-food-tray_1340-23421.jpg?w=900&t=st=1683030185~exp=1683030785~hmac=e42356de77ed54d3f672d482ed7af29fdcc00424b366aef587bf90fd91184784"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?w=900&t=st=1683030213~exp=1683030813~hmac=fedff32a34d8f6db4ab7ef614358746012b748f4104792a18250ba743017d19c"
              alt="Pizza"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-80 text-center">
        <h1 className="text-5xl text-slate-300 font-bold">The Best Dishes</h1>
        <p className="text-slate-100 font-semibold mt-3 mx-52">
          Our service of best dishes offers a mouth-watering selection of
          delectable cuisine to suit any taste. From classic comfort food to
          exotic flavors, we have something for everyone to enjoy.
        </p>
      </div>
    </div>
  );
};

export default Banner;
