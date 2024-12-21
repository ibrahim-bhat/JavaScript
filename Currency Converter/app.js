let list = document.querySelectorAll('.converter select');

(async () => {
  const BaseURL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
     await fetch(BaseURL).json();
})();


for (const prop of list){
    for (const curr in countryList){
        const newOption = document.createElement("option");
        newOption.innerText = curr;
        newOption.value = curr;
        if(prop.id === "fromCurrency" && curr === "USD"){
            newOption.selected = "selected"
        } else if(prop.id === "toCurrency" && curr === "INR"){
            newOption.selected = "selected"
        }
        prop.append(newOption);
    }   
}

