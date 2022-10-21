> var myRe = new RegExp('d(b+)d', 'g');
undefined
> myRe.exec("cddbbbdddcccssddd")
[
  'dbbbd',
  'bbb',
  index: 2,
  input: 'cddbbbdddcccssddd',
  groups: undefined
]
> "cddbbbdddcccssddd".search(myRe);
2
>
>
>
> var re = new RegExp(/[-+]?\d+\.?\d*/gi);
undefined
> var text = "This statement contains 13.456 and floating point -45.567 numbers 456 also intergers -998";
undefined
> re.exec(text)
[
  '13.456',
  index: 24,
  input: 'This statement contains 13.456 and floating point -45.567 numbers 456 also intergers -998',
  groups: undefined
]
> text.search(re)
24
> text.matchAll(re)
Object [RegExp String Iterator] {}
> Array.from(text.matchAll(re))
[
  [
    '-45.567',
    index: 50,
    input: 'This statement contains 13.456 and floating point -45.567 numbers 456 also intergers -998',
    groups: undefined
  ],
  [
    '456',
    index: 66,
    input: 'This statement contains 13.456 and floating point -45.567 numbers 456 also intergers -998',
    groups: undefined
  ],
  [
    '-998',
    index: 85,
    input: 'This statement contains 13.456 and floating point -45.567 numbers 456 also intergers -998',
    groups: undefined
  ]
]
> for(item of Array.from(text.matchAll(re)){
for(item of Array.from(text.matchAll(re)){
                                         ^

Uncaught SyntaxError: Unexpected token '{'
> for(item of Array.from(text.matchAll(re))){
... console.log(item[0]);
... }
-45.567
456
-998
undefined
> .exit