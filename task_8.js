let myMap = new Map();
myMap.set('key1', 'yes');
myMap.set('key2', 'no');
myMap.set('key3', 'maybe');
myMap.set('key4', 100);

for (let name of myMap.keys()){
    console.log('ключ', '-', name)
}
for (let data of myMap.values()){
    console.log('значение', '-', data)
}