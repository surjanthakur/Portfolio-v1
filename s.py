class Fraction:  # class
    def __init__(self, n1, n2):  # constructor
        self.__num1 = n1
        self.__num2 = n2

    def addition(self):  # method
        return self.__num1 * self.__num2


x = Fraction(4, 5)  # object. => now this object is self

print(x.addition())
