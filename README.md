# Meckan-O-Matic

## Installation

1. Open Meckano’s dashboard (the homepage) in your browser.
2. Add the page as a bookmark.
3. Right click the bookmark's and edit its address: remove the current URL and paste the following JavaScript snippet instead, EXACTLY how it appears here:

```js
javascript:(()=>(document.querySelector("#li-monthly-employee-report a").click(),setTimeout(()=>{document.querySelector(".export.free-reporting").click(),setTimeout(()=>{document.getElementById("freeReporting-dialog").querySelectorAll("tr:not([class*=holiday])").forEach(e=>{e.querySelector(".specialDayDescription:empty")&&["checkIn","checkOut"].forEach(r=>{let l=e.querySelector(`input.${r}`);l&&0===l.value.length&&(l.value="checkIn"===r?"09:00":"18:00")})})},1e3)},1e3)))()
```

4. In due time, **and while in** Meckano’s dashboard — click on the bookmark.

## Caveats

1. Personal vacations (etc.) need manual insertion.