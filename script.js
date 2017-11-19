var studentsArray = [
"Alma Pineda", "Erick Munguia",
"Abraham Albiso", "Beverly Bribiesca",
"RJay Matias", "Steven Munoz",
"Camila Melara", "Jaaaasssmine Rosas",
"Gerrod Milton", "Erick Alas",
"Edgardo Alas", "Estefania Lopez",
"Dulce Rubio", "Jefferson Fon Nieto",
"Hashby Marroquin", "Lizbeth Alcaraz",
"Jeder Ramos Aguilar"
]

function sortStudentsIntoGroups(students, groupSize){
    console.log('There are ' +students.length+ ' students in the list')
    var groups=[]
    
    var currentGroup=[]
    
    while (students.length > 0) {
        var randomNumber = Math.floor(Math.random() * students.length)
        var randomStudent = students[randomNumber]
        currentGroup.push(randomStudent)
        students.splice(randomNumber, 1)
        if (currentGroup.length  >= groupSize) {
            groups.push(currentGroup)
            currentGroup=[]
        }
    }
    
    if (currentGroup.length> 0){
        groups.push(currentGroup)
       
    }
    //create two arrays-- one for groups and one for currentGroup
    // see how many students are in the list
    // create a while loop that picks a random student from the list
    //then it adds that student to  a new group
    //remove that random student from the list
    // then it checks to see if the group is biiger than the group size
    //if it is, then add it to a groups array untill all students are in groups
    //then i need to display all the groups nicely
     groups.forEach(function(group,idx){
            console.log('Group #'+(idx +1)+":" + group)
        })
}
sortStudentsIntoGroups(studentsArray, 3)


