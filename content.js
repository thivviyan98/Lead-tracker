let myLeads =[];

const inputEL = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

let paraEl = document.getElementById("par-el");

const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEL.value);

  inputEL.value = "";
  renderLeads();
});

function renderLeads() {
  let listedItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listedItems += `<li> 
                    <a target='_blank' 
                    href='http://www.${myLeads[i]}.com'>
                    ${myLeads[i]}
                    </a>
                        </li>`;
  }
  ulEl.innerHTML = listedItems;
}
