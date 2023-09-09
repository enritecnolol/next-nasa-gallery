import { FilterByEnum } from "../enums/enums";

export interface NasaPhoto {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: Cameras[];
}

interface Cameras {
  name: string;
  full_name: string;
}

export interface NasaPicture {
  imgUrl: string;
  earthDate: string;
  sol: number;
}

export interface FilterType {
  rover: string;
  camera: string;
  earthDate: string;
  sol: number;
}

export interface GlobalFilterContent {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
    filterBy: FilterByEnum;
    setFilterBy: Dispatch<SetStateAction<FilterByEnum>>;
}
