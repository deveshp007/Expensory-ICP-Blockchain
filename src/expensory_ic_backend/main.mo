import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Error "mo:base/Error";
import Debug "mo:base/Debug";

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
