const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Student Api is running successfully",
        environment: process.env.NODE_ENV || "development"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Ok"
    });
});

app.get("/student", (req, res) => {
    const student = [
        { id: 1, name: "Priya", course: "IT" },
        { id: 2, name: "Rahul", course: "Computer Engineering" },
        { id: 3, name: "Amit", course: "Data Science" }
    ];

    res.status(200).json(student);
});

app.post("/student", (req, res) => {
    const { id, name, course } = req.body;

    const student = { id, name, course };

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});