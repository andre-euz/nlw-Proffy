import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'http://github.com/andre-euz.png'}}                
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>André Euzébio</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;