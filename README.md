# AIM-YA (AI Mindfulness for Young Adults)

A 4-week program app: a pre-survey, four weeks of videos (Practice, Reflection, Lab, Check-in) with PDF worksheets, and a post-survey.

## Live links

| Version | Link for participants |
|---|---|
| Main | https://stevehaberlinphd-gif.github.io/aim-ya/ |
| Czech | https://stevehaberlinphd-gif.github.io/aim-ya/czech/ |
| Wesleyan 1 | https://stevehaberlinphd-gif.github.io/aim-ya/wesleyan1/ |
| Peak (Peak Mind practices) | https://stevehaberlinphd-gif.github.io/aim-ya/peak/ |

**Pilot partner landing page** (public recruiting page with the readiness check and updates sign-up):
https://stevehaberlinphd-gif.github.io/aim-ya/pilot/

**Collaborator onboarding page** (for partner sites and facilitators, not students):
https://stevehaberlinphd-gif.github.io/aim-ya/onboarding/

Each version keeps its own saved progress, and sends `pid`, `phase` (pre/post) and `version` to Qualtrics.
In every Qualtrics survey, add **Embedded Data** fields `pid`, `phase` and `version` at the top of the Survey Flow.

### Peak version: practice tracking
The Peak post-survey link also sends `practice_w1` … `practice_w4` and `practice_total` (Peak Mind sessions ticked off each week). Add these as Embedded Data fields in the Peak post-survey to record them.

## Add a new version (about 2 minutes, all on github.com)

Pick a short name: lowercase letters, numbers and hyphens only (e.g. `chemistry`, `wesleyan2`, `student-teachers`).

1. **Make its folder.** Open the `_template` folder → `index.html` → click **Copy raw file** (the copy icon).
   Go back to the main page of the repository → **Add file → Create new file**.
   Type the name as `chemistry/index.html` (the slash makes the folder), paste, and click **Commit changes**.
2. **Add its settings.** Open `versions.js` → click the pencil (Edit). Copy the `wesleyan1: { ... },` block,
   paste it just above the last `};`, change `wesleyan1` to `chemistry`, set the `name` and the two Qualtrics links,
   and click **Commit changes**.

About a minute later the new link works: `https://stevehaberlinphd-gif.github.io/aim-ya/chemistry/`

## Change a version
Edit its block in `versions.js`. Anything you leave out is copied from `main`.
To use different videos or worksheets, upload the files (e.g. into `media/chemistry/`) and put their paths in the block:

```js
chemistry: {
  name: "AIM-YA Chemistry",
  qualtricsPre: "https://...",
  qualtricsPost: "https://...",
  worksheets: { 1: "media/chemistry/week1-worksheet.pdf" },
  videos: { 2: { lab: "media/chemistry/week2-lab.mp4" } }
},
```

## After replacing a video or worksheet
In `app/app.js`, change the date in `const MEDIA_VERSION="..."` (any new value works). This makes everyone's browser load the new files instead of old saved copies.

## What's where
- `versions.js`: all version settings (the only file you normally edit)
- `app/`: the app itself, shared by every version
- `media/`: logo, intro video, the 16 step videos, the 4 worksheets
- `index.html`: the main version; each other folder (`czech/`, `wesleyan1/`...) holds one identical `index.html`
- `pilot/`: the public landing page for recruiting pilot partners (`index.html`, headshot, and `og.png`, the preview image shown when the link is shared). There is no form service: after the readiness check, visitors press "Email my results", which opens their email app with their answers filled in and addressed to steve.haberlin@ucf.edu. The updates sign-up works the same way.
- `onboarding/`: the collaborator onboarding page (`index.html`) and its four facilitator training videos (`onboarding/media/`). The training guide and MOU form are in `onboarding/files/`; to update one, upload it with a new name (e.g. `-v3`) and change its link in `onboarding/index.html`, so no one gets an old cached copy.

## Privacy
The site is static: no accounts and no server. Survey answers go to Qualtrics. Progress (which steps are done) is saved only in each participant's own browser.
