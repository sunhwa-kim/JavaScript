// (),{},[] 소,중,대 괄호
const objects = [
    { item : 'sofa'},
    { item : 'couch'}
]

console.log(objects);
console.log(objects[0]);
console.log(objects[0].item);

objects.push(
    {item: 'deckchair'}
)
console.log(objects);

console.log(objects.length);