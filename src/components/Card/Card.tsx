import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface CardProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  onPress?: () => void;
  buttonText?: string;

  // Styles
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;

  // Custom content
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  onPress,
  buttonText,
  containerStyle,
  imageStyle,
  titleStyle,
  contentStyle,
  buttonStyle,
  buttonTextStyle,
  children,
}) => {
  return (
    <View style={[styles.card, containerStyle]}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={[styles.image, imageStyle]} />}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {content && <Text style={[styles.content, contentStyle]}>{content}</Text>}
      {children}
      {onPress && buttonText && (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
          <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  lightShadow: '#666666',
  buttonColor: '#007bff',
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: colors.lightShadow,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.buttonColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Card;

// 1. Simple Text Card
// tsx
// Copy code
// <Card
//   title="Welcome"
//   content="This is a simple card component."
// />
// 2. Image and Button
// tsx
// Copy code
// <Card
//   imageUrl="https://example.com/image.jpg"
//   title="Beautiful Landscape"
//   content="Enjoy the serene beauty of nature."
//   buttonText="Learn More"
//   onPress={() => alert('Button pressed!')}
// />

/* <View style={{ flex: 1, padding: 16 }}>
      <Card
        title="Special Offer"
        content="Get 50% off on your first purchase!"
        imageUrl="https://example.com/offer.jpg"
      > */

/* Custom badge */

//     <View style={{ backgroundColor: 'red', padding: 4, borderRadius: 4, marginTop: 8 }}>
//       <Text style={{ color: 'white', fontWeight: 'bold' }}>HOT DEAL</Text>
//     </View>
//   </Card>
// </View>
// 3. Custom Content
// tsx
// Copy code
// <Card>
//   <Text style={{ fontSize: 16, fontWeight: '600' }}>Custom Content Inside Card</Text>
// </Card>
