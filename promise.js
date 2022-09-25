//console.log("roshan")
//console.log("roshan");
const posts=[
    {title:'post one',body:"this is fisrt post",createdAt:new Date().getTime()},
    {title:'post two',body:"this is second post",createdAt:new Date().getTime()},
    {title:'post four',body:"this is fourth post",createdAt:new Date().getTime()}
   
]
function getPost(){
    
    setTimeout(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output +=`<li>${posts[i].title}-last updated ${(new Date().getTime()-posts[i].createdAt)/1000}
                                                 </li>`
        }
        document.body.innerHTML=output;
    })

}

function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        const error=false;
        if(!error){
          
            resolve();
        }
        else{
            reject("Error:Something went wrong");
        }
    },2000)
    });
}

function deletePost(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const r=posts.pop();
                resolve(r);
            }
            else{
                reject("Array is empty now");
            }
        },2000);
    });
}


createPost({title:'post three',body:"this is third post"})
.then(()=>{
    getPost();
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                getPost();
                deletePost().then(()=>{
                   getPost();
                   deletePost().then(()=>{})
                .catch((err)=>{
                    console.log("Inside catch block",err);
                })
            })
            })
        })
    })
})
.catch(err=>console.log(err))
/*
const promise1 = () => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        var lastUpdateTime=new Date().getTime()
        console.log(lastUpdateTime)
        resolve(lastUpdateTime)
      }, 1000)
    })
  }
  const promise2 = () => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        var  l=lastUpdateTime.getTime()
        console.log(l)
        resolve(l)
      }, 1000)
    })
  }
Promise.all([promise1,promise2]).then((values)=>{
    console.log(values)
})

//function create4rtPost(post){
    //return new Promise((resolve,reject)=>{
        //setTimeout(()=>{
           // posts.push({...post,createdAt:new Date().getTime()});
            //const error=false;
            //if(!error){
               // resolve();
            //}
            //else{
               // reject("Error:Something went wrong");
           // }
       // },2000)
       // });
//}
//create4rtPost({title:'post three',body:"this is third post"})*/

