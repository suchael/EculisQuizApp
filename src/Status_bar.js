
import { StatusBar } from 'react-native';
import {COLORS} from "../Colors.js"

function Status_bar(){
	return(
	<>
		<StatusBar 
			animated = {true}
			backgroundColor= {COLORS.primary}
			barStyle = "light-content"
		/>
	</>
	);
}
export default Status_bar;