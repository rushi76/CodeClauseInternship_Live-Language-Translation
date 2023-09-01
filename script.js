document.addEventListener("DOMContentLoaded", function () {
    const translateButton = document.getElementById("translateButton");
    const sourceText = document.getElementById("sourceText");
    const targetLanguage = document.getElementById("targetLanguage");
    const translatedText = document.getElementById("translatedText");

    translateButton.addEventListener("click", function () {
        const sourceTextValue = sourceText.value;
        const targetLanguageValue = targetLanguage.value;

        // Make a request to the Google Cloud Translation API
        fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${AIzaSyBQxDKWycaoN3ohCBTukimRcDiA3J72Xp8}`,
            {
                method: "POST",
                body: JSON.stringify({
                    q: sourceTextValue,
                    target: targetLanguageValue,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.data && data.data.translations) {
                    translatedText.textContent = data.data.translations[0].translatedText;
                } else {
                    translatedText.textContent = "Translation not available.";
                }
            })
            .catch((error) => {
                console.error("Error translating text:", error);
            });
    });
});
