var preview = document.getElementById("livePreview");
var littleBoxes = document.getElementsByClassName("box");
var page1 = "<p><strong>i-GOGO </strong>is an innovative system that delivers ultra fast internet services to any urban, underserved or rural area within Cameroon.</p><p><strong>i-GOGO </strong>is the first telecommunications system to combine simplicity and optimum accessibility through WI-FI connectivity and broadband satellite access.</p><p><strong>i-GOGO</strong>'s business model enables you to start your Internet Business from your existing facility such as a Hotel, a Bar, a restaurant, a retail store, a Gas station, a Hospital, a school, a college or university campus, an internet café, a private residence, a church yard, a Bus station, a train station, a football stadium, a neighborhood market or a commercial district.</p>";
var page2 = "<p><strong>i-GOGO</strong> offers you a unique opportunity and the very best option for the launch of your local Internet Service Provider activity, guaranteed by our  Government authorizations and our exclusive innovations and original solutions.</p><p>We can generate your Internet Hotspot in any urban or rural area within Cameroon.</p><p>We fully create a turnkey Hotspot for you using our innovative satellite, fiber, and WiFi  systems at a very low cost.</p><p>Our system provides high-quality, reliable and dedicated internet connections to you and your clients at very low cost.</p>";
var page3 = "<p>Your <strong>i-GOGO </strong> Hotspot can serve you a data rate of up to 10 Mbps. You will, in turn resell this data rate to your clients on a daily, weekly or monthly basis.</p><p>With 10 Mbps, you can provide access to up to 50 customers on your network at the same time. This could represent monthly revenues of several Millions CFA per month for your hotspot. The more you expand your customer-base, the higher your revenues.</p><p>Once they have purchased their ticket from you, your clients will access your Hotspot via their Laptop, Smartphone, Dongles or any WiFi compatible device.</p>";
var uno = document.getElementById("uno");
var sec = document.getElementById("sec");
var thir = document.getElementById("thir");
var space = document.getElementById("righto");
var pOneText = function() {
  space.innerHTML = page1;
};
var pTwoText = function() {
  space.innerHTML = page2;
};
var p3Text = function() {
  space.innerHTML = page3;
};
uno.addEventListener('click', pOneText, false);
sec.addEventListener('click', pTwoText, false);
thir.addEventListener('click', p3Text, false);

var myFunction = function() {
    var attribute = this.getAttribute("nameo");
   
  if (attribute === null) {
    
  }else{ preview.innerHTML = attribute}
};

for (var i = 0; i < littleBoxes.length; i++) {
    littleBoxes[i].addEventListener('mouseenter', myFunction, false);
}