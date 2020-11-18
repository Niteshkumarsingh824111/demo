// sliding part 
var i=1;
    function prev(){
           if(i==1){
               i=6;
           document.getElementById('slide-img').src='image/download'+i+'.jpg';
           }else{
               i-=1;
               document.getElementById('slide-img').src='image/download'+i+'.jpg';
           }
        }
    function next(){
        if(i==6){
            i=1;
            document.getElementById('slide-img').src='image/download'+i+'.jpg';
        }else{
            i+=1;
            document.getElementById('slide-img').src='image/download'+i+'.jpg';
        }
    }
    setInterval(function(){
        if(i==6){
            i=1;
            document.getElementById('slide-img').src='image/download'+i+'.jpg';
        }else{
            i+=1;
            document.getElementById('slide-img').src='image/download'+i+'.jpg';
        }
    }, 2000);
// image zoom part 
function fun(id){
    document.getElementById('model-img').src='image/download'+id+'.jpg';
}


// form part 

function namefun(){
    let name=document.getElementById('name').value;
    if(name.length>2 && isNaN(name)){
        document.getElementById('name').style='border:2px solid green';
        document.getElementById('name-message').innerText='';
    }else{
        document.getElementById('name').style='border:2px solid red';
        document.getElementById('name-message').innerText='Name must be 3 character but Not a number';
        document.getElementById('name-message').style='color:red';
    
    }
  }

function passfun(){
    let password=document.getElementById('password').value;
    if(password.length>7){
        document.getElementById('password').style='border:2px solid green';
        document.getElementById('pass-message').innerText='';
    }else{
        document.getElementById('password').style='border:2px solid red';
        document.getElementById('pass-message').innerText='Password must be 8 character';
        document.getElementById('pass-message').style='color:red';
    }
}
function emailfun(){
    let email=document.getElementById('email').value;
    if(email.includes('@gmail.com')){
        document.getElementById('email').style='border:2px solid green';
        document.getElementById('email-message').innerText='';

        
    }else{
        document.getElementById('email').style='border:2px solid red';
        document.getElementById('email-message').innerText='Email must be required @gmail.com';

        document.getElementById('email-message').style='color:red';


    }
}
function myform(){
    let a=document.getElementById('name').value;
    let b=document.getElementById('password').value;
    let c=document.getElementById('email').value;
    if(a.length>2 && b.length>7 && c.includes('@gmail.com')){
        document.getElementById('check').innerText='Form Submited';
        document.getElementById('check').style='color:green';
    }else{
        document.getElementById('check').innerText='please fill correctly';
        return false;
    }
}


// scrollig part 
function scrollHome() {
    window.scrollTo(0, 0);
  }
  function scrollAbout() {
    window.scrollTo(0, 520);
  }
  function scrollService() {
    window.scrollTo(0, 1200);
  }
  function scrollGallary() {
    window.scrollTo(0, 2350);
  }
  function scrollContact() {
    window.scrollTo(0, 3500);
  }
  