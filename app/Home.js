import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SharedTransitionType } from "react-native-reanimated";

export default function Home() {
  const [apiData, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hashMore, setHashMore] = useState(true);

  // const getApi = async () =>{
  //   try{

  //   let url = 'https://freetestapi.com/api/v1/students';
  //   let result = await fetch(url);
  //   let data = await result.json()
  //   setData([...data])
  //   setPages(pages+1)
  //   setLoading(false)
  // }catch(err){
  //   console.log(err)
  // }
  // // console.log(data , 'data')
  // }

  const getApi = async () => {
    if (loading || !hashMore) retun;
    setLoading(true);
    try {
      let url = "https://freetestapi.com/api/v1/students";
      let result = await fetch(url);
      let data = await result.json();
      if (data.length === 0) {
        setHashMore(false);
      } else {
        setData((prevData) => [...prevData, ...data]);
        setPages((prevPage) => prevPage + 1);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    // console.log(data , 'data')
  };

  const handelLoadMore = () => {
    if (!loading && hashMore) {
      getApi();
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text style={{}}>{item.name}</Text>
          {/* <Text></Text> */}
        </View>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text style={{}}>{item.email}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 60, width: 60, borderRadius: 30 }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={apiData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {hashMore && !loading && (
        <Button title="Load More" onPress={handelLoadMore} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 40,
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});
