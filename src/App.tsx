import { useEffect, useState } from "react";
import { Title } from "./components/Title";

interface IData {
  기준연도: string;
  기준월: string;
  데이터기준일자: string;
  ["확진자 수"]: string;
  ["사망자 수"]: string;
}

const App = () => {
  const [data, setData] = useState<IData[]>();
  const serviceKey =
    "Db2WjUGNkkI1uep4Cdnf1NcQLLXLST05FgSCfSXVPC%2BYIPgFCxyGM9bxZ7EcS7XiKnomAmngmJE%2B5ETJJza1xQ%3D%3D";

  useEffect(() => {
    fetch(
      `https://api.odcloud.kr/api/15098765/v1/uddi:0e6d8456-49b0-4880-9dc1-f1c92048ed87?page=1&perPage=10&serviceKey=${serviceKey}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div>
      <Title>광주광역시 남구 코로나 19 확진자 및 사망자 현황</Title>
      <ul>
        {data?.map((object, key) => (
          <li key={key} style={{ display: "flex" }}>
            <div>{object["기준연도"]}</div>
            <div>{object["기준월"]}</div>
            <div>{object["데이터기준일자"]}</div>
            <div>확진자 수 : {object["확진자 수"]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
