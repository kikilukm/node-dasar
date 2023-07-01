const os = require('os');

console.info(os.platform());
console.table(os.cpus());
function makan(makanan) {
	console.info( 'makan' + makanan )
}
makan(' nasi');

// import modul cara lama 