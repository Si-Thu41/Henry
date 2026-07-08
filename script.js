async function sendChoice(choice) {
    try {
        const res = await fetch("/api/telegram", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ choice }),
        });

        if (!res.ok) {
            throw new Error("Failed");
        }

        alert("Thank you ❤️");
    } catch (err) {
        console.error(err);
        alert("Something went wrong.");
    }
}
document.querySelector(".primary").onclick = () => {
    sendChoice("Yes ❤️");
};

document.querySelector(".btn:not(.primary)").onclick = () => {
    sendChoice("I'd like to know you better first 😊");
};