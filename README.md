# Linkless

![](morpheus.png)

"This is your last chance. After this there is no turning back. You take the blue pill, the story ends; you wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland and I show you how deep the rabbit hole goes." - Morpheus

Have you ever taken the "red pill" and gotten lost in the vast wasteland that is the internet?

With Linkless you'll now have the choice to pick between the blue pill or the red pill.

Take the metaphorical blue pill and the article will end, you'll be able to get on with your life and do all the work that needs to be done.

Take the metaphorical red pill and the article will lead you to open 12 tabs with new articles to add to your collection of unread articles.

## Usage

- Click the blue pill icon to turn off the links on your page
- Click the red pill icon to keep the links on your page

## Development

1. Run: `git clone https://github.com/gillerg8/linkless.git`
2. Build the project: `cd linkless && npm i && npm run dev`
2. Navigate to chrome://extensions
3. Make sure 'Developer mode' is checked
4. Click Load unpacked extension...
5. Browse to linkless/build and click Select

## Cutting a Release

- bump versions in `package.json` and `manifest.json`
- tag the code with the version, i.e. `git tag v0.4.0`
- push with tags `git push --tags`

Now generate a release with **gren**. Make sure all issues associated with the new version are linked to a milestone
with the name of the tag.

```
gren release --override --data-source=milestones --milestone-match="{{tag_name}}"
```
