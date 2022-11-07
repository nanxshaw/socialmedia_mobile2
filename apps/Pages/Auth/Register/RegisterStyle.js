import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        justifyContent:"center",
    },
    span_img:{
        borderWidth:3,
        borderColor:"#F2F2F2",
        borderRadius:20,
        alignItems:"center",
        alignSelf:"center"
    },
    img:{
        height:150,
        width:150,
        borderRadius:20,
        borderWidth:5,
        borderColor:"#FFF"
    },
    tx_img:{
        fontSize:12,
        color:"#666"
    },
    form_input:{
        margin:10
    },
    form_btn:{
        margin:10
    },

    in: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
        paddingLeft: 10,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#c5c5c5",
        marginBottom:10
      },
      btn_primary: {
        backgroundColor: "#00BFFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        padding: 10,
        marginBottom:10
      },
      btn_outline:{
          backgroundColor: "#FFF",
          borderWidth: 1,
          borderRadius:10,
          borderColor: '#c5c5c5',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
      },
      tx_primary:{
          color:"#FFF",
          fontWeight:"bold"
      },
      tx_out:{
          color:"#666",
          fontWeight:"bold"
      },
})


export default styles;