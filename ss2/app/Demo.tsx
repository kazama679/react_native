import React from "react";
import {
    Button,
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Demo() {
    return (
        <>
            <ScrollView>
                <Text>Component demo</Text>
                <Image
                    height={300}
                    width={300}
                    source={{
                        uri: "https://www.google.com/imgres?q=pressable&imgurl=http%3A%2F%2Fpressable.com%2Fwp-content%2Fthemes%2Fpressable-com%2Fassets%2Fimages%2Fpressable-logomark-v8-color.svg&imgrefurl=http%3A%2F%2Fpressable.com%2Fpress-kit%2F&docid=AsgeZoMRmq4EEM&tbnid=3a4JwzCw2MY9GM&vet=12ahUKEwjO9vnUre6PAxUCsVYBHekKJ6gQM3oECBkQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjO9vnUre6PAxUCsVYBHekKJ6gQM3oECBkQAA",
                    }}
                ></Image>
                <View style={{ height: 300, width: "100%" }}>
                    <ImageBackground
                        style={{ height: "100%" }}
                        source={{
                            uri: "https://www.google.com/imgres?q=pressable&imgurl=http%3A%2F%2Fpressable.com%2Fwp-content%2Fthemes%2Fpressable-com%2Fassets%2Fimages%2Fpressable-logomark-v8-color.svg&imgrefurl=http%3A%2F%2Fpressable.com%2Fpress-kit%2F&docid=AsgeZoMRmq4EEM&tbnid=3a4JwzCw2MY9GM&vet=12ahUKEwjO9vnUre6PAxUCsVYBHekKJ6gQM3oECBkQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjO9vnUre6PAxUCsVYBHekKJ6gQM3oECBkQAA",
                        }}
                    >
                        <Text style={styles.buttonText}>Day la nd cua anh</Text>
                    </ImageBackground>
                </View>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
                    reprehenderit autem dolores numquam accusamus consequuntur corrupti
                    suscipit, repudiandae nostrum vitae soluta porro illo. Expedita quos
                    error veniam atque libero laboriosam? Nobis illo sequi facere vel,
                    deleniti provident? Quisquam pariatur aspernatur commodi! Nostrum
                    sequi ad perspiciatis autem dicta veniam laudantium praesentium totam
                    modi aperiam. Nemo dignissimos nostrum quas fugit labore earum!
                    Aperiam voluptate autem est quidem exercitationem numquam suscipit
                    magnam corrupti dolorum culpa laudantium omnis deserunt, placeat,
                    perspiciatis libero nobis perferendis distinctio dolores recusandae
                    eos? Aliquid ut rem soluta sapiente magnam! Mollitia, asperiores quasi
                    cupiditate nam beatae eum voluptatem distinctio explicabo quia quo
                    eveniet totam? Consectetur odio quia in debitis. Voluptatum eum sunt
                    omnis facere accusamus? Odit voluptas provident aliquid iusto! Nostrum
                    quasi est molestiae eveniet recusandae ex exercitationem eligendi
                    reiciendis laborum pariatur quaerat numquam, inventore optio
                    repellendus aut dolorem voluptatibus quidem beatae culpa maiores nemo
                    ut? Similique eius pariatur autem? Quam harum consectetur consequuntur
                    unde excepturi sed, voluptas maiores architecto ipsam suscipit ducimus
                    in similique non veniam mollitia fugiat et officia odio necessitatibus
                    dicta quibusdam illo. Nihil nostrum veritatis vel? Consectetur illum
                    facere obcaecati veritatis dolorem laudantium, excepturi quod
                    doloribus est totam, magni hic, earum nam exercitationem fugiat
                    nesciunt neque ducimus tenetur minima repudiandae eius vero pariatur?
                    Minima, fuga reiciendis. Minus cum nulla atque nihil consequatur quas
                    minima aperiam explicabo veritatis facilis eum illum deleniti, aliquam
                    suscipit ipsam excepturi culpa sapiente tempora at distinctio.
                    Distinctio eligendi asperiores illo voluptates neque! Provident
                    assumenda architecto deleniti deserunt quam consequuntur itaque nulla
                    ipsum alias cupiditate obcaecati neque quo optio totam voluptatem eum
                    dolorum reprehenderit error ratione, eius officiis laboriosam. Magni
                    nam ut accusamus. Labore accusamus libero perspiciatis cum, eos
                    reprehenderit impedit nobis et, commodi, iure nisi mollitia voluptate
                    aperiam alias aut aliquid ducimus accusantium deleniti. Voluptate,
                    itaque odit expedita id voluptatem laudantium suscipit?
                </Text>

                <Button title="Button" color={"red"}></Button>

                <Pressable style={styles.buttonPressable}>
                    <Text style={{ textAlign: "center", lineHeight: 36 }}>
                        Button Pressable
                    </Text>
                </Pressable>
            </ScrollView>

            <TouchableOpacity>
                <Text style={{ textAlign: "center", lineHeight: 36 }}>
                    Button TouchableOpacity
                </Text>
            </TouchableOpacity>

            <TextInput style={styles.TextInput} />
        </>
    );
}

const styles = StyleSheet.create({
    buttonPressable: {
        backgroundColor: "blue",
        height: 36,
        borderRadius: 4,
    },
    buttonText: {
        color: "red",
        textAlign: "center",
    },
    TextInput: {
        height: 36,
        borderWidth: 2,
    },
});