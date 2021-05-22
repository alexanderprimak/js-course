const MAN_HIGH_AGE = 60;
const BOY_HIGH_AGE = 20;

const WOMAN_HIGH_AGE = 60;
const GIRL_HIGH_AGE = 20;

const age = prompt('How are you?');
const isMan = confirm('Are you man');

if (isMan) {
  if (age > MAN_HIGH_AGE) {
    console.log('you are granpa');
  } else if (BOY_HIGH_AGE > age <= MAN_HIGH_AGE) {
    console.log('you are man');
  } else if (age <= BOY_HIGH_AGE) {
    console.log('you are boy');
  }
} else {
  if (age > WOMAN_HIGH_AGE) {
    console.log('you are granma');
  } else if (GIRL_HIGH_AGE > age <= WOMAN_HIGH_AGE) {
    console.log('you are woman');
  } else if (age <= GIRL_HIGH_AGE) {
    console.log('you are girl');
  }
}

console.log({
  city: prompt('Your city'),
  age: prompt('Your age'),
});