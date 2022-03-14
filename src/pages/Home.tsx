import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Title } from "../components/Title";
import Chart from "../components/Chart";
import Tabs from "../components/Tabs";
import { Route, Switch, useRouteMatch } from "react-router-dom";

interface ICity {
  countryNm: string;
  deathCnt: number;
  incDec: number;
  incDeacF: number;
  inDecK: number;
  insolCnt: number;
  qurRate: number;
  totalCnt: number;
  recCnt: number;
}

interface IData {
  seoul: ICity;
  busan: ICity;
  daegu: ICity;
  incheon: ICity;
  gwangju: ICity;
  daejeon: ICity;
  ulsan: ICity;
  sejong: ICity;
  gyeonggi: ICity;
  gangwon: ICity;
  chungbuk: ICity;
  chungnam: ICity;
  jeonbuk: ICity;
  jeonnam: ICity;
  gyeongbuk: ICity;
  gyeongnam: ICity;
  jeju: ICity;
}

const Home = () => {
  const [data, setData] = useState<IData>();
  const [isLoading, setLoading] = useState(true);
  const totalCntMatch = useRouteMatch("/확진자");
  const deathCntMatch = useRouteMatch("/사망자");

  const totalCnt = [
    data?.seoul.totalCnt || 0,
    data?.busan.totalCnt || 0,
    data?.daegu.totalCnt || 0,
    data?.incheon.totalCnt || 0,
    data?.gwangju.totalCnt || 0,
    data?.daejeon.totalCnt || 0,
    data?.ulsan.totalCnt || 0,
    data?.sejong.totalCnt || 0,
    data?.gyeonggi.totalCnt || 0,
    data?.gangwon.totalCnt || 0,
    data?.chungbuk.totalCnt || 0,
    data?.chungnam.totalCnt || 0,
    data?.jeonbuk.totalCnt || 0,
    data?.jeonnam.totalCnt || 0,
    data?.gyeongbuk.totalCnt || 0,
    data?.gyeongnam.totalCnt || 0,
    data?.jeju.totalCnt || 0,
  ];

  const deathCnt = [
    data?.seoul.deathCnt || 0,
    data?.busan.deathCnt || 0,
    data?.daegu.deathCnt || 0,
    data?.incheon.deathCnt || 0,
    data?.gwangju.deathCnt || 0,
    data?.daejeon.deathCnt || 0,
    data?.ulsan.deathCnt || 0,
    data?.sejong.deathCnt || 0,
    data?.gyeonggi.deathCnt || 0,
    data?.gangwon.deathCnt || 0,
    data?.chungbuk.deathCnt || 0,
    data?.chungnam.deathCnt || 0,
    data?.jeonbuk.deathCnt || 0,
    data?.jeonnam.deathCnt || 0,
    data?.gyeongbuk.deathCnt || 0,
    data?.gyeongnam.deathCnt || 0,
    data?.jeju.deathCnt || 0,
  ];

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

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>국내 코로나 19 Chart</title>
        </Helmet>
      </HelmetProvider>
      <Title>국내 코로나 19 확진자 및 사망자 현황</Title>
      <Tabs isActive={totalCntMatch ? true : false} />
      <Switch>
        <Route path={`/확진자`}>
          <Chart totalCnt={totalCnt} />
        </Route>
        <Route path={`/사망자`}>
          <Chart totalCnt={deathCnt} />
        </Route>
      </Switch>
    </div>
  );
};
export default Home;
