import React, { useState, useEffect } from "react";
import { cleanUp, generateRandomString } from "../utils/helper";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./Loader";
import Card from "./Card";
import UnavailableComponent from "./UnavailableComponent";

function Container({ item }) {
  const [isLoading, setIsLoading] = useState(true);

  //   const tagsLength = Math.ceil(70000 / item.tags.length);

  //   // const tagStatements = Array.from({ length: tagsLength }, () => tags);
  //   const tagStatements = [];

  //   for (let i = 0; i < tagsLength; i++) {
  //     tagStatements.push(item.tags);
  //   }

  // const randomString = generateRandomString(70000);

  // const splitStringIntoGroups = (string, groupSize) => {
  //   const groups = [];
  //   for (let i = 0; i < string.length; i += groupSize) {
  //     groups.push(string.slice(i, i + groupSize));
  //   }
  //   return groups;
  // };

  // const randomStringGroups = splitStringIntoGroups(randomString, 500);

  const loadingTimer = setTimeout(() => {
    setIsLoading(false);
  }, 1750);

  useEffect(() => {
    return () => {
      clearTimeout(loadingTimer);
    };
  }, [loadingTimer]);

  return (
    <div className="w-[100vw] mx-auto h-[100svh] flex justify-center items-center">
      <div className="visible sm:hidden">
        {isLoading ? <Loader /> : <Card item={item} />}
      </div>

      <UnavailableComponent item={item} />
    </div>
  );
}

export default Container;
