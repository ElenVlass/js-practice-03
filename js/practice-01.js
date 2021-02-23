/* task 6 kyu on codewars */
// function alphabetPosition(text) {
//     text = text.toLowerCase().split('')
//     let position = [];
//     let alfabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     for (const letter of text) {
// if(alfabet.includes(letter)) {
//     let index= alfabet.indexOf(letter)
//     position.push(index+1)}
// }
//     return position.join(' ');
//   }
//   console.log(alphabetPosition("The sunset sets at twelve o' clock.")); //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

  function abbrevName(name){
// let abbrev = [];
//        name = name.toUpperCase().split(' ');
//       for(const word of name) {
//         abbrev.push(word[0])}
//       return abbrev.join('.');


// name = name.toUpperCase().split(' ');
//     return name[0][0] + '.' + name[1][0];

return name.toUpperCase().split(' ').map(word => word[0]).join('.') }
    // console.log(abbrevName("Patrick Feenan"));



    function songDecoder(song){
//         let originalSong = song.split('WUB');
//         let newSong = [];
// for (let i=0; i < originalSong.length; i +=1) {
//     if(originalSong[i] === ''){continue;}
//     newSong.push(originalSong[i])}
//         return newSong.join(' ')

return song.split('WUB').filter(Boolean).join(' ')
      }
      console.log(songDecoder("AWUBBWUBC")); //A B C","WUB should be replaced by 1 space"
      console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
      console.log(songDecoder("WUBAWUBBWUBCWUB"));


console.log(Boolean(''));
console.log(Boolean('e'));