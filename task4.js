function tasks() {

    function reverseWords(sentence) {
      return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
    }

    function removeDuplicates(arr) {
      return [...new Set(arr)];
    }

    function countVowels(str) {
      const vowels = 'aeiouAEIOU';
      let count = 0;
      for (let char of str) {
        if (vowels.includes(char)) count++;
      }
      return count;
    }
  

    console.log('Reversed words:', reverseWords('Hello world'));
    console.log('Removed duplicates:', removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    console.log('Vowel count:', countVowels('Hello World'));
  }
  
  tasks();