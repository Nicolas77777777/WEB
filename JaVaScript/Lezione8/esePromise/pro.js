


let job1 = () =>{

    //return "hello world";

    return new Promise((res,rej) => {


        res("hello world");
    });
         
};
job1()
.then((ok) => {

    console.log(ok);
})

.catch(())

