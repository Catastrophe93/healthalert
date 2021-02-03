//Use window.onload = function(){} to make sure all the code runs "ONLY AFTER" the page/window is completely loaded.

window.onload = function () {

	var AJKCases = 2;
	var AJKDeadCounter = 0;
	var AJKRecoveryCounter = 0;

	var BalochistanCases = 133;
	var BalochistanDeadCounter = 1;
	var BalochistanRecoveryCounter = 2;

	var GilgitCases = 107;
	var GilgitDeadCounter = 1;
	var GilgitRecoveryCounter = 3;

	var IsloICTCases = 39;
	var IslamabadDeadCounter = 0;
	var IslamabadRecoveryCounter = 2;

	var KPKCases = 180;
	var KPKDeadCounter = 3;
	var KPKRecoveryCounter = 2;

	var PunjabCases = 490;
	var PunjabDeadCounter = 5;
	var PunjabRecoveryCounter = 4;

	var SindhCases = 457;
	var SindhDeadCounter = 1;
	var SindhRecoveryCounter = 14;

	var totalCaseCount = (BalochistanCases + KPKCases + PunjabCases + SindhCases + IsloICTCases + GilgitCases + AJKCases);
	var totalExpiredCount = (BalochistanDeadCounter + PunjabDeadCounter + SindhDeadCounter + IslamabadDeadCounter + GilgitDeadCounter + AJKDeadCounter + KPKDeadCounter);
	var totalDischargedCount = (AJKRecoveryCounter + BalochistanRecoveryCounter + GilgitRecoveryCounter + IslamabadRecoveryCounter + KPKRecoveryCounter + PunjabRecoveryCounter + SindhRecoveryCounter);

	var xyzCases = 850;
	var karachiCases = 26;
	var HyderabadCases = 1;
	var SukkurCases = 76;

	function percentageCalculator() {

		var AJKPercentage;
		var AJKLocalDeadPercentage;
		var AJKDomesticDeadPercentage;
		var AJKLocalRecoveredPercentage;
		var AJKDomesticRecoveredPercentage;

		var BalochistanPercentage;
		var BalochistanLocalDeadPercentage;
		var BalochistanDomesticDeadPercentage;
		var BalochistanLocalRecoveredPercentage;
		var BalochistanDomesticRecoveredPercentage;

		var GilgitPercentage;
		var GilgitLocalDeadPercentage;
		var GilgitDomesticDeadPercentage;
		var GilgitLocalRecoveredPercentage;
		var GilgitDomesticRecoveredPercentage;

		var IsloICTPercentage;
		var IslamabadLocalDeadPercentage;
		var IslamabadDomesticDeadPercentage;
		var IslamabadLocalRecoveredPercentage;
		var IslamabadDomesticRecoveredPercentage;

		var KPKPercentage;
		var KPKLocalDeadPercentage;
		var KPKDomesticDeadPercentage;
		var KPKLocalRecoveredPercentage;
		var KPKDomesticRecoveredPercentage;

		var PunjabPercentage;
		var PunjabLocalDeadPercentage;
		var PunjabDomesticDeadPercentage;
		var PunjabLocalRecoveredPercentage;
		var PunjabDomesticRecoveredPercentage;

		var SindhPercentage;
		var SindhLocalDeadPercentage;
		var SindhDomesticDeadPercentage;
		var SindhLocalRecoveredPercentage;
		var SindhDomesticRecoveredPercentage;

		var xyzPercentage;

		AJKPercentage = ((AJKCases/totalCaseCount)*100).toFixed(2);
		AJKLocalDeadPercentage = ((AJKDeadCounter/AJKCases)*100).toFixed(2);
		AJKDomesticDeadPercentage = ((AJKDeadCounter/totalExpiredCount)*100).toFixed(2);
		AJKLocalRecoveredPercentage = ((AJKRecoveryCounter/AJKCases)*100).toFixed(2);
		AJKDomesticRecoveredPercentage = ((AJKRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		BalochistanPercentage = ((BalochistanCases)/(totalCaseCount)*100).toFixed(2);
		BalochistanLocalDeadPercentage = ((BalochistanDeadCounter/BalochistanCases)*100).toFixed(2);
		BalochistanDomesticDeadPercentage = ((BalochistanDeadCounter/totalExpiredCount)*100).toFixed(2);
		BalochistanLocalRecoveredPercentage = ((BalochistanRecoveryCounter/BalochistanCases)*100).toFixed(2);
		BalochistanDomesticRecoveredPercentage = ((BalochistanRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		GilgitPercentage = ((GilgitCases)/(totalCaseCount)*100).toFixed(2);
		GilgitLocalDeadPercentage = ((GilgitDeadCounter/GilgitCases)*100).toFixed(2);
		GilgitDomesticDeadPercentage = ((GilgitDeadCounter/totalExpiredCount)*100).toFixed(2);
		GilgitLocalRecoveredPercentage = ((GilgitRecoveryCounter/GilgitCases)*100).toFixed(2);
		GilgitDomesticRecoveredPercentage = ((GilgitRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		IsloICTPercentage = ((IsloICTCases)/(totalCaseCount)*100).toFixed(2);
		IslamabadLocalDeadPercentage = ((IslamabadDeadCounter/IsloICTCases)*100).toFixed(2);
		IslamabadDomesticDeadPercentage = ((IslamabadDeadCounter/totalExpiredCount)*100).toFixed(2);
		IslamabadLocalRecoveredPercentage = ((IslamabadRecoveryCounter/IsloICTCases)*100).toFixed(2);
		IslamabadDomesticRecoveredPercentage = ((IslamabadRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		KPKPercentage = ((KPKCases)/(totalCaseCount)*100).toFixed(2);
		KPKLocalDeadPercentage = ((KPKDeadCounter/KPKCases)*100).toFixed(2);
		KPKDomesticDeadPercentage = ((KPKDeadCounter/totalExpiredCount)*100).toFixed(2);
		KPKLocalRecoveredPercentage = ((KPKRecoveryCounter/KPKCases)*100).toFixed(2);
		KPKDomesticRecoveredPercentage = ((KPKRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		PunjabPercentage = ((PunjabCases)/(totalCaseCount)*100).toFixed(2);
		PunjabLocalDeadPercentage = ((PunjabDeadCounter/PunjabCases)*100).toFixed(2);
		PunjabDomesticDeadPercentage = ((PunjabDeadCounter/totalExpiredCount)*100).toFixed(2);
		PunjabLocalRecoveredPercentage = ((PunjabRecoveryCounter/PunjabCases)*100).toFixed(2);
		PunjabDomesticRecoveredPercentage = ((PunjabRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		SindhPercentage = ((SindhCases)/(totalCaseCount)*100).toFixed(2);
		SindhLocalDeadPercentage = ((SindhDeadCounter/SindhCases)*100).toFixed(2);
		SindhDomesticDeadPercentage = ((SindhDeadCounter/totalExpiredCount)*100).toFixed(2);
		SindhLocalRecoveredPercentage = ((SindhRecoveryCounter/SindhCases)*100).toFixed(2);
		SindhDomesticRecoveredPercentage = ((SindhRecoveryCounter/totalDischargedCount)*100).toFixed(2);

		document.getElementById('ajkPercentage').innerText = AJKPercentage + "%";
		//document.getElementById('ajkLocalDeathRate').innerText = AJKLocalDeadPercentage + "%";
		//document.getElementById('ajkDomesticDeathRate').innerText = AJKDomesticDeadPercentage + "%";
		//document.getElementById('ajkLocalRecoveryRate').innerText = AJKLocalRecoveredPercentage + "%";
		//document.getElementById('ajkDomesticRecoveryRate').innerText = AJKDomesticRecoveredPercentage + "%";

		document.getElementById('balochistanPercentage').innerText = BalochistanPercentage + "%";
		//document.getElementById('balochistanLocalDeathRate').innerText = BalochistanLocalDeadPercentage + "%";
		//document.getElementById('balochistanDomesticDeathRate').innerText = BalochistanDomesticDeadPercentage + "%";
		//document.getElementById('balochistanLocalRecoveryRate').innerText = BalochistanLocalRecoveredPercentage + "%";
		//document.getElementById('balochistanDomesticRecoveryRate').innerText = BalochistanDomesticRecoveredPercentage + "%";

		document.getElementById('gilgitPercentage').innerText = GilgitPercentage + "%";
		//document.getElementById('gilgitLocalDeathRate').innerText = GilgitLocalDeadPercentage + "%";
		//document.getElementById('gilgitDomesticDeathRate').innerText = GilgitDomesticDeadPercentage + "%";
		//document.getElementById('gilgitLocalRecoveryRate').innerText = GilgitLocalRecoveredPercentage + "%";
		//document.getElementById('gilgitDomesticRecoveryRate').innerText = GilgitDomesticRecoveredPercentage + "%";

		document.getElementById('islamabadPercentage').innerText = IsloICTPercentage + "%";
		//document.getElementById('islamabadLocalDeathRate').innerText = IslamabadLocalDeadPercentage + "%";
		//document.getElementById('islamabadDomesticDeathRate').innerText = IslamabadDomesticDeadPercentage + "%";
		//document.getElementById('islamabadLocalRecoveryRate').innerText = IslamabadLocalRecoveredPercentage + "%";
		//document.getElementById('islamabadDomesticRecoveryRate').innerText = IslamabadDomesticRecoveredPercentage + "%";

		document.getElementById('kpkPercentage').innerText = KPKPercentage + "%";
		//document.getElementById('kpkLocalDeathRate').innerText = KPKLocalDeadPercentage + "%";
		//document.getElementById('kpkDomesticDeathRate').innerText = KPKDomesticDeadPercentage + "%";
		//document.getElementById('kpkLocalRecoveryRate').innerText = KPKLocalRecoveredPercentage + "%";
		//document.getElementById('kpkDomesticRecoveryRate').innerText = KPKDomesticRecoveredPercentage + "%";

		document.getElementById('punjabPercentage').innerText = PunjabPercentage + "%";
		//document.getElementById('punjabLocalDeathRate').innerText = PunjabLocalDeadPercentage + "%";
		//document.getElementById('punjabDomesticDeathRate').innerText = PunjabDomesticDeadPercentage + "%";
		//document.getElementById('punjabLocalRecoveryRate').innerText = PunjabLocalRecoveredPercentage + "%";
		//document.getElementById('punjabDomesticRecoveryRate').innerText = PunjabDomesticRecoveredPercentage + "%";

		document.getElementById('sindhPercentage').innerText = SindhPercentage + "%";
		//document.getElementById('sindhLocalDeathRate').innerText = SindhLocalDeadPercentage + "%";
		//document.getElementById('sindhDomesticDeathRate').innerText = SindhDomesticDeadPercentage + "%";
		//document.getElementById('sindhLocalRecoveryRate').innerText = SindhLocalRecoveredPercentage + "%";
		//document.getElementById('sindhDomesticRecoveryRate').innerText = SindhDomesticRecoveredPercentage + "%";

		xyzPercentage = ((xyzCases/totalCaseCount)*100).toFixed(2);
		document.getElementById("hotzoneInfo").innerText = "Around " + xyzPercentage+ "% of all COVID-19 (CoronaVirus) cases in Pakistan can be linked to xyz.";

	}

	function caseCount(){

		document.getElementById("caseCounter").innerText = totalCaseCount;

	}


	function caseCountBalochistan(){

		document.getElementById("balochistanCounter").innerText = BalochistanCases;

	}


	function caseCountKPK(){

		document.getElementById("kpkCounter").innerText = KPKCases;

	}

	function caseCountPunjab(){

		document.getElementById("punjabCounter").innerText = PunjabCases;

	}

	function caseCountSindh(){

		document.getElementById("sindhCounter").innerText = SindhCases;

	}

	function caseCountIslamabadICT(){

		document.getElementById("islamabadCounter").innerText = IsloICTCases;

	}

	function caseCountGilgit(){

		document.getElementById("gilgitCounter").innerText = GilgitCases;

	}

	function caseCountAJK(){

		document.getElementById("ajkCounter").innerText = AJKCases;

	}

	function primarySource(){

		document.getElementById("primarySourceCounter").innerText = "Not Available";

	}

	function primaryHotzone(){

		document.getElementById("primaryHotzoneCounter").innerText = "xyz";

	}

	function sourceInfo(){

		document.getElementById('sourceInfo').innerText = "More than 85% of all COVID-19 (CoronaVirus) cases in Pakistan can be tracked to .";

	}

	function totalDischarged(){

		document.getElementById('totalDischargedCounter').innerText = totalDischargedCount;

	}

	function totalExpired(){

		document.getElementById('totalExpiredCounter').innerText = totalExpiredCount;

	}

	function BalochDeadCount(){

		document.getElementById('balochistanDeadCounter').innerText = BalochistanDeadCounter;

	}

	function KPKDeadCount(){

		document.getElementById('kpkDeadCounter').innerText = KPKDeadCounter;

	}

	function PunjabDeadCount(){

		document.getElementById('punjabDeadCounter').innerText = PunjabDeadCounter;

	}

	function SindhDeadCount(){

		document.getElementById('sindhDeadCounter').innerText = SindhDeadCounter;

	}

	function IslamabadDeadCount(){

		document.getElementById('islamabadDeadCounter').innerText = IslamabadDeadCounter;

	}

	function GilgitDeadCount(){

		document.getElementById('gilgitDeadCounter').innerText = GilgitDeadCounter;

	}

	function AJKDeadCount () {

		document.getElementById('ajkDeadCounter').innerText = AJKDeadCounter;

	}

	function BalochistanRecoveryCount(){

		document.getElementById('balochistanRecoveryCounter').innerText = BalochistanRecoveryCounter;

	}

	function KPKRecoveryCount(){

		document.getElementById('kpkRecoveryCounter').innerText = KPKRecoveryCounter;

	}

	function PunjabRecoveryCount(){

		document.getElementById('punjabRecoveryCounter').innerText = PunjabRecoveryCounter;

	}

	function SindhRecoveryCount(){

		document.getElementById('sindhRecoveryCounter').innerText = SindhRecoveryCounter;

	}

	function IslamabadRecoveryCount(){

		document.getElementById('islamabadRecoveryCounter').innerText = IslamabadRecoveryCounter;

	}

	function GilgitRecoveryCount(){

		document.getElementById('gilgitRecoveryCounter').innerText = GilgitRecoveryCounter;

	}

	function AJKRecoveryCount(){

		document.getElementById('ajkRecoveryCounter').innerText = AJKRecoveryCounter;

	}

	document.getElementById('emailButton').onclick = function Email(){

		alert("Email us at aesthethica.li@gmail.com");

	}

	caseCount();
	caseCountBalochistan();
	caseCountKPK();
	caseCountPunjab();
	caseCountSindh();
	caseCountIslamabadICT();
	caseCountGilgit();
	caseCountAJK();
	primarySource();
	primaryHotzone();
	sourceInfo();
	percentageCalculator();
	totalDischarged();
	totalExpired();
	BalochDeadCount();
	BalochistanRecoveryCount();
	KPKDeadCount();
	KPKRecoveryCount();
	PunjabDeadCount();
	PunjabRecoveryCount();
	SindhDeadCount();
	SindhRecoveryCount();
	IslamabadDeadCount();
	IslamabadRecoveryCount();
	GilgitDeadCount();
	GilgitRecoveryCount();
	AJKDeadCount();
	AJKRecoveryCount();
}
