import ApexChart from "react-apexcharts";

interface IProps {
  totalCnt: number[];
}

const Chart = ({ totalCnt }: IProps) => {
  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <ApexChart
        type="bar"
        series={[
          {
            name: "확진자 수",
            data: totalCnt,
          },
        ]}
        options={{
          theme: { mode: "light" },
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

export default Chart;
