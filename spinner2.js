
let spinner = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r||   ',
  '\r//   ',
  '\r==   '
];

spinner.forEach( (element, index) =>{
  
  setTimeout(() => {
    process.stdout.write(element);
  }, 100 * index);
});

