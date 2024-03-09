// CoursePieChart.js

import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'

const CoursePieChart = ({ courses }) => {
  // Extracting course names and attendance data
  useEffect(() =>{
  axios.get('https://localhost:5012/api/user/65ec332f92ffe03ab5dcfdf0').then(
    (response) => {console.log(response.data)}
  )
  })
  const courseNames = courses.map(course => course.name);
  const attendanceData = courses.map(course => course.attendance);

  // Pie chart data
  const data = {
    labels: courseNames,
    datasets: [
      {
        label: 'Attendance',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        data: attendanceData,
      },
    ],
  };

  return <Pie data={data} />;
};

export default CoursePieChart;
