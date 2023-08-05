module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules/"],
    setuFilesAfterEnv: ["<rootDir>/setuTests.js"],
    transform: {
        "^,+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    }
}