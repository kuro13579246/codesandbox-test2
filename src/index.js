/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数やで";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書きやで"
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言したやで"
// console.log(val1);

// let val2 = 'let変数なんやで'
// console.log(val2);

// //letは上書き可能
// val2 = 'let変数を上書きなんやで'
// console.log(val2);

// //let 変数は再宣言不可
// let val2 = 'let変数を再宣言なんやで'
// console.log(val2);

// const val3 = 'const変数だわさ'
// console.log(val3);

// val3 = 'const変数は上書き不可能だわさ'
// console.log(val3);

// const val3 = 'const変数だわさ'
//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"じゃけえのー",
//   age:40
// };
// val4.age='40代'
// val4.address='こりん星'
// console.log(val4)

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
