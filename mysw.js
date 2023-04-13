// const now = new Date();
// import {numtohour,numtominute,numtosecond} from numtotime
function numtocenti( num ) {
	return ( Math.floor( num / 10 ) % 100 ).toString().padStart( 2, '0' );
}
function numtosecond( num ) {
	return ( Math.floor( num / 1000 ) % 60 ).toString().padStart( 2, '0' );
}

function numtominute( num ) {
	return ( Math.floor( num / 60000 ) % 60 ).toString().padStart( 2, '0' );
}

function numtohour( num ) {
	return Math.min( Math.floor( num / ( 1000 * 3600 ) ), 99 ).toString().padStart( 2, '0' );
}
const timer = document.getElementById( "timer" );
const startbtn = document.getElementById( "start" );
const stopbtn = document.getElementById( "stop" );
const setbtn = document.getElementById( 'set' );
const resetbtn = document.getElementById( 'reset' );
// function saynow() {
// 	timer.textContent = new Date().toLocaleString( "ja-JP", { hour: "numeric", second: "numeric", minute: "numeric" } );
// }
let time = 0;
let startTime;
let resume = 0;
let timerId;

let judge = 0;
timer.textContent = "00:00:00"
function tick() {
	now = new Date().getTime() - startTime;
	// timer.textContent = numtohour( now ) + ':' + numtominute( now ) + ':' + numtosecond( now ) + '.' + numtocenti( now );
	timer.textContent = numtohour( now ) + ':' + numtominute( now ) + ':' + numtosecond( now );
}
function start() {
	if ( judge == 0 ) {
		startTime = new Date().getTime() - resume;
		judge = 1;
		timerId = setInterval( tick, 1 );
	} else {
		pass;
	}
}
function stop() {
	clearInterval( timerId );
	if ( judge == 1 ) {
		judge = 0;
		resume = new Date().getTime() - startTime;
	} else {
		pass;
	}
}
function set() {
	if ( judge == 0 ) {
		start();
		setbtn.textContent = 'Stop';
		setbtn.style.backgroundColor = 'red';
	} else {
		stop();
		setbtn.textContent = 'Start';
		setbtn.style.backgroundColor = '#1da1f2';
	}
}
function reset() {
	clearInterval( timerId );
	resume = 0;
	timer.textContent = '00:00:00';
	judge = 0;
	setbtn.textContent = 'Start';
	setbtn.style.backgroundColor = '#1da1f2';
}
const darkbtn = document.getElementById( "dark" );
function darker() {
	document.getElementById( 'body' ).style.backgroundColor = 'black';
}
// function upnow() {
// 	setInterval( saynow, 100 );
// }
// startbtn.onclick = start;
// stopbtn.onclick = stop;
setbtn.onclick = set;
// darkbtn.onclick = darker;
resetbtn.onclick = reset;