var exec = require('child_process').exec
var path = require('path')
var cmd = path.join(
	__dirname,
	'hapticJS',
	'DerivedData',
	'hapticJS',
	'Build',
	'Products',
	'Release',
	'hapticJS'
)

/**
 *
 * @param {"alignment"|"levelChange"|"generic"} pattern
 */
exports.vibrate = function (pattern) {
	if (os.platform().includes('darwin')) {
		switch (pattern) {
			case 'alignment':
				exec(`${cmd} --alignment`)
				break
			case 'levelChange':
				exec(`${cmd} --levelChange`)
				break
			default:
				exec(`${cmd} --generic`)
				break
		}
	}
}
