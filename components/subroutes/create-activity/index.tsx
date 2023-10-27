import React, {useState} from 'react';
import {View} from "react-native";
import Dropdown from "../../general/Dropdown/Dropdown";
import Input from "../../general/Input/Input";

function CreateActivity() {
    const [selectedActivity, setSelectedActivity] = useState<string>()
    return (<View style={{
        gap: 5
    }}>
        <View>

            <Input label={"Activity Name"}/>
        </View>
        <View>

            <Input label={"Activity Description"}   multiline={true}
                   numberOfLines={4}/>
        </View>
        <View>

            <Dropdown label={'Activity Type'}
                      arrayList={[{_id: 'Cooking', value: 'Cooking'}, {_id: 'Cycling', value: 'Cycling'}, {_id: 'Driving', value: 'Driving'}, {_id: 'Walking', value: 'Walking'}, {_id: 'Train', value: 'Train'}]}
                      onSelection={setSelectedActivity}/>
        </View>
        <View>

            <Input placeholder={selectedActivity === 'cooking' ? 'hours' : 'km'} label={'Activity Duration/Distance'}/>
        </View>
    </View>);
}

export default CreateActivity;