class Atm:  #! class
    def __init__(self):  # * constructor.
        self.__pin = ""  # instance private variable
        self.__balance = 0  # instance private variable

    def get_pin(self):  # method to access private variables
        return self.__pin

    def set_pin(self, new_pin):
        if type(new_pin) == str:
            self.__pin = new_pin
            print("pin changed")
        else:
            print("wrong pin format")

    def get_amount(self):
        return self.__balance

    def set_amount(self, new_amount):
        if type(new_amount) == int and new_amount > 0:
            self.__balance = new_amount
            print("amount added")
        else:
            print("amount format is wrong")


user1 = Atm()  # class object creation

print(user1.set_pin("12345"))  # access class  methods
print(user1.get_pin())
print(user1.set_amount(2000))
print(user1.get_amount())
