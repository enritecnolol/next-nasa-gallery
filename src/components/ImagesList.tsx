"use client";

import axios from "axios";
import { NasaPicture } from "../types/types";
import ImageItem from "./ImageItem";
import ImageFilterContext from "../context/ImageFilterContext";
import { useContext, useEffect, useState } from "react";
import { FilterByEnum } from "../enums/enums";
import InfiniteScroll from "react-infinite-scroll-component";

type EarthDateParams = {
  earthDate: string;
  camera: string;
  rover: string;
};
type SolParams = {
  sol: number;
  camera: string;
  rover: string;
};
type ParamsOption = EarthDateParams | SolParams;

export default function ImagesList() {
  const { filter, filterBy } = useContext(ImageFilterContext);
  const [images, setImages] = useState<NasaPicture[]>([]);

  const queryParams = () => {
    const { rover, camera, earthDate, sol } = filter;

    const filterQueryOption = {
      [FilterByEnum.EARTH_DATE]: {
        earthDate,
        camera,
        rover,
      },
      [FilterByEnum.SOL]: {
        sol,
        camera,
        rover,
      },
    };

    return filterQueryOption[filterBy];
  };

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const params: ParamsOption = queryParams();
      const { data } = await axios.get(`http://localhost:3000/api/images`, {
        params: {
          ...params,
          page,
        },
      });

      const nasaImages = data.data as NasaPicture[];

      // Update the items state with the new data
      setImages([...images, ...nasaImages]);

      // Determine if there's more data to fetch
      if (nasaImages.length === 0) {
        setHasMore(false);
      }

      // Increment the page number for the next data fetch
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setPage(1)
    setHasMore(true)
    setImages([])
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, filterBy]);

  return (
    <article
      id="scrollableDiv"
      className="w-screen h-[calc(100vh-11rem)] overflow-y-auto flex justify-center"
    >
      <InfiniteScroll
        dataLength={images.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<div className="text-xl font-bold text-center mt-10">Loading...</div>}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        endMessage={<div className="text-xl font-bold text-center mt-10">No more images to load.</div>}
        scrollableTarget="scrollableDiv"
      >
        <div className="grid grid-cols-3 gap-5 p-4">
          {images.map(({ imgUrl }, index) => (
            <ImageItem imgUrl={imgUrl} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </article>
  );
}
