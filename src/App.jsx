import React from "react";
import Button from "./Components/Atoms/Button";
import ScreenLayout from "./Layouts/Screen-Layout";

const App = () => {
  return (
    <ScreenLayout>
      <section className="bg-[url('https://www.goodmoodprints.io/static/media/hero.58dda6baf44c625c38cc.png')] bg-cover h-screen flex items-center px-10">
        <div className="w-1/3">
          <h1 className="text-white text-[5.375rem] leading-[5.7rem] font-medium">
            The January Collection
          </h1>
          <p className="text-white font-medium">
            Every month we exhibit the outstanding work of our creative
            community, and provide a printing, framing and delivery service that
            gets it to global buyers with zero effort.
          </p>
        </div>
        <div className=""></div>
      </section>
    </ScreenLayout>
  );
};

export default App;
