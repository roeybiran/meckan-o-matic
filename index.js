// Resources
// https://www.toptal.com/developers/javascript-minifier

(() => {
	document.querySelector("#li-monthly-employee-report a").click();
	setTimeout(() => {
		document.querySelector(".export.free-reporting").click();
		setTimeout(() => {
			document
				.getElementById("freeReporting-dialog")
				.querySelectorAll("tr:not([class*=holiday])")
				.forEach((node) => {
					if (node.querySelector(".specialDayDescription:empty")) {
						["checkIn", "checkOut"].forEach((slot) => {
							const target = node.querySelector(`input.${slot}`);
							if (target && target.value.length === 0) {
								target.value = slot === "checkIn" ? "09:00" : "18:00";
							}
						});
					}
				});
		}, 1000);
	}, 1000);
})();
