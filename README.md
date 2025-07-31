# 2048 Game

A web-based implementation of the popular 2048 puzzle game built with vanilla JavaScript, HTML, and SCSS. The goal is to slide numbered tiles on a grid to combine them and create a tile with the number 2048.

## 🎮 Demo

[Play the game here](https://andslash.github.io/2048_game/)

## 🎯 Game Rules

- Use arrow keys to move tiles in four directions (up, down, left, right)
- When two tiles with the same number touch, they merge into one
- After every move, a new tile (2 or 4) appears randomly on the board
- The goal is to create a tile with the number 2048
- The game ends when you can't make any more moves

## 🚀 Features

- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: CSS transitions for tile movements
- **Score Tracking**: Keep track of your current score
- **Game States**: Start, playing, win, and lose states
- **Keyboard Controls**: Use arrow keys for gameplay
- **Touch Support**: Swipe gestures for mobile devices

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3/SCSS**: Styling with Sass preprocessing
- **Vanilla JavaScript**: Game logic and DOM manipulation
- **ES6 Classes**: Object-oriented approach for game structure
- **Parcel**: Build tool for development and production

## 📁 Project Structure

```
src/
├── index.html          # Main HTML file
├── styles/
│   ├── main.scss       # Main SCSS file
│   └── main.css        # Compiled CSS
├── scripts/
│   └── main.js         # Main JavaScript file with DOM manipulation
├── modules/
│   └── Game.class.js   # Game class with core logic
└── images/
    └── reference.png   # Reference image
```

## 🏗️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/AndSLASH/2048_game.git
   cd 2048_game
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:1234` to play the game

## 📝 Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint and Stylelint
- `npm test` - Run linting and tests
- `npm run deploy` - Deploy to GitHub Pages

## 🎮 How to Play

1. Click the "Start" button to begin a new game
2. Use arrow keys to move tiles:
   - **↑** Arrow Up: Move tiles up
   - **↓** Arrow Down: Move tiles down
   - **←** Arrow Left: Move tiles left
   - **→** Arrow Right: Move tiles right
3. Combine tiles with the same number to create larger numbers
4. Try to reach the 2048 tile to win!
5. Click "Restart" to start a new game at any time

## 🏆 Game Logic

The game implements the following core mechanics:

- **Tile Movement**: Tiles slide in the chosen direction until they hit the edge or another tile
- **Tile Merging**: Two tiles with the same value merge when they collide
- **Score Calculation**: Points are awarded equal to the value of merged tiles
- **Random Tile Generation**: New tiles (90% chance of 2, 10% chance of 4) appear after each move
- **Win/Lose Detection**: Game checks for 2048 tile (win) or no possible moves (lose)

## 🎨 Styling

The game features a modern, clean design with:

- Gradient backgrounds for different tile values
- Smooth CSS transitions for tile movements
- Responsive grid layout
- Mobile-friendly touch controls
- Color-coded tiles for easy number recognition

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contact

**Andrii Zakharov**
LinkedIn: [https://www.linkedin.com/in/andrii-zakharov-b10567368/](https://www.linkedin.com/in/andrii-zakharov-b10567368/)

---

⭐ If you enjoyed this project, please give it a star on GitHub!
