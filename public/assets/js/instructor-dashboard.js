let chart; // Variable to hold the chart instance

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('attendanceChart').getContext('2d');

    // Function to render the chart
    function renderChart(data) {
        const labels = Object.keys(data); // Section Names or Dates
        const values = Object.values(data); // Attendance Counts

        if (chart) {
            chart.destroy(); // Destroy the previous chart instance before re-creating it
        }

        // Create the new chart
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Attendance Count',
                    data: values,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
                    borderRadius: 10,
                    barThickness: 35
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Attendance Count by Section',
                        color: '#ffffff',
                        font: {
                            size: 18,
                            family: 'Arial'
                        }
                    },
                    legend: {
                        display: true,
                        labels: {
                            color: '#ffffff',
                            font: {
                                size: 12,
                                family: 'Arial'
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 12
                        },
                        bodyColor: '#ffffff'
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: '#cccccc',
                            font: { size: 12, family: 'Arial' }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: {
                            color: '#cccccc',
                            font: { size: 12, family: 'Arial' }
                        }
                    }
                }
            }
        });
    }

    // Initial chart rendering with data passed from the server (retrieved from the DOM attribute)
    const chartElement = document.getElementById('attendanceChart');
    const initialData = JSON.parse(chartElement.getAttribute('data-initial-data'));
    console.log("Initial Data for Chart:", initialData); // Debug initial data
    renderChart(initialData);

    // Dropdown change handler
    document.getElementById('section-select').addEventListener('change', function () {
        const selectedSection = this.value;

        console.log("Section selected:", selectedSection); // Debugging selected section

        fetch(`InstructorDashboardServlet?section=${encodeURIComponent(selectedSection)}`, {
            headers: { Accept: "application/json" }
        })
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 204) { // No Content
                        alert("No attendance data available for the selected section.");
                        return {}; // Return an empty object to render an empty chart
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data fetched for section:", selectedSection, data); // Debugging fetched data
                if (Object.keys(data).length === 0) {
                    alert("No attendance data available for the selected section.");
                    renderChart({}); // Render an empty chart
                } else {
                    renderChart(data);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    });
});
