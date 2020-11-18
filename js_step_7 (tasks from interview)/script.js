// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5; 
console.log( x++ ); // 5 because postfix increment before increasing the value will return the original value

// •	Чему равно такое выражение: [ ] + false - null + true ?
let variable1 = [ ] + false - null + true;
console.log( typeof([] + false )); // when we work with an empty array, it will be cast to a string data type (to an empty string)
console.log( variable1 );

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; 
let x = y = 2; // right-to-left assignment
console.log(x); // primitive data types are passed by value 

// •	Чему равна сумма [ ] + 1 + 2?
let variable2 = [ ] + 1 + 2;
console.log( variable2 ); // 12

// •	Что выведет этот код: alert( "1"[0] )?
console.log( "1"[0] ); // 1

// •	Чему равно 2 && 1 &&null&& 0 &&undefined ?
let variable3 = 2 && 1 && null && 0 && undefined; // && stumbles on a lie, || stumbles on the truth
console.log( variable3 ); // null

// •	Есть ли разница между выражениями? !!( a&& b ) и (a && b)?
console.log( !!( 1 && 2 ) === (1 && 2) ); // true != 2

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log( null || 2 && 3 || 4 ); // 3

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const a = [1, 2, 3]; 
const b = [1, 2, 3]; 
console.log(  a == b ); // false

// •	Что выведет этот код: alert( +"Infinity" ); ?
console.log( +"Infinity" ); // Infinity

// •	Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); // || stumbles on the truth

