let contrySelectBox = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')
let contriesData = {
    Iran: ['tabriz', 'tehran','shiraz', 'esfhan', 'gilan'],
    Turkey: ['istanbul', 'izmir', 'ankara', 'antalia'],
    US: ['Los angles', 'chikago', 'San digo']
}
contrySelectBox.addEventListener ('change',function (){
    if (contrySelectBox.value === "Please Select"){
        citySelect.innerHTML = ''
        citySelect.innerHTML += '<option>Select City</option>'
    } else {
        
        let mainCountryName = contrySelectBox.value // Iran Us Turkey
        // console.log(contrySelectBox.value)
        let mainContriesCity = contriesData[mainCountryName] // {city of Iran , us , turkey}
        citySelect.innerHTML = ''
        
        mainContriesCity.forEach(function(City){
            // console.log(City)
            citySelect.innerHTML += '<option>'+ City +'</option>'
        })
    }


    // console.log(mainContriesCity)
})
