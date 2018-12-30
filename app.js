function makeArrayConsecutive2(statues) {
    
    var arr = new Array();
    arr = statues.sort(function(a,b){return b-a});
    var arrayDiff =new Array();
    for (i=0; i < arr.length-1; i++){
        arrayDiff.push((arr[i]-arr[i+1]!=0)?(arr[i]-arr[i+1]-1):0);
    }
    return arrayDiff.reduce((total,currentValue)=> {return total+currentValue;},0);
}
