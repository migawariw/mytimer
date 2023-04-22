// const now = new Date();
// import {numtohour,numtominute,numtosecond} from numtotime
/**
 *
 * @return {Boolean} フルスクリーンなら true、そうでないなら false
 */
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
const contents = document.getElementById("contents");
const btn = document.getElementById("btnbox");
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
darkbtn.textContent="ダークモード"

function darker() {
	darkbtn.textContent="ライトモード";
	document.getElementById( 'body' ).style.backgroundColor = 'black';
	document.getElementById( 'body' ).style.color = 'white';
	document.getElementById( 'h1' ).style.color = 'white';
	document.getElementById( 'timer' ).style.color = 'white';
	document.getElementById( 'dark' ).style.backgroundColor = '#06c755';
	document.getElementById( 'dark' ).style.color = 'white';


}
function lighten() {
	darkbtn.textContent="ダークモード"
	document.getElementById( 'body' ).style.backgroundColor = 'white';
	document.getElementById( 'body' ).style.color = 'grey';
	document.getElementById( 'h1' ).style.color = 'grey';
	document.getElementById( 'timer' ).style.color = 'black';
	document.getElementById( 'dark' ).style.backgroundColor = 'black';
	document.getElementById( 'dark' ).style.color = 'white';


}
let modejudge = 0;
function darkmode() {
	if ( modejudge == 0 ) {
		modejudge = 1;
		darker();
	} else {
		modejudge = 0;
		lighten();
	}
}

const FullScreenbtn = document.getElementById( "FullScreen" );
// let fs=0;
// function FullScreen(){
// 	document.body.webkitRequestFullscreen();
// 	fs=1;
// }
// function ExitFullScreen(){
// 	document.body.webkitRequestFullscreen();
// }

// function upnow() {
// 	setInterval( saynow, 100 );
// }
// startbtn.onclick = start;
// stopbtn.onclick = stop;
// window.addEventListener('load', function(){

// フルスクリーン表示

// let fsjudge = 0;
function EnterFullScreen() {
	// Chrome & Firefox v64以降
	if ( document.body.requestFullscreen ) {
		document.body.requestFullscreen();

		// Firefox v63以前
	} else if ( document.body.mozRequestFullScreen ) {
		document.body.mozRequestFullScreen();

		// Safari & Edge & Chrome v68以前
	} else if ( document.body.webkitRequestFullscreen ) {
		document.body.webkitRequestFullscreen();

		// IE11
	} else if ( document.body.msRequestFullscreen ) {
		document.body.msRequestFullscreen();
	}
};

// フルスクリーン解除


function ExitFullScreen() {
	// Chrome & Firefox v64以降
	if ( document.exitFullscreen ) {
		document.exitFullscreen();

		// Firefox v63以前
	} else if ( document.mozCancelFullScreen ) {
		document.mozCancelFullScreen();

		// Safari & Edge & Chrome v44以前
	} else if ( document.webkitCancelFullScreen ) {
		document.webkitCancelFullScreen();

		// IE11
	} else if ( document.msExitFullscreen ) {
		document.msExitFullscreen();
	}
};

/**
 * フルスクリーンかどうかを返す
 * @return {Boolean} フルスクリーンなら true、そうでないなら false
 */
function isFullScreen() {
	if ((document.fullscreenElement !== undefined && document.fullscreenElement !== null) || // HTML5 標準
			(document.mozFullScreenElement !== undefined && document.mozFullScreenElement !== null) || // Firefox
			(document.webkitFullscreenElement !== undefined && document.webkitFullscreenElement !== null) || // Chrome・Safari
			(document.webkitCurrentFullScreenElement !== undefined && document.webkitCurrentFullScreenElement !== null) || // Chrome・Safari (old)
			(document.msFullscreenElement !== undefined && document.msFullscreenElement !== null)){ // IE・Edge Legacy
			return true; // fullscreenElement に何か入ってる = フルスクリーン中
	} else {
			return false; // フルスクリーンではない or フルスクリーン非対応の環境（iOS Safari など）
	}
}


FullScreenbtn.textContent = "Full Screen";

function FullScreen() {
	if (isFullScreen() ==false) {
		// fsjudge = 1;
		EnterFullScreen();


	} else {
		// fsjudge = 0;
		ExitFullScreen();

	}
}
function judgefs() {
	if (isFullScreen()) {
		FullScreenbtn.textContent = "Exit Full Screen";
		contents.style.display='none';
		btn.style.float='left';
	}else{
		FullScreenbtn.textContent = "Full Screen";
		contents.style.display='inline';
	}
}
let are;
function fs(){
	// clearInterval(are);
	FullScreen();
	are=setInterval(judgefs,1000);
	btn.style.float='none';
	// judgefs();
}

// FullScreenbtn.onclick=setInterval(judgefs,1);

setbtn.onclick = set;
darkbtn.onclick = darkmode;
resetbtn.onclick = reset;
FullScreenbtn.onclick = fs;







