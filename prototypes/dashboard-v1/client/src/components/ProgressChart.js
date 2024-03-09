// ProgressChart.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const ProgressChart = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's progress data from the backend
        // const response = await axios.get('/api/user/progress');
        // console.log(response)
        // setProgressData(response.data);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const createChart = () => { // Move createChart inside useEffect to fix the missing dependency warning
      if (progressData.length > 0) {
        const ctx = document.getElementById('progressChart');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: progressData.map(data => data.label),
            datasets: [{
              label: 'Progress',
              data: progressData.map(data => data.value),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    createChart(); // Call createChart directly within the useEffect hook

  }, [progressData]); // Include progressData in the dependency array

  return (
    <div>
      <h2>Progress Chart</h2>
      <canvas id="progressChart" width="400" height="200"></canvas>
    </div>
  );
}

export default ProgressChart;
