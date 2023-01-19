import React from "react";
import Button from "./Components/Atoms/Button";
import RatingIcon from "./Components/Atoms/Vectors/Rating-Icon";
import ProductHeading from "./Components/Molecules/Product-Heading";
import useScrollYListener from "./hooks/useScrollYListener";
import ScreenLayout from "./Layouts/Screen-Layout";

const App = () => {
  const color = useScrollYListener();

  // console.log(color);
  return (
    <ScreenLayout>
      <section className="">
        <div className="bg-[url('https://www.goodmoodprints.io/static/media/hero.58dda6baf44c625c38cc.png')] bg-cover h-screen flex flex-col items-start justify-end  px-10 pb-12">
          <div className="w-1/3">
            <h1 className="text-white text-[5.375rem] leading-[5.7rem] font-medium">
              The January Collection
            </h1>
            <p className="text-white font-medium mb-6">
              Every month we exhibit the outstanding work of our creative
              community, and provide a printing, framing and delivery service
              that gets it to global buyers with zero effort.
            </p>
          </div>
          <div className="flex justify-between w-full">
            <Button title="Explore the collection" />

            <div className="flex flex-col items-end gap-y-1">
              <span className="text-white">5 star rating · Excellent</span>
              <div className="flex gap-x-2">
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
                <RatingIcon />
              </div>
            </div>
          </div>
        </div>
        <section className="">
          <ProductHeading sectionTitle="Trending" btnTitle="Shop all" />
        </section>
      </section>
    </ScreenLayout>
  );
};

export default App;
