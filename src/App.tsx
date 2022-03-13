import { useEffect } from "react";
import { Title } from "./components/Title";

const App = () => {
  const serviceKey =
    "Db2WjUGNkkI1uep4Cdnf1NcQLLXLST05FgSCfSXVPC%2BYIPgFCxyGM9bxZ7EcS7XiKnomAmngmJE%2B5ETJJza1xQ%3D%3D";

  useEffect(() => {
    fetch(
      `https://api.odcloud.kr/api/15098765/v1/uddi:0e6d8456-49b0-4880-9dc1-f1c92048ed87?page=1&perPage=10&serviceKey=${serviceKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Title></Title>
    </div>
  );
};

export default App;
