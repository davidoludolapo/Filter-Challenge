# Challenge overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Deployed link of the project
https://filterchallenge.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Solution

I created a component containing the mock data to be used, containing an array of objects conyaining the id, name, category and date. Then I created a useState of menuItem and passed the array as a parameter in the usestate. Then I create another component; Menu and passed "menuItem" as props into the component after which I cycled through menuItem using the map method and returned a jsx element containing every item in the array.

For the filter buttons, I created a filter function that takes in a paramter "button", then created a variable "filterData". I cycled through the array in data.js while targeting the category item using the filter method and assigned it to the button in the usestate. In other words, if the paramter button is equal to the name of any of the category, the button will display each of the category. Next, I called on the setMenuItem from the useState and passed the filteredData into it.
I also created a seperate button component and passed the filter function as a props into it 


