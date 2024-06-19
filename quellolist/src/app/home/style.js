import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#236B8E',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    
    footer: {
        position:'absolute',
        bottom: 0,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 20,
        backgroundColor: '#236B8E',
    },

    inputContainer: {
        backgroundColor: '#A8A8A8c0',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',

    },
    iconContainer: {
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: '#A8A8A8c0',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});