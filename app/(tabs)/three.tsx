import React,{ useState } from 'react';
import { StyleSheet, Button, Alert, View, Text,TouchableOpacity,Modal,Image,ImageBackground} from 'react-native';  // Import View and Text components
import { Link, Tabs } from 'expo-router';

export default function TabThreeScreen() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>What is air pollution?</Text>
      
      <Modal
      visible={showModal1}
      transparent={true}
      >
        <View style={{flex:1}}>
          <View style={{backgroundColor:'white',margin:50,padding:40,borderRadius:10, flex:1,borderWidth:5}}>
          <TouchableOpacity onPress={() => setShowModal1(false)}>
                <Text style={{marginLeft:10,textAlign:'left',padding:0}}>X</Text>
              </TouchableOpacity>
          <Text style={{fontSize:23, textAlign:'center',padding:10}}>What is Air Pollution?</Text>
          <Text style={styles.info}>Air pollution is typically measured by the amount and size of particulate matter (PM) in the air. 
            The City of Toronto, like many cities across the world are finding ways to adapt to the increasing concentration of PM, 
            resulting in poor air quality that can harm our own health as well as the well-being of our ecosystems. 
            According to Toronto Public Health, over half of our air pollution comes from traffic within city limits. 
            Do your part in keeping air pollution levels low by reducing personal vehicle trips and using public 
            transit when you can!</Text>
          </View>
        </View>
      </Modal>


      <Modal
      visible={showModal2}
      transparent={true}
      >
        <View style={{flex:1}}>
          <View style={{backgroundColor:'white',margin:50,padding:40,borderRadius:10, flex:1,borderWidth:5}}>
          <TouchableOpacity onPress={() => setShowModal2(false)}>
                <Text style={{marginLeft:10,textAlign:'left',padding:0}}>X</Text>
              </TouchableOpacity>
          <Text style={{fontSize:30, textAlign:'center',padding:10}}>How Does Air Pollution Affect Us?</Text>
          <Text style={styles.info}>The City of Toronto warns that air pollution can cause cardiovascular and respiratory health problems, 
          affect birth outcomes, brain development and function, increases risk to cancer, chronic and short-term diseases. 
          It is estimated that air pollution in Toronto contributes to 1,300 premature deaths and 3,550 hospitalizations each year.
          </Text>
          </View>
        </View>
      </Modal>


      <Modal
      visible={showModal3}
      transparent={true}
      >
        <View style={{flex:1}}>
          <View style={{backgroundColor:'white',margin:50,padding:40,borderRadius:10, flex:1,borderWidth:5}}>
          <TouchableOpacity onPress={() => setShowModal3(false)}>
                <Text style={{marginLeft:10,textAlign:'left',padding:0}}>X</Text>
              </TouchableOpacity>
          <Text style={{fontSize:23, textAlign:'center',padding:10}}>What Can You Do if You are Feeling Unwell From Air Pollution?</Text>
          <Text style={{flex:1,textAlign: 'justify',lineHeight: 20,padding:5,}}>If you are experiencing severe symptoms or difficulty breathing, call 911 immediately. Acute 
          respiratory illness and other related illnesses from air pollution is related to exposure to the pollutants. If you are 
          feeling unwell, limit your time outdoors, especially in areas with poor air quality. Staying hydrated helps your body cope 
          with air pollution, especially from wildfire smoke. Keep your windows and doors closed during times of uncomfortable air 
          quality, and limit indoor smoking, vaping, and incense and candle burning to keep the indoor air clean. If you are 
          experiencing discomfort or mild irritation from air pollutants in your home, try going to a public space with air conditioning, 
          such as a nearby mall, library, or community centre. </Text>
          </View>
        </View>
      </Modal>


      <Modal
      visible={showModal4}
      transparent={true}
      >
        <View style={{flex:1}}>
          <View style={{backgroundColor:'white',margin:50,padding:40,borderRadius:10, flex:1,borderWidth:5}}>
          <TouchableOpacity onPress={() => setShowModal4(false)}>
                <Text style={{marginLeft:10,textAlign:'left',padding:0}}>X</Text>
              </TouchableOpacity>
          <Text style={{fontSize:30, textAlign:'center',padding:10}}>Who Can You Contact?</Text>
          <Text style={styles.info}>West Toronto Health Ontario Team: 1-866-797-0007, Ontario Health: 811, Community and Social Resources: 211 (call or text).
            Visit the City of Toronto’s website to learn more about air quality, other health wellness topics, and community events to 
            stay involved and informed on local climate news.</Text>
          </View>
        </View>
      </Modal>


      <View style={styles.buttonContainer2}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {setShowModal1(true)}}
        >
          <ImageBackground source={require('../../assets/images/cloud1.png')} style={{height:50,width:50,flex:1,alignSelf:'center',opacity:0.5,marginTop:45,}}/>
          <Text style={styles.buttonTitle}>Explain it to me</Text>
          

                   
        </TouchableOpacity>
        </View>


        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {setShowModal2(true)}}
        >
          <ImageBackground source={require('../../assets/images/lungs.png')} style={{height:47,width:47,flex:1,alignSelf:'center',opacity:0.5, marginTop:40,}}/>
          <Text style={styles.buttonTitle}>The affect</Text>
        </TouchableOpacity>
        
        </View>
      </View>

      <Text style={styles.title}>We are here to help.</Text>
      <View style={styles.buttonContainer2}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {setShowModal3(true)}}
        >
          <ImageBackground source={require('../../assets/images/mask.png')} style={{height:47,width:47,flex:1,alignSelf:'center',opacity:0.5,marginTop:45,}}/>
          <Text style={styles.buttonTitle}>Feeling unwell?</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {setShowModal4(true)}}
        >
          <ImageBackground source={require('../../assets/images/phone.png')} style={{height:35,width:35,flex:1,alignSelf:'center',opacity:0.5,marginTop:53,}}/>
          <Text style={styles.buttonTitle}>Contact</Text>
        </TouchableOpacity>
        </View>
        
      </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#E7F8DE',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    alignItems:'center',
    margin:10,
    padding:10,
    paddingBottom:1,
  },
  buttonTitle: {
    fontSize: 12,
    marginBottom:40,
    color:'grey',
    alignSelf:'center',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10, 
  },
  buttonContainer2: {
    flexDirection: 'row',
    padding:10
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 150,
    height: 150,
    overflow: 'hidden',
    
  },
  info: {
    
    flex:1,
    textAlign: 'justify',
    lineHeight: 30,
    padding:5,
  },
});