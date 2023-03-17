# HousePricePredictionUI

House price prediction user interface predicts house price based on the inputs it accepts from the user such as longitude,latitude,housing_median_age,total_rooms,total_bedrooms,population,households,median_income 
It also displays the previously predicted prices in a table with the latest prediction displayed on top. User can filter table data, sort data on each column displayed and can display 5/10/25/100 records per page.

## Pre-requisites to run this project locally

1. Install NodeJS version 18 or above
2. Install angular/cli version 15.2.4

## How to run the application in local without docker

1. Checkout this project into your local machine using git checkout command or directly download as zip file from the git repository
2. Open a terminal or a command window
3. Navigate to the root folder of the project i.e ../house-price-prediction-UI/
4. Run `npm install` command
5. Run `ng serve`, now you can access the application using the url : http://localhost:4200/

## How to run the application in local using docker
1. Open a terminal or a command window
2. Navigate to the root folder of the project i.e ../house-price-prediction-UI/
3. Run command "docker build -t house-ui-image ." --> This command builds docker Image
4. Run command "docker run -d --name ui-container -p 4200:80 house-ui-image" -->This command runs the container with the image we built earlier
5. Now you can access the application using the url : http://localhost:4200/ 
