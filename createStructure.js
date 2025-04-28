const fs = require('fs');
const path = require('path');

// Define the directory structure
const structure = {
  'README.md': '',
  'package.json': '',
  '.gitignore': '',
  'vite.config.js': '',
  public: {
    'index.html': '',
    'favicon.ico': '',
    'manifest.json': '',
    'robots.txt': '',
  },
  src: {
    'index.js': '',
    'App.jsx': '',
    components: {
      GameEngine: {
        'GameEngine.jsx': '',
        'GameEngine.module.css': '',
      },
      PlayerAvatar: {
        'PlayerAvatar.jsx': '',
        'PlayerAvatar.module.css': '',
      },
      EnemyAI: {
        'EnemyAI.jsx': '',
        'EnemyAI.module.css': '',
      },
      HUD: {
        'HUD.jsx': '',
        'HUD.module.css': '',
      },
      Menu: {
        'MainMenu.jsx': '',
        'PauseMenu.jsx': '',
        'Menu.module.css': '',
      },
    },
    hooks: {
      'useKeyPress.js': '',
      'useMousePosition.js': '',
      'useAnimationFrame.js': '',
    },
    contexts: {
      'GameContext.jsx': '',
      'SettingsContext.jsx': '',
    },
    utils: {
      'mathTools.js': '',
      'pathfinding.js': '',
      'collisionDetection.js': '',
      'formatters.js': '',
    },
    services: {
      'api.js': '',
      'auth.js': '',
      'storage.js': '',
    },
    constants: {
      'gameSettings.js': '',
      'colors.js': '',
      'strings.js': '',
    },
    assets: {
      images: {
        'logo.png': '',
        'background.jpg': '',
        'spritesheet.png': '',
      },
      audio: {
        'click.mp3': '',
        'backgroundMusic.mp3': '',
      },
      fonts: {
        'arcade.ttf': '',
      },
      videos: {
        'introCutscene.mp4': '',
      },
    },
    styles: {
      'global.css': '',
      'variables.css': '',
    },
    tests: {
      'App.test.jsx': '',
      'GameEngine.test.jsx': '',
      'utils.test.js': '',
    },
    config: {
      'eslint.json': '',
      'prettier.json': '',
    },
  },
};

// Recursive function to create directories and files
function createStructure(basePath, obj) {
  for (const [name, content] of Object.entries(obj)) {
    const fullPath = path.join(basePath, name);
    if (typeof content === 'object') {
      // Create directory
      if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath, { recursive: true });
      createStructure(fullPath, content);
    } else {
      // Create file
      if (!fs.existsSync(fullPath)) fs.writeFileSync(fullPath, content);
    }
  }
}

// Run the script
createStructure(__dirname, structure);
console.log('Directory structure created successfully!');