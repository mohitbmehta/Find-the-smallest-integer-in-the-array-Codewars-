class SmallestIntegerFinder {
  findSmallestInt(args) {
  var temp  ;
 
    for (var i=0;i<args.length;i++){
        if(args[i]<=args[0]){
            args[0]  = args[i];    
            temp = args[i];
        }
      }
    return temp;
  }
}
