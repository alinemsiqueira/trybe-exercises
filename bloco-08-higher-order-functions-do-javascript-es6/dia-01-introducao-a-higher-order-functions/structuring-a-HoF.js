const wakingUp = () => 'Acordando!!';

const getCoffee = () => 'Bora tomar café!!';

const goingToSleep = () => 'Partiu dormir!!';

const doingThings = action => console.log(action());

doingThings(wakingUp);
doingThings(getCoffee);
doingThings(goingToSleep);