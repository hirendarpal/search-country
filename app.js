const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",
    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana",
    "Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad",
    "Chile","China","Colombia","Comoros","Congo ","Costa Rica","Croatia","Cuba","Cyprus","Czechia","Denmark",
    "Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
    "Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
    "Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan",
    "Kazakhstan","Kenya","Kiribati","Korea (North)","Korea (South)","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia",
    "Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
    "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
    "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway",
    "Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
    "Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
    "South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste",
    "Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom",
    "United America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];
 
const contaioner = document.querySelector('.container');
const span = document.querySelector('.span');
const selectBtn = document.querySelector('.select-option');
const dropDownlist = document.querySelector('.list-search-container');
const searchInput = document.querySelector('#search');
const list = document.querySelector('.list');
const icon = document.querySelector('.up-down');

// let arrow = 'down';
// function down() {
//     if(arrow == 'down'){
//     const itag = document.createElement('i');
//     itag.setAttribute("class","fa-solid fa-caret-down icon")
//     selectBtn.append(itag)
//     }
// }
// down();
// function UP() {
//     if(arrow){
//         const itag = document.createElement('i');
//         itag.setAttribute("class","fa-solid fa-caret-up icon")
//         selectBtn.append(itag)
//     }
// }

selectBtn.addEventListener('click',() => {
    dropDownlist.classList.toggle('active');
    console.log()
    if(dropDownlist.classList[1]){
        icon.src = 'up.png'
        console.log('up')
    }
    else{
        icon.src = 'down.png'
        console.log('down')
    }
});

function select(listItem) {
    [...list.children].forEach((item) => item.classList.remove('selected'))
    span.innerText = listItem.innerText;
    listItem.classList.add('selected');
    dropDownlist.classList.remove('active');
}

function addcountry() {
    countries.forEach((country) => {
    const listItem = document.createElement('li');
    listItem.innerText = country;
    listItem.addEventListener('click', () => {
        select(listItem);
    })
    list.appendChild(listItem);
});
}

addcountry();

function select2() {
  const litag = document.querySelectorAll("li");

  litag.forEach((item) => {
    item.addEventListener("click", () => {
        searchInput.value = '';
        select(item);
        addcountry();
    });
  });
}

searchInput.addEventListener('keyup', () => {
    const Inputval = searchInput.value.toLowerCase();
    const filtercountry = countries.filter((country) => {
        return country.toLocaleLowerCase().startsWith(Inputval)
        }).map((country) => {
            return  '<li>' + country + '</li>'
        }).join("");
    list.innerHTML = filtercountry;
    select2()
})