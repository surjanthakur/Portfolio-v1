# print patterns using loops

for num in range(1, 2):
    for i in range(1, 10):
        for j in range(1, i + 1):
            print("*", end=" ")
        print()
