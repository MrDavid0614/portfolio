export async function getProjectsFromApi () {
  return await fetch('https://portfolio-backend06.herokuapp.com/projects').then(res => res.json())
}
