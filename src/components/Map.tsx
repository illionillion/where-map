/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import MapItem from "./MapItem";
import jsonDatas from "../data/sample2.json";
import ImageMap from "image-map";

interface Props {
  id: number;
}

const Map = ({ id }: Props): JSX.Element => {
  const jsonData = jsonDatas[id];
  const items = jsonData.clickAreaList;
  const imageURL = jsonData.mapPath;
  const wrapstyle: React.CSSProperties = {
    position: "relative",
    backgroundColor: "#ffffff",
    textAlign: "center",
    width: "45%",
    margin: "auto",
  };
  const imgstyle = {
    margin: "auto",
  };
  return (
    <div style={wrapstyle}>
      <img
        style={imgstyle}
        onLoad={(e) => ImageMap("img[usemap]")}
        src={require(`../data/${imageURL}`)}
        useMap="#map"
        alt="見取り図"
      />
      <map name="map">
        {items.map((i, n) => (
          <MapItem dataObj={{ ...i, id: n }} key={n} />
        ))}
      </map>
    </div>
  );
};

export default Map;
