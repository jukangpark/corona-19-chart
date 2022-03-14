import ApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Title } from "./components/Title";
import Chart from "./components/Chart";

// interface IData {
//   기준연도: string;
//   기준월: string;
//   데이터기준일자: string;
//   ["확진자 수"]: string;
//   ["사망자 수"]: string;
// }

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const API_KEY = "7wdSpAqc2OfEtzs6DHKlZFkr5QxWX1PeN";
  useEffect(() => {
    fetch(`https://api.corona-19.kr/korea/beta/?serviceKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data);

  // const confirmedCase = data?.map((data) => data["확진자 수"]);
  // const deaths = data?.map((data) => data["사망자 수"]);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>국내 코로나 19 Chart</title>
        </Helmet>
      </HelmetProvider>
      <Title>국내 코로나 19 확진자 및 사망자 현황</Title>
      {/* {isLoading ? null : (
        <Chart confirmedCase={confirmedCase} deaths={deaths} />
      )} */}
    </div>
  );
};
export default App;
