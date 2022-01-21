import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-key": "c64157e7d5msha3c93a02483047fp1f2f8ejsncf8609d6cdaa",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async (sw, ne) => {
  try {
    // Request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": "c64157e7d5msha3c93a02483047fp1f2f8ejsncf8609d6cdaa",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
