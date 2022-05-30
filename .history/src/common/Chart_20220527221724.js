import { Chart as ChartJS, CategoryScale, LinearScale, BartElement, Title, Tooltip, Legend } from "chart";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BartElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Category",
            fontSize: 20,
          },
          Legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
};
