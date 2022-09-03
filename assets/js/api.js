fetch("https://api.countapi.xyz/update/kuczisa/views/?amount=1")
	.then(a=>a.json())
	.then(b=> document.getElementById('odwiedzenia').innerHTML= "Site has been viewed " + b.value + " times this month.")