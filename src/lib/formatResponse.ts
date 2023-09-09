import { NasaPhoto, NasaPicture } from "../types/types";

export default function formatResponse(data: NasaPhoto[]): NasaPicture[] {
  return data.map((item) => {
    return {
      imgUrl: item.img_src,
      earthDate: item.earth_date,
      sol: item.sol,
    };
  });
}
