function binary_search(list, item){
    var low = 0
    var high = list.length -1
    var mid;
    while (low <=high){
        mid = Math.round((low + high)/2);
        guess = list[mid];
        if(guess ==item){
            console.log(mid);
            return mid;
        }
        else if(guess >item){
            high = mid -1;
        }
        else{
            low = mid + 1;
        }
    }
    console.log('no');
}
my_list = [1,3,5,7,9,11,13,15,17,19,21];
binary_search(my_list,-1);