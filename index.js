// Resources
// https://www.toptal.com/developers/javascript-minifier

(() => {
	document.querySelector("#li-monthly-employee-report a").click();
	setTimeout(() => {
		document.querySelector(".export.free-reporting").click();
		setTimeout(() => {
			["checkIn", "checkOut"].forEach((slot) =>
				document
					.querySelectorAll(`tr:not([class*=holiday]) input.${slot}`)
					.forEach(
						(node) => (node.value = slot === "checkIn" ? "09:00" : "18:00")
					)
			);
		}, 1000);
	}, 1000);
})();
