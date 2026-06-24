document.getElementById("scanBtn")
.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    let url = tab.url;

    let score = 0;

    // Special character check
    if(url.includes("@"))
        score += 30;

    // Hyphen check
    if(url.includes("-"))
        score += 15;

    // Suspicious keywords
    const suspiciousWords = [
        "login",
        "verify",
        "secure",
        "update",
        "account",
        "bank",
        "payment",
        "wallet",
        "signin",
        "confirm"
    ];

    for(let word of suspiciousWords){
        if(url.toLowerCase().includes(word)){
            score += 10;
        }
    }

    // Long URL check
    if(url.length > 50)
        score += 20;

    // IP Address detection
    const ipPattern =
    /https?:\/\/(\d{1,3}\.){3}\d{1,3}/;

    if(ipPattern.test(url)){
        score += 40;
    }

    // Excessive subdomain detection
    let hostname = new URL(url).hostname;

    let dotCount =
    (hostname.match(/\./g) || []).length;

    if(dotCount > 3){
        score += 25;
    }

    // Limit score
    if(score > 100){
        score = 100;
    }

    let status = "";
    let color = "";

    if(score >= 60){
        status = "HIGH RISK";
        color = "red";
    }
    else if(score >= 25){
        status = "SUSPICIOUS";
        color = "orange";
    }
    else{
        status = "SAFE";
        color = "green";
    }

    document.getElementById("result").innerHTML = `
        <b>URL:</b><br>${url}<br><br>

        <b>Risk Score:</b> ${score}/100<br><br>

        <b style="color:${color}">
        Status: ${status}
        </b>
    `;
});