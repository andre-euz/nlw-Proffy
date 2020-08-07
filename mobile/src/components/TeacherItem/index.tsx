import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

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
            <Text style={styles.bio}>
                I'm a programmer about somewhat 7 years and I started working with programming 
                {'\n'}{'\n'}
                I’m currently working on Senior Sistemas with internal language                 
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                <View style={styles.buttonContainer}>
                        <RectButton style={styles.favoriteButton}>
                            <Image 
                                source={heartOutlineIcon}
                            />
                        </RectButton>
                        <RectButton style={styles.contactButton}>
                            <Image 
                                source={whatsappIcon}
                            />
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                        </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;