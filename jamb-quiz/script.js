
//const selectedSubjects = ["chemistry", "biology", "physics", "mathematics"]; // for now, preload all
const allQuestions = {};

async function loadQuestions(subject) {
  const res = await fetch(`./data/${subject}.json`);
  const data = await res.json();
  // Randomize and pick 40
  return data.sort(() => 0.5 - Math.random()).slice(0, 40);
}

async function startTest() {
  for (let subj of selectedSubjects) {
    allQuestions[subj] = await loadQuestions(subj);
  }

  console.log("All loaded questions:", allQuestions);
  // Later: Show these questions in your UI
}

startTest();