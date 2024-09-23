import { StyleSheet } from 'react-native';

const COLORS = {
  BACKGROUND: '#FFFFFF',
  BORDER: '#CCCCCC',
  TEXT: '#333333',
  PLACEHOLDER: '#999999',
  ITEM_ACTIVE: '#F0F0F0',
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 4,
  },
  headerText: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
  arrow: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: COLORS.BORDER,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    maxHeight: 200,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  itemText: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
});

export default styles;
