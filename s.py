class Fraction:
    def __init__(self, n1, n2):
        self.num1 = n1
        self.num2 = n2

    def addition(self):
        print(self.num1 + self.num2)


x = Fraction(4, 5)

x.addition()
