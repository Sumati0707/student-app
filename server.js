const express = require('express');
const app = express();
const PORT = 3000;

// This allows your API to read JSON data sent in a POST request
app.use(express.json());

// Your POST API Endpoint
app.post('/api/students', (req, res) => {
    const studentData = req.body;
    
    // Log the incoming data to your terminal
    console.log("Received student data:", studentData);

    // Send a success response back
    res.status(201).json({
        message: "Student data successfully sent to the staging area!",
        data: studentData
    });
});
app.get('/', (req, res) => {
    res.send('Student API Server is running successfully on Staging!');
}); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});