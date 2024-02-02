// Get the context of the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
    labels: ['CT-1', 'CT-2', 'CT-3', 'CT-4', 'CT-5'],
    datasets: [{
        label: 'Marks',
        data: [50, 30, 60, 70, 40],
        backgroundColor: 'rgba(00, 00, 255, 0.9)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',     // Border color
        borderWidth: 0.25                             // Border width
    }]
};
// Create the chart
var myChart = new Chart(ctx, {
    type: 'bar',    // Specify the type of chart (bar, line, pie, etc.)
    data: data
});
