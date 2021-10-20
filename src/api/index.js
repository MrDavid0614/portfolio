export async function getSkillsFromApi () {
  return await fetch('https://portfolio-backend06.herokuapp.com/skills').then(res => res.json())
}

export async function getProjectsFromApi () {
  return await fetch('https://portfolio-backend06.herokuapp.com/projects').then(res => res.json())
}
