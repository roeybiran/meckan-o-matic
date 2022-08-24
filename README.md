# Meckan-O-Matic

## Installation

1. Navigate to the "montly report" tab in Meckano.
2. Add the page as a bookmark.
3. Right click the bookmark's and edit its address: remove the current URL and paste the following JavaScript snippet instead, EXACTLY how it appears here:

```js
javascript:(()=>(document.querySelector("#li-monthly-employee-report a").click(),setTimeout(()=>{document.querySelector(".export.free-reporting").click(),setTimeout(()=>{["checkIn","checkOut"].forEach(a=>document.querySelectorAll(`tr:not([class*=holiday]) input.${a}`).forEach(b=>b.value="checkIn"===a?"09:00":"18:00"))},1e3)},1e3)))()
```

4. In due time, simply click on the bookmark.
