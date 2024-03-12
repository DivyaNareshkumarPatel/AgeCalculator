const date = document.getElementById('day');
      date.addEventListener('input',function(){
        date.classList.remove('danger');
        document.querySelector(".day").classList.remove('validDate');
        document.querySelector(".day").classList.remove('empty');
      })
      const mon = document.getElementById('month');
      mon.addEventListener('input',function(){
        mon.classList.remove('danger');
        document.querySelector(".month").classList.remove('validMonth');
        document.querySelector(".month").classList.remove('empty');
      })
      const y = document.getElementById('year');
      y.addEventListener('input',function(){
        y.classList.remove('danger');
        document.querySelector(".year").classList.remove('validYear');
        document.querySelector(".year").classList.remove('empty');
      })
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('birthdateForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var day = parseInt(document.getElementById('day').value);
      var month = parseInt(document.getElementById('month').value);
      var year = parseInt(document.getElementById('year').value);
      if (isNaN(day)) {
        document.querySelector(".day").classList.add('empty');
        document.getElementById('day').classList.add('danger');
        return;
      }
      if(isNaN(month)){
        document.querySelector(".month").classList.add('empty');
        document.getElementById('month').classList.add('danger');
        return;
      }
      if(isNaN(year)){
        document.querySelector(".year").classList.add('empty');
        document.getElementById('year').classList.add('danger');
        return;
      }
      if (month < 1 || month > 12) {
        document.querySelector(".month").classList.add('validMonth');
        document.getElementById('month').classList.add('danger');
        return;
      }
      var maxDay = new Date(year, month, 0).getDate();
      if (day < 1 || day > maxDay) {
        document.querySelector(".day").classList.add('validDate');
        document.getElementById('day').classList.add('danger');
        return;
      }
      if (year < 1800 || year > 2024) {
        document.querySelector(".year").classList.add('validYear');
        document.getElementById('year').classList.add('danger');
        return;
      }
      var today = new Date();
      var birthdate = new Date(year, month - 1, day);
      var ageInMilliseconds = today - birthdate;
      var years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
      var months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      var days = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      document.querySelector('.years .purple').innerText = years;
      document.querySelector('.months .purple').innerText = months;
      document.querySelector('.days .purple').innerText = days;
    });
  });
  