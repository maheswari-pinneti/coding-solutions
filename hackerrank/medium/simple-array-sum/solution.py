def simpleArraySum(ar):
    return sum(ar)

n = int(input())
ar = list(map(int, input().split()))

result = simpleArraySum(ar)
print(result)
