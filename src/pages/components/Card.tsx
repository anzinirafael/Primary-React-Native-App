import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native';

interface SkillCard extends TouchableOpacityProps{
    skill: string
}

export function Card({skill, ...rest} :SkillCard){
    return(
        <TouchableOpacity style={style.buttonSkill} {...rest}>
            <Text style={style.txtSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonSkill:{
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 7,
        marginBottom: 20,
    },
    txtSkill:{
        color: '#fff', 
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})