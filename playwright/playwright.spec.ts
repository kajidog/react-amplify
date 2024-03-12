import { expect, test, devices } from "@playwright/test"
const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')
const { skipStories } = require('./skipVrtStories.json')

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const storybookDir = resolve(__dirname, '..', 'storybook-static')
const data = JSON.parse(readFileSync(resolve(storybookDir, 'stories.json')).toString())

test.describe.parallel('visual regression testing', () => {
  Object.values(filterOutDocsKey(data.stories)).forEach((story: any) => {
    if (skipStories.includes(story.id)) {
      console.log(`Skipping ${story.title}: ${story.name} as it's in the skip list.`)
      return
    }

    test(`snapshot test ${story.title}: ${story.name} (Desktop)`, async ({ browser }) => {
      const page = await browser.newPage()
      await runSnapshotTest(page, story, 'Desktop')
      await page.close()
    })
  })
})

async function runSnapshotTest(page: any, story: any, deviceType: any) {

  await page.goto(`http://localhost:8080/iframe.html?id=${story.id}`, {
    waitUntil: 'networkidle'
  })
  await sleep(100)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    [story.title, `${deviceType}`, `${story.id}.png`],
    { threshold: 0.1 }
  )
}

/**
 * ドキュメンテーションの story を除外する
 * docs はストーリー名に --docs が含まれる
 */
function filterOutDocsKey(obj: any) {
  let filteredObj: any = {}

  for (let key in obj) {
    if (!key.includes('--docs')) {
      filteredObj[key] = obj[key]
    }
  }

  return filteredObj
}