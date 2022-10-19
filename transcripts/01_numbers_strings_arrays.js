C:\Users\Admin\Desktop\oracle\part_01\server>node
Welcome to Node.js v16.17.0.      
Type ".help" for more information.
> console.log("Hello World!")
Hello World!
undefined
> // ------------------------------------------------ variables
undefined
> var x = 10;
undefined
> console.log(x)
10
undefined
> x + 76
86
> x ** 4
10000
> x++
10
> y = ++x
12
> typeof x
'number'
> var y = 89
undefined
> x + y
101
> let z = 0
undefined
> z
0
> z = x ** y
1.114630437411196e+96
> z
1.114630437411196e+96
>
> // ------------------------------------------------------- Numbers
undefined
>
> var a = 10;
undefined
> var b = 20;
undefined
>
> a + b
30
> a + ++b
31
> a > b
false
> a > b or b <= 20
a > b or b <= 20
      ^^

Uncaught SyntaxError: Unexpected identifier
> a > b || b <= 20
false
> a > b && b <= 20
false
> not a > b && b <= 20
not a > b && b <= 20
    ^

Uncaught SyntaxError: Unexpected identifier
>  !a > b && b <= 20
false
> 1 < a < 10
true
>  !(a > b) && b > 20
true
> !a
false
> a
10
>
>
> let c = new Number(20);
undefined
> c
[Number: 20]
>
> b
21
> b--
21
> b
20
> b == c
true
> b
20
> c
[Number: 20]
> b === c
false
> c === c
true
>
>
> a
10
> let d = "40"
undefined
> a + d
'1040'
> a + parseInt(d)
50
> a + Number(d)
50
> // ---------------------------------------------------------------- strings
undefined
>
> var s = "javascript"
undefined
> typeof s
'string'
> var p = new String("javascript")
undefined
> s == p
true
> s === p
false
> typeof p
'object'
> p
[String: 'javascript']
>
> // Immutability
undefined
>
> s
'javascript'
> s[0]
'j'
> s[1]
'a'
> s[1] = 'x'
'x'
> s
'javascript'
>
>
> // Functions
undefined
>
> s.length
10
>
> var t = "mary had a little lamb";
undefined
> t.search("little");
11
> t.indexOf
[Function: indexOf]
> t.indexOf("little")
11
> t.indexOf("app")
-1
> t.search("app");
-1
> t.lastIndexOf("little")
11
> var t1 = "mary had a little little little lamb";
undefined
> t.lastIndexOf("little")
11
> t1.lastIndexOf("little")
25
> t1.indexOf("app")
-1
> t1.indexOf("little")
11
>
>
>
> t
'mary had a little lamb'
> t.slice(1, 4)
'ary'
> t[1:4]
t[1:4]
   ^

Uncaught SyntaxError: Unexpected token ':'
> t.slice(1, 4)
'ary'
> s.substr(11, 17)
''
> t.substr(11, 17)
'little lamb'
> t.substr(11, 7)
'little '
> t.substring(11, 17)
'little'
>
>
> t
'mary had a little lamb'
> t.replace('lamb', 'kitten
t.replace('lamb', 'kitten
                  ^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
> t.replace('lamb', 'kitten')
'mary had a little kitten'
> t
'mary had a little lamb'
>
> t.toUpperCase()
'MARY HAD A LITTLE LAMB'
> t
'mary had a little lamb'
> t.toLowerCase()
'mary had a little lamb'
>
>
> var x = '    3456.67   '
undefined
> x.trim()
'3456.67'
>
>
> var y = "435"
undefined
>
> x.trim().concat(y)
'3456.67435'
>
>
> t
'mary had a little lamb'
> t.split(' ')
[ 'mary', 'had', 'a', 'little', 'lamb' ]
> t
'mary had a little lamb'
>
>
> vat words = ['sky', 'is', 'blue']
vat words = ['sky', 'is', 'blue']
    ^^^^^

Uncaught SyntaxError: Unexpected identifier
> var words = ['sky', 'is', 'blue']
undefined
> typeof words
'object'
> words.join('--')
'sky--is--blue'
>

> // ----------------------------------------------------------- Arrays
undefined
>
> var L = ["red", "green", "blue"]
undefined
> typeof L
'object'
> L[0]
'red'
> L[0] = "deepred";
'deepred'
> L
[ 'deepred', 'green', 'blue' ]
> L[1][2]
'e'
> L[1][2] = 'h'
'h'
> L
[ 'deepred', 'green', 'blue' ]
>
>
> // ------------------------- Add elements in to the list
undefined
>
> L.push("yellow")
4
> L
[ 'deepred', 'green', 'blue', 'yellow' ]
> L.push("orange")
5
> L
[ 'deepred', 'green', 'blue', 'yellow', 'orange' ]
> L.unshift("red")
6
> L
[ 'red', 'deepred', 'green', 'blue', 'yellow', 'orange' ]
> L.splice(3, 0, "bluegreen")
[]
> L
[ 'red', 'deepred', 'green', 'bluegreen', 'blue', 'yellow', 'orange' ]
>
> // --------------------------- Removing elements from the list
undefined
>
> L
[ 'red', 'deepred', 'green', 'bluegreen', 'blue', 'yellow', 'orange' ]
> L.pop()
'orange'
> L
[ 'red', 'deepred', 'green', 'bluegreen', 'blue', 'yellow' ]
> L.shift()
'red'
> L
[ 'deepred', 'green', 'bluegreen', 'blue', 'yellow' ]
> L.splice(3, 1)
[ 'blue' ]
> L
[ 'deepred', 'green', 'bluegreen', 'yellow' ]
> L.splice(2, 1, 'lightblue', 'cyan', 'cerulean', 'deepsea', 'sky')
[ 'bluegreen' ]
> L
[
  'deepred',   'green',
  'lightblue', 'cyan',
  'cerulean',  'deepsea',
  'sky',       'yellow'
]
> L.splice(3, 0, ['yellow', 'brown', 'orange', 'golden'])
[]
> L
[
  'deepred',
  'green',
  'lightblue',
  [ 'yellow', 'brown', 'orange', 'golden' ],
  'cyan',
  'cerulean',
  'deepsea',
  'sky',
  'yellow'
]
> // ----------------------------------------- search for elements in the array
undefined
> L
[
  'deepred',
  'green',
  'lightblue',
  [ 'yellow', 'brown', 'orange', 'golden' ],
  'cyan',
  'cerulean',
  'deepsea',
  'sky',
  'yellow'
]
> L.includes('cyan')
true
> L.indexOf('cyan')
4
> L.find( function(e){ return e == 'deepsea'; });
'deepsea'
> L.findIndex( function(e){ return e == 'deepsea'; });
6
> L.indexOf('brown')
-1
> L[3].indexOf('brown'))
L[3].indexOf('brown'))
                     ^

