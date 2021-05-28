import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  listsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  itemsindex: {
    marginTop: 20,
  },
  item:{
    backgroundColor: '#ede12f',
    alignItems:'center',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',


  },
  left:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // rememeber this is for if the string entered is too long
  },
  squa:{
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 20,
  },
  itemText:{
    maxWidth: '80%',
  },
  circle:{
    width: 12,
    height: 12,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,

  },
  writeListWrapper:{
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#ede12f',
    borderWidth: 3,
    width: 300,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ede12f',
    borderWidth: 3,
  },
  addText:{

  },



});

  export default styles;
