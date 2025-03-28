const post={
    username :"arshitapatel",
    content : "this is my first post",
    likes:150,
    repost:5,
    tags:["jaylimbasiya","rahipatel"]
}
console.log(post.username);
console.log(post["username"]);
post.repost=8;

//object of object
const classInfo={
    Arshita:{
        grade:"A",
        city:"Rajkot"
    },
    Jay:{
        grade:"A++",
        city:"Rajkot"
    },
    Rutvi:{
        grade:"A+",
        city:"Palanpur"
    }
};

//Arrays of objects
const classInfo1=[
    {    name:"Arshita",
        grade:"A",
        city:"Rajkot"
    },
    {   name:"Jay",
        grade:"A++",
        city:"Rajkot"
    },
    {    name:"Rutvi",
        grade:"A+",
        city:"Palanpur"
    }
];

