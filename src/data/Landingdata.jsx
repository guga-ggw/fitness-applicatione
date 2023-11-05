const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const LandingData = [
  {
    id: generateRandomId(),
    title: "Strong Back Challenge",
    description: "Build a powerful and well-defined back with this 3-month workout program. Strengthen your back muscles through a series of challenging exercises that include deadlifts, pull-ups, and more. This program is designed for advanced individuals looking to take their back strength to the next level.",
    targetMuscle: "Back",
    difficulty: "Advanced",
    exercises: [
      {
        name: "Deadlifts",
        duration: "1.5 minutes",
        sets: 5,
        repetitions: 8,
      },
      {
        name: "Pull-Ups",
        duration: "45 seconds",
        sets: 4,
        repetitions: 10,
      }
    ],
    programImage: "https://miro.medium.com/v2/resize:fit:1000/1*pVU7952BjkP72qpjJu_Ihw.jpeg",
    durationMonths: 3,
  },
  {
    id: generateRandomId(),
    title: "Strong Foot Program",
    description: "Get stronger and more defined arms with this 2.5-month workout program. This program focuses on quadriceps, helping you build leg strength and definition. It's suitable for intermediate fitness levels and includes exercises like push-ups and tricep dips.",
    targetMuscle: "Quadriceps",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Push-Ups",
        duration: "1 minute",
        sets: 3,
        repetitions: 15,
      },
      {
        name: "Tricep Dips",
        duration: "45 seconds",
        sets: 4,
        repetitions: 12,
      },
    ],
    programImage: "https://hips.hearstapps.com/hmg-prod/images/mindset-is-everything-royalty-free-image-1571082203.jpg?crop=1xw:0.84415xh;center,top",
    durationMonths: 2.5,
  },
  {
    id: generateRandomId(),
    title: "Biceps Builder",
    description: "Develop strong and well-defined biceps with this 2-month workout program. Sculpt your biceps with exercises like barbell curls and hammer curls. This program is suitable for individuals looking to enhance their arm strength and appearance.",
    targetMuscle: "Biceps",
    difficulty: "Moderate",
    exercises: [
      {
        name: "Barbell Curls",
        duration: "45 seconds",
        sets: 4,
        repetitions: 12,
      },
      {
        name: "Hammer Curls",
        duration: "45 seconds",
        sets: 4,
        repetitions: 10,
      },
    ],
    programImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/03/chest-and-bicep-workout-routine.jpg?fit=1000%2C667&ssl=1",
    durationMonths: 2,
  },
  {
    id: generateRandomId(),
    title: "Abs Core Strength",
    description: "Achieve a strong and defined core with this 3-month workout program. Strengthen your abdominal muscles with exercises like crunches and planks. This program is designed for intermediate fitness levels and focuses on core stability and endurance.",
    targetMuscle: "Abdominals (Abs)",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Crunches",
        duration: "30 seconds",
        sets: 3,
        repetitions: 15,
      },
      {
        name: "Planks",
        duration: "45 seconds",
        sets: 3,
        repetitions: 10,
      },
    ],
    programImage: "https://www.onthegofitnesspro.com/wp-content/uploads/2020/07/AdobeStock_287586374-scaled.jpeg",
    durationMonths: 3,
  },
];
 ;
 export const LowerBodyData = [
  {
    id: generateRandomId(),
    title: "Leg Strength Builder",
    description: "Develop powerful and well-defined legs with this 3-month lower body workout program. Strengthen your lower body muscles, including quads, hamstrings, and glutes, through a series of challenging exercises like squats, lunges, and more. This program is designed for intermediate individuals looking to enhance their lower body strength and appearance.",
    targetMuscle: "Lower Body (Quads, Hamstrings, Glutes)",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Squats",
        duration: "1.5 minutes",
        sets: 4,
        repetitions: 10,
      },
      {
        name: "Lunges",
        duration: "1 minute",
        sets: 3,
        repetitions: 12,
      },
    ],
    programImage: "https://example.com/leg-strength-program-image.jpg",
    durationMonths: 3,
  },
  {
    id: generateRandomId(),
    title: "Glute Activation Program",
    description: "Activate and shape your glutes with this 2-month lower body workout program. Focus on glute-specific exercises like hip thrusts and glute bridges to improve muscle tone and strength. This program is suitable for all fitness levels and is ideal for those looking to enhance their lower body aesthetics.",
    targetMuscle: "Glutes",
    difficulty: "Beginner",
    exercises: [
      {
        name: "Hip Thrusts",
        duration: "45 seconds",
        sets: 4,
        repetitions: 12,
      },
      {
        name: "Glute Bridges",
        duration: "30 seconds",
        sets: 3,
        repetitions: 15,
      },

    ],
    programImage: "https://cdn.mos.cms.futurecdn.net/umUz4ZtLxLFT4iyQ5JXXxZ-650-80.jpg.webp",
    durationMonths: 2,
  },
  {
    id: generateRandomId(),
    title: "Hamstring Strength Program",
    description: "Build strong and defined hamstrings with this 2.5-month lower body workout program. Strengthen your hamstring muscles through exercises like deadlifts and hamstring curls. This program is suitable for intermediate fitness levels and focuses on developing hamstring strength and endurance.",
    targetMuscle: "Hamstrings",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Deadlifts",
        duration: "1.5 minutes",
        sets: 4,
        repetitions: 8,
      },
      {
        name: "Hamstring Curls",
        duration: "1 minute",
        sets: 3,
        repetitions: 12,
      },
    ],
    programImage: "https://www.freebodynow.com/wp-content/uploads/2021/03/Untitled-design-2-1280x931.jpeg",
    durationMonths: 2.5,
  },
  {
    id: generateRandomId(),
    title: "Quad Sculpting Challenge",
    description: "Sculpt and define your quadriceps with this 2-month lower body workout program. Focus on exercises like leg extensions and squats to enhance the appearance of your quads. This program is designed for individuals looking to achieve well-defined leg muscles.",
    targetMuscle: "Quadriceps",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Leg Extensions",
        duration: "45 seconds",
        sets: 4,
        repetitions: 12,
      },
      {
        name: "Squats",
        duration: "1 minute",
        sets: 3,
        repetitions: 10,
      },
    ],
    programImage: "https://example.com/quad-sculpting-program-image.jpg",
    durationMonths: 2,
  },
];

