import { useState, ChangeEvent } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface BarChartProps {
  data: ChartData;
  onGuessChange: (data: number[]) => void;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data, onGuessChange }) => {
  const [chartData, setChartData] = useState<ChartData>(data);

  const handleDrag = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newChartData = { ...chartData };
    newChartData.datasets[0].data[index] = newValue;
    setChartData(newChartData);
    onGuessChange(newChartData.datasets[0].data);
  };

  return (
    <div>
      <Bar data={chartData} />
      <div className="flex justify-center mt-4">
        {chartData.labels.map((label, index) => (
          <input
            key={index}
            type="range"
            min="0"
            max="100"
            value={chartData.datasets[0].data[index]}
            onChange={(e) => handleDrag(e, index)}
            className="mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default BarChart;
