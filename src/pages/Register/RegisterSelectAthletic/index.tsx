import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import AthleticList from "../../../components/ListAthletic";
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../../routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

const RegisterSelectAthletic: React.FC = () => {

    let [id, setId] = useState<string | null>(null);
    let [name, setName] = useState<string | null>(null);
    const [selected, setSelected] = useState<string>()

    const navigation = useNavigation<RegisterScreenProp>();

    function onConfirm() {
        if (id !== null && name !== null) {
            navigation.navigate('Register', {
                athleticId: id,
                athleticName: name
            });
        }
    }

    function onSelectAthletic(id: string, name: string) {
        setId(id);
        setName(name);
        setSelected(id);
    }

    return (
        <View style={styles.container}>
            <AthleticList 
                pageTitle={'Altere sua atlética'}
                selectedAthleticId={selected} 
                onSelectItem={({id, name})=> onSelectAthletic(id, name)} 
                />
            <View style={styles.viewStyleButton}>
                <TouchableOpacity style={styles.button} onPress={onConfirm}>
                    <Text style={styles.buttonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterSelectAthletic;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.offwhiteblue
    },
    button: {
        backgroundColor: colors.primary,
        height: 45,
        width: 156,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 31,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    viewStyleButton:{
        alignItems: 'center',
        marginBottom: 20
    }
})
