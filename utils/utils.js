export const getDate = () => {
	var today = new Date();
	var day = today.getDate() + '';
	var month = today.getMonth() + 1 + '';
	var year = today.getFullYear() + '';
	var hour = today.getHours() + '';
	var minutes = today.getMinutes() + '';

	function checkZero(data) {
		if (data.length == 1) {
			data = '0' + data;
		}
		return data;
	}

	day = checkZero(day);
	month = checkZero(month);
	year = checkZero(year);
	hour = checkZero(hour);
	minutes = checkZero(minutes);

	const currentDate = [
		day,
		'/',
		month,
		'/',
		year,
		' ',
		hour,
		':',
		minutes,
	].join('');

	return currentDate;
};

export const alternateCaps = (s) => {
	const newArr = [];

	for (let i = 0; i < s.length; i++) {
		if (i % 2 === 0) {
			newArr.push(s[i].toUpperCase());
		} else {
			newArr.push(s[i].toLowerCase());
		}
	}
	return newArr;
};
