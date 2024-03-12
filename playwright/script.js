const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

const repoPath = '/path/to/your/repository';
const fromBranch = 'test'; // 比較元のブランチ名
const TO_BRANCH = 'main'; // 比較先のブランチ名
const STORYBOOK_DIR = path.resolve(__dirname, "..", 'storybook-static');

const StatsJSON = JSON.parse(
    fs.readFileSync(path.resolve(STORYBOOK_DIR, 'preview-stats.json'))
)

const storiesJSON = JSON.parse(
    fs.readFileSync(path.resolve(STORYBOOK_DIR, 'stories.json'))
)





async function getUpdatedStories() {
    const git = simpleGit(repoPath);
    const diffSummary = await git.diffSummary([fromBranch, TO_BRANCH]);
    if (diffSummary.files.length === 0) {
        return {
            stories: {}
        }
    }

    const surveillanceList = [
        'package.json',
        'package-lock.json',
        'playwright.config.ts',
        '.storybook/main.ts',
        '.storybook/preview.ts',
    ]
    const updatedStories = diffSummary.files.filter(file => {
        return surveillanceList.some(file.file.includes)
    })
    console.log(updatedStories);
    return updatedStories;
}

