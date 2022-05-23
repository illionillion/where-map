import { useDispatch, useSelector } from 'react-redux';


import { clickAreaSlice } from '../features/clickArea';
import { AppState } from '../store';

const MapItem = ({ dataObj }: any): JSX.Element => {
  const style = {};
  let coordsList = "";
  for (const i of dataObj.coordinates) {
    for (const j of i) {
      coordsList = `${coordsList},${j}`;
    }
  }
  coordsList = coordsList.replace(",", "");
  // console.log(coordsList);
	const { clickArea } = useSelector<
		AppState,
		{ clickArea: number; }
	>((state) => ({
		clickArea: state.clickArea.id,
	}));
	const dispatch = useDispatch();
	const { setClickArea } = clickAreaSlice.actions;

  const whenclick = (name:any) => {
    (document.querySelectorAll(`img[alt=${name}]`)[1] as HTMLElement).click()
  }
  return (
    <area
      shape={dataObj.areaType}
      style={style}
      coords={coordsList}
      onClick={() => {
				dispatch(setClickArea({id: dataObj.id}))
        whenclick(dataObj.name)
      }}
			alt={dataObj.name}
    ></area>
  );
};

export default MapItem;
