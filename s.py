word = "programming"
count = {}

for w in word:
    if w in count:
        count[w] += 1
    else:
        count[w] = 1
print(count)
