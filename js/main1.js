function cleanNames(namesArray) {
    return namesArray.map(name => name.trim());
}

const names = [" injustice", " SuperMan", "Batman ", " flash "];

const cleanedNames = cleanNames(names);

console.log(cleanedNames);
