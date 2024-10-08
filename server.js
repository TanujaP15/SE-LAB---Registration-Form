const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (for serving the HTML and CSS)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Check if the Excel file exists, if not, create it
    const filePath = path.join(__dirname, 'registration-data.xlsx');
    let workbook;
    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath); // Read the existing workbook
    } else {
        workbook = xlsx.utils.book_new(); // Create a new workbook
    }

    const sheetName = 'Registrations';
    let worksheet = workbook.Sheets[sheetName];

    // If the worksheet doesn't exist, create it
    if (!worksheet) {
        worksheet = xlsx.utils.json_to_sheet([]);
        xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    // Get the existing data in the sheet
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Add the new form data
    data.push({
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Phone Number": formData.phone,
        "Date of Birth": formData.dob,
        "Address": formData.address,
        "City": formData.city,
        "Pin Code": formData.pinCode,
        "Email": formData.email,
        "Education": formData.education,
        "College Name": formData.collegeName
    });

    // Write the updated data back to the sheet
    const newWorksheet = xlsx.utils.json_to_sheet(data);
    workbook.Sheets[sheetName] = newWorksheet;
    xlsx.writeFile(workbook, filePath);

    // Send a success response
    res.send('Form submitted successfully and saved to Excel sheet.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
