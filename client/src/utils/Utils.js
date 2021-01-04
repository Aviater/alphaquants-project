import moment from 'moment';

export default class Utils {

    // Place commas in the 1000s position.
    static numberWithCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // Transform user creation date from YYYY/MM to MM/YYYY.
	static transformDate(userDateUnformatted) {
		let month = userDateUnformatted.slice(5, 7);
		let year = userDateUnformatted.slice(0, 4);
		
		return month + '/' + year;
	}

	static getInitialDate() {
        const dateTimeNow = moment().format('YYYY-MM-DDTHH:mm:ss');
		const dateTimeYesterday = moment().subtract(1, 'days').format('YYYY-MM-DDTHH:mm:ss');
		
        return {
            today: dateTimeNow,
            yesterday: dateTimeYesterday
        }
    }

	// Set correct quarter based on date.
	static dateAndQuarterSetter() {
		const date = new Date();
		const month = date.getMonth();
		const today = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
		let quarter;

		switch(month) {
			case 0:
			case 1:
			case 2:
				quarter = 'Q1';
				break;
			case 3:
			case 4:
			case 5:
				quarter = 'Q2';
				break;
			case 6:
			case 7:
			case 8:
				quarter = 'Q3';
				break;
			case 9:
			case 10:
			case 11:
				quarter = 'Q4';
				break;
		}

		return {
			date: today,
			year: date.getFullYear(),
			quarter: quarter,
		}
	}

	// Set arrow direction and color depending on value.
	static setArrow(value) {
		let headerData = value;

		// If header data is a string, remove character before comparison.
		if(typeof headerData === 'string') {
			headerData = value.replace('%', '');
		}
		
		if(headerData < 0) {
			return 'zmdi zmdi-caret-down pr-10 font-24 text-danger';
		} else {
			return 'zmdi zmdi-caret-up pr-10 font-24 text-success';
		}
	}

	// Remove alert element.
	static destroyAlert() {
        const element = document.querySelector('#alert');
        if(element) {
            element.parentNode.removeChild(element);
		}
    }

}