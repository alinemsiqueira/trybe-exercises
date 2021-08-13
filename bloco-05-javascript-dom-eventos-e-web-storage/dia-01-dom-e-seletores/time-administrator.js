document.querySelector( 'header' ).style.backgroundColor = '#06b16b';
document.querySelector( 'footer' ).style.backgroundColor = '#0e2f2e';
document.getElementsByClassName( 'emergency-tasks' )[0].style.backgroundColor = '#fb9c86';
document.getElementsByClassName( 'no-emergency-tasks' )[0].style.backgroundColor = '#fbdb5c';

let h3 = document.querySelectorAll( 'h3' );
for ( let key in h3 ) {
  if ( key <= 1 ) {
    h3[key].style.backgroundColor = '#a207eb';
  } else {
    h3[key].style.backgroundColor = '#0e2f2e';
  }
}
