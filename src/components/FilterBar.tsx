"use client";

import { ChangeEvent, FormEvent, useContext } from "react";
import Input from "./Input";
import Select from "./Select";
import ImageFilterContext from "../context/ImageFilterContext";
import { FilterByEnum } from "../enums/enums";
import { DateTime } from "luxon";

const roversOptions = [
  {
    label: "Curiosity",
    value: "curiosity",
  },
  {
    label: "Opportunity",
    value: "opportunity",
  },
  {
    label: "Spirit",
    value: "spirit",
  },
];

const roverCameras = [
  {
    label: "Front Hazard Avoidance Camera",
    value: "FHAZ",
  },
  {
    label: "Rear Hazard Avoidance Camera",
    value: "RHAZ",
  },
  {
    label: "Mast Camera",
    value: "MAST",
  },
  {
    label: "Chemistry and Camera Complex",
    value: "CHEMCAM",
  },
  {
    label: "Mars Hand Lens Imager",
    value: "MAHLI",
  },
  {
    label: "Mars Descent Imager",
    value: "MARDI",
  },
  {
    label: "Navigation Camera",
    value: "NAVCAM",
  },
  {
    label: "Panoramic Camera",
    value: "PANCAM",
  },
  {
    label: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    value: "MINITES",
  },
];

const filterByOptions = [
  { label: "Martian sol", value: FilterByEnum.SOL },
  { label: "Earth date", value: FilterByEnum.EARTH_DATE },
];

const todayDate = DateTime.now().toISODate();

export default function FilterBar() {
  const { filter, setFilter, filterBy, setFilterBy } =
    useContext(ImageFilterContext);

  const handlerChange = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    setFilter({
      ...filter,
      [target.name]: target.value,
    });
  };

  const handleFilterBy = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value as FilterByEnum);
  };

  return (
    <article className="w-screen flex justify-center gap-x-5 my-4">
      <div className="w-60">
        <Select
          label="Filter by:"
          options={filterByOptions}
          name="filter"
          value={filterBy}
          onChange={handleFilterBy}
        />
      </div>

      {/* Rover Select */}
      <div className="w-60">
        <Select
          label="Rover"
          options={roversOptions}
          name="rover"
          value={filter.rover}
          onChange={handlerChange}
        />
      </div>

      {/* Camera Select */}
      <div className="w-60">
        <Select
          label="Camera"
          options={roverCameras}
          name="camera"
          value={filter.camera}
          onChange={handlerChange}
          emptyOption
        />
      </div>

      {/* Earth day Input */}
      {filterBy === FilterByEnum.EARTH_DATE ? (
        <div className="w-60">
          <Input
            label="Earth day"
            type="date"
            name="earthDate"
            value={filter.earthDate}
            onChange={handlerChange}
            max={todayDate as string}
          />
        </div>
      ) : null}

      {/* Sol Input */}
      {filterBy === FilterByEnum.SOL ? (
        <div className="w-60">
          <Input
            label="Sol"
            type="number"
            name="sol"
            max={1000}
            value={filter.sol}
            onChange={handlerChange}
          />
        </div>
      ) : null}
    </article>
  );
}
