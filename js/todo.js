let task=[];

let req=prompt("enter a task to do");

while(true)
 {
    if(req=="quit")
    {
        console.log("quiting the todo app");
        console.log("------------------");
        break;
    }
     
    if(req == "list")
    {
        for( let i=0;i<task.length;i++)
        {
            console.log(i+1,task[i]);
        }
        console.log("list printed");
        console.log("------------------");

    }

    else if(req=="add")
    {
        req=prompt("enter a task to add");
        task.push(req);
        console.log("task added");
        console.log("------------------");
    }

    else if(req=="delete")
    {
        del=prompt("enter task number to delete");
        task.splice(del-1,1);
        console.log("task deleted");
        console.log("------------------");
    }
    else{
        console.log("wrong request");
        console.log("------------------");
        
    }
    req=prompt("enter a task to do");

}