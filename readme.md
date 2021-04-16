        1 file(s) copied.
# Mission Impossible

Solution for GeekTrust Mission Impossible on NodeJS

## Problem Statement

King Shan wants to visit the suburb of Hallitharam, and has 2 possible orbits and 3 possible vehicles to choose from. Your coding challenge is to determine which orbit and vehicle King Shan should take to reach Hallitharam the fastest.

## Code Structure

The code is structured in the multiple folders

1. **store**   - This contains json files will all the data.
2. **models**  - This folder contains the model files for the main classes - `Orbit, Vehicle and Weather`
3. **db**      - This contains the helpers to run the crud operations
4. **helper**  - This contains the helper files for main operation on the files.
5. **tests**   - This folder contains all the test cases for the application.


## Running the Code

Download and Unzip the file - **MissionImpossible.rar**

### Install Packages 

`npm install`

### Run Tests

`npm test`

### Run the Code

`npm start --silent <absolutute file path>`

### Example

`npm start --silent C:\Work\Code\node-workspace\lengaburu-traffic\input.txt`

### Sample Execution

`input.txt - RAINY 8 15`

`npm start --silent input.txt`

Output - `TUKTUK ORBIT2`
