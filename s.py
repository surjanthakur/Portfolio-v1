class AtmMachine:
    def __init__(self):
        self.pin = ""
        self.balance = 0

    def menu(self):
        user_input = input(
            """ 
                           hello would you like to process?
                           press 1 to create pin
                           press 2 to view balance
                           press 3 to add balance
                           press 4 to exit
                           """
        )
        if user_input == "1":
            print("create pin")
        elif user_input == "2":
            print("view balance")
        elif user_input == "3":
            print("add balance")
        elif user_input == "4":
            print("exit")


sbi = AtmMachine()

print(sbi.menu())
