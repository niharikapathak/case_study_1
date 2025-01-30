import React from 'react';
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import { useSelector } from 'react-redux'; // To access Redux store

// Import the necessary Chart.js components
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register the Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = () => {
  // Get transactions from Redux store
  const transactions = useSelector((state) => state.transactions.transactions);

  // Aggregate data to show category-wise spending
  const categoryData = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (acc[category]) {
      acc[category] += amount; // Add amount if category already exists
    } else {
      acc[category] = amount; // Initialize category if not present
    }
    return acc;
  }, {});

  // Prepare data for the Pie chart
  const data = {
    labels: Object.keys(categoryData), // Categories (Fuel, Food, etc.)
    datasets: [
      {
        data: Object.values(categoryData), // Amounts for each category
        backgroundColor: [
          '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8333', '#33A1FF', // Colors for each slice
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center mt-[7vh]">
      <h2 className="text-2xl font-semibold  tracking-[2px] mb-[1vh]">Category-wise Spending</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
