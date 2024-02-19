'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Box } from '@chakra-ui/react';
import { useHistoricStore } from '../hooks/form.store';

const WeightChart = () => {
  const { historic } = useHistoricStore(); // Use o hook para obter os dados históricos
  const chartRef = useRef(null);

  useEffect(() => {
    // Condicional para garantir que o ref e os dados estejam carregados
    if (chartRef.current && historic) {
      const chartContext = chartRef.current.getContext('2d');
      const chart = new Chart(chartContext, {
        type: 'line',
        data: {
          labels: historic.map(item => item.date), // Usa as datas do histórico como labels
          datasets: [{
            label: 'Peso',
            data: historic.map(item => item.weight), // Usa os pesos do histórico como dados
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Evolução do Peso',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Limpeza na desmontagem do componente
      return () => {
        chart.destroy();
      };
    }
  }, [historic]); // Atualiza o gráfico quando o histórico muda

  return (
    <Box width="70%" marginX="auto" maxWidth="lg">
      <canvas ref={chartRef} />
    </Box>
  );
};

export default WeightChart;
