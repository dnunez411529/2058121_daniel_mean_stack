function deleteID() {
  let curID = $('#_id').val();
  $.ajax({
    url: 'api/course/deleteCourse/' + curID,
    method: 'delete',
    success: (res) => {
      if (res.deletedCount > 0) {
        console.log('success');
        document.getElementById(
          'message-container'
        ).innerHTML = `<p style="color: red;"> DELETED! </p>`;
      } else {
        console.log('error');
        document.getElementById(
          'message-container'
        ).innerHTML = `<p style="color: red;"> ERROR! </p>`;
      }
    },
  });
}
