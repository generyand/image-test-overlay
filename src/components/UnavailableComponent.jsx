import React from "react";

function UnavailableComponent({item}) {
  return (
    <div className="hidden sm:block max-w-[40ch] px-8 text-4xl text-gray-50 font-black">
      <p className="">
        Hello, {item.name}. If you are seeing this, I'm sorry to inform you that
        our service is only compatible with mobile devices. Thank you for your
        patience. 🤗
      </p>
    </div>
  );
}

export default UnavailableComponent;
