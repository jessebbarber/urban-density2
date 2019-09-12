
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2ViYXJiZXIiLCJhIjoiY2pvNjBicmU5MGU0MzNrb2I3aG02OWthciJ9.czMAn4iRicWIeUrok9O7NQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/jessebarber/ck0frjylk0b781crlvn6kgcfx',
center: [-84.332, 33.824],
	zoom:9.00
});
 
3.12
39.515,-84.002


// Dropdown Javascript
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// FLY FUNTION + INFO SWAP OVERWRITING

document.getElementById('atl').addEventListener('click', function () {
	map.flyTo({
	center: [
	-84.332, 33.824],
	zoom:9.00
	});
	});


function atlswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "979 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Atlanta" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('aust').addEventListener('click', function () {
	map.flyTo({
	center: [
	-97.761, 30.358],
	zoom:9.00
	});
	});


function austswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1109 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Austin" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('balt').addEventListener('click', function () {
	map.flyTo({
	center: [
	-76.648, 39.234],
	zoom:9.00
	});
	});


function baltswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1411 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Baltimore" + '</strong>' + " urban area" + '</p></p>';
		}



document.getElementById('birm').addEventListener('click', function () {
	map.flyTo({
	center: [
	-86.792, 33.469],
	zoom:9.00
	});
	});


function birmswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "534 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Birmingham" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('bost').addEventListener('click', function () {
	map.flyTo({
	center: [
	-71.141, 42.373],
	zoom:9.00
	});
	});


function bostswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "2244 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Boston" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('bri').addEventListener('click', function () {
	map.flyTo({
	center: [
	-73.26, 41.241],
	zoom:9.00
	});
	});


function briswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1183 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Bridgeport" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('char').addEventListener('click', function () {
	map.flyTo({
	center: [
	-80.816, 35.250],
	zoom:9.00
	});
	});


function charswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "708 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Charlotte" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('chi').addEventListener('click', function () {
	map.flyTo({
	center: [
	-87.608, 41.905],
	zoom:9.00
	});
	});


function chiswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "2500 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Chicago" + '</strong>' + " urban area" + '</p></p>';
		}



document.getElementById('cincy').addEventListener('click', function () {
	map.flyTo({
	center: [
	-84.462, 39.185],
	zoom:9.00
	});
	});


function cincyswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1047 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Cincinnati" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('clev').addEventListener('click', function () {
	map.flyTo({
	center: [
	-81.605, 41.444],
	zoom:9.00
	});
	});


function clevswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1266 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Cleveland" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('colu').addEventListener('click', function () {
	map.flyTo({
	center: [
	-81.077, 34.036],
	zoom:9.00
	});
	});


function coluswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1390 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Columbia" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('col').addEventListener('click', function () {
	map.flyTo({
	center: [
	-82.968, 40.021],
	zoom:9.00
	});
	});


function colswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1298 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Columbus" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('dal').addEventListener('click', function () {
	map.flyTo({
	center: [
	-96.972, 32.813],
	zoom:9.00
	});
	});


function dalswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1279 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Dallas" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('den').addEventListener('click', function () {
	map.flyTo({
	center: [
	-104.955, 39.710],
	zoom:9.00
	});
	});


function denswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1787 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Denver" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('det').addEventListener('click', function () {
	map.flyTo({
	center: [
	-83.227, 42.490],
	zoom:9.00
	});
	});


function detswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1325 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Detroit" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('hart').addEventListener('click', function () {
	map.flyTo({
	center: [
	-72.698, 41.740],
	zoom:9.00
	});
	});


function hartswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "739 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Hartford" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('hou').addEventListener('click', function () {
	map.flyTo({
	center: [
	-95.393, 29.784],
	zoom:9.00
	});
	});


function houswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1470 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Houston" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('indy').addEventListener('click', function () {
	map.flyTo({
	center: [
	-86.145, 39.811],
	zoom:9.00
	});
	});


function indyswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "809 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Indianapolis" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('jax').addEventListener('click', function () {
	map.flyTo({
	center: [
	-81.642, 30.240],
	zoom:9.00
	});
	});


function jaxswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "858 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Jacksonville" + '</strong>' + " urban area" + '</p></p>';
		}

