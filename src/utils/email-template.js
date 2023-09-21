const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
</head>
<body>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="background-color: #007BFF; padding: 20px;">
                <h1 style="color: #fff;">Alok Gupta Airlines</h1>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 20px;">
                <h2>Booking Confirmation</h2>
                <p>Dear Customer,</p>
                <p>We are pleased to inform you that your ticket booking with Alok Gupta Airlines has been successfully processed.</p>
                <p>Booking Reference Number: XEQXDJ123</p>
                <p>Flight Details:</p>
                <ul>
                    <li>Flight Number: ABC123</li>
                    <li>Departure Date: 23/09/2023</li>
                    <li>Departure Time: 12:00PM</li>
                    <li>From: Ranchi</li>
                    <li>To: Red light area Delhi</li>
                </ul>
                <p>Thank you for choosing Alok Gupta Airlines. We look forward to serving you on your upcoming flight.</p>
                <p>Safe travels!</p>
            </td>
        </tr>
        <tr>
            <td align="center" style="background-color: #f4f4f4; padding: 20px;">
                <p>If you have any questions or need further assistance, please contact our customer support at alokairlines@gmail.com or 1234566789.</p>
            </td>
        </tr>
    </table>
</body>
</html>
`;

module.exports = htmlTemplate;
