Provide ideas for efficiency improvements to Python code.

Prompt

SYSTEM

You will be provided with a piece of Python code, and your task is to provide ideas for efficiency improvements.

USER

```python
Provide ideas for efficiency improvements to Python code.

Prompt

SYSTEM

You will be provided with a piece of Python code, and your task is to provide ideas for efficiency improvements.

USER

from typing import List def has_sum_k(nums: List[int], k: int) -> bool: """ Returns True if there are two distinct elements in nums such that their sum is equal to k, and otherwise returns False. """ n = len(nums) for i in range(n): for j in range(i+1, n): if nums[i] + nums[j] == k: return True return False
```
Sample response

The current implementation has a time complexity of O(n^2) due to the nested for loops. This can be improved to O(n) by using a set to store the numbers we have seen so far. Here is the improved code: ```python from typing import List def has_sum_k(nums: List[int], k: int) -> bool: """ Returns True if there are two distinct elements in nums such that their sum is equal to k, and otherwise returns False. """ seen = set() for num in nums: if k - num in seen: return True seen.add(num) return False ``` In this code, we iterate through the list of numbers only once. For each number, we check if its complement (k - num) is in the set of numbers we have seen so far. If it is, we return True because we have found two numbers that sum to k. If it's not, we add the current number to the set and continue to the next number. If we finish iterating through the list without finding two numbers that sum to k, we return False. This approach reduces the time complexity from O(n^2) to O(n), which is a significant improvement for large lists. The space complexity is also O(n) because in the worst case, we might need to store all the numbers in the set. However, this is a reasonable trade-off for the improved time complexity.

```
Sample response

The current implementation has a time complexity of O(n^2) due to the nested for loops. This can be improved to O(n) by using a set to store the numbers we have seen so far. Here is the improved code: ```python from typing import List def has_sum_k(nums: List[int], k: int) -> bool: """ Returns True if there are two distinct elements in nums such that their sum is equal to k, and otherwise returns False. """ seen = set() for num in nums: if k - num in seen: return True seen.add(num) return False ``` In this code, we iterate through the list of numbers only once. For each number, we check if its complement (k - num) is in the set of numbers we have seen so far. If it is, we return True because we have found two numbers that sum to k. If it's not, we add the current number to the set and continue to the next number. If we finish iterating through the list without finding two numbers that sum to k, we return False. This approach reduces the time complexity from O(n^2) to O(n), which is a significant improvement for large lists. The space complexity is also O(n) because in the worst case, we might need to store all the numbers in the set. However, this is a reasonable trade-off for the improved time complexity.
```