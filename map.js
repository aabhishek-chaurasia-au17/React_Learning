const about = [
    {
        name: 'Abhishek Chaurasia',
        age: 27,
        roll: 'Full Stack Developer',
        salary: 500000,
        about: 'hard working good boy',
        phone: 7838083337,
        address: 'Delhi'
    },
    {
        name: 'Subham Chaurasia',
        age: 27,
        roll: 'Full Stack Developer',
        salary: 600000,
        about: 'hard working good boy',
        phone: 7838083337,
        address: 'Delhi'
    },
    {
        name: 'AbhiSubh Sandilya',
        age: 27,
        roll: 'Full Stack Developer',
        salary: 700000,
        about: 'hard working good boy',
        phone: 7838083337,
        address: 'Delhi'
    },
]

const info = about.map((element) => {
    return (`My name ${element.name} my roll is ${element.roll} salary is ${element.salary}`);
})

console.log(info);