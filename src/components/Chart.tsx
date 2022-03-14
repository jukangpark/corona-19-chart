import ApexChart from "react-apexcharts";

const Chart = ({ confirmedCase, deaths }: any) => {
  return (
    <div style={{ width: "600px" }}>
      <ApexChart
        type="line"
        series={[
          { name: "확진자 수", data: confirmedCase },
          { name: "사망자 수", data: deaths },
        ]}
        options={{
          theme: { mode: "light" },
          chart: {
            height: 500,
            width: 300,
            toolbar: { show: false },
            background: "transparent",
          },
          grid: { show: false },
          stroke: { curve: "smooth", width: 4 },
          yaxis: {
            show: false,
          },

          fill: {
            type: "gradient",
            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
          },
          colors: ["#0fbcf9"],
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