export const UpperBodyData = [
  {
    id: generateRandomId(),
    title: "Abs Core Strength",
    description: "Achieve a strong and defined core with this 3-month workout program. Strengthen your abdominal muscles with exercises like crunches and planks. This program is designed for intermediate fitness levels and focuses on core stability and endurance.",
    targetMuscle: "Abdominals (Abs)",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Crunches",
        duration: "30 seconds",
        sets: 3,
        repetitions: 15,
      },
      {
        name: "Planks",
        duration: "45 seconds",
        sets: 3,
        repetitions: 10,
      },
    ],
    programImage: "https://www.onthegofitnesspro.com/wp-content/uploads/2020/07/AdobeStock_287586374-scaled.jpeg",
    durationMonths: 3,
  },
  {
    id: generateRandomId(),
    title: "Shoulder Strength and Definition",
    description: "Build strong and well-defined shoulders with this 2-month upper body workout program. Focus on exercises like overhead presses and lateral raises to enhance your shoulder muscles. This program is suitable for all fitness levels and emphasizes shoulder strength and aesthetics.",
    targetMuscle: "Shoulders",
    difficulty: "Beginner",
    exercises: [
      {
        name: "Overhead Press",
        duration: "45 seconds",
        sets: 3,
        repetitions: 12,
      },
      {
        name: "Lateral Raises",
        duration: "30 seconds",
        sets: 3,
        repetitions: 15,
      },
    ],
    programImage: "https://cdn.shopify.com/s/files/1/1633/7705/files/shoulders_and_arms_480x480.jpg?v=1660558179",
    durationMonths: 2,
  },
  {
    id: generateRandomId(),
    title: "Biceps Builder",
    description: "Build a strong and well-defined back and biceps with this 2.5-month upper body workout program. Strengthen your back and biceps muscles through exercises like pull-ups and bicep curls. This program is suitable for intermediate fitness levels and focuses on overall upper body strength.",
    targetMuscle: "Biceps",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Pull-Ups",
        duration: "1 minute",
        sets: 4,
        repetitions: 10,
      },
      {
        name: "Bicep Curls",
        duration: "45 seconds",
        sets: 4,
        repetitions: 12,
      },
    ],
    programImage: "https://hortonbarbell.com/wp-content/uploads/2022/04/Biceps-Muscle-3D-Body.png",
    durationMonths: 2.5,
  },
  {
    id: generateRandomId(),
    title: "Back Sculpting Challenge",
    description: "Sculpt and define your Back with this 2-month upper body workout program. Focus on exercises like tricep extensions and hammer curls to enhance the appearance of your arms. This program is designed for individuals looking to achieve well-defined arm muscles.",
    targetMuscle: "Back",
    difficulty: "Intermediate",
    exercises: [
      {
        name: "Tricep Extensions",
        duration: "45 seconds",
        sets: 4,
        repetitions: 12,
      },
      {
        name: "Hammer Curls",
        duration: "45 seconds",
        sets: 4,
        repetitions: 10,
      },
    ],
    programImage: "https://cdn.shopify.com/s/files/1/1633/7705/files/workout_arms_women_480x480.jpg?v=1658351646",
    durationMonths: 2,
  },
];

export default LandingData;