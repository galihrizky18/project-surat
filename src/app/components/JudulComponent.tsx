import React from "react";

// Mendeklarasikan tipe untuk properti `title`
interface JudulComponentProps {
  title: string;
}

const JudulComponent: React.FC<JudulComponentProps> = ({ title }) => {
  return (
    <div className="w-full shadow-lg px-5 py-3 bg-white">
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
};

export default JudulComponent;
