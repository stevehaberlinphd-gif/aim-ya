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

  peak: {
    name: "AIM-YA Peak",
    qualtricsPre:  "",   // paste the Peak pre-survey link here
    qualtricsPost: "",   // paste the Peak post-survey link here
    // Practice step uses the Peak Mind app ("Pushups for the Mind") instead of the AIM-YA practice videos.
    // Reflection, Lab, Check-in, worksheets and surveys stay the same as main.
    externalPractice: {
      app: "Pushups for the Mind (Peak Mind)",
      link: "https://peakmind.media/",          // replace with the app's download or access link when available
      linkLabel: "Open Pushups for the Mind",
      sessions: 4,
      minutes: 12,
      weekText: { 1: "Core Program, Week 1", 2: "Core Program, Week 2", 3: "Core Program, Week 3", 4: "Core Program, Week 4" },
      intro: "These Peak Mind practices are your mindfulness foundation. They train your attention, and the rest of each week (Reflection, Lab and Check-in) helps you bring that attention to AI and to the anxiety it can stir up.",
      note: "Can't open the app? Ask your instructor how to get access.",
      // Each week pairs the Peak Mind attention skill with that week's AIM-YA theme.
      // EDIT the "skill" lines to match what each Core Program week actually teaches.
      weeks: {
        1: { skill: "Focus. Notice where your attention is, and bring it back when it wanders.",
             ai:    "Notice what AI stirs in you (curiosity, worry, irritation) and come back to the present instead of being swept along.",
             bridge:"After this week's sessions, take one minute: Where did your attention go during practice? Where does it go when you open an AI tool?" },
        2: { skill: "Catching mind-wandering early, before it pulls you away.",
             ai:    "Catch the urge to reach for AI or your phone, and check what's really behind an AI answer before trusting it.",
             bridge:"Take one minute: When did you notice your mind had wandered this week? When did you notice the pull to reach for AI?" },
        3: { skill: "Watching your thoughts without following each one.",
             ai:    "Pause before you open AI (STOP), and think first, so AI supports your learning instead of replacing it.",
             bridge:"Take one minute: What did you notice in the moment just before you opened an AI tool this week?" },
        4: { skill: "Kindness and connection toward yourself and others.",
             ai:    "Meet uncertainty about AI and your future with kindness, and act on what you value.",
             bridge:"Take one minute: How has four weeks of practice changed the way you relate to AI?" }
      },
      bridge: "Take one minute: Where did your attention go during practice? Where does it go when you use AI?"
    }
  },

  teen: {
    name: "AIM-YA Teen",
    qualtricsPre:  "",   // paste the teen pre-survey (student assent) link here
    qualtricsPost: "",   // paste the teen post-survey link here
    // Videos and worksheets are the same as main for now; point to teen versions here when they're recorded, e.g.
    // videos: { 1: { practice: "media/teen/week1-practice.mp4" } },  worksheets: { 1: "media/teen/week1-worksheet.pdf" },
    text: {
      welcome: "Welcome to AIM-YA Teen · AI Mindfulness for Teens",
      landingTitle: "Before you start: the research survey",
      landingNote: "This program is part of a research study. Your teacher will give you a Study ID once your parent or guardian has returned the permission form. No form yet? You can still do the whole program; just skip the survey for now.",
      studyIdLabel: "Study ID (from your teacher)",
      skipSurvey: "Start the program without the survey",
      question: "How do you stay yourself, and stay present, in a world full of AI?"
    },
    weekText: {
      1: { title: "Arriving", tag: "Notice what AI stirs in you, from your feed to your friendships" },
      2: { title: "Seeing clearly", tag: "Who's behind the AI, and can you trust what it shows you?" },
      3: { title: "Learning with, not through", tag: "Homework, AI, and doing your own thinking" },
      4: { title: "Future self", tag: "College, careers, and what stays human" }
    },
    stepNotes: {
      practice: "Short on time in class? It's okay to do just part of the practice. Even 3 minutes counts.",
      lab: "Use only the AI tool your school allows, or follow along as your teacher runs the lab for the class. Never put personal information (your name, school, photos) into an AI tool."
    },
    support: "Feeling stressed or overwhelmed? Talk to your school counselor or another trusted adult. If you're in crisis, call or text 988 (Suicide & Crisis Lifeline), any time."
  },

};
