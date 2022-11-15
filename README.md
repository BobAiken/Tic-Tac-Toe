# Tic-Tac-Toe

### Learning Goals:
- Solidify and demonstrate your understanding of:
    - DRY JavaScript
    - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Abstract:
This web app allows you to play a game of tic-tac-toe. The banner displays which player's turn it is, who won the game, and if the game is a draw. The side columns keep track of the amount of wins each player has and stores them locally so they stay on page refresh. There is also a sound effect for when a token is placed and hover states so the user knows when and where they can place a token.

### Installation Instructions:
- Fork the repository found [here](https://github.com/BobAiken/Tic-Tac-Toe)
- Clone down your new, forked repo. While cloning, name it what you want your project to be named, and run `git clone`. 
- cd into the repository
- Run `open index.html` in your text editor

Alternatively: 
- [Use this link](https://bobaiken.github.io/Tic-Tac-Toe/)

### Preview of App:
<img width="1440" alt="Screen Shot 2022-11-15 at 10 38 01 AM" src="https://user-images.githubusercontent.com/113254999/201978903-df08cc4f-27d2-4c98-8c36-f56b9fc6246a.png">
<img width="1440" alt="Screen Shot 2022-11-15 at 10 38 12 AM" src="https://user-images.githubusercontent.com/113254999/201978967-6db72d49-dbbc-4551-bf5c-bdb2b9469646.png">
<img width="1440" alt="Screen Shot 2022-11-15 at 10 38 31 AM" src="https://user-images.githubusercontent.com/113254999/201978986-6accc06a-2532-428d-bc25-53a27647891d.png">
<img width="1440" alt="Screen Shot 2022-11-15 at 10 38 52 AM" src="https://user-images.githubusercontent.com/113254999/201978995-c6b0f3f9-2354-4b8c-ab0a-6ec46e3f8310.png">



### Context:
This was the final project for Mod1 2210FE students. The start date was November 8th and it personally took until the 11th to complete.


### Contributors:
[Robert 'Bob' Aiken (he/him)](https://www.linkedin.com/in/robertsiraaiken/)

### Wins + Challenges:

Some wins included:
- Keeping all Data model and DOM functions seperate from one another.
- Learning and adding local storage and audio functionality.

Some challenges included:
- Checking whether a space was available using the data model first then updating the DOM.
- Refactoring to un-nest functions from within each other so future iterations could be added easier.
