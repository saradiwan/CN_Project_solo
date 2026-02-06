function validateIP(event) {
    event.preventDefault();

    const ip = document.getElementById("ipInput").value.trim();
    const result = document.getElementById("result");

    const ipRegex =
        /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;

    if (ipRegex.test(ip)) {
        result.textContent = "✅ Valid IP Address";
        result.style.color = "#7CFC98";
    } else {
        result.textContent = "❌ Invalid IP Address";
        result.style.color = "#ff6b6b";
    }
}
