import React from "react";
import Banner from "./Banner/Banner";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chef from "./Chef/Chef";

const Home = () => {
  const chef = useLoaderData();
  //console.log(chef);
  return (
    <div className="container">
      <div>
        <Banner></Banner>
      </div>
      <div className="my-20 lg:mx-20 bg-red-200 py-10 rounded-3xl">
        <h4 className="mb-3 text-slate-500 text-center">Our Story</h4>
        <h2 className="text-3xl font-semibold text-center">About Us</h2>
        <p className="my-5 mx-10">
          <small>
            Welcome to our website, where we celebrate the rich and diverse
            flavors of Indian cuisine. Our mission is to share our love for
            Indian food with the world, one recipe at a time. Our team of
            passionate food enthusiasts and experienced chefs is dedicated to
            curating and sharing the best Indian recipes with you. We believe
            that food is not just about sustenance, but also about sharing
            culture, history, and memories. That's why we strive to bring you
            the most authentic and delicious Indian recipes that have been
            passed down through generations. We understand that Indian cuisine
            can seem intimidating to some, with its vast array of spices and
            cooking techniques. That's why we have made it our goal to simplify
            and demystify Indian cooking for you. Our step-by-step recipes,
            cooking tips, and ingredient guides will help you create delicious
            and healthy Indian meals in your own kitchen, without any fuss. We
            also believe in the importance of using fresh, wholesome, and
            locally sourced ingredients whenever possible. We hope that our
            website will inspire you to explore the colorful world of Indian
            cuisine, experiment with new flavors and ingredients, and create
            your own culinary masterpieces. Thank you for joining us on this
            culinary journey, and we hope you enjoy our website as much as we
            enjoy bringing it to you!
          </small>
        </p>
        <div className="lg:flex sm:flex-col mt-10 mx-auto justify-center lg:gap-10">
          <img
            className="w-96 rounded-2xl"
            src="https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
            alt=""
          />
          <img
            className="w-96 rounded-2xl"
            src="https://img.freepik.com/free-photo/delicious-indian-food-tray-flat-lay_23-2148723508.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="my-20">
          <h2 className="text-3xl font-semibold text-center">Our Best Chefs</h2>
        </div>
        <div className="grid lg:grid-cols-3 lg:mx-16 gap-5 ">
          {chef.map((c) => (
            <Chef c={c} key={c.id}></Chef>
          ))}
        </div>
      </div>
      <div className="container px-20">
        <div className="my-20 lg:flex sm:flex-col justify-center gap-14 items-center">
          <div>
            <p className="text-xl rounded-xl text-white text-center font-medium bg-black py-32 px-4">
              “A recipe has no soul. You, as the cook, must bring soul to the
              recipe.”
              <p className="">
                <small> Thomas Keller</small>
              </p>
            </p>
          </div>
          <div>
            <img
              className="w-full rounded-xl"
              src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?size=626&ext=jpg&ga=GA1.1.825737080.1674060681&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
