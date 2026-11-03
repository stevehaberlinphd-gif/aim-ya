/* =====================================================================
   AIM-YA VERSIONS: the one file to edit when adding or changing a version.
   ---------------------------------------------------------------------
   Each block below is one version. Its link is:
       https://stevehaberlinphd-gif.github.io/aim-ya/<name>/
   ("main" is the plain link: https://stevehaberlinphd-gif.github.io/aim-ya/)

   Every version copies everything from "main" and changes only what you
   write in its block. Leave a Qualtrics link as "" to show the button as
   "not added yet". To use a different video or worksheet, upload the file
   (e.g. into media/czech/) and put its path here.

   TO ADD A VERSION: see README.md (two steps, about 2 minutes).
   ===================================================================== */
window.AIMYA_VERSIONS = {

  main: {
    name: "AIM-YA",
    qualtricsPre:  "https://ucf.qualtrics.com/jfe/form/SV_38HzanUWoIqpWXs",
    qualtricsPost: "https://ucf.qualtrics.com/jfe/form/SV_bxfeXUNR3bLcaNM",
    logo: "media/logo.png",
    introVideo: "media/intro.mp4",
    videos: {
      1: { practice: "media/video/week1-practice.mp4", reflection: "media/video/week1-reflection.mp4", lab: "media/video/week1-lab.mp4", checkin: "media/video/week1-checkin.mp4" },
      2: { practice: "media/video/week2-practice.mp4", reflection: "media/video/week2-reflection.mp4", lab: "media/video/week2-lab.mp4", checkin: "media/video/week2-checkin.mp4" },
      3: { practice: "media/video/week3-practice.mp4", reflection: "media/video/week3-reflection.mp4", lab: "media/video/week3-lab.mp4", checkin: "media/video/week3-checkin.mp4" },
      4: { practice: "media/video/week4-practice.mp4", reflection: "media/video/week4-reflection.mp4", lab: "media/video/week4-lab.mp4", checkin: "media/video/week4-checkin.mp4" }
    },
    worksheets: {
      1: "media/worksheets/week1-worksheet.pdf",
      2: "media/worksheets/week2-worksheet.pdf",
      3: "media/worksheets/week3-worksheet.pdf",
      4: "media/worksheets/week4-worksheet.pdf"
    }
  },

  czech: {
    name: "AIM-YA Czech",
    qualtricsPre:  "",   // paste the Czech pre-survey link here
    qualtricsPost: ""    // paste the Czech post-survey link here
    // To swap in Czech videos later, e.g.:
    // videos: { 1: { practice: "media/czech/week1-practice.mp4" } },
  },

  wesleyan1: {
    name: "AIM-YA Wesleyan",
    qualtricsPre:  "",   // paste the Wesleyan pre-survey link here
    qualtricsPost: ""    // paste the Wesleyan post-survey link here
  },

};
