$.ajax({
  method: 'GET',
  dataType: 'json',
  url: 'api/course/getAllCourses',
  success: (res) => {
    console.log(res);
    let container = document.getElementById('fetch-table');

    res.forEach((item) => {
      let row = container.insertRow();
      row.insertCell(0).innerHTML = item.cname;
      row.insertCell(1).innerHTML = item.description;
      row.insertCell(2).innerHTML = item.price;
    });

    cname.innerHTML = 'Test';
  },
});
