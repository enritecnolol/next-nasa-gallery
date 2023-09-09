"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { FilterType, GlobalFilterContent } from "../types/types";
import { FilterByEnum } from "../enums/enums";
import { DateTime } from "luxon";

const iFilterInitial = {
  filter: {
    rover: "",
    camera: "",
    earthDate: "",
    sol: 0,
  },
  setFilter: () => {},
  filterBy: FilterByEnum.EARTH_DATE,
  setFilterBy: () => {},
};

const ImageFilterContext = createContext<GlobalFilterContent>(iFilterInitial);

interface ImageFilterProviderProps {
  children: ReactNode;
}
const todayDate = DateTime.now().toISODate();

export const ImageFilterProvider = ({ children }: ImageFilterProviderProps) => {

  const [filter, setFilter] = useState<FilterType>(() => {
    if (typeof window !== "undefined") {
      const savedFilter = localStorage.getItem("filter");
      if (savedFilter) {
        const initialValue = JSON.parse(savedFilter);
        return initialValue;
      }
    }
    return {
      rover: "curiosity",
      camera: "",
      earthDate: todayDate as string,
      sol: 0,
    };
  });

  const [filterBy, setFilterBy] = useState<FilterByEnum>(
    FilterByEnum.EARTH_DATE
  );

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {}, []);

  return (
    <ImageFilterContext.Provider
      value={{ filter, setFilter, filterBy, setFilterBy }}
    >
      {children}
    </ImageFilterContext.Provider>
  );
};

export default ImageFilterContext;
