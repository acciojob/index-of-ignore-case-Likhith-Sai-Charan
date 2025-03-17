function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const ls1=s1.toLowerCase();
	const ls2=s2.toLowerCase();

	return ls1.indexOf(ls2);
}

console.log(indexOfIgnoreCase("Hello World", "world"))

// Please do not change the code below
///const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
//alert(indexOfIgnoreCase(s1, s2));
