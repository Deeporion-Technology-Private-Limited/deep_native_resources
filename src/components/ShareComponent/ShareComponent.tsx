import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Share, Image } from 'react-native';

type ShareComponentProps = {
  shareMessage?: string;
  shareUrl?: string;
  containerColor?: string;
  iconColor?: string;
  title?: string;
  platforms?: string[];
  customIcons?: { [key: string]: any };
  onShareSuccess?: (platform: string) => void;
  onShareError?: (error: any, platform: string) => void;
  showTitle?: boolean;
  showCloseButton?: boolean;
  closeButtonText?: string;
  iconSize?: number;
  bottomSheetStyle?: object;
  iconButtonStyle?: object;
  titleStyle?: object;
  closeButtonStyle?: object;
};

const ShareComponent: React.FC<ShareComponentProps> = ({
  shareMessage = 'Check this out!',
  shareUrl = '',
  containerColor = '#fff',
  iconColor = '#000',
  title = 'Share via',
  platforms = ['WhatsApp', 'Facebook', 'Instagram'],
  customIcons = {},
  onShareSuccess,
  onShareError,
  showTitle = true,
  showCloseButton = true,
  closeButtonText = 'Close',
  iconSize = 30,
  bottomSheetStyle = {},
  iconButtonStyle = {},
  titleStyle = {},
  closeButtonStyle = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const shareContent = async (platform: string) => {
    let url;
    switch (platform) {
      case 'WhatsApp':
        url = `whatsapp://send?text=${shareMessage}${shareUrl ? ' ' + shareUrl : ''}`;
        break;
      case 'Facebook':
        url = `fb://facewebmodal/share?href=${shareUrl || shareMessage}`;
        break;
      case 'Instagram':
        url = `instagram://share?text=${shareMessage}${shareUrl ? ' ' + shareUrl : ''}`;
        break;
      default:
        url = shareUrl;
    }

    try {
      const result = await Share.share({
        message: shareMessage,
        url: url,
      });

      if (result.action === Share.sharedAction) {
        setIsVisible(false);
        if (onShareSuccess) {
          onShareSuccess(platform);
        }
      }
    } catch (error) {
      if (onShareError) {
        onShareError(error, platform);
      }
    }
  };

  const getIcon = (platform: string) => {
    if (customIcons[platform]) {
      return customIcons[platform];
    }

    switch (platform) {
      case 'WhatsApp':
        return { uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' };
      case 'Facebook':
        return {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
        };
      case 'Instagram':
        return { uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' };
      case 'Twitter':
        return { uri: 'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_bird_logo_2012.svg' };
      case 'LinkedIn':
        return { uri: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' };
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Text style={{ color: iconColor }}>Share</Text>
      </TouchableOpacity>
      {isVisible && (
        <View style={[styles.bottomSheet, bottomSheetStyle]}>
          {showTitle && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {platforms.map(platform => (
            <TouchableOpacity
              key={platform}
              onPress={() => shareContent(platform)}
              style={[styles.iconButton, iconButtonStyle]}
            >
              <Image
                source={getIcon(platform)}
                style={[styles.icon, { width: iconSize, height: iconSize }]}
              />
              <Text style={{ color: iconColor }}>{platform}</Text>
            </TouchableOpacity>
          ))}
          {showCloseButton && (
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={[styles.closeButton, closeButtonStyle]}
            >
              <Text>{closeButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const COLORS = {
  white: '#FFF',
  black: '#000',
  blackSecondry: '#333',
  borderBottomColor: '#EEEEEE',
  backgroundColor: '#F0F0F0',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  bottomSheet: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.blackSecondry,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderBottomColor,
  },
  icon: {
    marginRight: 15,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.backgroundColor,
    borderRadius: 8,
  },
});

export default ShareComponent;

// <ShareComponent
// shareMessage="Check out this amazing app!"
// shareUrl="https://example.com"
// platforms={['WhatsApp', 'Facebook']}
// containerColor="#f5f5f5"
// iconColor="#007aff"
// title="Share this with your friends!"
// />
