(() => {
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
})();

// https://www.toptal.com/developers/javascript-minifier
/*
javascript:document.querySelector(".export.free-reporting").click(),setTimeout(()=>{["checkIn","checkOut"].forEach(a=>document.querySelectorAll(`tr:not([class*=holiday]) input.${a}`).forEach(b=>b.value="checkIn"===a?"09:00":"18:00"))},1e3)
*/
