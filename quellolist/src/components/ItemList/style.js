import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
itemList: {
    padding: 15,
    elevation: 12,
    borderRadius: 7,
    backgroundColor: '#363636c0',
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
},
itemToBuy: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'none'    
},
itemBought: {
    color: "#FF0000",
    fontSize: 24,
    fontWeight: 'bold',
},
actionIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
},
});