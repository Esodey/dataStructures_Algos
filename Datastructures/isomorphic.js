

function isomorphicStrings(str1, str2) {
if (str1.length !== str2.length) {
return false;
}
var obj = {};

for (var i = 0; i < str1.length; i++) {
var char1 = str1[i];
var char2 = str2[i];
if (obj[char1]) {
if (obj[char1] !== char2) {
return false;
}
}
obj[char1] = char2;
}
return true;
}






var str1 = 'aba';
var str2 = 'cdd';


console.log(isomorphicStrings(str1, str2));


// "abc" "abc" => True 
// "abc" "xxz" => False
