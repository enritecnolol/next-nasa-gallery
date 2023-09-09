import { DateTime } from "luxon";

export const imgMock = "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"

const todayDate = DateTime.now().toISODate();

export const NasaImagesMock = [
  {
    imgUrl: imgMock,
    earthDate: todayDate,
    sol: 0,
  },
  {
    imgUrl: imgMock,
    earthDate: todayDate,
    sol: 0,
  },
]