const getAge = function(death, birth){
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}


const findTheOldest = function(people) {
    const result = people.reduce((oldest, curr) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const age = getAge(curr.yearOfDeath, curr.yearOfBirth);
        return oldestAge < age ? curr : oldest;
    });

    return result;



};

// Do not edit below this line
module.exports = findTheOldest;
