const fs = require('fs');

function cleanFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        // Replace multiple spaces with a single space, and trim
        const cleaned = data.replace(/\s+/g, ' ').trim();
        fs.writeFile(filePath, cleaned, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File cleaned successfully.');
            }
        });www
    });                              
}

// Example usage:
// cleanFile('input.txt');

/*const fs = require('fs');

fs.readFile("a.txt", "utf-8", 
    function(err,data){
        console.log(data);
    });
console.log("Hi from outside");


const fs = require('fs');
const { wrap } = require('module');

fs.readFile('a.txt', 'utf-8',
function(err,data){
    console.log(data);
});
*/
  

const fs = require('fs');
let data = 'hello world...| this is new file';
fs.writeFileSync(function removespace(){

    return data
    .replaceAll(' ','');
})

//fs.writeFileSync('/Users/prateekdwivedi/Developer/js/b.txt',data);


