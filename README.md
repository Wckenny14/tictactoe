# My First Project: Tic-Tac-Toe

I recently became a student at General Assembly (GA) in Sydney, Australia studying Software Engineering in a full time immersive course and this is my first student project.

---


### Brief

- Build a web application from scratch
- Map out the game logic
- Create seperate HMTL, CSS and JavaScript files in the application
- Build a dynamic game that allows two players to compete

---


### Technical Requirements

- Render the game board in the browser
- Switch turns between chosen markers
- Visually display a win or draw

---


### Planning Stage

I wrote my initial HTML tree in excel as this was the program I was most familiar with.

This allowed me to see how elements were linked within the tree and where I might require JS.

![Plan_in_excel](/tictactoe/Screenshot%202022-12-18%20at%208.05.08%20pm.png)

Although this was what I originally planned, in the end I chose to go with a different approach and my HTML changed accordingly

I also tried to write out my JS logic initially in word to help guide me through the process of writing the code but it turned out to be a mess and completely wrong so I have chosen to omit it from this document.

---


### Writing The Code

At the point of starting to write the code I had only gone through around 20 hours of studying JavaScript and this was my total hours of experience so I wasn't really sure what I was doing.
This was the code that I wrote before I found myself at a loss of where to go next:

```Javascript
// Access board elements in the DOM
const playerTurn = document.querySelector(".turn")
const result = document.querySelector(".result")
const reset = document.querySelector(".reset")

// Accessing the 'board' in the DOM and converting it to an Array
const boardSquares = Array.from(document.querySelectorAll(".square"));

// Create players markers and current player
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne
```

When I found myself at a loss I did what I understand all seasoned developers do and turned to google for answers. What i found at first probably confused me more than helped but I would like to says thanks to the following video which helped get me started:

- https://www.youtube.com/watch?v=P2TcQ3h0ipQ&t=591s

I was conscious of not directly copying anything so I used this for inspiration and tried to do my own thing.

---

### Bottlenecks and Challenges

To say this wasn't a challenge would be a lie. I often found myself scratching my head wondering what to do next and looking to google to provide the answers which 70% of the time didn't seem to be there.

Luckily in the end I did manage to overcome all hurdles to deliver this project but I would like to highlight one bit of cose that had me stumped for a whole day.

initially I planned to use a `for of loop` to go through the below winning combinations:

```Javascript
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 6]
]
```

Unfortunately this proved to be outside of my capabilities at the time and I ended up with something much less appealing to the eye but got the job done.

---


# Please enjoy my game!!


---

Copyright Wayne Kenny