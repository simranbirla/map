import distace from "./distance";

const kruskal_matrix = (data) => {
  var kruskal_arr = [];
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      let dist = distace(
        data[i].Latitude,
        data[i].Longitude,
        data[j].Latitude,
        data[j].Longitude,
        "K"
      );

      if (i === j) {
        dist = 0;
      }
      kruskal_arr.push({ source: i, destination: j, weight: dist });
    }
  }
  return kruskal_arr;
};

export default kruskal_matrix;
