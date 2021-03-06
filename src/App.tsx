import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { Top } from "./components/Top";
import { FacilityDetail } from "./components/FacilityDetail";
import "./index.css";
import { useEffect } from "react";
import { facilityMapper } from "./repository/facilityMapper";
import { useDispatch } from "react-redux";
import { Facility } from "./types/facilityItem.d";
import { setFacility } from "./features/facilitySlice";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
   facilityMapper().then((datas:Facility[]) => {
    dispatch(setFacility(datas));
   }).catch(err => {
    throw err;
   })
  },[])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route index element={<Top />} />
            <Route path="*" element={<NotFound />} />
            <Route path="item/:id" element={<FacilityDetail />} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
