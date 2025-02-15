// write an anagram

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    return str1.toLowerCase().sort === str2.toLowerCase().sort;
}


console.log(isAnagram("spare", "rapse"));

// timecomplexity  = O(nlogn)


// method 2 using char frequency

function isAnagram2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    count = {};

    for(let char of str1.toLowerCase()){
        count[char] = (count[char] || 0 ) +1
    }
    console.log(count)

    for(let char of str2.toLowerCase()){
        if(!count[char]) return false;
        count[char]--
    }
    return true;
}

console.log(isAnagram2("spars", "rapse"))

// time complexity O(n)