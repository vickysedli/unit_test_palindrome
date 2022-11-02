const expect = require('chai').expect;

// Функция Палиндром
// Определите является ли слово палиндромом (то есть, можно ли прочесть его наоборот, как, например, слово "madam")
// Используйте тольео Lower case

//Hint:
//function palindrome('level') должна вернуть true;
//function palindrome('apple') должна вернуть false;


function palindrome(str){
    for(let i = 0; i <= str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome('appa'));

describe ('VERIFY function palindrome', () => {
    it('CREATED function palindrome', () => {
        expect(palindrome).to.be.a('function')
    })

    it ('verify the word is a PALINDROME', () => {
        expect(palindrome('anna')).to.equal(true)
    })

    it ('verify the word is a PALINDROME', () =>{
        expect(palindrome('abccba')).to.equal(true)
    })

    it ('verify the word is a PALINDROME', () =>{
        expect(palindrome('aa')).to.equal(true)
    })

    it ('verify the word is a PALINDROME', () =>{
        expect(palindrome('repaper')).to.equal(true)
    })

    it ('verify the word does NOT a palindrome', () => {
        expect(palindrome('afnna')).to.equal(false)
    })

    it('verify the word does NOT a palindrome', () => {
        expect(palindrome('wowo')).to.equal(false)
    })

    it('verify the word does NOT a palindrome', () => {
        expect(palindrome('levell')).to.equal(false)
    })

    it('verify the word does NOT a palindrome', () => {
        expect(palindrome('madama')).to.equal(false)
    })
})


