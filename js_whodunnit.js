// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// This will print the murderer is Miss Scarlet, there is no variable conflict at play here so this is very straightforward

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// This will crash the program as change murderer is set as a const variable and then there is an attempt to change it directly with another const function

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// This will print to the Terminal that the murderer is Mrs Peacock and then print to the Terminal that Professor Plum, is the murder, since murderer is a let and can be changed but declareMurderer has block scoping

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// This will print the three suspects with Colonel Mustard as the third (block scoping) then say that the third killer is Mrs Peacock as that is printed outside the scoping. Very straightforward

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon will be Revolver as you are changing a key pair in an array, even if its a const it can still have its elements mutated. In this case, weapon: Candle Stick can be changed to weapon: Revolver with the changeWeapon function.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Ms White is the murderer. Murderer is a let and thus both the const's changeMurder and plotTwist can be called so Ms. White is ultimately the killer

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ChangeMurderer is called before verdict which sets the murder to Mr.Green. I also thing as it is a function that is a const, this may lock the choice

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// This prints The weapon is candle stick due to unexpectedOutcome being satisfied 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Episode 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// By setting murderer as let and then let again inside an if, the original let stands as it is global.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
