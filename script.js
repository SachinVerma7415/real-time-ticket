document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    
    // Dummy search results
    const results = [
        { trainNo: "12345", trainName: "Express A", time: "10:00 AM", availableSeats: 50 },
        { trainNo: "67890", trainName: "Express B", time: "12:00 PM", availableSeats: 30 },
        { trainNo: "11121", trainName: "Express C", time: "02:00 PM", availableSeats: 20 },
    ];
    
    let resultsHTML = "<table class='results-table'><tr><th>Train No</th><th>Train Name</th><th>Time</th><th>Available Seats</th><th>Action</th></tr>";
    results.forEach(train => {
        resultsHTML += "<tr>" +
            "<td>" + train.trainNo + "</td>" +
            "<td>" + train.trainName + "</td>" +
            "<td>" + train.time + "</td>" +
            "<td>" + train.availableSeats + "</td>" +
            "<td><button onclick='selectTrain(\"" + train.trainNo + "\", \"" + train.trainName + "\", \"" + from + "\", \"" + to + "\")'>Select</button></td>" +
            "</tr>";
    });
    resultsHTML += "</table>";
    
    document.getElementById("results").innerHTML = resultsHTML;
});

function selectTrain(trainNo, trainName, from, to) {
    document.getElementById('train-no').value = trainNo;
    document.getElementById('train-name').value = trainName;
    document.getElementById('from-book').value = from;
    document.getElementById('to-book').value = to;
    
    document.getElementById('search-section').style.display = 'none';
    document.getElementById('booking-section').style.display = 'block';
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const trainNo = document.getElementById('train-no').value;
    const trainName = document.getElementById('train-name').value;
    const from = document.getElementById('from-book').value;
    const to = document.getElementById('to-book').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    
    const result = "<p><strong>Train Number:</strong> " + trainNo + "</p>" +
        "<p><strong>Train Name:</strong> " + trainName + "</p>" +
        "<p><strong>From:</strong> " + from + "</p>" +
        "<p><strong>To:</strong> " + to + "</p>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Gender:</strong> " + gender + "</p>";
    
    document.getElementById('booking-result').innerHTML = result;
    document.getElementById('booking-form').reset();
});