document.getElementById('kans').addEventListener('click', function () {
	map.flyTo({
	center: [
	-94.595, 39.040],
	zoom:9.00
	});
	});


function kansswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "930 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Kansas City" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('knox').addEventListener('click', function () {
	map.flyTo({
	center: [
	-84.024, 35.917],
	zoom:9.00
	});
	});


function knoxswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "503 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Knoxville" + '</strong>' + " urban area" + '</p></p>';
		}


document.getElementById('lv').addEventListener('click', function () {
	map.flyTo({
	center: [
	-115.167, 36.135],
	zoom:9.00
	});
	});


function lvswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1735 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Las Vegas" + '</strong>' + " urban area." + '</p></p>';
			}


document.getElementById('la').addEventListener('click', function () {
	map.flyTo({
	center: [
	-117.967, 33.945],
	zoom:9.00
	});
	});


function laswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "3225 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Los Angeles" + '</strong>' + " urban area." + '</p></p>';
			}

document.getElementById('louis').addEventListener('click', function () {
	map.flyTo({
	center: [
	-85.674, 38.231],
	zoom:9.00
	});
	});


function louisswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "979 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Louisville" + '</strong>' + " urban area." + '</p></p>';
			}

document.getElementById('mem').addEventListener('click', function () {
	map.flyTo({
	center: [
	-89.918, 35.095],
	zoom:9.00
	});
	});


function memswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "836 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Memphis" + '</strong>' + " urban area." + '</p></p>';
			}


document.getElementById('mia').addEventListener('click', function () {
	map.flyTo({
	center: [
	-80.231, 26.176],
	zoom:9.00
	});
	});


function miaswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "2607 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Miami" + '</strong>' + " urban area." + '</p></p>';
			}

document.getElementById('mil').addEventListener('click', function () {
	map.flyTo({
	center: [
	-88.100, 43.056],
	zoom:9.00
	});
	});


function milswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1372 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Milwaukee" + '</strong>' + " urban area." + '</p></p>';
			}

document.getElementById('min').addEventListener('click', function () {
	map.flyTo({
	center: [
	-93.280, 44.978],
	zoom:9.00
	});
	});


function minswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1385 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Minneapolis" + '</strong>' + " urban area." + '</p></p>';
			}

document.getElementById('nash').addEventListener('click', function () {
	map.flyTo({
	center: [
	-86.681, 36.128],
	zoom:9.00
	});
	});


function nashswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "736 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Nashville" + '</strong>' + " urban area." + '</p></p>';
			}


document.getElementById('nyc').addEventListener('click', function () {
	map.flyTo({
	center: [-73.905, 40.748],
	zoom:9.00
	});
	});


function nycswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "5718 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " New York City" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('ok').addEventListener('click', function () {
	map.flyTo({
	center: [-97.524, 35.505],
	zoom:9.00
	});
	});


function okswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "772 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Oklahoma" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('orl').addEventListener('click', function () {
	map.flyTo({
	center: [-81.411, 28.584],
	zoom:9.00
	});
	});


function orlswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1008 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Orlando" + '</strong>' + " urban area." + '</p></p>';
	}


document.getElementById('phi').addEventListener('click', function () {
	map.flyTo({
	center: [-75.298, 39.973],
	zoom:9.00
	});
	});


function phiswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1819 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Philadelphia" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('pho').addEventListener('click', function () {
	map.flyTo({
	center: [-111.970, 33.494],
	zoom:9.00
	});
	});


function phoswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1340 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Phoenix" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('pit').addEventListener('click', function () {
	map.flyTo({
	center: [-79.951, 40.457],
	zoom:9.00
	});
	});


function pitswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1033 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Pittsburgh" + '</strong>' + " urban area." + '</p></p>';
	}


document.getElementById('port').addEventListener('click', function () {
	map.flyTo({
	center: [-122.651, 45.520],
	zoom:9.00
	});
	});


function portswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1596 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Portland" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('prov').addEventListener('click', function () {
	map.flyTo({
	center: [-71.397, 41.776],
	zoom:9.00
	});
	});


function provswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1150 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Providence" + '</strong>' + " urban area." + '</p></p>';
	}


