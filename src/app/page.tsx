import ImagesList from "../components/ImagesList";
import { Fragment } from "react";
import FilterBar from "../components/FilterBar";

export default function Home() {
  return (
    <Fragment>
      <FilterBar />
      <ImagesList />
    </Fragment>
  );
}
