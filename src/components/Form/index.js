import React from "react";
import { Button, Text, TextInput, View} from "react-native"

export default function Form(){
    return(
        <View>
            <View>
                <Text>Autura</Text>
                <TextInput placeholder="Ex: 1.70" keyboardType="numeric"></TextInput>
                <Text>Peso</Text>
                <TextInput placeholder="Ex: 64.220" keyboardType="numeric"></TextInput>
                <Button title="Calcular IMC"></Button>
            </View>
            
        </View>
    );
}