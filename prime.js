function even(num){
    let flag = false;
    for(let i=0; i<=num; i++){
      if(num%2==0){
        flag = true
      }else{
        flag =false
      }
    }if(flag==true){
      console.log("Yes")
    }else{
      console.log("No")
    }
  }even(2)