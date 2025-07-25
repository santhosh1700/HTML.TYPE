let details={
    name:"js",
    totalmark:100,
    subject:{
        java:100,
        python:100
    },
    sum:function(){
        let total=this.subject.java+this.subject.python;
        return total;
    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.java);
console.log(details.subject.python);
console.log(details.sum());
let person={
    job:"softwaretester",
    salary:25000,
}

const{job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);
//array
let arr=new Array(1,2,"three");
console.log(arr[2]);
//another way
let arr2=["js",true,false];
//object destructure
const[name,b1,b2]=arr2;
console.log(name);
let student=[
    {name:"santhosh",grade:"A"},
    {name:"saran",grade:"B"},
    {name:"sanjay",grade:"A"}
]
let gradestudents=student.filter(students=>student.grade=="A")
console.log(gradestudents);
//splice
let names=["alash","bala","chandru"];
name.splice(1,1,"david");
console.log(names);