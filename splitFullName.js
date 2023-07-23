const fs = require('fs');

function splitFullName(csvContent) {
	const lines = csvContent.split('\n');

	const header = lines.shift().split(',');

	const fullNameIndex = header.indexOf('name');

	header.splice(fullNameIndex, 1, 'first name', 'surname');

	const updatedLines = lines.map(line => {
		const columns = line.split(',');
		const fullName = columns.splice(fullNameIndex, 1)[0].split(' ');
		columns.splice(fullNameIndex, 0, fullName[0], fullName[1] || '');
		return columns.join(',');
	});

	const updatedCSV = [header.join(','), ...updatedLines].join('\n');

	return updatedCSV;
}

fs.readFile('input.csv', 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading the file', err);
		return;
	}

	const updatedCSV = splitFullName(data);

	fs.writeFile('output.csv', updatedCSV, 'utf8', err => {
		if (err) {
			console.error('Error writing to the fil:', err);
			return;
		}
	});

	console.log('CSV file successfully updated with new headings!');
});
