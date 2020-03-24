/*** { Fibonacci ***/

// Using loop
/*
int fibonacci(List<int>res,int len){
     var first = res[0],
        second= res[1],
        ithas=2,
        next;

        while(ithas < len){
        next = first+second;
        first = second;
        second = next;
        res.add(next);
        print (next);
        ithas++;
        }

        print(res);
}
*/

// Using recursion 
List<int> fibonacci(List<int>res,int len){
if(res.length >= len){
return res;
}
res.add(res[res.length -2] + res[res.length -1]);
return fibonacci(res,len);
}
 
/*** Fibonacci } ***/


/*** { Get it divided by 2 ***/


double doubleX(double n){
if(n<1) return;
print(n);
 doubleX(n/2);
}


/*** Get it divided by 2 } ***/