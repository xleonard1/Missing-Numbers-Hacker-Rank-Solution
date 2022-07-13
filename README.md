# Missing-Numbers-Hacker-Rank-Solution

```
Given two arrays of integers, find which elements in the second array are missing from the first array.
Example 

arr = [7,2,5,3,5,3]
brr = [7,2,5,4,6,3,5,3]
 

The  brr array is the orginal list. The numbers [4,6]missing are .

Notes
If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
Return the missing numbers sorted ascending.
Only include a missing number once, even if it is missing multiple times.
The difference between the maximum and minimum numbers in the original list is less than or equal to .

Function Description

Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.
missingNumbers has the following parameter(s):
int arr[n]: the array with missing numbers
int brr[m]: the original array of numbers

```

## Big O

The brute force solution to this algorithm would be to use two nested loopes and compare the indexes of the the two loops. However, this would provide O(N^2) time.

The solution I provided has a worst case of O(N) time. While the hash lookup is O(1) time.

This utilizes hashes as frequency counters. After the keys are counted, engineers can loop through one hash using a for in loop. each hash's keys can be iterated through and compared. Though there are three loops, this is still faster than a nested loop. Therefore the worst case is O(N). 