window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
// Select all Audio elements, and make a list of URLs = .src
 var A = document.querySelectorAll('audio');
 var audiourl = [];
      console.log(A.length);
      for (var i = 0; i < A.length; i++) {
             audiourl.push(A[i].src);
          }
// prepare the request options
      const options = {
        method: 'POST',
        body: JSON.stringify(audiourl),
        headers: {
        'Content-Type': 'application/json'
        }
      }
// Loop into the Audio URLs and send API asynchronous post request (Fetch)
// Based on the response alert the user and highlihgt fake audios in red
// Send the labels of the 4 models to the consol logs
      for (var i = 0; i < audiourl.length; i++) {
            fetch('/upload', options)
            .then(res => res.json())
            .then(response => {
                console.log("Model_1_label: ${response.label1}, Model_2_label: ${response.label2}, Model_3_label: ${response.label3}, Model_4_label: ${response.label4} ")
                if (response.result == "fake"){
                alert('Detect fake Audio file, highlighted in red');
                }
            })
            .then(console.log, console.error);
      }

    // send post request

 });
// use this event in case you select all elements "*" to see if it is a a media element
//const video = document.querySelector('video');

//video.addEventListener('canplay', (event) => {
//  console.log('Video can start, but not sure it will play through.');
//});
