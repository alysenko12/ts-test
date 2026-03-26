const skills: string[] = ['dev', 'devops'];


/*for (const skill of skills) {
    console.log(skill)
}
*/
const devrole = skills.filter(s => s != 'devops')

console.log(devrole)