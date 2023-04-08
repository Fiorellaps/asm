import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Import chart.js
import Chart from 'chart.js/auto';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    chartContainer: {
        width: 500,
        height: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 10
    }
});

// Create chart data
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }
    ]
};

// Create chart options
const chartOptions = {
    plugins: {
        legend: {
            display: false
        }
    }
};

// Create bar chart component
const BarChart = () => {
    // Register chart.js
    Chart.register(Bar);

    return (
        <View style={styles.chartContainer}>
            <Bar data={chartData} options={chartOptions} />
        </View>
    );
};

export default BarChart;
