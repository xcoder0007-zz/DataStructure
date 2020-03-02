
// Bad way 
calcluteOfN_D(int n){
int sum=0;
for(int i=0;i<=n;i++){
sum = sum+i;
print(sum);
}
}


// Oh yeah!! => n*(n+1)/2 
calcluteOfN_A(int n){
return n*(n+1)/2;
}