Uncaught SyntaxError: Unexpected token ')'
> L[3].indexOf('brown')
1
> L.push("deepsea")
10
> L
[
  'deepred',
  'green',
  'lightblue',
  [ 'yellow', 'brown', 'orange', 'golden' ],
  'cyan',
  'cerulean',
  'deepsea',
  'sky',
  'yellow',
  'deepsea'
]
> L.find( function(e){ return e == 'deepsea'; });
'deepsea'
> L.findIndex( function(e){ return e == 'deepsea'; });
6
> L.filter(function(e){ return e == 'deepsea'; });
[ 'deepsea', 'deepsea' ]
>
> // ----------------------------------------- re-arrangements
undefined
>
> L
[
  'deepred',
  'green',
  'lightblue',
  [ 'yellow', 'brown', 'orange', 'golden' ],
  'cyan',
  'cerulean',
  'deepsea',
  'sky',
  'yellow',
  'deepsea'
]
> L.splice(3, 1)
[ [ 'yellow', 'brown', 'orange', 'golden' ] ]
> L
[
  'deepred',   'green',
  'lightblue', 'cyan',
  'cerulean',  'deepsea',
  'sky',       'yellow',
  'deepsea'
]
> L.sort()
[
  'cerulean',  'cyan',
  'deepred',   'deepsea',
  'deepsea',   'green',
  'lightblue', 'sky',
  'yellow'
]
> L.reverse()
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> L
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
>
> var N = [10, 3, 4, 1, 67, 100]
undefined
> N.sort()
[ 1, 10, 100, 3, 4, 67 ]
> N.reverse()
[ 67, 4, 3, 100, 10, 1 ]
> L.sort((a, b) => (a-b));
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> L.sort((a, b) => (b-a));
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> N.sort((a, b) => (b-a));
[ 100, 67, 10, 4, 3, 1 ]
> N.sort((a, b) => (a-b));
[ 1, 3, 4, 10, 67, 100 ]
>
> // ---------------------------------------------------------- iterate through an array
undefined
>
> L
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> for(item of L){
... console.log(item);
... };
yellow
sky
lightblue
green
deepsea
deepsea
deepred
cyan
cerulean
undefined
> for(item in L){
... console.log(item.toUpperCase(), ' --------------> ', item.length);
... };
0  -------------->  1
1  -------------->  1
2  -------------->  1
3  -------------->  1
4  -------------->  1
5  -------------->  1
6  -------------->  1
7  -------------->  1
8  -------------->  1
undefined
> for(item of L){
... console.log(item.toUpperCase(), ' --------------> ', item.length);
... };
YELLOW  -------------->  6
SKY  -------------->  3
LIGHTBLUE  -------------->  9
GREEN  -------------->  5
DEEPSEA  -------------->  7
DEEPSEA  -------------->  7
DEEPRED  -------------->  7
CYAN  -------------->  4
CERULEAN  -------------->  8
undefined
>


> L.sort().reverse()
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> L.sort((a, b) => ( a > b ));
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> L.sort((a, b) => ( b > a ));
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
> 'apple' > 'banana'
false
> 'apple' < 'banana'
true
> L.sort((a,b) => (a.localeCompare(b))
... )
[
  'cerulean',  'cyan',
  'deepred',   'deepsea',
  'deepsea',   'green',
  'lightblue', 'sky',
  'yellow'
]
> L.sort((a,b) => (b.localeCompare(a)))
[
  'yellow',    'sky',
  'lightblue', 'green',
  'deepsea',   'deepsea',
  'deepred',   'cyan',
  'cerulean'
]
>