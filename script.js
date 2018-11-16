
function rec(start, end) {
	let j = 1;
	let str = '';
	while (j <= start) {
		str = str += '#';
		j++;
	}
	console.log(str);
	if (start < end) {
		rec(start+1, end);
	}
	return;
}
 rec(1, 8);

