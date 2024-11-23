import { StyleSheet } from 'react-native';

// Define color constants
const COLORS = {
  BACKGROUND: '#FFFFFF',
  BORDER: '#CCCCCC',
  TEXT: '#333333',
  PLACEHOLDER: '#999999',
  ITEM_ACTIVE: '#F0F0F0',
  lightGray: '#a0a0a0',
  dividerColor: '#e0e0e0',
};

export default StyleSheet.create({
  container: {
    margin: 10,
    position: 'relative',
    width: '100%',
  },
  disabledText: {
    color: COLORS.lightGray, // Light gray color for disabled text
    fontStyle: 'italic', // Optional: italicize text when disabled
  },
  disabled: {
    backgroundColor: COLORS.ITEM_ACTIVE,
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
  divider: {
    height: 1,
    backgroundColor: COLORS.dividerColor, // Light gray divider color
    marginVertical: 5, // Space between items
  },
  arrow: {
    fontSize: 18,
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
  iconContainer: {
    marginRight: 10,
  },
  searchInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
});
