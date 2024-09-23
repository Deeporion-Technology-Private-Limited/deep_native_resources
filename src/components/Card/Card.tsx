// Card.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onPress?: () => void;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, onPress, buttonText }) => {
  return (
    <View style={styles.card}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      {onPress && buttonText && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Card;
/*
import React from 'react';
import { View, Alert } from 'react-native';
import Card from './Card';

const ExampleScreen = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You clicked the card button!');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card
        title="Example Card"
        content="This is an example of how to use the Card component in your React Native app."
        imageUrl="https://example.com/image.jpg"
        onPress={handlePress}
        buttonText="Learn More"
      />
    </View>
  );
};

export default ExampleScreen;
 */
