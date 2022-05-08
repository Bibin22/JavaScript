let nums = []
nums[0]=5
nums[99] = 9
console.log(nums, 'length:', nums.length)

for(let n of nums){
    console.log('n=', n)
}

for(let key in nums){
    console.log('key',key, 'value', nums[key])
}