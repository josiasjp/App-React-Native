import React from "react";
import { View} from "react-native"
import Form from "../Form";
import ResultImc from "../ResultImc";

export default function Main(){
    return(
        <View>
            <Form></Form>
            <ResultImc></ResultImc>
        </View>
    );
}