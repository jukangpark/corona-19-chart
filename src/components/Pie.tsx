import ApexChart from "react-apexcharts";

interface IProps {
  totalCnt: number[];
  title: string;
}
const Pie = ({ totalCnt, title }: IProps) => {
  return (
    <div style={{ width: "50%" }}>
      <h1>{title}</h1>
      <ApexChart
        type="pie"
        series={totalCnt}
        options={{
          theme: { mode: "light" },
          labels: [
            "seoul",
            "busan",
            "daegu",
            "incheon",
            "gwangju",
            "daejeon",
            "ulsan",
            "sejong",
            "gyeonggi",
            "gangwon",
            "chungbuk",
            "chungnam",
            "jeonbuk",
            "jeonnam",
            "gyeongbuk",
            "gyeongnam",
            "jeju",
          ],
          chart: {
            width: "100%",
            toolbar: { show: false },
            background: "transparent",
          },

          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
            },
          },

          grid: { show: false },
          xaxis: {
            categories: [
              "seoul",
              "busan",
              "daegu",
              "incheon",
              "gwangju",
              "daejeon",
              "ulsan",
              "sejong",
              "gyeonggi",
              "gangwon",
              "chungbuk",
              "chungnam",
              "jeonbuk",
              "jeonnam",
              "gyeongbuk",
              "gyeongnam",
              "jeju",
            ],
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },

          tooltip: {
            y: {
              formatter: (value) => `${value} 명`,
            },
          },
        }}
      />
    </div>
  );
};

export default Pie;
