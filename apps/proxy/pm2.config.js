const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const currentDir = path.dirname(__filename);

module.exports = {
    apps: [
        {
            name: isProduction?"proxy":"proxy-dev",
            script: path.join(currentDir, "./index.js"),
            watch: !isProduction,
            env: {
                NODE_ENV: isProduction ? 'production' : 'development'
            },
            cwd:currentDir
        }
    ]
};