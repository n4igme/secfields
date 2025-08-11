# Multiplayer Labyrinth Game Development Prompt

You are an expert full-stack game developer specializing in real-time multiplayer web games. Your task is to create a complete multiplayer labyrinth/maze game with the following specifications:

## Game Requirements

### Core Gameplay
- **Maze Generation**: Procedurally generate random mazes using algorithms (e.g., recursive backtracking, Prim's algorithm)
- **Player Movement**: Smooth WASD/arrow key controls with collision detection
- **Objective**: Players must navigate from start point to exit/treasure as quickly as possible
- **Visual Design**: Clean, modern graphics with distinguishable player avatars and clear maze walls
- **Game Modes**:
  - **Single Player**: Practice mode with local high scores
  - **Multiplayer Race**: Multiple players compete to finish the same maze first
  - **Time Trial**: Individual players race against the clock

### Multiplayer Features
- **Real-time Gameplay**: Live player position updates using WebSockets
- **Room System**: Players can create/join game rooms (4-8 players max per room)
- **Player Management**: Username registration, unique player colors/avatars
- **Live Updates**: See other players moving in real-time within the same maze
- **Game States**: Lobby waiting, countdown, active game, results screen

### Scoreboard System
- **Global Leaderboard**: All-time fastest completion times across all players
- **Room Leaderboard**: Rankings within current game session
- **Personal Stats**: Individual player statistics (games played, best times, win rate)
- **Filtering Options**: Filter by maze difficulty, game mode, time period
- **Score Categories**:
  - Fastest completion time
  - Most wins
  - Most games completed
  - Average completion time

### Technical Requirements
- **Frontend**: HTML5 Canvas for smooth game rendering, JavaScript for game logic
- **Backend**: Node.js with Socket.io for real-time communication
- **Database**: Store user profiles, scores, and game history (your choice: MongoDB, PostgreSQL, or SQLite)
- **Real-time Communication**: WebSocket implementation for multiplayer functionality
- **Responsive Design**: Works on desktop and mobile devices

## Implementation Specifications

### Game Features
1. **Maze Generator**: Create mazes with adjustable difficulty (size: 15x15 to 50x50)
2. **Player System**: 
   - Unique usernames and avatar colors
   - Player collision detection
   - Spectator mode for eliminated/finished players
3. **Game Flow**:
   - Room creation/joining interface
   - Countdown timer before game starts
   - Real-time position tracking
   - End game celebration/results screen
4. **Power-ups** (Optional): Speed boost, wall phase, reveal path
5. **Maze Variations**: Different themes/visual styles, maze complexity options

### Scoreboard Features
1. **Database Schema**: Design tables/collections for users, games, scores, rooms
2. **Score Tracking**: Record completion times, winner determination, statistical analysis
3. **Leaderboard Display**: Top 10/50/100 players, pagination, search functionality
4. **Real-time Updates**: Live score updates during and after games
5. **Historical Data**: Game replay data, performance trends over time

### Technical Implementation
1. **Client-Side**:
   - Game loop with requestAnimationFrame
   - Smooth interpolation for remote players
   - Input handling and prediction
   - Canvas rendering optimization
2. **Server-Side**:
   - Room management system
   - Game state synchronization
   - Anti-cheat validation (server-side position verification)
   - Database operations for scores/stats
3. **Network Architecture**:
   - Efficient message protocols
   - Connection handling (disconnect/reconnect)
   - Lag compensation techniques

## Deliverables Required

### 1. Complete File Structure
Provide a detailed project directory structure with all necessary files and folders.

### 2. Core Implementation Files
- Server setup (Express + Socket.io)
- Database models and connection
- Game logic and maze generation algorithms
- Client-side game engine and rendering
- Real-time multiplayer synchronization
- Scoreboard and user management systems

### 3. Frontend Components
- Game lobby/room interface
- Maze game canvas and controls
- Leaderboard display
- User registration/profile pages
- Responsive CSS styling

### 4. Setup Documentation
- Installation and configuration instructions
- Environment variables and database setup
- Deployment guidelines
- API documentation for WebSocket events

## Success Criteria

The final game should be:
- **Fully Playable**: Complete maze navigation with win/lose conditions
- **Multiplayer Ready**: Support multiple concurrent players and rooms
- **Persistent Data**: Scores and user data saved across sessions
- **Performant**: Smooth 60fps gameplay with minimal network lag
- **User-Friendly**: Intuitive controls and clear game instructions
- **Scalable**: Architecture that can handle growing player base

## Optional Advanced Features
- Tournament/bracket system for competitive play
- Maze sharing and custom maze creation tools
- Player ranking/ELO system
- Chat system during gameplay
- Replay system to watch previous games
- Mobile app version using Progressive Web App (PWA)
- Integration with social platforms for sharing scores

## Technical Constraints
- Maximum room size: 8 players
- Target performance: 60fps on average hardware
- Database queries optimized for sub-100ms response times
- WebSocket message rate: 10-30 updates per second
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

Start with the project structure and core server implementation, then proceed with the game engine and multiplayer features. Focus on creating a minimum viable product first, then enhance with advanced features.

Generate complete, production-ready code that can be run immediately after setup. Include comprehensive error handling, input validation, and security measures appropriate for a multiplayer online game.