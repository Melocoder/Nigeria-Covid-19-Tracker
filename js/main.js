$(document).ready(function () {
    let [total, active, discharge, death] = [document.querySelector('#totalCases'), document.querySelector('#activeCases'), document.querySelector('#discharged'), document.querySelector('#death')];


    

    fetch('https://covidnigeria.herokuapp.com/api')
    .then((response) => response.json())
    .then((resp) => {
      // console.log(JSON.stringify(resp.data.states));
      total.textContent = resp.data.totalConfirmedCases;
      active.textContent = resp.data.totalActiveCases;
      discharge.textContent = resp.data.discharged;
      death.textContent = resp.data.death;

      $('#example').DataTable({
        data: resp.data.states,
        columns: [
          { title: 'State', data: 'state' },
          { title: 'Confirmed Cases', data: 'confirmedCases' },
          { title: 'Active Cases', data: 'casesOnAdmission' },
          { title: 'Discharged cases', data: 'discharged' },
          { title: 'Death', data: 'death' }
      ]
      });
    });

    

});