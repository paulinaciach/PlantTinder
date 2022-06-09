# PlantTinder
#### PlanTinder jest to aplikacja służaca do poznawania ludzi w sieci w celu wymiany roślin

## Spis treści 
* [Wprowadzenie](#wprowadzenie)
* [Uruchomienie](#uruchomienie)
* [Architektura systemu i oprogramowania](#architektura-systemu-i-oprogramowania)
* [Ilustracje](#ilustracje)


## Wprowadzenie 
 
Niniejszy projekt jest to mock-up aplikacji PlantTinder. <br/><br/>
Aplikacja ma służyć do poznawania ludzi w sieci za pomocą aplikacji mobilnej i wymiany roślin z poznanymi użytkownikami. <br/><br/>
Mock-up ma rozwinięte trzy zakładki Home Screen, gdzie możemy przez przesuwanie w prawo lub w lewo zaakceptować, bądź odrzucić użytkownika. Ten interfejs głównie skupia się na wykorzystaniu animacji, aby użytkownik mógł swobodnie przesuwać kartę w prawo/lewo z widoczna animacja 'Like' and 'Nope' .<br/><br/>
Widok środkowy z ikonka czatu pokazuje ostatnich połączonych użytkowników oraz wiadomości z użytkownymi. W tym interfejsie dane zostały wyrenderowane przy
pomocy list poziomych i pionowych. <br/><br/>
Trzecia Ikonka pokazuje interfejs zalogowanego użytkownika. W tym interfejsie zostało pokazane stylowanie różnych elementów listy, ikon itp. <br/><br/>


## Uruchomienie

<b>-npm install</b>

## Architektura systemu i oprogramowania 


**Stack technologiczny:**
* React Native(.js) - a client-side JavaScript framework
* Node(.js) - the premier JavaScript web server
* Expo

**Architektura uruchomieniowa:**
* Visual Studio Code
* Andorid Studio - Emulator

## Przykłady kodu

### Home Screen

```javascript
const HomeScreen = () => {
  const onSwipeLeft = (user) => {
  //  console.warn("swiped left: ", user.name);
  };

  const onSwipeRight = (user) => {
 //   console.warn("swiped right: ", user.name);
  };

  const size = 30;
  return (
    <View style={styles.container}>
      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
       <View style={styles.bottomNav}>
          <BottomNav></BottomNav>
        </View>
    </View>
  );
};
```

### Animated Stack - code sample

```javascript
 return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.rootView}>
        {nextProfile && (
          <View style={styles.nextContainer}>
            <Animated.View style={[styles.animatedCard, nextCardStyle]}>
              {renderItem({ item: nextProfile })}
            </Animated.View>
          </View>
        )}
        {currentProfile && (
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.animatedCard, cardStyle]}>
              <Animated.Image
                source={Like}
                style={[styles.like, { left: 10 }, likeStyle]}
                resizeMode="contain"
              />
              <Animated.Image
                source={Nope}
                style={[styles.like, { right: 10 }, nopeStyle]}
                resizeMode="contain"
              />
              {renderItem({ item: currentProfile })}
            </Animated.View>
          </PanGestureHandler>
        )}
      </View>
    </GestureHandlerRootView>
  );
};
```

### Profile screen

```javascript
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topInfo}>
          <View style={styles.name}>
            <View style={styles.user}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1616434978694-08791b51a639?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixidi=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
                }}
                style={styles.image}
              />
            </View>
            <Text
              style={{ fontWeight: "bold", fontSize: 28, color: "#173627" }}
            >
              Paula Ciach
            </Text>
          </View>
        </View>

        {profile.map((profile) => (
          <View key={profile.id} style={styles.box}>
            <Ionicons name={profile.icon} size={40} style={styles.icon} />
            <Text style={styles.text}>{profile.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.logoPosition}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/plants.png")}
            style={styles.logoimage}
          />
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#173627" }}>
            PlantTinder
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
```

## Ilustracje - Front end 
### Home Screen
![286199899_1202955743785630_3731952278597422113_n](https://user-images.githubusercontent.com/35393983/172929389-d0b4db81-3bb7-494a-a03d-844b81442052.jpg)
### Animacja Like 
![287003625_558892275632690_5066738859169970639_n](https://user-images.githubusercontent.com/35393983/172929507-bdc2e08b-c53b-49cf-9289-843cfbc0fb12.jpg)
### Animacja Nope
![286088487_695134481784265_5662377913720334049_n](https://user-images.githubusercontent.com/35393983/172929564-a0ca2574-37e6-49e2-97be-8e2a1d7b00aa.jpg)
### Matches/Czat Screen
 ![286024012_571472881216268_7837375433468724307_n](https://user-images.githubusercontent.com/35393983/172929596-1ea27d58-d3cf-4a4e-84de-ec5c589bed87.jpg)
### Profile Screen
![286402076_254811670193084_3765221735931347418_n](https://user-images.githubusercontent.com/35393983/172929649-2f97a2dc-a3bb-407d-83bf-e4e942ca1aff.jpg)

