import React, {useState} from 'react';
import { View, TextInput,Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from './Styles'


const Search = ()=>{

    const [textSearch, setTextSearch] = useState('')

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={styles.main}>
                <View style={styles.inputMain}>
                    <TextInput style={styles.inputText} 
                    placeholder={'Busque lo que desee...'} 
                    keyboardType={'web-search'} 
                    onSubmitEditing={(event)=>{
                        console.log(event.nativeEvent.text);
                        setTextSearch(event.nativeEvent.text)
                    }}></TextInput>
                </View>
                <ScrollView>
                    {/* Se rendizará la busqueda aquí, en cuanto se tenga la integración final con el CMS */}
                </ScrollView>
            </View>
            </TouchableWithoutFeedback>

        </View>
    );
}

export default Search
