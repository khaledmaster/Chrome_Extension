# Chrome_Extension
Chrome Extension that upload voice file for examination against deepfake detection
Procedures to upload the Chrome Extension:
1. from chrome -> from the '...' -> 'settings' --> 'Extensions
2.  enable "developer mode" on the up right corner, then Load unpacked, then chose the main directory "Deepfake"
3.  open any page from the tool bar click the "extension" icon and choose the new extension to be binned into the bar.
4.  click on the extension icon -> form will show up --> choose file(s) then click submit
5.  what happen when you submit, the file upload.js will be triggered and will post the selected files to the url => const url = 'process.php'
6.  please feel free to change the url parameter to match the back end url
7.  the code have taken from the site "How to Upload Files to a Server with Plain JavaScript and PHP" => https://www.taniarascia.com/how-to-upload-files-to-a-server-with-plain-javascript-and-php/  please use it as a guid to adjust the back end if needed