document.getElementById('ral').addEventListener('click', function () {
	map.flyTo({
	center: [-78.665, 35.766],
	zoom:9.00
	});
	});


function ralswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "717 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Raleigh" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('rich').addEventListener('click', function () {
	map.flyTo({
	center: [-77.488, 37.478],
	zoom:9.00
	});
	});


function richswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "688 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Richmond" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('riv').addEventListener('click', function () {
	map.flyTo({
	center: [-117.342, 33.985],
	zoom:9.00
	});
	});


function rivswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "820 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Riverside" + '</strong>' + " urban area." + '</p></p>';
	}


document.getElementById('sac').addEventListener('click', function () {
	map.flyTo({
	center: [-121.325, 38.638],
	zoom:9.00
	});
	});


function sacswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1387 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Sacramento" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('sa').addEventListener('click', function () {
	map.flyTo({
	center: [-98.475, 29.514],
	zoom:9.00
	});
	});


function saswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "945 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " San Antonio" + '</strong>' + " urban area." + '</p></p>';
	}


document.getElementById('sd').addEventListener('click', function () {
	map.flyTo({
	center: [-117.129, 32.928],
	zoom:9.00
	});
	});


function sdswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "1557 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " San Diego" + '</strong>' + " urban area." + '</p></p>';
	}

document.getElementById('sj').addEventListener('click', function () {
	map.flyTo({
	center: [-66.116, 18.288],
	zoom:9.00
	});
	});


function sjswap() {
	document.getElementById("info").innerHTML = '<p><strong>' + "2214 units/acre " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " San Juan" + '</strong>' + " urban area." + '</p></p>';
	}



document.getElementById('sea').addEventListener('click', function () {
	map.flyTo({
	center: [-122.275, 47.468],
	zoom:9.00
	});
	});

	function seaswap() {
	  document.getElementById("info").innerHTML = '<p><strong>' + "2176 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Seattle" + '</strong>' + " urban area." + '</p></p>';
	}


document.getElementById('sfbay').addEventListener('click', function () {
	map.flyTo({
	center: [
	-122.215, 37.740],
	zoom:9.00
	});
	});

function bayswap() {
  document.getElementById("info").innerHTML = '<p><strong>' + "4160 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " SF Bay" + '</strong>' + " urban area." + '</p></p>';
}

document.getElementById('loui').addEventListener('click', function () {
	map.flyTo({
	center: [
	-90.341, 38.631],
	zoom:9.00
	});
	});

function louiswap() {
  document.getElementById("info").innerHTML = '<p><strong>' + "1083 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " St. Louis" + '</strong>' + " urban area." + '</p></p>';
}

document.getElementById('tamp').addEventListener('click', function () {
	map.flyTo({
	center: [
	-82.513, 28.006],
	zoom:9.00
	});
	});

function tampswap() {
  document.getElementById("info").innerHTML = '<p><strong>' + "1449 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Tampa" + '</strong>' + " urban area." + '</p></p>';
}


document.getElementById('vb').addEventListener('click', function () {
	map.flyTo({
	center: [
	-76.310, 36.900],
	zoom:9.00
	});
	});

function vbswap() {
  document.getElementById("info").innerHTML = '<p><strong>' + "1101 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Virginia Beach" + '</strong>' + " urban area." + '</p></p>';
}

document.getElementById('dc').addEventListener('click', function () {
	map.flyTo({
	center: [
	-77.190, 38.897],
	zoom:9.00
	});
	});

function dcswap() {
  document.getElementById("info").innerHTML = '<p><strong>' + "1877 units/sqmi " + '</strong>' + "is the average density of housing units in the" + '<strong>' + " Washington D.C." + '</strong>' + " urban area." + '</p></p>';
}






//navigation control etc.

map.getCanvas().style.cursor = 'default';


function mediasize(x) {
  if (x.matches) { // If media query matches
    var nav = new mapboxgl.NavigationControl();
	map.addControl(nav, 'top-left');
	var scale = new mapboxgl.ScaleControl({
    unit: 'imperial'
});
map.addControl(scale);
  } else {}
}

var x = window.matchMedia("(min-width: 500px)")
mediasize(x) // Call listener function at run time
x.addListener(mediasize) // Attach listener function on state changes


