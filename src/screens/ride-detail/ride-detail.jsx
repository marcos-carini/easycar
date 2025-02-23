import { Text, TextInput, View } from "react-native";
import MyButton from "../../components/mybutton/mybutton.jsx";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./ride-detail.style.js";
import { use, useEffect, useState } from "react";
import icons from "../../constants/icons.js";

function RideDetail(props) {
  const rideId = props.route.params.rideId;
  const userId = props.route.params.userId;
  const [title, setTitle] = useState("");
  const [ride, setRide] = useState({});

  console.log(rideId, userId);

  async function AcceptRide() {
    const json = {
      driver_user_id: userId,
      ride_id: rideId,
    };

    console.log("Aceitar", json);

    props.navigation.goBack();
  }

  async function CancelRide() {
    const json = {
      driver_user_id: userId,
      ride_id: rideId,
    };

    console.log("Cancelar", json);

    props.navigation.goBack();
  }

  async function RequestRideDetail() {
    /*const response = {
      ride_id: 1,
      passenger_user_id: 1,
      passenger_name: "Heber Stein Mazutti",
      passenger_phone: "(11) 99999-9999",
      pickup_address: "Av. Paulista, 1500 - Jardim Paulista",
      pickup_date: "2025-02-16",
      pickup_latitude: "-23.561747",
      pickup_longitude: "-46.656244",
      dropoff_address: "Shopping Morumbi",
      status: "P",
      driver_user_id: null,
      driver_name: null,
      driver_phone: null,
    };*/

    const response = {
      ride_id: 1,
      passenger_user_id: 1,
      passenger_name: "Heber Stein Mazutti",
      passenger_phone: "(11) 99999-9999",
      pickup_address: "Av. Paulista, 1500 - Jardim Paulista",
      pickup_date: "2025-02-16",
      pickup_latitude: "-23.561747",
      pickup_longitude: "-46.656244",
      dropoff_address: "Shopping Morumbi",
      status: "A",
      driver_user_id: 2,
      driver_name: "João Martins",
      driver_phone: "(11) 5555-5555",
    };

    if (response.passenger_name) {
      setTitle(response.passenger_name + " - " + response.passenger_phone);
      setRide(response);
    }
  }

  useEffect(() => {
    RequestRideDetail();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: Number(ride.pickup_latitude),
          longitude: Number(ride.pickup_longitude),
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(ride.pickup_latitude),
            longitude: Number(ride.pickup_longitude),
          }}
          title={ride.passenger_name}
          description={ride.pickup_address}
          image={icons.location}
          style={styles.marker}
        />
      </MapView>
      <View style={styles.footer}>
        <View style={styles.footerText}>
          <Text>{title}</Text>
        </View>

        <View style={styles.footerFields}>
          <Text>Origem</Text>
          <TextInput
            style={styles.input}
            value={ride.pickup_address}
            editable={false}
          />
        </View>

        <View style={styles.footerFields}>
          <Text>Destino</Text>
          <TextInput
            style={styles.input}
            value={ride.dropoff_address}
            editable={false}
          />
        </View>
      </View>
      {ride.status == "P" && (
        <MyButton text="ACEITAR" theme="default" onClick={AcceptRide} />
      )}
      {ride.status == "A" && (
        <MyButton text="CANCELAR" theme="red" onClick={CancelRide} />
      )}
    </View>
  );
}

export default RideDetail;
