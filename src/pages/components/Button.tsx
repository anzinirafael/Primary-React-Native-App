import React from 'react';
import { 
     Text, 
     StyleSheet,
     TouchableOpacity,
     TouchableOpacityProps
     } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    title: string; 
}

export function Button({ title, ...rest } : ButtonProps){
    return( 
   

        <TouchableOpacity 
        style={style.button}
        activeOpacity={0.7}
        {...rest}
        >
            <Text style={style.txtButton}>{title}</Text>
        </TouchableOpacity>

 
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 7,
        marginTop: 20
    },
    txtButton:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})