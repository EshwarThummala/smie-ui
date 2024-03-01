# smie-ui
The user interface enables users to apply filters and play with the social media data.

# Cloning and Setting Up a React Project Locally

Follow these instructions to clone a React project created with Create React App from GitHub and set it up on your local machine.

## Prerequisites
- Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/).
- Make sure you install the latest stable version.
- verify your installation with the following commands.
    ```bash
    node -v
    npm -v
    ```

## Steps
- Open up a command line interface in your local path where you want to clone the repository

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/EshwarThummala/smie-ui.git
   ```

2. **Opening the Repository Folder**
   ```bash
   cd smie-ui
   ```

3. **Installing all the dependencies needed to run the project**
    ```bash
    npm install
    ```

4. **Running the application**
    ```bash
    npm start
    ```

5. **Opening the localhost:3000**
- The browser should automatically open after the above command, if not, copy and paste the following url in the broswer.
    ```bash
    http://localhost:3000
    ```

6. **Playing with the Application**
- After the application is opened, you will see a form, give your best input in there and see what kind of results the application fetches.

**Note: Currently I configured the UI to call the API which is running at render.com (https://smie-api.onrender.com)**
- If you want to run the SMIE-API(the API UI is using to retrieve data) locally, please go thorugh the documentation [here](https://github.com/EshwarThummala/smie-api).
- And also change the host to localhost constant from renderApi constant mentioned in the api/filterApi.jsx file to make sure the UI is calling the API which is running locally. 