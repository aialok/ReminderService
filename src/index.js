const express = require("express");
const bodyParser = require("body-parser");

//Imports
const { PORT } = require("../src/config/serverConfig");
const { sendBasicEmail } = require("../src/services/email-services");

const SetupAndStartServer = async (req, res) => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  sendBasicEmail(
    "alok@gmail.com",
    "alokgupta1560@gmail.com",
    "Flight booked successfully",
    "Hey ! how are you doing?",
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flight Booking Confirmation</title>
        <style>
            /* Add your CSS styles here for formatting the email */
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #007bff;
            }
            p {
                line-height: 1.6;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Flight Booking Confirmation</h1>
            <p>Dear Md. Khateebur Rab,</p>
            <p>Your flight has been successfully booked! Here are the details:</p>
            <ul>
                <li><strong>Flight Number:</strong> ABC123</li>
                <li><strong>Departure Date:</strong> January 15, 2024</li>
                <li><strong>Departure Time:</strong> 08:00 AM</li>
                <li><strong>Destination:</strong> Araria International Airport</li>
            </ul>
            <p>Thank you for choosing our airline. We look forward to serving you on your upcoming journey.</p>
            <p>Safe travels!</p>
        </div>
    </body>
    </html>
     `
  );

  app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
  });
};

SetupAndStartServer();
