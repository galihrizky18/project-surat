import React from "react";
import SidebarComponent from "./components/SidebarComponent";
import JudulComponent from "./components/JudulComponent";

const page = () => {
  return (
    <SidebarComponent>
      <div className="w-full">
        <div className="flex flex-row w-full ">
          {/* Konten */}
          <JudulComponent title="Dashboard" />
        </div>
      </div>
    </SidebarComponent>
  );
};

export default page;
