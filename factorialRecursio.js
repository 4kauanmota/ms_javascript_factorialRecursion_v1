function fat(x){
    if(x == 1) return 1;
    return x * fat(x-1);
  };
  
  console.log(fat(4));