import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Airline Ticket Booking - Login</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 10px;
              background-size: cover;
              background-image: url("https://image.cnbcfm.com/api/v1/image/107124573-1664221269888-gettyimages-463523885-19742e2d-9225-4f17-af59-5d06fa636af6.jpeg?v=1668095693");
            }

            .container {
              max-width: 450px;
              margin: 100px auto;
              color: turquoise;
              padding: 25px;
              padding-right: 45px;
              border-radius: 10px;
              box-shadow: 0 0 25px black;
            }

            .login-form h2 {
              margin-bottom: 20px;
              text-align: center;
              color: black;
            }

            .form-group {
              margin-bottom: 20px;
            }

            .form-group label {
              display: block;
              margin-bottom: 5px;
            }

            .form-group input {
              width: 100%;
              padding: 10px;
              border: 1px solid bisque;
              border-radius: 3px;
              background-color: beige;
            }

            button {
              width: 100%;
              padding: 10px;
              margin: 50px;
              margin-left: 10px;
              background-color: turquoise;
              color: black;
              border: none;
              border-radius: 3px;
              cursor: pointer;
            }

            button:hover {
              background-color: #0056b3;
              color: oldlace;
              size: 99%;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <form className="login-form" action="#" method="post">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </body>
    </div>
  );
};

export default LoginPage;
