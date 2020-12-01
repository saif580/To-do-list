console.log("Welcome to the output!")
let input=prompt("What would you like to do?");
const todos=['Exercise','Complete you home Work!'];
while(input!=='quit') {
    if(input==="list"){
        console.log("**************");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**************");
    } else if(input === "new") {
        const newTodo=prompt("What's the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if(input==="delete") {
        const index=parseInt(prompt("Enter an index  to delete"));
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log("Unknown Index, please Enter valid index");
        }
    }
    input=prompt("What would you like to do?");
}
console.log("You quit the App");