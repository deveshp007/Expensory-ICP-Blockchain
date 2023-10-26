import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor User {
  let userbase = HashMap.HashMap<Text, Text>(0, Text.equal, Text.hash);

  public func registerUser(username : Text, password : Text) : async Bool {
    switch (userbase.get(username)) {
      case (?user) {
        return false;
      };
      case (null) {
        userbase.put(username, password);
        return true;
      };
    };
  };

  public func verifyuser(username : Text, password : Text) : async Text {
    switch (userbase.get(username)) {
      case (?user) {
        if (user == password) {
          Debug.print(user);
          return "Success";
        };
        return "Not Success";
      };
      case (null) {
        return ("User don't exist");
      };
    };
  };
};


// actor BudgetSystem {
//    var expenses : HashMap.HashMap<Text, Nat> = HashMap.HashMap<Text, Nat>(0, Text.equal, Text.hash);

//   public func addExpense(name : Text, cost : Nat) : async () {
//     expenses.put(name, cost);
//   };

// };

// import HashMap "mo:base/HashMap";
// import Text "mo:base/Text";
// import Int "mo:base/Int";

// actor BudgetSystem {

//   // let budget: Int = 0;
//   var remaining = 0 : Int;
//   var spending = 0 : Int;

//   var itemList = HashMap.HashMap<Text, Int>(0, Text.equal, Text.hash);

//   public func main() : async {
//     var budget = await getBudget();
//     await addItems();
//     await spendSoFar();
//     let result = await fetchData();
//     print(result);
//   };

//   public func getBudget() : async Int {
//     while (true) {
//       print("Enter your budget: ");
//       let input = await Debug.readLine();
//       if (Int.fromText(input) != null) {
//         let totalMoney = Debug.printLn(await Int.fromText(input));
//         return totalMoney;
//       } else {
//         print("Invalid input. Please enter a valid integer value.\n");
//       };
//     };
//   };

//   public func addItems() : async () {
//     while (true) {
//       print("Enter item name or 'done' to exit: ");
//       let itemName = await Debug.readLine();
//       if (itemName == "done") {
//         break;
//       };
//       print("Enter item cost: ");
//       let itemCost = Debug.printLn(await Int.fromText(await Debug.readLine()));
//       itemList.put(itemName, itemCost);
//     };
//   };

//   public func spendSoFar() : async () {
//     for (i in itemList.vals()) {
//       spending += i;
//     };
//     remaining = budget - spending;
//   };

//   public func fetchData() : async Text {
//     return "Budget:" # Int.toText(budget) # " Remaining: " # Int.toText(remaining) # " Spend so far: " # Int.toText(spending);
//   };

// };
