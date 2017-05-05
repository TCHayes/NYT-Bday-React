# Your New York Times Birthday

## See the front page from the day you were born


### Overview

["Your New York Times Birthday"](https://damp-ocean-99717.herokuapp.com/) is a simple React/Redux app ([originally written with just jQuery](https://github.com/TCHayes/NYT-bday)) for viewing headlines and briefs from the New York Times front page on the day you were born (or any other date you enter).

Inspired by the offical [New York Times' Birthday Books](https://www.nytimes.com/store/the-ultimate-birthday-book-the-times-of-your-life-nsap2176.html). Also, if you're an NYT subscriber, I strongly recommend checking out their [TimesMachine](https://timesmachine.nytimes.com/browser/), which lets you browse their archives to view any past paper just as it originally appeared in print.


## Installation
```
>   git clone https://github.com/TCHayes/NYT-Bday-React.git
>   cd nyt-bday-react
>   npm install
```

### Launching
```
>   npm run dev
```
Then open [`localhost:8080`](http://localhost:8080) in a browser.

## Design & Functionality

This is a simple, one page app, which asks the user to enter a date in the format 02/18/1987, and displays a grid of articles with the following (based on availability from the NYT API; older articles are less likely to have bylines):
* Headline
* Byline
* Article Lead
* a "More" link for viewing the full article on the NYT website

## Technology
* HTML5
* CSS3
* JavaScript
* React
* Redux

## Future Features
* Add ability to handle other date formats (i.e. February 18, 1987 vs only accepting 02/18/1987)
