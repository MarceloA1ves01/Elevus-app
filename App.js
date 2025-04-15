import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'data:image/jpeg;base64,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' }} 
                style={styles.icon}
            />
            <Text style={styles.title}>BEM VINDO</Text>
            <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.buttonText}>Entre com o Google</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Ou faça login com</Text>

            <TextInput
                style={styles.input}
                placeholder="Endereço de Email"
                placeholderTextColor="#ccc"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#ccc"
                secureTextEntry
            />
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
            </TouchableOpacity>

            <View style={styles.checkboxContainer}>
                <TouchableOpacity>
                    <View style={styles.checkbox} />
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Mantenha-me conectado</Text>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Não possui uma conta? <Text style={styles.registerLink}>Crie uma</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    googleButton: {
        backgroundColor: '#4285F4',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    orText: {
        color: '#FFF',
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#1C1C1C',
        width: '100%',
        padding: 15,
        borderRadius: 8,
        color: '#FFF',
        marginBottom: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#1E90FF',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#1E90FF',
        borderRadius: 4,
        marginRight: 10,
    },
    checkboxLabel: {
        color: '#FFF',
    },
    loginButton: {
        backgroundColor: '#1E90FF',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
    },
    registerText: {
        color: '#FFF',
    },
    registerLink: {
        color: '#1E90FF',
    },
});

export default LoginScreen;