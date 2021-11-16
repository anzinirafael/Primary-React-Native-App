import React, {useState, useEffect} from 'react';
import { SafeAreaView,
     TextInput, 
     Text, 
     StyleSheet,
     Platform,
     FlatList,
     StatusBar
     } from 'react-native';
import { Button } from './components/Button';
import { Card } from './components/Card';


interface SkillData{
    id: string;
    name: string;
}

export function Home(){
    //A cada vez que o estado muda, temos uma nova rederização na interface
    const [newSkill, setNewSkill] = useState('');
    const [mySkill, setMySkill] = useState<SkillData[]>([]);
    const [grettings, setGrettings] = useState('');
    const hoursSystem = new Date().getHours();
    function handleNewAddSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }    
        setMySkill(oldState => [... oldState, data])        
    }

    function handleRemoveSkill(id: string){
        setMySkill(oldstate => oldstate.filter(
            skill => skill.id !== id
        ));
    }

    //A cada vez que o estado useState for alterado é executada uma função
    useEffect(() =>  {
            if(hoursSystem >=  6 && hoursSystem < 12){
                setGrettings('Good Morning')
            }
            else if(hoursSystem >= 12 && hoursSystem < 18){
                setGrettings('Good afternoon')
            }
            else if(hoursSystem >= 16 && hoursSystem < 6){
                setGrettings('Good Night')
            }
        }, [])

    return(
        <SafeAreaView style={style.container}>
            <StatusBar barStyle="light-content"/>
            <Text style={style.title}>Welcome, Rafael Anzini</Text>
            <Text style={[style.title, {fontSize: 16}]}>{grettings}</Text>
            <TextInput
                style={style.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <Button onPress={handleNewAddSkill} title="Add"/>       
            <Text style={[style.title, {marginVertical: 20}]}>My Skills</Text>
            <FlatList 
            data={mySkill}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Card skill={item.name}  onPress={() => handleRemoveSkill(item.id)}/>
            )}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },


})