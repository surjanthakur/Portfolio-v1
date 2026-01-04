# decorators in python practice
def toll(func):
    def wrapper(*args):
        print("-" * 10)
        func(*args)
        print("-" * 10)

    return wrapper


@toll
def greet(s):
    print(s)


greet("hy world")
